# Diagnóstico de campanha (árvore por etapa do funil)

Base: CPA = CPM ÷ (1000 × CTR × CVR). Fontes: [tema testes](../temas/testes-otimizacao-escala.md), [tema métricas](../temas/metricas-rastreamento-atribuicao.md).

## 1. Quando usar
CPA/ROAS fora da meta por ≥3–7 dias [heurística] ou queda abrupta.

## 2. Dados necessários
Por anúncio/conjunto, período atual vs anterior: gasto, impressões, alcance, frequência, CPM, CTR link, CPC, hook/hold rate, LPV, add to cart, checkout, compras, CVR, CPA, ROAS; status de rastreamento (Events Manager/GA4); MER do negócio.

## 3. Como executar (árvore)
0. **Rastreamento primeiro**: queda de conversões no Ads Manager mas não no backend/MER? → checar Pixel/CAPI, deduplicação, EMQ, consent ([checklist](checklist-rastreamento.md)). Se backend também caiu, seguir.
1. **CPM subiu?** Causas: sazonalidade/leilão (Q4, datas), público estreito, frequência alta, baixa qualidade/relevância do criativo. Ações: ampliar público/Advantage+, novos criativos, revisar posicionamentos; aceitar se sazonal.
2. **CTR caiu?** Causas: fadiga (freq. ↑), hook fraco (hook rate baixo), mensagem/oferta pouco relevante. Ações: novos ângulos/hooks, iterar primeiros 3 s, testar formatos.
3. **CPC alto com CTR ok?** → é CPM; voltar ao passo 1.
4. **CVR caiu (CTR ok)?** Causas: página lenta/quebrada, preço/estoque/oferta mudou, desalinhamento anúncio↔LP, checkout, tráfego de pior qualidade (posicionamento), tracking. Ações: testar LP, velocidade, checar funil add-to-cart→checkout→compra para localizar o vazamento.
5. **Tudo estável mas CPA subiu?** Ver mudança de janela de atribuição, atraso de conversões, aprendizado reiniciado por edição.

## 4. Métricas
CPM, CTR, CPC, hook rate, hold rate, frequência, CVR por etapa, CPA, ROAS, MER.

## 5. Como interpretar
Comparar variação relativa de cada termo: a etapa com maior piora % explica a maior parte do CPA. Exigir volume mínimo (ex.: ≥ ~30 conversões no período [heurística]) antes de concluir sobre CVR.

## 6. Manter / modificar / interromper
- Manter: CPA dentro de ±15% da meta e MER estável [heurística].
- Modificar: uma etapa piorou >20% por 3+ dias com volume suficiente [heurística] → ação da etapa.
- Interromper (anúncio): CPA > 2× meta após gasto ≥ 2–3× CPA alvo sem conversão suficiente [heurística].

## 7. Riscos e limitações
Atribuição de plataforma não é causal; ruído em amostras pequenas; mudanças simultâneas confundem causa; benchmarks variam por nicho.
