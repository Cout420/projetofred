# Cálculo de tamanho de amostra para A/B (Metricgate, 8gwifi)
- **Link:** https://metricgate.com/blogs/ab-testing-minimum-sample-size/ ; https://8gwifi.org/sample-size-calculator.jsp
- **Tipo:** artigo
- **Autor / canal:** Metricgate; 8gwifi
- **Data de publicação:** não informada
- **Acesso ao conteúdo:** trechos via resumo de mecanismo de busca (WebSearch); WebFetch/curl bloqueados pelo proxy do ambiente (ENOTFOUND/403) — texto integral NÃO lido
- **Última verificação:** 2026-10-12
- **Temas:** significância, poder, MDE

## Principais ensinamentos
- [CONSENSO] n por variante = (z_{α/2} + z_β)² × [p₁(1−p₁) + p₂(1−p₂)] / (p₁−p₂)²; α=0,05 → 1,96; poder 80% → 0,84.
- [CONSENSO] Exemplo: base 10% → 12% exige ~3.834 usuários por variante.
- [CONSENSO] Reduzir o MDE pela metade quadruplica a amostra.
- [CONSENSO] MDE pode ser absoluto ou relativo — confirmar convenção da calculadora.
- [CONSENSO] "Peeking" (parar no 1º resultado significativo) infla falsos positivos; rodar ≥1 semana completa.

## Procedimentos aplicáveis
- Definir métrica, baseline, MDE, α, poder antes; calcular n; dividir pelo tráfego diário → duração.

## Evidências, limitações e condições de aplicação
- Supõe amostras independentes e aleatórias — nem sempre válido em leilões de anúncios sem split real.

## Divergências com outras fontes
- Fórmula simplificada 2(zα+zβ)²p(1−p)/d² aproxima bem só para efeitos pequenos.
