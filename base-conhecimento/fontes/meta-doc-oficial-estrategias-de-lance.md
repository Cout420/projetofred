# Estratégias de lance da Meta (Central de Ajuda / Marketing API)
- **Link:** https://www.facebook.com/business/help/1619591734742116 ; https://developers.facebook.com/docs/marketing-api/bidding/overview/bid-strategy
- **Tipo:** doc oficial
- **Autor / canal:** Meta
- **Data de publicação:** não informada
- **Acesso ao conteúdo:** apenas metadados/trechos exibidos no buscador (WebSearch). Leitura integral NÃO realizada: WebFetch/curl bloqueados pelo proxy do ambiente (DNS ENOTFOUND / CONNECT 403) em 2026-10-12. Conteúdo abaixo vem de resumos secundários (jonloomer.com, oneppcagency) que descrevem a doc oficial.
- **Última verificação:** 2026-10-12
- **Temas:** estratégias de lance, bid cap, cost per result goal, ROAS goal

## Principais ensinamentos
- [DOC OFICIAL, via fonte secundária] — Opções atuais: Highest Volume (antigo lowest cost), Cost Per Result Goal (antigo cost cap), Highest Value, ROAS Goal e Bid Cap; disponibilidade varia por objetivo, meta de performance, local de conversão e configuração da conta.
- [DOC OFICIAL, via secundária] — Cost Per Result Goal é uma meta média que o algoritmo considera, não um teto rígido.
- [DOC OFICIAL, via secundária] — Bid Cap é teto rígido de lance por leilão; pode restringir a entrega se baixo demais.
- [DOC OFICIAL, via secundária] — Highest Value e ROAS Goal exigem eventos de compra com valor enviados pelo pixel/CAPI; meta de ROAS irrealista pode impedir o gasto do orçamento.

## Procedimentos aplicáveis
- Rodar primeiro em Highest Volume para descobrir o custo por resultado médio antes de definir metas (sugestão citada em resumo secundário).

## Evidências, limitações e condições de aplicação
- Texto oficial não lido diretamente; confirmar nomes e regras na Central de Ajuda antes de usar.

## Divergências com outras fontes
- Nenhuma divergência factual identificada; fontes divergem sobre QUANDO usar bid cap (ver temas/meta-ads.md).
