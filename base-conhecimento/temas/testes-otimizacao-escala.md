# Testes A/B, otimização e escala

> Última verificação: 2026-10-12. Conteúdo baseado em resumos de busca; nenhuma fonte lida na íntegra (proxy bloqueou acesso). Glossário de métricas em [metricas-rastreamento-atribuicao.md](metricas-rastreamento-atribuicao.md#1-glossário-de-métricas-fórmulas).

## 1. Ferramenta de Teste A/B da Meta
- [HIPÓTESE] A ferramenta divide o público em grupos não sobrepostos e reporta vencedor com nível de confiança. A doc oficial (facebook.com/business/help) não pôde ser acessada; não há afirmação oficial verificada aqui sobre duração mínima ou limiar de confiança.

## 2. Significância e tamanho de amostra
- [CONSENSO] n/variante = (1,96+0,84)² × [p₁(1−p₁)+p₂(1−p₂)] / (p₁−p₂)² para α=5% bilateral e poder 80% ([fonte](../fontes/testes-tamanho-amostra-significancia.md)).
- Ex.: CVR 10%→12% ≈ 3.834 cliques por variante; se CVR do clique for 2%→2,4% (+20% relativo): (7,84×(0,0196+0,02342))/0,000016 ≈ 21.100 cliques por variante (cálculo próprio com a fórmula acima).
- [CONSENSO] Halving MDE ⇒ 4× amostra; não "espiar"; ≥1 semana cheia.
- Implicação prática [OPINIÃO]: com orçamentos pequenos, testar em métricas de topo (hook rate, CTR) — muito mais eventos — e validar CPA depois.

## 3. Frameworks de teste criativo
- [OPINIÃO] Campanha de teste dedicada (ABO) + escala (CBO/Advantage+); 3–5 criativos por teste; ~30 conversões por anúncio para decidir ([fonte](../fontes/testes-creative-testing-bau-loomer.md)).
- [CONSENSO] Teste dinâmico no BAU mostra vencedor, não causa; vencedor do teste pode não receber verba no BAU.
- [HIPÓTESE] 3:2:2 = 3 criativos × 2 títulos × 2 textos em Dynamic Creative — não confirmado ([fonte](../fontes/testes-metodo-3-2-2.md)).

## 4. Funil de diagnóstico
CPM → CTR → CPC → CVR → CPA (CPA = CPM/(1000·CTR·CVR)). Ver árvore em [diagnóstico](../processos/diagnostico-de-campanha.md).

## 5. Fadiga criativa e frequência
- [CONSENSO] Sinais: frequência ↑, CTR ↓, CVR ↓, CPA ↑; alerta >4–5 [OPINIÃO Motion] ([fonte](../fontes/testes-hook-hold-fadiga.md)).

## 6. Escala com controle de risco
- [CONSENSO] ~50 eventos/7 dias por conjunto para sair do aprendizado; edições significativas reiniciam ([fonte](../fontes/testes-escala-learning-phase.md)).
- [OPINIÃO] +≤20% a cada 3–4 dias (vertical); horizontal = duplicar/novos públicos/novos criativos.
- Escalar com base em incrementalidade/MER, não só ROAS de plataforma ([tema de atribuição](metricas-rastreamento-atribuicao.md#6-incrementalidade-e-mmm)).

## Divergências
- Teste dedicado vs teste dentro do BAU.
- Ritmo de escala: <10%/dia vs 10–20%/dia vs 20% a cada 3–4 dias.
- Fórmulas e benchmarks de hold rate.
- Definição de MDE absoluto vs relativo.

## Lacunas
- Doc oficial do A/B test da Meta e da fase de aprendizado não lidas.
- Mecânica oficial do 3:2:2 não confirmada.
- Sem benchmarks brasileiros de CPM/CTR/CVR.
- Vídeos do YouTube: transcrição NÃO acessada (YouTube bloqueado pelo proxy do ambiente).
