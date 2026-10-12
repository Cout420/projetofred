# Métricas, rastreamento e atribuição

> Última verificação: 2026-10-12. **Aviso de acesso:** nesta pesquisa o proxy do ambiente bloqueou WebFetch/curl para todos os domínios (facebook.com, google.com, jonloomer.com etc.). O conteúdo das fontes veio de resumos de mecanismo de busca; nenhuma fonte teve texto integral lido. Revalidar nas páginas originais antes de decisões críticas.

## 1. Glossário de métricas (fórmulas)
| Métrica | Fórmula | Observação |
|---|---|---|
| CPM | gasto ÷ impressões × 1000 | custo do leilão/alcance |
| CTR (link) | cliques no link ÷ impressões | interesse no anúncio |
| CPC (link) | gasto ÷ cliques no link = CPM ÷ (1000 × CTR) | |
| CVR | conversões ÷ cliques (ou ÷ sessões) | eficiência da página/oferta; declarar denominador |
| CPA | gasto ÷ conversões = CPC ÷ CVR | |
| ROAS | receita atribuída ÷ gasto | depende da janela de atribuição |
| MER | receita total do negócio ÷ gasto total de mídia | independe de atribuição |
| Hook rate | plays de 3 s ÷ impressões | [CONSENSO] ([fonte](../fontes/testes-hook-hold-fadiga.md)) |
| Hold rate | ThruPlays ÷ plays de 3 s | fórmula varia ([fonte](../fontes/testes-hook-hold-fadiga.md)) |
| Frequência | impressões ÷ alcance | |

Identidade útil: **CPA = CPM ÷ (1000 × CTR × CVR)** — permite decompor qualquer piora de CPA (ver [diagnóstico](../processos/diagnostico-de-campanha.md)).

## 2. Meta Pixel + Conversions API
- [DOC OFICIAL] Deduplicação exige `event_id`/`eventID` **e** `event_name` idênticos, mesmo Pixel, em até 48 h do primeiro recebimento; browser chegando primeiro é o caso suportado; com ≤5 min de diferença a Meta prefere o evento do navegador ([fonte](../fontes/tracking-capi-deduplicacao.md)).
- [CONSENSO] EMQ (0–10) sobe com email, telefone, external_id, fbc/fbp, IP/UA normalizados e com hash ([fonte](../fontes/tracking-event-match-quality.md)). "≥8 em Purchase" é [OPINIÃO] de fornecedores.
- [CASO/relato] AEM: limite de 8 eventos e ranking removidos em 2023; AEM segue no back-end por causa do ATT ([fonte](../fontes/tracking-aem-jon-loomer.md)).

## 3. Google: GA4, enhanced conversions, consent mode v2
- [DOC OFICIAL] Enhanced conversions envia PII first-party com hash SHA-256; versões web e leads; via gtag, GTM ou API ([fonte](../fontes/tracking-enhanced-conversions-google-ads.md)).
- [CONSENSO] Consent mode v2 acrescenta `ad_user_data` e `ad_personalization`; modo avançado envia pings sem cookie e permite modelagem específica; básico bloqueia tags até consentimento ([fonte](../fontes/tracking-consent-mode-v2.md)).

## 4. UTMs
- [CONSENSO — conhecimento geral, sem fonte lida nesta rodada] Padrão `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`; na Meta, usar parâmetros dinâmicos ({{campaign.name}}, {{ad.id}}) para ligar GA4/CRM ao anúncio. Padronizar minúsculas e taxonomia única.

## 5. Janelas de atribuição
- [DOC OFICIAL via praticante] Padrão Meta: 7d-clique + 1d-visualização; 28d-clique visível em comparação ([fonte](../fontes/tracking-janelas-atribuicao-meta.md)).
- [CASO/terceiros] API deixa de retornar 7d-view/28d-view a partir de 12/01/2026.
- Proven vs opinião: a janela muda **o que é reportado**, não o que é causado.

## 6. Incrementalidade e MMM
- [CONSENSO] Conversion Lift = randomização usuário teste/holdout, leitura bayesiana; geo-holdout = regiões teste vs controle, mede receita total ([fonte](../fontes/tracking-incrementalidade-conversion-lift-geo.md)).
- [CASO] Graza: impacto causal 2,7x o last-click — mostra que plataforma pode tanto sub quanto superestimar.
- [DOC OFICIAL] Meridian (MMM bayesiano, open-source) aceita priors de experimentos via GeoX ([fonte](../fontes/tracking-mmm-meridian-robyn.md)).
- Hierarquia sugerida [OPINIÃO]: atribuição de plataforma (diário, tático) → MER (semanal) → testes de incrementalidade (trimestral) → MMM calibrado (planejamento).

## 7. LGPD
- [CONSENSO/análise do guia ANPD] Cookies de publicidade dependem de consentimento; necessários por legítimo interesse; ônus da prova é do controlador ([fonte](../fontes/tracking-lgpd-anpd-cookies.md)). Enviar PII hash via CAPI/enhanced conversions também é tratamento de dado pessoal — exige base legal e transparência [HIPÓTESE jurídica, consultar jurídico].

## Divergências
- AEM: remoção dos 8 eventos em 2023 (Loomer/DEPT) vs 2025 (Conversios).
- Mudanças de atribuição 2026: só API ou também Ads Manager.
- EMQ mede presença de parâmetros ou match real.
- Consent mode avançado (mais dados/modelagem) vs básico (mais conservador em privacidade).
- Datas de lançamento do consent mode v2.

## Lacunas
- Nenhuma doc oficial lida integralmente (bloqueio de rede).
- Sem fonte sobre Meta + LGPD especificamente, nem transferência internacional.
- Sem dados de Conversion Lift no Brasil; sem detalhes do método geo da Haus.
- Vídeos do YouTube não acessados (YouTube bloqueado pelo proxy do ambiente).
