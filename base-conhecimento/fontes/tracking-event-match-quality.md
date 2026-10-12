# Event Match Quality (EMQ) — guias de terceiros (Elevar, Usercentrics, Weltpixel, AnyTrack)
- **Link:** https://docs.getelevar.com/docs/what-is-event-match-quality-score-in-facebook ; https://usercentrics.com/knowledge-hub/improve-meta-event-match-quality-score/ ; referência oficial pretendida: https://www.facebook.com/business/help/765081237991954 (bloqueada)
- **Tipo:** artigo
- **Autor / canal:** Elevar / Usercentrics / Weltpixel (fornecedores)
- **Data de publicação:** não informada
- **Acesso ao conteúdo:** trechos via resumo de mecanismo de busca (WebSearch); WebFetch/curl bloqueados pelo proxy do ambiente (ENOTFOUND/403) — texto integral NÃO lido
- **Última verificação:** 2026-10-12
- **Temas:** CAPI, EMQ, parâmetros de cliente

## Principais ensinamentos
- [CONSENSO] EMQ é uma nota de 0 a 10 por evento no Events Manager, refletindo quão bem os dados de cliente enviados permitem casar o evento com contas Meta.
- [CONSENSO] Parâmetros mais fortes: email (em), telefone (ph), external_id; complementares: fbp, fbc, IP, user agent, nome, endereço, data de nascimento, gênero.
- [CONSENSO] Normalização: email minúsculo e sem espaços; telefone em E.164; hash SHA-256 dos campos PII.
- [OPINIÃO] Metas "≥6 mínimo, ≥8 para Purchase" são regras práticas de fornecedores, não limiares oficiais.
- [CONSENSO] EMQ alto não garante deduplicação nem atribuição correta.

## Procedimentos aplicáveis
- Enviar em/ph/external_id em eventos de checkout; capturar fbc (parâmetro fbclid) e fbp em cookie first-party e repassar ao servidor.

## Evidências, limitações e condições de aplicação
- Fontes secundárias com interesse comercial; uma diz que a nota usa as últimas 48 h — não confirmado em doc oficial.

## Divergências com outras fontes
- Divergem sobre se a nota mede "match rate real" ou apenas presença/qualidade de parâmetros.
