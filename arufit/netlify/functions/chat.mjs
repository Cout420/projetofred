// Assistente Arufit com IA (Claude). Endpoint: POST /api/chat  { messages: [{role, content}] }
// Requer a variável de ambiente ANTHROPIC_API_KEY no Netlify.
// Se a função não estiver publicada, o chat do site usa o motor local automaticamente.
import Anthropic from "@anthropic-ai/sdk";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

function loadData() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    path.resolve("assets/js/data.js"),
    path.resolve(here, "../../assets/js/data.js"),
  ];
  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    const ctx = { window: {} };
    vm.runInNewContext(fs.readFileSync(file, "utf8"), ctx);
    return ctx.window.ARUFIT;
  }
  throw new Error("data.js não encontrado");
}

const D = loadData();
const SYSTEM = `Você é o assistente virtual da Academia ARUFIT (Swim & Health), em Arujá/SP, no site oficial.
Objetivo: tirar dúvidas com simpatia e levar a pessoa a agendar uma aula experimental.

Estilo: português do Brasil, tom humano e acolhedor, frases curtas, no máximo 3 parágrafos curtos. Use **negrito** só para destacar. No máximo um emoji por resposta. Sem listas longas.

Regras:
- Use SOMENTE as informações da base abaixo. Nunca invente preço, horário, nome de professor, telefone ou promoção.
- Quando não souber (preço, horários de turma, convênios, estacionamento etc.), diga que a equipe confirma rapidinho e convide a agendar.
- Sempre que a pessoa demonstrar interesse em começar, conhecer, valores ou horários, termine a resposta com o marcador [[AGENDAR]] (o site transforma em botão). Use no máximo uma vez.
- Não dê diagnóstico médico. Para dor, lesão ou gestação, recomende liberação médica e citar ao professor.
- Se perguntarem algo fora do tema academia/saúde/exercício, responda brevemente e volte para como a Arufit pode ajudar.

BASE DE CONHECIMENTO (JSON):
${JSON.stringify({
  nome: D.nome, slogan: D.slogan, desde: D.desde, seguidoresInstagram: D.seguidoresInstagram,
  endereco: D.endereco, email: D.contato.email, instagram: D.contato.instagram,
  telefone: D.contato.telefoneExibicao || "confirmar com a equipe",
  horarios: D.horarios.length ? D.horarios : "variam por modalidade e turma — confirmar com a equipe",
  precos: "variam por modalidade/frequência — a equipe envia a tabela",
  modalidades: D.modalidades.map(({ palavras, ...m }) => m),
  conquistas: D.conquistas, faq: D.faq,
})}`;

const client = new Anthropic();

export default async (req) => {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });
  let messages;
  try {
    ({ messages } = await req.json());
  } catch {
    return Response.json({ error: "JSON inválido" }, { status: 400 });
  }
  if (!Array.isArray(messages) || !messages.length) return Response.json({ error: "messages vazio" }, { status: 400 });

  // saneamento: só user/assistant, texto curto, últimas 12 mensagens, começando por user
  const clean = messages
    .filter((m) => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .slice(-12)
    .map((m) => ({ role: m.role, content: m.content.slice(0, 1500) }));
  while (clean.length && clean[0].role !== "user") clean.shift();
  if (!clean.length) return Response.json({ error: "sem mensagem do usuário" }, { status: 400 });

  try {
    const response = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 1024,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "low" },
      cache_control: { type: "ephemeral" },
      system: SYSTEM,
      messages: clean,
    });
    if (response.stop_reason === "refusal") {
      return Response.json({ reply: "Essa eu prefiro deixar para a nossa equipe responder. Quer falar com eles? [[AGENDAR]]" });
    }
    const reply = response.content.filter((b) => b.type === "text").map((b) => b.text).join("").trim();
    return Response.json({ reply });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return Response.json({ error: "rate_limited" }, { status: 429 });
    if (error instanceof Anthropic.APIError) {
      console.error("Anthropic API", error.status, error.message);
      return Response.json({ error: "api_error" }, { status: 502 });
    }
    console.error(error);
    return Response.json({ error: "internal" }, { status: 500 });
  }
};

export const config = { path: "/api/chat" };
