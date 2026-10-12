# Cenário 3 — Diagnóstico e-commerce de moda (Meta, 14 dias)
> **CENÁRIO SIMULADO — dados fictícios.** Sem web; base: `processos/diagnostico-de-campanha.md`, `processos/ecommerce-unit-economics-e-escala.md`.

## 1. Resumo executivo
Gargalo principal: **queda de CTR (−44%)**, compatível com fadiga criativa, agravada por **CPM +52%**. Juntos explicam CPA ≈ **2,7×** maior. Porém os números informados são **inconsistentes** com ROAS 1,9 (deveria estar ≈1,15 com ticket constante) — antes de agir é preciso validar rastreamento/ticket. Plano: 3 ações, aguardando aprovação.

## 2. Premissas e dados faltantes
Faltam: margem (CM2) → ROAS/MER de breakeven; MER/receita do backend; AOV antes vs agora; frequência anterior; hook/hold rate; dados por anúncio; mudanças de site/preço/estoque/atribuição no período; sazonalidade (out/2026).
Sem CM2 não sei se ROAS 1,9 dá prejuízo. Exemplo: se CM2 = 40% → MER/ROAS BE = 2,5 [derivação aritmética] → 1,9 seria prejuízo.

## 3. Decomposição (CPA = CPM ÷ (1000 × CTR × CVR))
| Termo | Antes | Agora | Fator sobre o CPA |
|---|---|---|---|
| CPM | 25 | 38 | ×1,52 |
| CTR | 1,6% | 0,9% | ×1,78 (1,6/0,9) |
| CVR | 1,8% | 1,8% | ×1,00 |
| **CPA** | | | **×2,70** |
Atual: impressões ≈ 10.000/38×1000 = 263.158; cliques ≈ 2.368; CPC ≈ R$4,22 (antes R$1,56); compras ≈ 43; CPA ≈ R$235; receita (ROAS 1,9) = R$19.000 → AOV implícito ≈ R$446.
**Inconsistência:** com AOV constante, ROAS esperado = 3,1 / 2,70 = **1,15**. Para ROAS 1,9 o AOV teria de subir ~65%, ou a atribuição/valor de compra mudou. → passo 0 do processo: checar rastreamento e backend (`processos/checklist-rastreamento.md`).
Volume: ~43 compras ≥ ~30 [heurística] → amostra minimamente suficiente para CVR.

## 4. Diagnóstico
- CTR é a etapa de maior piora relativa (fator 1,78 > 1,52) → **gargalo principal** [interpretação do processo].
- Frequência 3,8 + CTR caindo + CPM subindo = padrão de fadiga [CONSENSO, `temas/testes-otimizacao-escala.md`]. 3,8 está abaixo do alerta de 4–5 citado (OPINIÃO Motion) — limiar não universal; sem frequência anterior não confirmo tendência.
- CPM: possível baixa relevância do criativo e/ou leilão de Q4 iniciando [HIPÓTESE].
- CVR estável → página/checkout provavelmente não é o problema.

## 5. Plano (máx. 3 ações, impacto × esforço)
1. **Validar dados (esforço baixo, pré-requisito):** comparar compras/receita Meta × plataforma/backend e MER dos 14 dias; checar deduplicação Pixel/CAPI e valor do evento. Se backend divergir, corrigir antes de mexer em mídia.
2. **Renovar criativos (impacto alto):** 4–8 conceitos novos e distintos (ângulo, formato, criador), não variações de cor [CONSENSO]; iterar hooks dos 3 primeiros segundos; teste conforme `processos/plano-de-testes-e-escala.md` A.
3. **Ampliar entrega / reduzir pressão de frequência (impacto médio):** público amplo/Advantage+, revisar exclusões e posicionamentos; **não escalar orçamento** até CTR/CPA voltarem (escala exige CPA na meta ≥7 dias).

## 6. Métricas e critérios
CTR link, hook rate, CPM, frequência, CPA, ROAS, MER. Manter se CPA ±15% da meta e MER estável; ação se etapa piorar >20% por 3+ dias [heurísticas do processo]. Sucesso dos novos criativos: CTR ≥ 1,3% e CPA dentro da meta em 7 dias [HIPÓTESE, calibrar].

## 7. Riscos
Atribuição não causal; sazonalidade; mudanças simultâneas confundem causa (fazer 1→2→3 em sequência).

## 8. Pedido de aprovação
Aprovar ações 1–3. Nenhuma alteração na conta sem OK. Reversão: reativar anúncios atuais (mantidos pausados, não excluídos).
