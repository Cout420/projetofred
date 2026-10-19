/*
 * ARUFIT — dados do site e base de conhecimento do chatbot.
 * Tudo que é informação da academia fica AQUI. Edite este arquivo para
 * atualizar telefone, horários, preços e depoimentos sem mexer no layout.
 *
 * ⚠️  Campos marcados com "CONFIRMAR" não foram encontrados em fonte pública
 *     e precisam ser preenchidos pela academia antes de publicar.
 */
window.ARUFIT = {
  nome: "Academia ARUFIT",
  slogan: "Evolução que você sente",
  assinatura: "Swim & Health",
  desde: 2002, // CNPJ 05.392.836/0001-00, aberto em 07/11/2002
  seguidoresInstagram: "4.715",

  contato: {
    // CONFIRMAR: número do WhatsApp com DDI+DDD, só dígitos. Ex.: "5511912345678".
    // Enquanto estiver vazio, os botões abrem o Direct do Instagram.
    whatsapp: "",
    telefoneExibicao: "", // CONFIRMAR. Ex.: "(11) 91234-5678"
    email: "academiaarufit@gmail.com",
    instagram: "https://www.instagram.com/academiaarufit/",
    instagramDM: "https://ig.me/m/academiaarufit",
    facebook: "", // CONFIRMAR
    tiktok: "",   // CONFIRMAR
  },

  endereco: {
    linha1: "Rua Serpentina, 121",
    linha2: "Jardim Fazenda Rincão — Arujá/SP",
    cep: "07428-320",
    mapsQuery: "Rua Serpentina, 121 - Jardim Fazenda Rincão, Arujá - SP, 07428-320",
  },

  // CONFIRMAR: grade real. Deixe [] para o site mostrar "consulte a equipe".
  horarios: [],

  modalidades: [
    {
      id: "natacao",
      nome: "Natação",
      resumo: "Do primeiro mergulho ao pódio. Aprendizado, aperfeiçoamento e equipe de competição.",
      paraQuem: "Bebês, crianças, adultos e atletas",
      beneficios: ["Condicionamento cardiorrespiratório", "Baixo impacto nas articulações", "Segurança na água", "Equipe competitiva com resultados em liga regional"],
      palavras: ["natacao", "nadar", "piscina", "nado", "crianca", "infantil", "bebe", "competicao", "equipe", "aprender a nadar", "medo de agua"],
    },
    {
      id: "hidro",
      nome: "Hidroginástica",
      resumo: "Exercício completo dentro d'água, com leveza para as articulações e muita energia na aula.",
      paraQuem: "Quem busca saúde sem impacto, 50+, gestantes com liberação médica, reabilitação",
      beneficios: ["Fortalece sem sobrecarregar", "Melhora circulação e mobilidade", "Turmas animadas", "Ótima porta de entrada para quem está parado"],
      palavras: ["hidro", "hidroginastica", "idoso", "terceira idade", "joelho", "articulacao", "gestante", "dor"],
    },
    {
      id: "pilates",
      nome: "Pilates",
      resumo: "Estúdio com aparelhos (reformer, cadillac e chair) e acompanhamento próximo do instrutor.",
      paraQuem: "Postura, dores nas costas, core, mobilidade e complemento para outros esportes",
      beneficios: ["Postura e consciência corporal", "Alívio de dores lombares", "Força do core", "Turmas reduzidas"],
      palavras: ["pilates", "postura", "coluna", "costas", "lombar", "alongamento", "flexibilidade", "reformer"],
    },
    {
      id: "musculacao",
      nome: "Musculação",
      resumo: "Treino de força orientado para hipertrofia, emagrecimento e performance.",
      paraQuem: "Iniciantes e avançados que querem resultado com orientação",
      beneficios: ["Ganho de massa muscular", "Acelera o metabolismo", "Previne lesões", "Base para qualquer esporte"],
      palavras: ["musculacao", "academia", "peso", "hipertrofia", "massa", "forca", "emagrecer", "treino", "maromba"],
    },
    {
      id: "funcional",
      nome: "Funcional",
      resumo: "Aulas dinâmicas com movimentos do dia a dia: força, agilidade e condicionamento em grupo.",
      paraQuem: "Quem quer queimar calorias, ganhar fôlego e treinar com energia de turma",
      beneficios: ["Alto gasto calórico", "Melhora coordenação e equilíbrio", "Treino em grupo motivador", "Aulas que nunca se repetem"],
      palavras: ["funcional", "cross", "hiit", "condicionamento", "folego", "queimar", "caloria"],
    },
  ],

  // Conquistas reais publicadas no Instagram (@academiaarufit)
  conquistas: [
    { titulo: "#ArufitNoPódio", texto: "Joyce — 2º lugar nos 25m livre e 2º lugar nos 50m livre na Copa Primavera da Liga Aquática do Alto Tietê." },
    { titulo: "Super Treinão", texto: "Treinão da equipe de natação com a molecada dando tudo na piscina." },
    { titulo: "Equipe em competição", texto: "Atletas Arufit representando Arujá com a bandeira da academia." },
  ],

  // Depoimentos REAIS (Google / Instagram), com autorização. Deixe [] para ocultar a seção.
  // Formato: { nome: "Maria S.", texto: "...", origem: "Google", nota: 5 }
  depoimentos: [],

  faq: [
    { p: "Posso fazer uma aula experimental?", r: "Pode sim! É só chamar a equipe e agendar o melhor dia e horário pra você conhecer a modalidade e a estrutura." },
    { p: "Quais são os valores?", r: "Os valores variam por modalidade, frequência e combinação de aulas. A equipe envia a tabela atualizada na hora pelo WhatsApp." },
    { p: "Tem natação para crianças?", r: "Tem. A natação atende várias idades, do aprendizado até a equipe de competição. Fale com a equipe para ver a turma ideal para a idade do seu filho." },
    { p: "Nunca treinei. Consigo acompanhar?", r: "Consegue. As turmas são acompanhadas por professores e o treino é ajustado ao seu nível. Hidro e Pilates são ótimas portas de entrada." },
    { p: "Posso combinar modalidades?", r: "Sim, muita gente combina — por exemplo, musculação + natação ou pilates + hidro. Pergunte pelos planos combinados." },
    { p: "Onde fica a academia?", r: "Rua Serpentina, 121 — Jardim Fazenda Rincão, Arujá/SP (CEP 07428-320)." },
  ],
};
