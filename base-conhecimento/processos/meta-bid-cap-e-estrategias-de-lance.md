# Playbook — Bid cap e estratégias de lance (Meta Ads)

> Base: [temas/meta-ads.md](../temas/meta-ads.md). Nenhuma fonte lida integralmente; números abaixo são **heurísticas rotuladas**, não regras da Meta. Ajuste a orçamento, ticket e margem.

## Variáveis de referência (calcular antes de qualquer estratégia)
- CPA máximo de equilíbrio = ticket médio × margem de contribuição (antes do anúncio).
- CPA alvo = valor abaixo do equilíbrio que garante o lucro desejado; ROAS alvo = ticket ÷ CPA alvo.

---
## A. Highest Volume (padrão) — linha de base
1. **Quando usar:** conta/produto novo, sem CPA histórico; teste criativo; quando volume importa mais que custo.
2. **Dados necessários:** pixel/CAPI com evento de otimização; CPA de equilíbrio.
3. **Como executar:** campanha de vendas, público amplo, 1 conjunto (ou poucos), criativos diversos; orçamento que permita aproximar ~50 eventos/semana [DOC OFICIAL] (orçamento semanal ≈ 50 × CPA esperado — [HIPÓTESE] derivada).
4. **Métricas:** CPA, ROAS, CPM, CTR, taxa de conversão, frequência, status de aprendizado.
5. **Interpretar:** o CPA médio obtido vira referência para metas e caps.
6. **Manter/modificar/interromper:** manter se CPA ≤ alvo; se CPA entre alvo e equilíbrio, trocar criativo antes de mexer em lance; se > equilíbrio após volume estatisticamente razoável (heurística: gasto ≥ 2–3× CPA alvo sem venda, para tickets baixos/médios) pausar o anúncio/conjunto.
7. **Riscos:** gasta todo o orçamento mesmo com CPM caro; sem controle de custo.

## B. Cost Per Result Goal (antigo cost cap)
1. **Quando usar:** já existe CPA histórico e quer manter custo médio perto de uma meta com mais escala que bid cap [CONSENSO].
2. **Dados:** CPA médio real em Highest Volume [DOC OFICIAL via secundária].
3. **Executar:** definir meta próxima do CPA histórico (heurística: 0–20% acima do histórico para não travar entrega); orçamento folgado.
4. **Métricas:** gasto efetivo vs orçamento, CPA, entrega.
5. **Interpretar:** subentrega = meta apertada demais; CPA acima da meta é possível (não é teto).
6. **Manter/modificar/interromper:** se gasta < ~50% do orçamento por vários dias (heurística), elevar meta em passos pequenos; se CPA estoura de forma consistente, revisar criativos ou voltar a Highest Volume.
7. **Riscos:** não garante teto; meta baixa demais = sem gasto.

## C. Bid Cap — teto rígido por leilão
### C1. Bid cap simples (proteção de margem)
1. **Quando usar:** CPA de equilíbrio bem conhecido; margem estreita (comum em **low ticket**, onde poucos reais de CPA acima destroem o lucro); prioridade lucro > volume [CONSENSO]. Loomer: só para avançados [OPINIÃO].
2. **Dados:** CPA de equilíbrio e alvo, AOV, conversão histórica.
3. **Executar:** cap inicial ≈ AOV ÷ ROAS alvo (= CPA alvo) [OPINIÃO Skaleit]; orçamento acima do que gastaria normalmente (o cap limita o gasto, não o orçamento); usar criativos já validados.
4. **Métricas:** gasto diário vs orçamento, CPA, CPM, % de entrega, impressões.
5. **Interpretar:** lance ≠ custo final [DOC OFICIAL] — CPA real pode ficar abaixo do cap. Sem gasto = cap baixo ou criativo fraco.
6. **Manter/modificar/interromper:** sem entrega após 24–72h (heurística) → subir cap ~5% por vez, até ~+20% do alvo [OPINIÃO Skaleit]; CPA real bem abaixo do alvo e gasto travado → subir cap; CPA > equilíbrio → baixar cap ou pausar. Em tickets altos (CPA alto, poucos eventos), dar mais dias antes de decidir.
7. **Riscos:** subentrega, aprendizado lento, decisões com amostra pequena.

### C2. Escada de lances (vários níveis de cap)
1. **Quando usar:** não se sabe o cap ideal; quer mapear volume vs custo.
2. **Dados:** CPA alvo e equilíbrio.
3. **Executar:** 3–5 conjuntos (ou campanhas) idênticos em criativo/público, variando só o cap (ex.: 70%, 85%, 100%, 115% do CPA alvo — faixas heurísticas) [OPINIÃO Triple Whale/Racklify]; mesmo orçamento alto em cada.
4. **Métricas:** gasto e CPA por nível.
5. **Interpretar:** o nível mais baixo que ainda gasta com CPA ≤ alvo indica o ponto eficiente.
6. **Manter/modificar/interromper:** concentrar orçamento nos níveis que gastam dentro do alvo; desligar níveis sem entrega após janela heurística (3–7 dias, maior para ticket alto) ou com CPA > equilíbrio.
7. **Riscos:** sobreposição de leilão entre conjuntos; mais fragmentação de dados (conflita com consolidação pró-Andromeda).

### C3. Orçamento alto + bid cap (escala com rede de segurança)
1. **Quando usar:** criativos comprovados, demanda alta (ex.: BF/CM), quer escalar sem estourar CPA [OPINIÃO/CASO Foxwell].
2. **Dados:** CPA alvo; anúncios vencedores.
3. **Executar:** campanha nova de lance manual, orçamento diário muito acima do atual, cap rígido ≈ CPA alvo, anúncios vencedores.
4. **Métricas:** gasto horário/diário, CPA, ROAS.
5. **Interpretar:** se o gasto desacelera, o mercado ficou caro — é o comportamento esperado.
6. **Manter/modificar/interromper:** gestão diária ativa; ajustar cap conforme CPA; interromper se CPA > equilíbrio.
7. **Riscos:** se o cap estiver alto demais, gasta tudo rapidamente; caso Foxwell (US$10–20k/dia) sem contexto de margem.

## D. ROAS Goal / Highest Value
1. **Quando usar:** e-commerce com valores de pedido variados.
2. **Dados:** eventos de compra com valor via pixel/CAPI [DOC OFICIAL].
3. **Executar:** meta de ROAS próxima ou pouco abaixo do histórico.
4. **Métricas:** ROAS, gasto, valor de conversão.
5. **Interpretar:** subentrega = meta irrealista [DOC OFICIAL].
6. **Manter/modificar/interromper:** relaxar meta em passos pequenos se não gastar; interromper se ROAS < equilíbrio.
7. **Riscos:** dados de valor errados distorcem a otimização.

## Nota: orçamento limitado e eventos (adicionada após teste da Skill)
- Se orçamento semanal ÷ CPA esperado < ~50, bid cap tende a sub-entregar e prolongar o aprendizado: comece em Highest Volume, obtenha CPA real e só depois teste cap [HEURÍSTICA].
- Garanta que bump vá no valor da compra principal e que upsell não gere evento de compra duplicado que distorça o CPA usado para definir o cap.
