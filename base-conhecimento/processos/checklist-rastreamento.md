# Checklist de rastreamento

Fontes: [deduplicação](../fontes/tracking-capi-deduplicacao.md), [EMQ](../fontes/tracking-event-match-quality.md), [AEM](../fontes/tracking-aem-jon-loomer.md), [enhanced conversions](../fontes/tracking-enhanced-conversions-google-ads.md), [consent mode](../fontes/tracking-consent-mode-v2.md), [LGPD](../fontes/tracking-lgpd-anpd-cookies.md), [atribuição](../fontes/tracking-janelas-atribuicao-meta.md).

## 1. Quando usar
Novo setup, mudança de site/checkout, divergência plataforma×backend >20% [heurística], antes de testes e escala.

## 2. Dados necessários
Acesso a Events Manager, GTM/GA4, Google Ads, CMP, backend de pedidos.

## 3. Como executar
**Consentimento/LGPD**
- [ ] CMP com aceitar/recusar e categorias; registro de consentimento [análise ANPD].
- [ ] Consent mode v2: default denied antes de tags; `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization` atualizados.
- [ ] Pixel/CAPI com PII só com base legal; política de privacidade cita compartilhamento.
**Meta**
- [ ] Pixel + CAPI nos eventos-chave (PageView, ViewContent, AddToCart, InitiateCheckout, Purchase/Lead).
- [ ] event_id igual no browser e servidor; event_name idêntico; Purchase usa nº do pedido [DOC OFICIAL].
- [ ] value e currency (BRL) no Purchase.
- [ ] em, ph (E.164), external_id, fbc, fbp, IP, UA enviados; EMQ do Purchase monitorado.
- [ ] Domínio verificado.
**Google**
- [ ] GA4 com eventos de conversão-chave; Google Ads com tag/importação sem dupla contagem.
- [ ] Enhanced conversions ativas (web ou leads) e diagnóstico ok.
**UTMs**
- [ ] Taxonomia única em minúsculas; parâmetros dinâmicos da Meta.
**Validação**
- [ ] Pedido teste: aparece 1× no Events Manager (deduplicado), GA4, Google Ads e backend.
- [ ] Reconciliação semanal: conversões plataforma vs backend; MER.

## 4. Métricas
Taxa de deduplicação, EMQ, % eventos com servidor, divergência plataforma×backend, taxa de consentimento.

## 5. Como interpretar
Plataforma > backend: provável dupla contagem/view-through. Plataforma << backend: perda de sinal (consentimento, CAPI ausente, iOS).

## 6. Manter / modificar / interromper
Manter se divergência estável e explicável; modificar se EMQ Purchase < ~6 [OPINIÃO fornecedores] ou dedup falhando; interromper otimização para um evento quebrado (trocar evento de otimização) até corrigir.

## 7. Riscos e limitações
Enviar PII sem consentimento = risco LGPD; ad blockers/ITP; modelagem não é observação; checklist não substitui parecer jurídico.
