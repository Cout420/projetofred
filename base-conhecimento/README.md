# Base de conhecimento — Tráfego pago

Base persistente usada pela Skill `.claude/skills/especialista-trafego-pago`.
Última revisão geral: 2026-10-12.

## ⚠️ Estado das evidências (ler antes de usar)
Na construção inicial (2026-10-12) o ambiente **bloqueava a leitura de páginas** (YouTube, docs oficiais e blogs: proxy 403/ENOTFOUND). Só a busca web funcionava. Portanto:
- **Nenhuma fonte foi lida integralmente** e **nenhuma transcrição de vídeo foi acessada**. Todo conteúdo vem de trechos/resumos de resultados de busca; cada ficha declara isso em "Acesso ao conteúdo".
- `[DOC OFICIAL]` aqui significa "trecho de página oficial visto na busca", não leitura completa.
- Limiares marcados `[HEURÍSTICA]` são pontos de partida a calibrar com dados do cliente.
- **Prioridade nº 1 quando houver rede liberada:** reabrir as fontes oficiais e atualizar as fichas (ver "Lacunas" em cada tema).

## Etiquetas
`[DOC OFICIAL]` plataforma · `[CASO]` caso real com números · `[CONSENSO]` vários especialistas · `[OPINIÃO]` um especialista · `[HIPÓTESE]` não confirmado · `[HEURÍSTICA]` regra de bolso a calibrar

## Estrutura
- `fontes/` — uma ficha por fonte (modelo: `fontes/_MODELO.md`). Prefixos: meta-, google-, local-, tiktok-, ecom-, lowticket-, whatsapp-, copy-, oferta-, tracking-, testes-.
- `temas/` — consolidado por assunto, com divergências e lacunas.
- `processos/` — playbooks executáveis (quando usar · dados · passos · métricas · interpretação · manter/mudar/parar · riscos).
- `testes/` — cenários simulados usados para validar a Skill.
- `clientes/<cliente>/` — aprendizados por cliente (criar conforme uso; sem dados pessoais).

## Mapa tema → processo
| Tema | Consolidado | Processos |
|---|---|---|
| Meta Ads (bid cap, cost cap, Andromeda, escala) | temas/meta-ads.md | processos/meta-bid-cap-e-estrategias-de-lance.md, processos/meta-estrutura-e-escala.md |
| Google Ads | temas/google-ads.md | processos/google-search-e-pmax.md |
| Local e leads | temas/trafego-local-e-leads.md | processos/negocio-local-leads.md |
| TikTok Ads | temas/tiktok-ads.md | processos/tiktok-lancamento-de-conta.md |
| E-commerce | temas/ecommerce-aquisicao.md | processos/ecommerce-unit-economics-e-escala.md |
| Low ticket | temas/low-ticket.md | processos/low-ticket-funil-e-economia.md |
| WhatsApp | temas/funis-whatsapp.md | processos/whatsapp-geracao-de-leads.md |
| Copy e criativos | temas/copy-e-criativos.md | processos/briefing-e-roteiro-de-criativos.md |
| Ofertas e comportamento | temas/ofertas-e-comportamento.md | processos/construcao-de-oferta.md |
| Métricas e rastreamento | temas/metricas-rastreamento-atribuicao.md | processos/checklist-rastreamento.md, processos/diagnostico-de-campanha.md |
| Testes e escala | temas/testes-otimizacao-escala.md | processos/plano-de-testes-e-escala.md |
| Serviços/leads (economia) | — | processos/leads-servicos-unit-economics.md |
| Critérios de decisão | — | processos/heuristicas-de-decisao.md |

## Divergências abertas importantes
- Fase de aprendizado Meta: 50 eventos/7 dias (doc) vs relatos de 10 eventos em 2026 [HIPÓTESE].
- Orçamento mínimo TikTok: 5×, ~10× ou 30× o CPA conforme a fonte.
- Janela gratuita de anúncios para WhatsApp: 72h vs até 7 dias.
- Taxas Kiwify e data do fim do limite de 8 eventos do AEM: fontes conflitantes.

## Como atualizar
1. Copie `fontes/_MODELO.md`, preencha honestamente "Acesso ao conteúdo" e "Última verificação".
2. Atualize o tema e, se mudar o procedimento, o processo.
3. Não duplique: busque antes (`grep -ri "termo" base-conhecimento/`).
