# Plano de testes e escala

Fontes: [amostra](../fontes/testes-tamanho-amostra-significancia.md), [creative testing](../fontes/testes-creative-testing-bau-loomer.md), [3:2:2](../fontes/testes-metodo-3-2-2.md), [escala](../fontes/testes-escala-learning-phase.md), [fadiga](../fontes/testes-hook-hold-fadiga.md), [incrementalidade](../fontes/tracking-incrementalidade-conversion-lift-geo.md).

## Estratégia A — Teste criativo (campanha dedicada)
1. **Quando usar:** produção constante de criativos; conta com ≥ algumas dezenas de conversões/semana.
2. **Dados:** CPA alvo, CVR e CTR base, verba de teste (ex.: 10–20% do total [heurística]), rastreamento validado.
3. **Como executar:** hipótese por teste (ângulo, hook, formato); 3–5 criativos por conjunto ABO [OPINIÃO]; mesmo público/otimização; sem editar durante o teste; duração ≥7 dias.
4. **Métricas:** hook, hold, CTR, CPC, CVR, CPA, ROAS.
5. **Interpretar:** primeiro sinais de topo (mais volume), depois CPA quando houver ≥ ~30 conversões/anúncio [OPINIÃO].
6. **Manter/modificar/interromper:** promover ao BAU se CPA ≤ meta com volume mínimo (mantendo no teste); iterar se hook bom e CVR ruim (problema de oferta/LP) ou hook ruim e CVR bom (trocar abertura); pausar se gasto ≥ 2–3× CPA sem conversão [heurística].
7. **Riscos:** ABO não reflete a entrega no BAU; vencedor pode não escalar; falsos positivos com pouca amostra.

## Estratégia B — Teste A/B estatístico (ferramenta A/B da Meta ou split)
1. **Quando:** decisão de alto impacto (LP, oferta, estrutura) com volume.
2. **Dados:** baseline p₁, MDE, α=5%, poder 80%, tráfego diário.
3. **Como:** calcular n por variante: n = (1,96+0,84)²·[p₁(1−p₁)+p₂(1−p₂)]/(p₁−p₂)². Ex.: CVR 2%→2,4% ≈ 21 mil cliques/variante; com 1.000 cliques/dia por variante ≈ 21 dias. Se inviável: aumentar MDE, usar métrica mais frequente (CTR, add-to-cart) ou não testar. Fixar duração antes; uma variável por vez.
4. **Métricas:** métrica primária pré-definida + guardrails (CPA, ticket).
5. **Interpretar:** só ao atingir n; significância + relevância prática; reportar intervalo.
6. **Decidir:** implementar se significativo e efeito ≥ MDE; inconclusivo = manter controle ou retestar com maior n; interromper cedo só por quebra/guardrail.
7. **Riscos:** peeking; sobreposição de públicos; sazonalidade; doc oficial da ferramenta não verificada.

## Estratégia C — Escala com controle de risco
1. **Quando:** CPA/ROAS na meta por ≥7 dias, fora do aprendizado (~50 eventos/7d [DOC OFICIAL]).
2. **Dados:** CPA marginal, MER, frequência, fator de incrementalidade se houver.
3. **Como:** vertical +≤20% a cada 3–4 dias [OPINIÃO]; horizontal com novos criativos/públicos; agrupar edições; reserva de criativos aprovados.
4. **Métricas:** CPA/ROAS marginal, MER, CPM, frequência, aprendizado.
5. **Interpretar:** CPA subindo proporcionalmente mais que o gasto = retorno decrescente; validar com MER e, periodicamente, lift/geo-holdout.
6. **Decidir:** continuar se CPA ≤ meta +10% após 3 dias [heurística]; reverter último degrau se >+25% por 3 dias [heurística]; pausar escala se frequência >4–5 e CTR caindo [OPINIÃO] → renovar criativos.
7. **Riscos:** reset de aprendizado; inflação por view-through; sazonalidade mascara efeito.

## Estratégia D — Teste de incrementalidade
1. **Quando:** gasto relevante e dúvida sobre causalidade; antes de grandes realocações.
2. **Dados:** vendas por região/dia; volume suficiente.
3. **Como:** Conversion Lift (holdout aleatório) ou geo-holdout com regiões pareadas.
4. **Métricas:** conversões incrementais, iROAS, fator incremental/plataforma.
5. **Interpretar:** Lift: >90% posterior acima de zero = conclusivo [CONSENSO]; usar fator para ajustar metas.
6. **Decidir:** recalibrar CPA alvo; repetir semestralmente [heurística].
7. **Riscos:** custo do holdout; poder insuficiente; contaminação entre regiões.
