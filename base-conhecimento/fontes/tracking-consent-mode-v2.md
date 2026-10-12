# Google Consent Mode v2 — basic vs advanced (guias de CMPs: CookieScript, Stape, Cookie Information)
- **Link:** https://cookie-script.com/blog/basic-advanced-google-consent-mode-v2 ; https://stape.io/blog/google-consent-mode-v2 ; referência oficial pretendida: https://support.google.com/google-ads/answer/10000067 (bloqueada)
- **Tipo:** artigo
- **Autor / canal:** CookieScript / Stape
- **Data de publicação:** não informada
- **Acesso ao conteúdo:** trechos via resumo de mecanismo de busca (WebSearch); WebFetch/curl bloqueados pelo proxy do ambiente (ENOTFOUND/403) — texto integral NÃO lido
- **Última verificação:** 2026-10-12
- **Temas:** consent mode v2, modelagem, privacidade

## Principais ensinamentos
- [CONSENSO] v2 adiciona `ad_user_data` (envio de dados do usuário ao Google para ads) e `ad_personalization` (remarketing/personalização) a `ad_storage` e `analytics_storage`.
- [CONSENSO] Básico: tags só carregam após consentimento; sem consentimento nada é coletado; modelagem genérica.
- [CONSENSO] Avançado: tags carregam com padrão "denied" e enviam pings sem cookies; habilita modelagem específica do anunciante.
- [OPINIÃO] Alguns preferem o básico porque pings sem cookies ainda enviam dados ao Google.

## Procedimentos aplicáveis
- CMP certificada → default denied antes de qualquer tag → update conforme escolha → validar no Tag Assistant.

## Evidências, limitações e condições de aplicação
- Exigência formal do Google vale para EEE/UK; no Brasil, relevância vem da LGPD (ver fonte LGPD).

## Divergências com outras fontes
- Datas de lançamento divergem (nov/2023 vs mar/2024).
