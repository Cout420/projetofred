# Processo — Lançamento de conta TikTok Ads (e-commerce)

Base: [tema TikTok Ads](../temas/tiktok-ads.md). Heurísticas sinalizadas como [HEURÍSTICA]. Fontes lidas apenas por trechos de busca — validar no Help Center.

## Estratégia A — Setup de mensuração (Pixel + Events API)
1. **Quando usar:** antes de qualquer gasto.
2. **Dados necessários:** acesso à loja (Shopify/Nuvemshop/GTM), pixel ID, eventos (ViewContent, AddToCart, InitiateCheckout, CompletePayment).
3. **Como executar:** instalar Pixel; ativar Events API (integração nativa ou GTM pelo fluxo interativo); enviar o mesmo event_id nos dois canais e _ttp ([doc](../fontes/tiktok-events-api-deduplicacao.md)).
4. **Métricas:** contagem de compras TikTok vs pedidos da loja; taxa de deduplicação no Events Manager.
5. **Como interpretar:** TikTok contando bem mais compras que a loja no mesmo período → suspeita de duplicidade.
6. **Manter/modificar/interromper:** manter se divergência pequena e estável; modificar (revisar event_id) se o TikTok supera a loja de forma consistente; não iniciar escala enquanto não resolver. [HEURÍSTICA: tolerância ~10–20% definida pela equipe, não por fonte.]
7. **Riscos:** atribuição de plataforma ≠ incrementalidade; consentimento/cookies.

## Estratégia B — Smart+ Web (ou Catálogo) com Max Delivery → Cost Cap
1. **Quando usar:** conta nova com pixel validado; para catálogo, ≥4 SKUs aprovados ([doc](../fontes/tiktok-smart-plus-web-e-catalogo.md)).
2. **Dados:** CPA alvo (do unit economics — ver [processo e-commerce](ecommerce-unit-economics-e-escala.md)), orçamento, 5–10+ criativos.
3. **Como executar:** iniciar com otimização para Conversão (Compra). Sem histórico, usar entrega máxima; após ter CPA de 7 dias e >10 conversões/7d, testar Cost Cap = CPA de 7 dias ([doc](../fontes/tiktok-smart-plus-cost-cap-boas-praticas.md)). Orçamento: fontes divergem — 5x, ~10x ou 30x o CPA/dia.
4. **Métricas:** CPA, conversões/semana, status de aprendizado, ROAS de plataforma, nCAC/MER no negócio.
5. **Interpretação:** só julgar após ≥7 dias ou 50 conversões [DOC OFICIAL]; cost cap sem gastar = cap baixo demais.
6. **Manter/modificar/interromper:** manter se CPA ≤ CPA alvo de breakeven; modificar (subir cap ~10–20%, trocar criativos) se gasto travado [HEURÍSTICA]; interromper se após aprendizado CPA > CPA máximo de breakeven por 2 janelas de 7 dias [HEURÍSTICA].
7. **Riscos:** orçamento insuficiente prolonga aprendizado; edições reiniciam aprendizado; regras citadas vêm de doc de Smart+ App (extrapolação).

## Estratégia C — Produção criativa nativa + Spark Ads
1. **Quando usar:** sempre; especialmente com creators/UGC.
2. **Dados:** roteiros, creators, códigos de autorização.
3. **Como executar:** checklist oficial — 9:16, som, ≥720p, safe zone, hook ≤6 s, proposta ≤3 s, 5–10 palavras/s ([doc](../fontes/tiktok-creative-best-practices.md)); posts de creators via código Spark com duração cobrindo teste+escala ([doc](../fontes/tiktok-spark-ads.md)).
4. **Métricas:** hook rate (views 2s/6s ÷ impressões), retenção, CTR, CPA por criativo.
5. **Interpretação:** hook rate baixo → problema de abertura; CTR alto e CVR baixo → página/oferta.
6. **Manter/modificar/interromper:** manter criativos com CPA ≤ alvo; iterar hooks dos que retêm mas não convertem; pausar os que, com gasto ≥ 2–3x CPA alvo, não converteram [HEURÍSTICA].
7. **Riscos:** expiração do código Spark; fadiga criativa; "regra dos 3 s" não é oficial.

## Estratégia D — TikTok Shop / GMV Max
1. **Quando usar:** apenas com TikTok Shop ativo (disponibilidade no Brasil: verificar).
2. **Dados:** produtos, meta de ROI, vídeos próprios/afiliados.
3. **Como executar:** Promote → GMV Max → Maximize GMV → meta ([doc](../fontes/tiktok-gmv-max.md)).
4–5. **Métricas/interpretação:** GMV, ROI vs meta, margem após comissões e frete.
6. Manter se ROI ≥ ROI de breakeven (1 ÷ margem de contribuição %); ajustar meta se não gasta; interromper se abaixo por 14 dias [HEURÍSTICA].
7. **Riscos:** único tipo suportado → pouco controle; volume criativo exigido ([OPINIÃO] 20–50 vídeos).
