# Playbook: geração de leads e vendas pelo WhatsApp (Click-to-WhatsApp)
> Base de evidência: trechos de buscador (leitura integral bloqueada em 2026-10-12). Limiares marcados como **[HEURÍSTICA]** são pontos de partida a calibrar com dados próprios, não regras comprovadas.
Fontes: [janela gratuita](../fontes/whatsapp-ctwa-janela-gratuita-72h.md), [qualificação](../fontes/whatsapp-qualificacao-leads-ctwa-bsp.md), [objetivos](../fontes/whatsapp-objetivos-campanha-meta-br.md), [políticas](../fontes/oferta-politicas-meta-promessas.md).

## 1. Quando usar
- Ofertas que se beneficiam de conversa: ticket médio/alto, serviços locais, agendamento, produtos com objeções; ou low ticket com venda assistida.
- Exige equipe ou automação capaz de responder rápido em horário de veiculação.

## 2. Dados necessários
- Conversas iniciadas, custo por conversa, conversas qualificadas (etiqueta no CRM), vendas e receita por campanha/anúncio, tempo de primeira resposta, horário das conversas.

## 3. Como executar
1. Criar campanha com destino WhatsApp (objetivo de mensagens/engajamento ou vendas conforme disponível; validar nomes na interface atual).
2. Mensagem pré-preenchida com identificador do anúncio/campanha para atribuição.
3. Fluxo de qualificação de 3–5 perguntas [OPINIÃO de fornecedores], com saída para humano.
4. Roteamento: quente → humano rápido; morno → material + follow-up em 24h; desqualificado → encerramento educado.
5. Responder em até 24h (abre janela gratuita de 72h — verificar regra vigente; há relato não confirmado de 7 dias). Fora da janela, apenas templates aprovados.
6. Registrar etiquetas no CRM e retroalimentar (offline conversions/eventos) quando possível.

### Template de script (preencher)
- Saudação: "Oi, [nome]! Aqui é [atendente] da [empresa]. Vi que você veio pelo anúncio de [oferta]."
- Pergunta 1 (necessidade): "[o que busca]?"  · Pergunta 2 (prazo): "[para quando]?" · Pergunta 3 (capacidade/orçamento): "[faixa]?"
- Proposta: "[oferta + preço + próximo passo]" · Fechamento: "[link de pagamento/agendamento]".

## 4. Métricas
Custo por conversa, % conversas qualificadas, custo por lead qualificado, taxa de conversão conversa→venda, tempo de primeira resposta, receita por conversa, ROAS.

## 5. Como interpretar
- Custo por conversa baixo + qualificação baixa → criativo atrai curiosos; ajustar copy (pré-qualificar no anúncio).
- Qualificação alta + venda baixa → gargalo no atendimento/oferta.
- Tempo de resposta alto coincidindo com queda de conversão → problema operacional (relação causal não comprovada por estudo lido).

## 6. Manter / modificar / interromper
- **Manter** se custo por venda ≤ CPA máximo (ver [economia](low-ticket-funil-e-economia.md)).
- **Modificar** se % qualificadas < 30% por 2 semanas [HEURÍSTICA] → reescrever criativo/pergunta inicial.
- **Interromper** anúncio com gasto ≥ 3× custo por venda alvo sem venda [HEURÍSTICA]; pausar veiculação fora do horário de atendimento se não houver automação.

## 7. Riscos e limitações
- Política Comercial e de Mensagens do WhatsApp; spam/bloqueios derrubam a qualidade do número.
- Mensagens fora da janela exigem templates (aprovação 24–72h segundo fornecedor) e são cobradas.
- LGPD: consentimento para remarketing/listas; não pedir dados sensíveis.
- Políticas Meta de anúncios (renda, atributos pessoais) valem também para o criativo do CTWA.
- Fontes são majoritariamente fornecedores de software (viés).
