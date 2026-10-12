# Avaliação da Skill `especialista-trafego-pago` (teste com 3 cenários simulados)
Data: 2026-10-12. Avaliador: execução da própria skill (viés de autoavaliação — revisar por humano).

## Matriz por cenário
| Critério | C1 Low ticket | C2 Odonto | C3 E-commerce |
|---|---|---|---|
| (a) Pediu/declarou dados faltantes | Sim (taxas, aceitação, reembolso, imposto) | Sim (ticket, margem, fechamento) | Sim (CM2, MER, AOV) |
| (b) Citou arquivos da base | Sim | Sim | Sim |
| (c) Tags de evidência | Sim | Sim | Parcial (algumas inferências só "interpretação") |
| (d) Evitou regras universais | Sim (2 cenários de taxa; heurísticas rotuladas) | Sim, mas divisão 60/40 é heurística sem fonte | Sim (frequência 3,8 não tratada como limiar) |
| (e) Pediu aprovação | Sim | Sim | Sim |
| (f) Economia unitária correta | Sim (TMF 37,46; CPA máx 27,28/30,39; ROAS BE 1,37/1,23) | Parcial: só fórmula + exemplo hipotético; **a base não tem processo para serviço/leads** | Parcial: decomposição correta (×2,70) e inconsistência detectada; BE impossível sem CM2 |

Observação honesta: o cumprimento de (a)–(e) depende da disciplina do executor; a skill não fornece checklists de saída nem exemplos que forcem isso.

## Falhas encontradas
### SKILL.md (`.claude/skills/especialista-trafego-pago/SKILL.md`)
1. **Tags incompletas:** regra 4 lista 5 tags, mas a base usa também `[HEURÍSTICA]` (README) e os processos usam `[heurística]` minúsculo e `[DOC OFICIAL via secundária]`. → Incluir `[HEURÍSTICA]` e padronizar grafia.
2. **Intake só cobre economia de low ticket e e-commerce:** não há processo de unit economics para **serviço/leads** (CPL máx = CAC aceitável × taxa lead→cliente). Cenário 2 precisou derivar à mão. → Criar `processos/leads-servicos-unit-economics.md` e referenciá-lo no passo 0.
3. **Raízes de caminho misturadas:** `references/...` (relativo à skill) e `processos/...` (relativo a `base-conhecimento/`) sem indicação. → Usar caminhos completos.
4. **Sem regra para orçamento pequeno vs aprendizado:** passo 2 fala em não fragmentar, mas não manda calcular eventos/semana = orçamento ÷ CPA vs ~50. → Adicionar cálculo obrigatório.
5. **Passo 7 manda gravar em `clientes/`** sem exceção para cenários simulados/testes. → Explicitar que simulações não geram arquivo de cliente.
6. **Compliance setorial ausente:** regra 5 cita saúde, mas a base não tem fonte de regras de conselhos profissionais (odontologia/medicina) nem CDC/ANVISA. → Adicionar fonte ou alerta "verificar regulamentação do conselho".

### Base de conhecimento
7. **`processos/low-ticket-funil-e-economia.md` §3.2:** "Σ(taxa% · preço + taxa fixa por transação)" não define quantas transações (bump costuma ir na mesma transação; upsell é separada) — altera a taxa fixa efetiva. O exemplo do §3.6 usa "≈30%" agregado, sem mostrar a taxa fixa. → Explicitar: taxa fixa × (1 + t_upsell + …).
8. **Mesmo arquivo, §6:** define manter (≥1,2×BE) e modificar (0,8–1,2×), mas **não define o que fazer abaixo de 0,8× BE**; e interrompe por "2–3× CPA **máximo**", enquanto os demais processos usam CPA **alvo**. → Unificar a base do critério de corte.
9. **Critérios de interrupção inconsistentes entre processos:** 2× CPA alvo (`briefing-e-roteiro-de-criativos.md`), 2–3× (`plano-de-testes-e-escala.md`, `meta-estrutura-e-escala.md`), 3× custo por venda (`whatsapp-geracao-de-leads.md`), "CPA > 2× meta após 2–3× CPA alvo sem conversão suficiente" (`diagnostico-de-campanha.md`, frase ambígua). → Uma tabela única de heurísticas de corte no tema de testes.
10. **Tag contraditória:** `plano-de-testes-e-escala.md` estratégia C marca "~50 eventos/7d [CONSENSO]"; `temas/meta-ads.md` e `meta-estrutura-e-escala.md` marcam [DOC OFICIAL]. → Padronizar.
11. **`meta-bid-cap-e-estrategias-de-lance.md` C1:** pede "orçamento acima do que gastaria normalmente" sem tratar cliente com teto mensal fixo pequeno (caso típico de low ticket, o próprio público-alvo do C1). Também não alerta que upsell como evento Purchase separado distorce o CPA usado no cap. → Adicionar seção "orçamento limitado" e nota de eventos.
12. **`diagnostico-de-campanha.md`:** a fórmula só decompõe CPA; falta ROAS = AOV × CTR × CVR × 1000 ÷ CPM, sem o qual o processo não detecta mudanças de AOV/atribuição (no cenário 3, ROAS 1,9 é incompatível com CPA ×2,7 sem variação de AOV). → Adicionar o termo AOV e passo de checagem de consistência.
13. **`diagnostico-de-campanha.md` §5:** "etapa com maior piora %" é ambíguo (CTR −44% vs CPM +52%: o efeito no CPA é o fator multiplicativo 1,78 vs 1,52). → Especificar comparação por fator (antes/depois) e não por variação %.
14. **`processos/negocio-local-leads.md`:** não traz divisão de orçamento entre Google e Meta nem como decidir realocação. → Incluir critério (custo por avaliação/venda por canal após N semanas).
15. **`processos/whatsapp-geracao-de-leads.md` §6** referencia o processo de economia de low ticket para "CPA máximo" mesmo em serviços de ticket alto. → Referenciar o novo processo de leads (falha 2).
16. **Lacunas declaradas, não falhas de redação:** toda a base vem de trechos de busca (README); taxas Kiwify divergentes; nenhum caso de clínica. Links internos verificados: **nenhum link quebrado** encontrado.

## Conclusão
A skill conduz bem o formato (premissas, citações, aprovação) e a matemática dos processos existentes está correta (exemplo do low ticket confere: 38,31 × 0,70 = 26,82; ROAS BE 1,43; fórmula de CPA do diagnóstico correta). Os principais riscos são lacunas de processo (leads/serviço, orçamento pequeno, consistência de ROAS/AOV) e heurísticas de corte inconsistentes.
