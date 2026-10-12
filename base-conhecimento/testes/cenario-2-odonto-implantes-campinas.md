# Cenário 2 — Clínica odontológica (implantes), Campinas — leads via WhatsApp
> **CENÁRIO SIMULADO — dados fictícios.** Sem web; base: `base-conhecimento/`.

## 1. Resumo executivo
Com R$4.000/mês, proposta inicial: **~60% Google Search local (alta intenção) / ~40% Meta Click-to-WhatsApp** [HEURÍSTICA, a recalibrar após 4 semanas pelo custo por avaliação comparecida, não por CPL]. Sem ticket, margem e taxa de fechamento **não é possível definir CPL máximo real** — abaixo há fórmula e exemplo hipotético. **Aguardando aprovação e dados.**

## 2. Premissas e dados faltantes
Faltam: preço médio do implante/tratamento e margem; taxa lead→avaliação→fechamento; capacidade de agenda; quem responde o WhatsApp e horário; CRM; raio real de atendimento; histórico de anúncios; perfil no Google (GBP) e avaliações; regras do CRO/CFO que a clínica segue.
Premissas fictícias **[HIPÓTESE]**: ticket R$3.000/implante, margem de contribuição 40% → R$1.200; CAC aceitável = 50% da margem = R$600; lead→avaliação 30%, avaliação→fechamento 25% → lead→paciente 7,5%.
**Economia unitária (derivação aritmética; não há processo de unit economics para serviço na base):** CPL máximo = CAC aceitável × taxa lead→paciente = 600 × 0,075 = **R$45**; custo por avaliação máximo = 600 × 0,25 = **R$150**. Com R$4.000: ~89 leads → ~27 avaliações → ~6–7 pacientes (se as premissas valerem).

## 3. Estrutura
**Google (R$2.400/mês ≈ R$80/dia)** — `processos/google-search-e-pmax.md` A + `processos/negocio-local-leads.md` A/B
- 1 campanha Search "Implantes", correspondência exata/frase ("implante dentário campinas", "implante dentário preço", "prótese protocolo"), opção de local "Presença" + raio de Campinas [OPINIÃO/CONSENSO]; negativas ("curso", "faculdade", "SUS", "vaga", "gratuito"); Maximizar conversões.
- Sem ampla nem PMax: R$2.400 < ~10× CPA alvo/mês se CPA por avaliação ~R$150 [HEURÍSTICA do processo].
- Conversões: clique no WhatsApp/formulário + chamada com duração mínima, contagem "Uma" [DOC OFICIAL – trecho]; recurso de local (GBP completo + avaliações [DOC OFICIAL]).
- Veicular em horário de atendimento [HEURÍSTICA].
**Meta (R$1.600/mês ≈ R$53/dia)** — `processos/whatsapp-geracao-de-leads.md`, `processos/meta-estrutura-e-escala.md`
- 1 campanha destino WhatsApp, 1 conjunto, raio em Campinas e cidades próximas (validar), público amplo 35+ (premissa), 3–4 conceitos.
- Mensagem pré-preenchida com código do anúncio (ex.: "Olá! Quero saber sobre implantes [A1]").
- Com ~R$53/dia não haverá 50 eventos/semana de otimização profunda → otimizar para conversas e medir qualificação no CRM.
- Estratégia D (importação offline) quando houver volume de "avaliação compareceu".

## 4. Script de atendimento (template do processo, preenchido)
1. **Saudação:** "Oi, [nome]! Aqui é a [atendente] da [Clínica]. Vi que você veio pelo anúncio de implantes. Posso te fazer 3 perguntas rápidas pra te orientar melhor?"
2. **Necessidade:** "É para repor um dente, vários, ou você já usa prótese?"
3. **Prazo:** "Você pensa em começar nas próximas semanas ou está pesquisando por enquanto?"
4. **Logística:** "Você está em Campinas ou região? Qual bairro fica melhor?"
5. **Capacidade (opcional, com tato):** "Prefere conhecer as formas de pagamento/parcelamento na avaliação?"
6. **Proposta:** "O primeiro passo é uma avaliação com o(a) Dr(a). [nome], que vai indicar o tratamento e o valor exato. Tenho [dia/hora] ou [dia/hora]. Qual prefere?"
7. **Fechamento:** confirmar data, endereço e lembrete 24h antes (dentro da janela de mensagens ou via template aprovado).
Roteamento: quente → humano imediato; morno → conteúdo + follow-up 24h; fora da área/desqualificado → encerramento educado.
Proibido: pedir dados de saúde detalhados no chat além do necessário (LGPD — dado sensível), prometer resultado, preço "a partir de" enganoso.

## 5. Métricas e critérios
Custo por conversa, % qualificadas, custo por avaliação agendada e **comparecida**, taxa de fechamento, tempo de 1ª resposta, receita por canal.
- Modificar criativo se % qualificadas < 30% por 2 semanas [HEURÍSTICA].
- Interromper anúncio com gasto ≥ 3× custo por paciente alvo sem venda [HEURÍSTICA] — na prática, por ticket alto e ciclo longo, usar custo por avaliação como proxy.
- Rebalancear Meta/Google após 4 semanas pelo custo por avaliação comparecida [HEURÍSTICA].

## 6. Riscos
- **Políticas/ética:** sem antes/depois, sem 2ª pessoa sobre condição de saúde ("você perdeu dentes?") (`fontes/oferta-politicas-meta-promessas.md`). Regras do Conselho de Odontologia sobre publicidade **não estão na base** — [HIPÓTESE]: verificar antes de publicar; sugerir registrar fonte.
- Base não tem nenhum caso de clínica com dados (`temas/trafego-local-e-leads.md` — lacuna).
- Janela gratuita do WhatsApp 72h vs 7 dias: divergente.
- Gargalo operacional (resposta lenta) pode anular a mídia.

## 7. Pedido de aprovação
Aprovar: divisão 60/40, estrutura acima, script, e o fornecimento dos dados da seção 2. Nada será publicado sem aprovação; reversão = pausar campanhas.
