/*
 * Assistente Arufit
 * - Com a função /api/chat publicada (Netlify + ANTHROPIC_API_KEY) responde com IA (Claude).
 * - Sem ela, usa o motor local abaixo, que entende as dúvidas mais comuns e capta o lead
 *   (nome, modalidade, período) para mandar a mensagem pronta no WhatsApp.
 */
(() => {
  const D = window.ARUFIT;
  const root = document.querySelector("[data-chat]");
  if (!root) return;
  const $ = (s) => root.querySelector(s);
  const panel = $(".chat__panel"), body = $("[data-chat-body]"), form = $("[data-chat-form]"), quick = $("[data-chat-quick]");
  const input = form.elements.msg;
  const wa = (msg) => D.waLink ? D.waLink(msg) : D.contato.instagramDM;
  const canal = D.contato.whatsapp ? "WhatsApp" : "Direct do Instagram";

  let history = [];       // [{role, content}] para a IA
  let aiAvailable = true; // cai para o local se a função não existir
  let lead = null;        // fluxo de agendamento
  let started = false;

  /* ---------------- UI ---------------- */
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>");
  const scroll = () => body.scrollTo({ top: body.scrollHeight, behavior: "smooth" });
  const add = (who, html) => {
    const el = document.createElement("div");
    el.className = `msg msg--${who}`;
    el.innerHTML = html;
    body.append(el); scroll();
    return el;
  };
  const ctaBtn = (msg, label = `Continuar no ${canal}`) =>
    `<br><a class="btn btn--blue" href="${wa(msg)}" target="_blank" rel="noopener"><span>${label}</span></a>`;
  const typing = () => add("typing", "<i></i><i></i><i></i>");
  const bot = async (text, extra = "", delay) => {
    const t = typing();
    await new Promise((r) => setTimeout(r, delay ?? Math.min(400 + text.length * 8, 1300)));
    t.remove();
    add("bot", fmt(text) + extra);
  };
  const setQuick = (items) => {
    quick.innerHTML = items.map((q) => `<button type="button">${esc(q)}</button>`).join("");
    [...quick.children].forEach((b) => b.addEventListener("click", () => send(b.textContent)));
  };
  const defaultQuick = () => setQuick(["Agendar aula experimental", "Quais modalidades?", "Valores", "Horários", "Onde fica?", "Natação infantil"]);

  const open = (v) => {
    root.classList.toggle("is-open", v);
    panel.hidden = !v;
    root.querySelectorAll("[data-chat-toggle]").forEach((b) => b.setAttribute("aria-expanded", v));
    if (v) {
      if (window.gsap) gsap.from(panel, { scale: .9, opacity: 0, y: 20, duration: .5, ease: "expo.out" });
      if (!started) { started = true; greet(); }
      setTimeout(() => input.focus({ preventScroll: true }), 300);
      window.__lenis?.stop();
    } else window.__lenis?.start();
  };
  root.querySelectorAll("[data-chat-toggle]").forEach((b) => b.addEventListener("click", () => open(panel.hidden)));
  document.querySelectorAll("[data-open-chat]").forEach((b) => b.addEventListener("click", () => open(true)));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !panel.hidden) open(false); });
  body.addEventListener("wheel", (e) => e.stopPropagation(), { passive: true });

  const greet = async () => {
    await bot("Oi! 👋 Sou o assistente da **Arufit**. Posso te ajudar a escolher a modalidade, tirar dúvidas ou já deixar sua aula experimental encaminhada.", "", 500);
    await bot("Como posso te ajudar?", "", 400);
    defaultQuick();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = input.value.trim();
    if (!v) return;
    input.value = "";
    send(v);
  });

  async function send(text) {
    add("user", esc(text));
    quick.innerHTML = "";
    if (lead) return leadStep(text);
    const local = understand(text);
    if (local.intent === "agendar") return startLead(local.mod);
    if (aiAvailable) {
      const ok = await askAI(text);
      if (ok) return;
    }
    return reply(local, text);
  }

  /* ---------------- IA (opcional) ---------------- */
  async function askAI(text) {
    history.push({ role: "user", content: text });
    const t = typing();
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.slice(-12) }),
      });
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      if (!data.reply) throw new Error("vazio");
      t.remove();
      let reply = data.reply;
      let extra = "";
      if (reply.includes("[[AGENDAR]]")) {
        reply = reply.replace(/\[\[AGENDAR\]\]/g, "").trim();
        extra = ctaBtn("Olá! Vim pelo site da Arufit e quero agendar uma aula experimental.", "Agendar aula experimental");
      }
      history.push({ role: "assistant", content: reply });
      add("bot", fmt(reply) + extra);
      defaultQuick();
      return true;
    } catch {
      t.remove();
      history.pop();
      aiAvailable = false;
      return false;
    }
  }

  /* ---------------- Motor local ---------------- */
  const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  const has = (t, words) => words.some((w) => (` ${t} `).includes(` ${w}`));

  const INTENTS = [
    ["agendar", ["agendar", "agenda", "marcar", "experimental", "aula teste", "aula gratis", "conhecer", "quero comecar", "matricula", "matricular", "inscrever", "inscricao", "quero fazer"]],
    ["preco", ["preco", "valor", "quanto", "custa", "mensalidade", "plano", "planos", "pacote", "promocao", "desconto", "caro", "barato"]],
    ["horario", ["horario", "hora", "abre", "fecha", "funciona", "funcionamento", "sabado", "domingo", "feriado", "manha", "tarde", "noite", "turma"]],
    ["endereco", ["onde", "endereco", "localizacao", "local", "fica", "chegar", "mapa", "rua", "bairro", "estacionamento", "estacionar"]],
    ["contato", ["telefone", "whatsapp", "whats", "zap", "contato", "ligar", "numero", "email", "falar com", "atendente", "humano", "pessoa"]],
    ["modalidades", ["modalidade", "modalidades", "o que tem", "oferece", "atividades", "aulas", "servicos"]],
    ["crianca", ["crianca", "criancas", "filho", "filha", "infantil", "bebe", "kids", "idade", "anos de idade"]],
    ["pagamento", ["pagamento", "pagar", "cartao", "pix", "boleto", "gympass", "wellhub", "totalpass", "convenio"]],
    ["competicao", ["competicao", "equipe", "atleta", "podio", "campeonato", "liga", "medalha", "time"]],
    ["iniciante", ["iniciante", "nunca", "sedentario", "parado", "comecar", "fora de forma", "medo"]],
    ["saude", ["dor", "joelho", "coluna", "lombar", "hernia", "lesao", "gestante", "gravida", "idoso", "terceira idade", "artrose", "reabilitacao"]],
    ["obrigado", ["obrigado", "obrigada", "valeu", "vlw", "brigado", "show", "perfeito", "otimo"]],
    ["oi", ["oi", "ola", "bom dia", "boa tarde", "boa noite", "eae", "e ai", "opa", "hello"]],
  ];

  function findMod(t) {
    let best = null, bestScore = 0;
    D.modalidades.forEach((m) => {
      const s = m.palavras.filter((w) => (` ${t} `).includes(` ${w}`)).length;
      if (s > bestScore) { best = m; bestScore = s; }
    });
    return best;
  }

  function understand(raw) {
    const t = norm(raw);
    const mod = findMod(t);
    for (const [intent, words] of INTENTS) if (has(t, words)) return { intent, mod, t };
    if (mod) return { intent: "modalidade", mod, t };
    return { intent: "fallback", mod, t };
  }

  async function reply({ intent, mod }) {
    const M = D.modalidades;
    switch (intent) {
      case "oi":
        await bot("Oi! Que bom te ver por aqui. Quer conhecer as modalidades, saber valores ou já agendar uma aula experimental?");
        break;
      case "modalidades":
        await bot(`Aqui na Arufit você encontra:\n${M.map((m) => `• **${m.nome}** — ${m.resumo}`).join("\n")}\n\nQuer que eu te ajude a escolher?`);
        setQuick(M.map((m) => m.nome).concat("Agendar aula experimental"));
        return;
      case "modalidade":
        await bot(`**${mod.nome}**: ${mod.resumo}\n\nPara quem: ${mod.paraQuem}.\n\nPrincipais benefícios: ${mod.beneficios.join(", ").toLowerCase()}.`);
        await bot(`Quer agendar uma aula experimental de ${mod.nome}?`);
        setQuick([`Agendar ${mod.nome}`, "Valores", "Horários", "Outras modalidades"]);
        return;
      case "preco":
        await bot(`Os valores${mod ? ` de ${mod.nome}` : ""} mudam conforme a frequência na semana e se você combinar modalidades. A equipe te manda a tabela atualizada na hora pelo ${canal}.`,
          ctaBtn(`Olá! Vim pelo site e gostaria de saber os valores${mod ? ` de ${mod.nome}` : " dos planos"} da Arufit.`, "Pedir tabela de valores"));
        break;
      case "horario":
        if (D.horarios.length) await bot(`Nossos horários:\n${D.horarios.map((h) => `• ${h.dia}: ${h.hora}`).join("\n")}`);
        else await bot(`Cada modalidade tem turmas em horários diferentes. Me diz qual te interessa e o melhor período (manhã, tarde ou noite) que a equipe confirma a grade certinha pra você.`,
          ctaBtn(`Olá! Quais são os horários${mod ? ` de ${mod.nome}` : " das aulas"} na Arufit?`, "Consultar horários"));
        break;
      case "endereco":
        await bot(`Estamos na **${D.endereco.linha1}**, ${D.endereco.linha2} (CEP ${D.endereco.cep}).`,
          `<br><a class="btn btn--blue" href="https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(D.endereco.mapsQuery)}" target="_blank" rel="noopener"><span>Abrir rota no Maps</span></a>`);
        break;
      case "contato":
        await bot(`Você pode falar direto com a equipe pelo ${canal}${D.contato.telefoneExibicao ? ` (${D.contato.telefoneExibicao})` : ""} ou pelo e-mail ${D.contato.email}.`,
          ctaBtn("Olá! Vim pelo site da Arufit e gostaria de falar com a equipe."));
        break;
      case "crianca":
        await bot("Temos natação para várias idades — do aprendizado e adaptação à água até a equipe de competição, que já trouxe pódio na Liga Aquática do Alto Tietê. 🏅\n\nQual a idade da criança? A equipe indica a turma certa.",
          ctaBtn("Olá! Quero saber sobre natação infantil na Arufit. Meu filho(a) tem __ anos.", "Falar sobre natação infantil"));
        break;
      case "pagamento":
        await bot(`Formas de pagamento e convênios (como Wellhub/TotalPass) a equipe confirma pelo ${canal}, porque podem variar por plano.`,
          ctaBtn("Olá! Quais formas de pagamento e convênios a Arufit aceita?"));
        break;
      case "competicao":
        await bot("A Arufit tem equipe de natação que compete! Recentemente a Joyce trouxe dois 2º lugares (25m e 50m livre) na Copa Primavera da Liga Aquática do Alto Tietê. Quer saber como entrar na equipe?",
          ctaBtn("Olá! Quero saber como participar da equipe de natação da Arufit."));
        break;
      case "iniciante":
        await bot("Super normal começar do zero! As aulas são acompanhadas por professores e o treino se ajusta ao seu nível. Para quem está parado, **Hidro** e **Pilates** são ótimas portas de entrada — e a aula experimental serve justamente pra você sentir como é.");
        setQuick(["Agendar aula experimental", "Hidroginástica", "Pilates", "Musculação"]);
        return;
      case "saude":
        await bot("Pra quem tem dor ou limitação, **Hidroginástica** (sem impacto) e **Pilates** (postura e core) costumam ser as melhores escolhas. Traga a liberação médica se tiver e conte pro professor na aula experimental, ele adapta os exercícios.");
        setQuick(["Agendar aula experimental", "Hidroginástica", "Pilates"]);
        return;
      case "obrigado":
        await bot("Imagina! Qualquer coisa é só chamar. Bora evoluir? 💪");
        break;
      default:
        await bot(`Hmm, essa eu não sei responder com certeza. Mas a equipe da Arufit te responde rapidinho pelo ${canal}!`,
          ctaBtn("Olá! Vim pelo site da Arufit e tenho uma dúvida."));
    }
    defaultQuick();
  }

  /* ---------------- Fluxo de agendamento (lead) ---------------- */
  async function startLead(mod) {
    lead = { step: "nome", mod: mod || null };
    await bot("Bora agendar sua aula experimental! 🙌 Pra começar, qual é o seu nome?");
  }
  async function leadStep(text) {
    if (norm(text) === "cancelar") { lead = null; await bot("Tudo bem, cancelei. Posso ajudar em outra coisa?"); defaultQuick(); return; }
    if (lead.step === "nome") {
      lead.nome = text.split(" ").slice(0, 3).join(" ");
      if (!lead.mod) {
        lead.step = "mod";
        await bot(`Prazer, ${lead.nome}! Qual modalidade você quer experimentar?`);
        setQuick(D.modalidades.map((m) => m.nome).concat("Ainda não sei"));
        return;
      }
      lead.step = "periodo";
    } else if (lead.step === "mod") {
      lead.mod = findMod(norm(text)) || { nome: "ainda não sei (quero ajuda para escolher)" };
      lead.step = "periodo";
    } else if (lead.step === "periodo") {
      lead.periodo = text;
      const msg = `Olá! Meu nome é ${lead.nome}. Vim pelo site e quero agendar uma aula experimental de ${lead.mod.nome} na Arufit. Prefiro o período: ${lead.periodo}.`;
      await bot(`Perfeito, ${lead.nome}! Deixei sua mensagem pronta. É só tocar no botão e enviar que a equipe confirma o dia e horário com você.`, ctaBtn(msg, `Enviar no ${canal}`));
      lead = null;
      defaultQuick();
      return;
    }
    await bot(`${lead.mod && lead.mod.nome ? `Show, ${lead.mod.nome}! ` : ""}Qual período fica melhor pra você?`);
    setQuick(["Manhã", "Tarde", "Noite", "Sábado"]);
  }
})();
