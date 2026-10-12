# Playbook: funil low ticket e economia unitária
> Base de evidência: trechos de buscador (leitura integral bloqueada em 2026-10-12). Limiares marcados como **[HEURÍSTICA]** são pontos de partida a calibrar com dados próprios, não regras comprovadas.
Fontes: [esteira](../fontes/lowticket-herospark-esteira-de-ofertas.md), [bump Hotmart](../fontes/lowticket-hotmart-order-bump.md), [tripwire](../fontes/lowticket-maisretorno-tripwire.md), [taxas](../fontes/lowticket-taxas-kiwify-hotmart-comparativos.md), [funil 7 passos](../fontes/lowticket-pandavideo-low-ticket-funnel.md), [políticas](../fontes/oferta-politicas-meta-promessas.md).

## 1. Quando usar
- Produto digital de R$ 7–97 vendido em perpétuo com tráfego pago, com objetivo de pagar a aquisição e/ou gerar base de compradores para backend.
- Não usar se não houver ao menos um produto pós-compra (bump/upsell) ou backend: a margem do produto de entrada sozinha dificilmente cobre taxas fixas.

## 2. Dados necessários
- Preço de cada oferta (P_entrada, P_bump, P_upsell, P_downsell) e taxas de aceitação (t_bump, t_upsell, t_downsell).
- Taxa da plataforma (% + fixo por venda), imposto (%), taxa de reembolso/chargeback (%), custo de entrega/ferramentas.
- Gasto, compras, CPA e receita por dia/campanha (Gerenciador + plataforma de checkout).

## 3. Como executar
1. Calcule o **ticket médio do funil (bruto)**: TMF = P_entrada + t_bump·P_bump + t_upsell·P_upsell + (1−t_upsell)·t_downsell·P_downsell.
2. Calcule a **receita líquida por comprador**: RL = TMF − Σ(taxa% · preço + taxa fixa por transação) − imposto% · TMF − reembolso% · TMF − custos variáveis.
3. **Margem de contribuição antes de mídia**: m = RL ÷ TMF.
4. **CPA máximo (breakeven) = TMF × m** (= RL). CPA alvo = TMF × (m − margem de lucro desejada).
5. **ROAS de breakeven = 1 ÷ m** (sobre receita bruta do funil). Ex.: m = 0,55 → ROAS BE ≈ 1,82.
6. Exemplo ilustrativo (números hipotéticos): entrada R$ 27, bump R$ 17 (35%), upsell R$ 67 (8%), sem downsell → TMF = 27 + 5,95 + 5,36 = R$ 38,31. Se taxas+imposto+reembolso ≈ 30% → m = 0,70 → CPA máx ≈ R$ 26,82; ROAS BE ≈ 1,43.
7. Configure bump no checkout e upsell/downsell pós-compra na plataforma; rastreie compra com valor total (incluindo bumps) no Pixel/CAPI.

## 4. Métricas
CPA, ROAS (receita do funil ÷ gasto), TMF, taxas de aceitação de bump/upsell, taxa de reembolso, conversão da página, CPM/CTR (diagnóstico).

## 5. Como interpretar
- ROAS ≥ ROAS BE com reembolsos já descontados → funil se paga.
- CPA alto com CTR bom → problema de página/oferta; CTR baixo → problema de criativo.
- Bump < referência de fornecedor (30–40%) não é falha por si só: a referência é de fornecedor [OPINIÃO].

## 6. Manter / modificar / interromper
- **Manter/escalar** se ROAS 7 dias ≥ ROAS BE × 1,2 e reembolso estável [HEURÍSTICA].
- **Modificar** (oferta pós-compra, preço do bump, página) se ROAS entre 0,8× e 1,2× do BE por ≥ 3× o CPA alvo de gasto [HEURÍSTICA].
- **Interromper** conjunto/criativo se gasto ≥ 2–3× CPA máximo sem venda [HEURÍSTICA].
- Low ticket "pagando o tráfego" com ROAS ≈ BE só é estratégia válida se há backend medido que gere lucro posterior; caso contrário é prejuízo de capital de giro.

## 7. Riscos e limitações
- Taxa fixa por venda corrói margem em ticket muito baixo; confirmar taxas oficiais vigentes.
- Reembolsos e chargebacks podem inverter o resultado; atribuição do Pixel pode diferir da plataforma.
- **Compliance Meta:** proibido prometer renda garantida, "dinheiro rápido", prints de saldo/faturamento, antes/depois em saúde/estética, linguagem que afirme atributos pessoais ("você está endividado?"). Vale para anúncio, página e depoimentos. CDC: oferta precisa ser cumprida e direito de arrependimento (7 dias) em compras online.
