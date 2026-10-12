# About event deduplication (TikTok Ads Help)
- **Link:** https://ads.tiktok.com/help/article/event-deduplication?lang=pt
- **Tipo:** doc oficial
- **Autor / canal:** TikTok For Business
- **Data de publicação:** atualização mai/2025
- **Acesso ao conteúdo:** trechos lidos via WebSearch (página integral NÃO acessada: WebFetch/curl bloqueados pelo proxy do ambiente — connect_rejected)
- **Última verificação:** 2026-10-12
- **Temas:** pixel, Events API, mensuração

## Principais ensinamentos
- [DOC OFICIAL] Deduplicação é necessária quando o mesmo evento é enviado por Pixel e Events API; não é necessária se eventos distintos forem enviados por cada canal.
- [DOC OFICIAL] Parâmetros: pixel ID, nome do evento e event_id; recomenda-se enviar o cookie _ttp (fallback se faltar event_id).
- [DOC OFICIAL] Janelas: Pixel–Pixel e API–API em 48 h; Pixel–API: eventos que chegam após 5 min e em até 48 h do primeiro.
- [DOC OFICIAL] Setup via fluxo interativo com GTM configura event_id automaticamente.

## Procedimentos aplicáveis
- Gerar event_id único por conversão e enviá-lo idêntico nos dois canais.

## Evidências, limitações e condições de aplicação
- Não cobre especificamente Smart+.

## Divergências com outras fontes
- Nenhuma.
