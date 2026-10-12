# Playbook — Estrutura e escala (Meta Ads)

> Base: [temas/meta-ads.md](../temas/meta-ads.md). Sem fonte lida integralmente; números = heurísticas.

## A. Estrutura consolidada (público amplo + criativo como segmentação)
1. **Quando usar:** padrão pós-Andromeda para vendas/leads com pixel maduro [CONSENSO].
2. **Dados:** evento de conversão confiável; biblioteca de criativos variados.
3. **Executar:** 1 campanha de vendas (Advantage+ Sales ou manual com público amplo), poucos conjuntos, posicionamentos automáticos (prática comum, não verificada), anúncios com conceitos distintos (ângulo, formato, hook, persona).
4. **Métricas:** CPA/ROAS, distribuição de gasto por anúncio, frequência, status de aprendizado.
5. **Interpretar:** a Meta concentra gasto nos anúncios preferidos; criativos sem gasto não são necessariamente ruins.
6. **Manter/modificar/interromper:** manter enquanto CPA ≤ alvo; se ≥ ~50 eventos/semana não forem viáveis com o orçamento [DOC OFICIAL], consolidar mais ou otimizar para evento mais alto no funil (heurística).
7. **Riscos:** menos controle e visibilidade; Advantage+ depende de dados de conversão.

## B. Diversidade criativa (Andromeda)
1. **Quando usar:** sempre; especialmente com fadiga ou CPM subindo.
2. **Dados:** desempenho por conceito, não por variação.
3. **Executar:** produzir conceitos realmente diferentes, não só variações de cor/CTA [CONSENSO]. Quantidade heurística: pequeno orçamento/serviço → 3–6 conceitos ativos; e-commerce maior → 8–12+ (Segwise [OPINIÃO]).
4. **Métricas:** hook rate, CTR, CPA por conceito, % de gasto.
5. **Interpretar:** conceito vencedor → produzir iterações e novos ângulos vizinhos.
6. **Manter/modificar/interromper:** pausar conceito com gasto relevante (heurística ≥ 2–3× CPA alvo) e CPA > equilíbrio.
7. **Riscos:** excesso de anúncios dilui orçamento pequeno.

## C. Escala vertical (aumentar orçamento)
1. **Quando usar:** CPA estável abaixo do alvo por vários dias.
2. **Dados:** CPA/ROAS de 3–7 dias.
3. **Executar:** +20–25% por passo, 1 dia entre aumentos [OPINIÃO Foxwell]; alternativa: orçamento alto + bid cap (ver playbook de lances, C3).
4. **Métricas:** CPA marginal após cada aumento, CPM, frequência.
5. **Interpretar:** CPA sobe pouco = espaço para escalar; sobe muito = saturação/criativo.
6. **Manter/modificar/interromper:** esperar 5–7 dias antes de cortar [OPINIÃO Foxwell]; recuar ao último patamar se CPA > alvo sustentado.
7. **Riscos:** mudanças grandes podem reiniciar aprendizado (regra ">20%" não confirmada oficialmente).

## D. Escala horizontal
1. **Quando usar:** escala vertical satura; novos públicos/mercados/ângulos.
2. **Dados:** conceitos vencedores; novos ângulos.
3. **Executar:** novos conceitos criativos na estrutura existente ou novas campanhas (novo país, produto, oferta); duplicar evita ruído do aprendizado mas fragmenta dados.
4. **Métricas:** CPA por campanha nova vs principal; sobreposição.
5. **Interpretar:** compare com a linha de base da campanha principal.
6. **Manter/modificar/interromper:** cortar expansões com CPA > equilíbrio após amostra heurística.
7. **Riscos:** canibalização no leilão; fragmentação contra o consenso de consolidação.

## E. Gestão da fase de aprendizado
1. **Quando usar:** todo conjunto novo ou editado.
2. **Dados:** eventos semanais por conjunto.
3. **Executar:** orçamento ≈ 50 × CPA/semana [DOC OFICIAL + HIPÓTESE]; agrupar edições; evitar mexer diariamente.
4. **Métricas:** status "Aprendizado/Aprendizado limitado".
5. **Interpretar:** "limitado" = volume insuficiente → consolidar ou aumentar orçamento.
6. **Manter/modificar/interromper:** não julgar antes de ~7 dias salvo CPA muito acima do equilíbrio.
7. **Riscos:** alegações de 2026 (10 eventos; aprendizado 7–14 dias) não confirmadas.
