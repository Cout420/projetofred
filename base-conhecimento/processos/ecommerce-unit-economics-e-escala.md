# Processo — Unit economics e escala de aquisição (e-commerce)

Base: [tema e-commerce](../temas/ecommerce-aquisicao.md). Heurísticas sinalizadas [HEURÍSTICA].

## Fórmulas
- AOV (ticket médio) = receita ÷ nº de pedidos.
- CM1 (% ) = (receita líquida − CMV) ÷ receita líquida.
- CM2 = CM1 − custos variáveis (frete, gateway/taxas, embalagem, comissões de marketplace).
- CM3 = CM2 − gasto de marketing. ([Eightx](../fontes/ecom-eightx-mer-roas-cac.md) sugere CM3 20–25% [OPINIÃO])
- MER = receita total ÷ gasto total de marketing. ([fonte](../fontes/ecom-eightx-mer-roas-cac.md))
- MER de breakeven = 1 ÷ CM2% (ex.: CM2 40% → MER 2,5). [derivação aritmética; fórmula própria da CTC não lida]
- nCAC = gasto de aquisição ÷ nº de clientes novos.
- aMER (MER de novos) = receita de clientes novos ÷ gasto de aquisição.
- Lucro do 1º pedido = AOV₁ × CM2% − nCAC.
- LTV em margem (n meses) = Σ receita por cliente da coorte × CM2%. ([DTC Playbook](../fontes/ecom-dtc-playbook-unit-economics.md))
- LTV:CAC = LTV em margem ÷ nCAC (alvo de mercado ≥3:1 [OPINIÃO]).
- Payback (meses) = primeiro mês em que margem acumulada da coorte ≥ nCAC.
- New Customer MPR = CM2 de novos ÷ gasto de aquisição (~1,5 saudável [OPINIÃO], [Admetrics](../fontes/ecom-admetrics-mpr.md)).
- CPA máximo por canal (TikTok/Meta) = nCAC máximo permitido (alimenta cost cap).

## Estratégia 1 — Modelo de unit economics e metas
1. **Quando usar:** antes de escalar ou definir CPA/ROAS alvo.
2. **Dados:** pedidos (novos vs recorrentes), CMV, frete, taxas de gateway/plataforma (Shopify/Nuvemshop), gasto por canal, coortes de 3–12 meses.
3. **Como executar:** calcular CM1–CM3; MER breakeven; nCAC atual; curva de LTV por coorte; definir nCAC máximo = f(payback desejado). Comparar AOV com referência Nuvemshop (R$ 262, fev/2026) ([fonte](../fontes/ecom-nuvemshop-ticket-medio-brasil.md)).
4. **Métricas:** CM2%, MER, nCAC, LTV:CAC, payback.
5. **Interpretação:** lucro de 1º pedido negativo é comum (mediana −US$29 nos EUA, [OPINIÃO]) — só aceitável se coortes pagarem dentro do caixa disponível ([Holiday](../fontes/ecom-taylor-holiday-contribution-margin.md)).
6. **Manter/modificar/interromper:** manter metas se payback ≤ janela de caixa; modificar (subir AOV via kits/frete grátis mínimo, renegociar CMV) se LTV:CAC < 3 [HEURÍSTICA de mercado]; interromper aquisição paga deficitária se coortes não pagam em 12 meses [HEURÍSTICA].
7. **Riscos:** LTV inflado por receita (usar margem); coortes curtas; atribuição de cliente novo depende de identificação (e-mail/CPF).

## Estratégia 2 — Gestão diária por margem de contribuição e escala via MER/nCAC
1. **Quando usar:** operação com gasto contínuo multicanal.
2. **Dados:** receita diária, gasto total, pedidos novos, CM2.
3. **Como executar:** meta diária de CM (R$) [OPINIÃO Holiday]; decisão de escala por MER blended e nCAC, não por ROAS da plataforma ([CTC](../fontes/ecom-ctc-mer-e-negative-cac.md)); aumentar orçamento em degraus.
4. **Métricas:** CM diária vs meta, MER, aMER, nCAC, % receita de novos.
5. **Interpretação:** MER subindo com nCAC subindo pode significar canibalização de recorrentes; MER estável com CM crescendo = escala saudável.
6. **Manter/modificar/interromper:** manter/escalar (+15–20% a cada 3–7 dias [HEURÍSTICA]) se CM total sobe e nCAC ≤ máximo; modificar (criativo/oferta) se nCAC sobe >20% por 2 semanas [HEURÍSTICA]; reduzir se CM total cai após aumento de gasto (retornos marginais negativos).
7. **Riscos:** MER ignora margem (usar MPR/CM — [Admetrics](../fontes/ecom-admetrics-mpr.md)); sazonalidade (Black Friday) distorce; benchmarks dos EUA.

## Estratégia 3 — Equilíbrio retenção vs aquisição
1. **Quando usar:** quando receita recorrente < ~30% [HEURÍSTICA] ou nCAC em alta.
2. **Dados:** taxa de recompra por coorte, receita de recorrentes, custo de CRM.
3. **Como executar:** medir recompra 30/60/90 dias; e-mail/WhatsApp pós-compra; catálogo/DPA para remarketing ([TikTok Catalog](../fontes/tiktok-smart-plus-web-e-catalogo.md)).
4. **Métricas:** recompra %, LTV 90/180 dias, payback.
5. **Interpretação:** recompra maior encurta payback e permite nCAC maior.
6. Manter ações que encurtem payback; modificar se remarketing apenas captura vendas que ocorreriam (testar holdout) [HEURÍSTICA]; interromper ações sem incremento.
7. **Riscos:** sem dados brasileiros de recompra nas fontes; atribuição de remarketing superestima.
