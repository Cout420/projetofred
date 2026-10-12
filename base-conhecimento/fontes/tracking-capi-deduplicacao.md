# Handling Duplicate Pixel and Conversions API Events (Meta for Developers)
- **Link:** https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events
- **Tipo:** doc oficial
- **Autor / canal:** Meta for Developers
- **Data de publicação:** não informada
- **Acesso ao conteúdo:** trechos via resumo de mecanismo de busca (WebSearch); WebFetch/curl bloqueados pelo proxy do ambiente (ENOTFOUND/403) — texto integral NÃO lido
- **Última verificação:** 2026-10-12
- **Temas:** Pixel + CAPI, deduplicação, event_id

## Principais ensinamentos
- [DOC OFICIAL] Pixel e CAPI são deduplicados quando `eventID` (browser) = `event_id` (servidor) **e** `event` = `event_name`, para o mesmo Pixel ID.
- [DOC OFICIAL] Janela de 48 h contada a partir do primeiro evento recebido com aquele event_id.
- [DOC OFICIAL] O método funciona sobretudo quando o evento do navegador chega primeiro; se servidor e navegador chegam com até ~5 min de diferença, a Meta privilegia o do navegador.
- [DOC OFICIAL] Usar como event_id um identificador natural (nº do pedido/transação); sem ele, um valor aleatório idêntico nos dois lados.
- [CONSENSO] Nomes divergentes (ex.: "Purchase" vs "CompletePayment") impedem a deduplicação e dobram conversões (citado por guias de terceiros).

## Procedimentos aplicáveis
- Gerar event_id no front (ou no backend e injetar na página), enviar o mesmo valor no fbq e no payload CAPI; padronizar event_name; conferir no Events Manager a taxa de deduplicação.

## Evidências, limitações e condições de aplicação
- Conteúdo obtido por resumo de busca que cita a doc; confirmar na página original antes de implementar.

## Divergências com outras fontes
- Nenhuma relevante encontrada; terceiros convergem na janela de 48 h.
