# Cenário 1 — Low ticket "Curso de Planilhas" (Kiwify, Meta Ads, bid cap)
> **CENÁRIO SIMULADO — dados fictícios.** Nenhum número aqui é resultado real. Sem consulta à web; tudo vem de `base-conhecimento/`.

## 1. Resumo executivo
Funil R$27 + bump R$17 + upsell R$67 com R$3.000/mês é viável no papel (CPA máximo ≈ R$27, ROAS de breakeven ≈ 1,37–1,23 conforme a taxa Kiwify), mas **bid cap não deve ser a estratégia de partida**: ainda não existe CPA histórico, e o playbook exige CPA de equilíbrio conhecido e orçamento folgado — o oposto de R$100/dia. Proposta: 2–3 semanas em Highest Volume para obter linha de base, depois teste controlado de bid cap. **Aguardando aprovação.**

## 2. Premissas e dados faltantes
Faltam (perguntar ao cliente — `references/briefing-cliente.md`): taxas reais de aceitação de bump/upsell, plano de taxa Kiwify contratado, regime tributário, taxa de reembolso, histórico de conta/pixel, se há backend além do upsell, criativos existentes, região (assumido Brasil).
Premissas usadas (fictícias, **[HIPÓTESE]**): bump 30%, upsell 8%, sem downsell; imposto 6%; reembolso 5% da receita; bump na mesma transação (1 taxa fixa), upsell em transação separada (taxa fixa própria); custo de entrega ≈ 0.

## 3. Economia unitária (`processos/low-ticket-funil-e-economia.md`)
- TMF = 27 + 0,30×17 + 0,08×67 = 27 + 5,10 + 5,36 = **R$ 37,46**
- Taxa Kiwify — as fontes divergem (`fontes/lowticket-taxas-kiwify-hotmart-comparativos.md`, [OPINIÃO]); calculo os dois cenários:

| Item | Cenário A: 8,99% + R$2,49 | Cenário B: 4,99% + R$1,00 |
|---|---|---|
| Taxa % (sobre 37,46) | 3,37 | 1,87 |
| Taxa fixa (1 + 0,08 upsell) | 2,69 | 1,08 |
| Imposto 6% | 2,25 | 2,25 |
| Reembolso 5% | 1,87 | 1,87 |
| **RL = CPA máximo** | **R$ 27,28** | **R$ 30,39** |
| m = RL/TMF | 0,728 | 0,811 |
| **ROAS breakeven = 1/m** | **1,37** | **1,23** |
| CPA alvo (lucro 15% do TMF) | R$ 21,66 | R$ 24,77 |
| ROAS alvo (TMF/CPA alvo) | 1,73 | 1,51 |

Planejamento usa o **cenário A (conservador)** até o cliente confirmar a taxa.
Volume esperado: R$3.000 ÷ R$21,66 ≈ **138 vendas/mês ≈ 32/semana** — abaixo dos ~50 eventos/7 dias de saída de aprendizado [DOC OFICIAL – trecho, `temas/meta-ads.md`]. Daí a estrutura de 1 campanha / 1 conjunto.
Observação: low ticket só "pagando o tráfego" sem backend medido é prejuízo de capital de giro (processo, seção 6).

## 4. Estrutura (`processos/meta-estrutura-e-escala.md` A/B/E)
- **Fase 1 (sem. 1–3):** 1 campanha Vendas, otimização Purchase, público amplo, posicionamentos automáticos (prática comum, não verificada), 1 conjunto, R$100/dia, 4–6 conceitos criativos distintos [CONSENSO Andromeda; quantidade = OPINIÃO Segwise].
- Rastreamento antes do play (`processos/checklist-rastreamento.md`): Pixel + CAPI pela integração Kiwify, deduplicação, **valor da compra incluindo bump**; confirmar como o upsell é reportado (evento separado pode dobrar a contagem de "compras" e distorcer CPA/bid cap).

## 5. Configuração de lance (`processos/meta-bid-cap-e-estrategias-de-lance.md`)
- Fase 1: **Highest Volume** (estratégia A) — gera CPA real de referência.
- Fase 2 (após ≥ ~30–50 compras e CPA conhecido): **bid cap simples (C1)**, cap inicial ≈ CPA alvo = R$21,66 [OPINIÃO Skaleit]; sem entrega em 24–72h → +5% por vez até ~R$26 (+20%) [OPINIÃO], **nunca acima do CPA máximo R$27,28**.
- Conflito declarado: o playbook pede "orçamento acima do que gastaria normalmente"; com teto rígido de R$3.000/mês, sugiro orçamento diário da campanha bid cap de R$150 com regra de corte manual de gasto mensal (o cap normalmente faz gastar menos que o orçamento). Escada de lances (C2) **não recomendada** aqui: fragmenta dados com orçamento pequeno (risco listado no próprio playbook).
- Lance ≠ custo final [DOC OFICIAL – trecho].

## 6. Plano de testes (`processos/plano-de-testes-e-escala.md`)
| # | Hipótese | Variável única | Métrica primária | Critério | Volume/prazo |
|---|---|---|---|---|---|
| T1 | Ângulo "economizar tempo no trabalho" supera "organizar finanças pessoais" | ângulo do criativo | CPA (secundária CTR/hook) | CPA ≤ R$21,66 com ≥ ~30 compras no conceito [OPINIÃO] — se inviável, decidir por CTR + CPA direcional | ≥7 dias, dentro da campanha principal |
| T2 | Bid cap R$21,66 mantém CPA ≤ alvo com gasto ≥70% do HV | estratégia de lance | CPA e % do orçamento gasto | manter se CPA ≤ alvo e gasto ≥ 50% do orçamento [HEURÍSTICA] | 7 dias |
| T3 | Bump a R$17 vs R$12 aumenta RL por comprador | preço do bump | RL/comprador | teste A/B na página só se volume permitir; com ~32 vendas/semana o n é insuficiente para significância (fórmula seção B) → tratar como teste direcional | 2–4 semanas |
Interromper criativo com gasto ≥ 2–3× CPA alvo sem venda (≈ R$45–65) [HEURÍSTICA].

## 7. Três roteiros (`processos/briefing-e-roteiro-de-criativos.md`)
Compliance: sem promessa de renda/emprego/aumento garantido, sem "você está desorganizado?" (atributo pessoal) (`fontes/oferta-politicas-meta-promessas.md`).
**R1 — Problema→solução (PAS), consciente do problema, UGC 9:16, 30s**
0–3s hook: tela com planilha caótica + "Isso aqui me tomava 2 horas toda segunda." · 3–10s: dor de refazer relatórios à mão · 10–22s: mostra PROCV/tabela dinâmica fazendo em 10s · 22–30s: "Curso de Planilhas, R$27, acesso imediato" · CTA "Toque em Saiba mais".
Hooks alternativos: "3 fórmulas que eu queria ter aprendido antes"; "Pare de copiar e colar dados".
**R2 — Demonstração/mecanismo, consciente da solução, tela gravada, 20s**
0–3s: "Do zero a um dashboard em 60 segundos" · 3–15s: time-lapse construindo dashboard · 15–20s: preço + "aulas curtas, no seu ritmo" · CTA.
**R3 — Oferta direta, totalmente consciente, estático/carrossel 4:5**
Card 1: "Curso de Planilhas por R$27" · Card 2: o que tem dentro (módulos) · Card 3: modelos prontos inclusos (se verdadeiro) · Card 4: garantia de 7 dias (CDC) · CTA.

## 8. Métricas e decisão
CPA, ROAS do funil, TMF, aceitação de bump/upsell, reembolso, CPM/CTR/hook rate. Manter/escalar se ROAS 7d ≥ 1,37×1,2 = **1,64** [HEURÍSTICA]; modificar se ROAS entre 1,10 e 1,64 após gasto ≥ 3× CPA alvo; escala +≤20% a cada 3–4 dias [OPINIÃO]; reverter degrau se CPA > alvo +25% por 3 dias [HEURÍSTICA].

## 9. Riscos
Taxas Kiwify não confirmadas; amostra pequena para bid cap; reembolso pode inverter resultado; atribuição Pixel ≠ Kiwify; aprendizado limitado com ~32 eventos/semana.

## 10. Pedido de aprovação
Nada será criado/alterado na conta. Aprovar: (1) Fase 1 Highest Volume R$100/dia; (2) briefing dos 3 roteiros; (3) Fase 2 bid cap condicionada ao CPA real. Reversão: pausar campanha. Teto de perda proposto: R$650 (≈30× CPA alvo) sem atingir ROAS 1,1 → reavaliar oferta.
