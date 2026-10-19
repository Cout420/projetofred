# Site Arufit — Swim & Health

Landing page de conversão da Academia Arufit (Arujá/SP), com assistente virtual.

## Rodar local

```bash
cd arufit
python3 -m http.server 5173   # ou: npx serve -l 5173 .
# abra http://localhost:5173
```

## Publicar (Netlify)

1. Suba a pasta `arufit/` como site no Netlify (base directory: `arufit`).
2. Para o chatbot com IA (Claude), defina a variável de ambiente `ANTHROPIC_API_KEY`.
   Sem a chave, o assistente funciona igual com o motor local (respostas prontas + captura de lead).

## Antes de publicar: preencher em `assets/js/data.js`

| Campo | Por quê |
|---|---|
| `contato.whatsapp` | Todos os botões de conversão usam esse número. Vazio = abre o Direct do Instagram. |
| `contato.telefoneExibicao` | Aparece no rodapé/contato. |
| `horarios` | Grade de horários (vazio = "consulte a equipe"). |
| `depoimentos` | Avaliações reais do Google/Instagram (vazio = seção oculta). |

## Fotos e vídeos reais

O site já está pronto para receber as mídias. Basta salvar os arquivos com estes nomes em `assets/media/`
— enquanto não existirem, aparece a arte gráfica da marca no lugar.

| Arquivo | Onde aparece | Sugestão |
|---|---|---|
| `hero.mp4` | Fundo do topo (sobre a água animada) | Vídeo da piscina/aula, 10–15s, sem áudio, ≤ 6 MB, 1920×1080 |
| `sobre-1.jpg`, `sobre-2.jpg` | "Quem somos" | Aluna com a touca Arufit; estúdio de pilates |
| `natacao.jpg`, `hidro.jpg`, `pilates.jpg`, `musculacao.jpg`, `funcional.jpg` | Cards de modalidade | 1600×1000 |
| `podio-joyce.jpg` | Destaque #ArufitNoPódio | Foto da Joyce com as medalhas (vertical) |
| `equipe.jpg` | Equipe de natação | Foto com a bandeira |
| `super-treinao.mp4` | Card Super Treinão | Corte curto do reels |
| `piscina.jpg`, `pilates.jpg`, `musculacao.jpg`, `funcional.jpg` | Galeria "Estrutura" | Fotos horizontais/verticais em alta |
| `ig-1.jpg` … `ig-6.jpg` | Grade do Instagram | Quadradas 1080×1080 |

Use fotos originais em alta (exporte do celular/Drive, não print do Instagram) e comprima em
[squoosh.app](https://squoosh.app) (JPG/WebP ~80%).

Logo: `assets/img/logo-mark.svg` é uma recriação vetorial do símbolo. Troque pelo arquivo oficial se tiver.

## Stack

HTML/CSS/JS estático · GSAP + ScrollTrigger + SplitText · Lenis (rolagem suave) · WebGL próprio (água) ·
Archivo (Google Fonts) · Netlify Function + Claude API para o chatbot.

Efeitos: preloader, água em WebGL que reage ao mouse, títulos revelados linha a linha, marquee que acelera
com a rolagem, manifesto que acende palavra por palavra, rolagem horizontal fixada nas modalidades, quiz de
modalidade com mensagem pronta no WhatsApp, cards empilhados, parallax na galeria, tilt 3D, cursor
customizado, botões magnéticos, barra de progresso, header que se esconde. Tudo respeita
`prefers-reduced-motion`.
