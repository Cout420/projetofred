# Playbook: economia unitária para serviços e geração de leads
> Criado após teste da Skill (cenário clínica). Fórmulas são aritmética padrão; limiares marcados [HEURÍSTICA]. Sem fonte externa lida integralmente.

## 1. Quando usar
Negócios que vendem por lead/conversa/agendamento (clínicas, serviços locais, B2B, high ticket via WhatsApp).

## 2. Dados necessários
Ticket médio do serviço (e LTV, se houver recorrência), margem de contribuição (%), taxas do funil: lead→atendido, atendido→agendado, agendado→compareceu, compareceu→fechou. Se o cliente não souber, registre como premissa e meça nas 2–4 primeiras semanas.

## 3. Como executar
1. **CAC máximo** = ticket (ou LTV conservador) × margem de contribuição × fração da margem que o cliente aceita investir em aquisição.
2. **Taxa lead→cliente** = produto das taxas do funil.
3. **CPL máximo** = CAC máximo × taxa lead→cliente. Também calcular custo máximo por agendamento e por comparecimento.
4. Exemplo hipotético: implante R$ 4.000, margem 50%, investir até 30% da margem → CAC máx R$ 600; lead→cliente 7,5% → CPL máx R$ 45.
5. Configure medição do funil no CRM/planilha por canal (UTM ou etiqueta de origem no WhatsApp) para importar conversões offline quando possível (ver `negocio-local-leads.md`).

## 4. Métricas
CPL, % leads qualificados, custo por agendamento, custo por comparecimento, CAC por canal, tempo de primeira resposta.

## 5. Como interpretar
CPL abaixo do máximo com taxa lead→cliente abaixo da premissa = problema de qualidade de lead ou atendimento, não de mídia. Compare canais por **custo por comparecimento/cliente**, não por CPL.

## 6. Manter / modificar / interromper
- Realocar orçamento entre canais após ≥ 2–4 semanas e volume mínimo de comparecimentos por canal, favorecendo menor custo por comparecimento [HEURÍSTICA].
- Cortes: usar `heuristicas-de-decisao.md`.

## 7. Riscos e limitações
Ciclos de venda longos atrasam a leitura; dados de atendimento manuais são incompletos; normas de publicidade de conselhos profissionais (CFO/CFM) e LGPD no CRM — verificar antes de publicar.
