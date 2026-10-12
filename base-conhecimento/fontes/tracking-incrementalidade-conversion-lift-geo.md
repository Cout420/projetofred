# Understanding Meta incrementality testing (Haus) + Conversion Lift (Triple Whale KB)
- **Link:** https://www.haus.io/article/meta-incrementality-testing ; https://kb.triplewhale.com/en/articles/10605805-meta-conversion-lift-experiment
- **Tipo:** artigo / estudo de caso
- **Autor / canal:** Haus; Triple Whale
- **Data de publicação:** não informada
- **Acesso ao conteúdo:** trechos via resumo de mecanismo de busca (WebSearch); WebFetch/curl bloqueados pelo proxy do ambiente (ENOTFOUND/403) — texto integral NÃO lido
- **Última verificação:** 2026-10-12
- **Temas:** incrementalidade, conversion lift, geo-holdout

## Principais ensinamentos
- [CONSENSO] Conversion Lift: Meta divide aleatoriamente o público em teste (vê anúncios) e holdout (não vê); resultados como intervalos bayesianos; ">90% da posterior acima de zero" = altamente conclusivo.
- [CONSENSO] Lift não captura vendas fora do ecossistema medido (varejo, Amazon, busca de marca).
- [CONSENSO] Geo-holdout: desliga o canal em regiões de teste, mantém em regiões controle pareadas, compara receita total — capta efeitos cross-canal.
- [CASO] Graza: impacto causal da Meta 2,7x maior que o last-click (citado em resultado de busca).
- [OPINIÃO/Haus] Objetivo: razão conversões incrementais / conversões reportadas pela plataforma; volume é a maior restrição.

## Procedimentos aplicáveis
- Calcular fator de incrementalidade e usá-lo para ajustar CPA/ROAS alvo de plataforma.

## Evidências, limitações e condições de aplicação
- Exige volume e regiões suficientes para poder estatístico; custo de oportunidade do holdout.

## Divergências com outras fontes
- Haus é fornecedor de testes geo — viés a favor do método.
