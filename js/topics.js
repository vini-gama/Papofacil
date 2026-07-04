/**
 * topics.js
 * Base de dados do Papo Fácil: categorias (fichas do arquivo) e assuntos.
 * Cada assunto tem:
 *  - starters: perguntas para VOCÊ puxar o assunto
 *  - followups: perguntas/frases para continuar quando OUTRA pessoa trouxe o assunto
 */

const CATEGORIES = {
  cotidiano:    { label: "Cotidiano",         code: "COT",  color: "#4F6B52" },
  cultura:      { label: "Cultura pop",       code: "CULT", color: "#B5651D" },
  viagens:      { label: "Viagens",           code: "VIA",  color: "#3E7C7C" },
  comida:       { label: "Comida",            code: "COM",  color: "#B33F32" },
  trabalho:     { label: "Trabalho",          code: "TRA",  color: "#35507A" },
  hobbies:      { label: "Hobbies",           code: "HOB",  color: "#7A4F73" },
  tecnologia:   { label: "Tecnologia",        code: "TEC",  color: "#55606B" },
  curiosidades: { label: "Curiosidades",      code: "CUR",  color: "#9C7A16" },
  casa:         { label: "Casa & pets",       code: "CAS",  color: "#6F8F6A" },
  atualidades:  { label: "Atualidades leves", code: "ATU",  color: "#A85A2A" },
};

const TOPICS = [
  // ---------- COTIDIANO ----------
  {
    id: 1, category: "cotidiano", title: "O clima de hoje",
    starters: [
      "Esse [calor/frio/chuva] de hoje atrapalhou algum plano seu?",
      "Você prefere dias assim ou dias de sol forte?",
      "Esse clima combina com o que você tinha planejado pra hoje?",
    ],
    followups: [
      "Isso mudou algum plano seu hoje?",
      "Você é mais de aproveitar esse tipo de clima ou prefere ficar em casa?",
      "Já teve algum dia parecido com esse que valeu a pena contar?",
    ],
  },
  {
    id: 2, category: "cotidiano", title: "O trajeto até aqui",
    starters: [
      "Como foi vir pra cá hoje, pegou trânsito ou fila?",
      "Você mora perto ou veio de longe?",
      "Prefere vir de carro, a pé ou de transporte público?",
    ],
    followups: [
      "Isso costuma ser assim toda vez ou hoje foi diferente?",
      "Tem algum atalho ou truque que você usa pra facilitar o caminho?",
      "Já rolou alguma história engraçada nesse trajeto?",
    ],
  },
  {
    id: 3, category: "cotidiano", title: "O lugar onde vocês estão",
    starters: [
      "É sua primeira vez aqui ou já conhecia o lugar?",
      "O que te trouxe pra cá hoje?",
      "Alguma coisa daqui já te chamou atenção?",
    ],
    followups: [
      "O que você está achando até agora?",
      "Tem algo em especial que você queria ver ou fazer aqui?",
      "Como você ficou sabendo desse lugar?",
    ],
  },
  {
    id: 4, category: "cotidiano", title: "Planos para o fim de semana",
    starters: [
      "Tem algum plano pro fim de semana ou vai ser mais tranquilo?",
      "Você prefere fim de semana corrido ou de descanso?",
      "Rolou algum fim de semana marcante recentemente?",
    ],
    followups: [
      "E como foi, valeu a pena?",
      "Isso é algo que você costuma fazer sempre ou foi diferente dessa vez?",
      "Tem mais alguma coisa parecida planejada?",
    ],
  },

  // ---------- CULTURA POP ----------
  {
    id: 5, category: "cultura", title: "Séries que está maratonando",
    starters: [
      "Tem alguma série que você está viciado(a) agora?",
      "Prefere série curtinha ou daquelas com várias temporadas?",
      "Qual foi a última coisa boa que você assistiu?",
    ],
    followups: [
      "O que você está achando dela até agora?",
      "Recomendaria pra alguém que nunca viu?",
      "Tem algum personagem que você mais gosta?",
    ],
  },
  {
    id: 6, category: "cultura", title: "Filmes recentes",
    starters: [
      "Foi ao cinema recentemente? Valeu a pena?",
      "Tem algum filme que você quer muito assistir?",
      "Prefere filme no cinema ou em casa?",
    ],
    followups: [
      "O que mais te marcou nesse filme?",
      "É o tipo de filme que você assistiria de novo?",
      "Lembra algum outro filme parecido que você curtiu?",
    ],
  },
  {
    id: 7, category: "cultura", title: "Música do momento",
    starters: [
      "O que você anda ouvindo bastante ultimamente?",
      "Curte mais show ao vivo ou playlist no dia a dia?",
      "Tem algum artista que você segue de perto?",
    ],
    followups: [
      "Já viu esse artista ao vivo?",
      "O que te fisgou nessa música ou artista?",
      "Tem alguma música que te lembra algo específico?",
    ],
  },
  {
    id: 8, category: "cultura", title: "Jogos e games",
    starters: [
      "Você joga alguma coisa ultimamente?",
      "Prefere jogar sozinho(a) ou com amigos?",
      "Tem algum jogo clássico que marcou sua infância?",
    ],
    followups: [
      "Já zerou esse jogo ou ainda está pegando o jeito?",
      "É mais difícil ou tranquilo de jogar?",
      "Jogaria com mais alguém ou prefere sozinho(a) mesmo?",
    ],
  },

  // ---------- VIAGENS ----------
  {
    id: 9, category: "viagens", title: "Última viagem",
    starters: [
      "Fez alguma viagem recentemente?",
      "Prefere praia, montanha ou cidade grande?",
      "Tem algum lugar que você sonha em conhecer?",
    ],
    followups: [
      "O que mais te surpreendeu nesse lugar?",
      "Voltaria lá ou prefere conhecer lugares novos?",
      "Teve algum perrengue ou imprevisto na viagem?",
    ],
  },
  {
    id: 10, category: "viagens", title: "Cidade onde mora",
    starters: [
      "Você é daqui mesmo ou veio de outro lugar?",
      "O que mais gosta na cidade onde mora?",
      "Sente falta de algo de onde você cresceu?",
    ],
    followups: [
      "O que você recomendaria pra quem for visitar aí?",
      "Mudou muito a cidade desde que você era criança?",
      "Tem algum lugar que você sempre leva quem visita?",
    ],
  },
  {
    id: 11, category: "viagens", title: "Sonho de viagem",
    starters: [
      "Se pudesse viajar pra qualquer lugar agora, pra onde iria?",
      "Prefere viajar tudo planejado ou mais no improviso?",
      "Já teve viagem que não saiu como esperava, mas valeu a pena?",
    ],
    followups: [
      "O que te atrai tanto nesse lugar?",
      "Já pesquisou como seria organizar essa viagem?",
      "Iria sozinho(a) ou levaria alguém?",
    ],
  },
  {
    id: 12, category: "viagens", title: "Comidas de viagem",
    starters: [
      "Já experimentou alguma comida bem diferente numa viagem?",
      "Tem algum prato que você só encontra em um lugar específico?",
      "Prefere repetir os lugares que já conhece ou arriscar algo novo?",
    ],
    followups: [
      "Como foi a primeira vez que você provou isso?",
      "Daria pra fazer essa receita em casa?",
      "Recomendaria isso pra outras pessoas?",
    ],
  },

  // ---------- COMIDA ----------
  {
    id: 13, category: "comida", title: "Comida favorita",
    starters: [
      "Qual é aquela comida que nunca enjoa pra você?",
      "Prefere cozinhar ou comer fora?",
      "Tem algum prato que você faz muito bem?",
    ],
    followups: [
      "Como você costuma preparar isso?",
      "É receita de família ou você aprendeu sozinho(a)?",
      "Já tentou alguma versão diferente dessa receita?",
    ],
  },
  {
    id: 14, category: "comida", title: "Restaurante ou lugar novo",
    starters: [
      "Conhece algum lugar bom pra comer por aqui?",
      "Prefere experimentar lugar novo ou voltar nos que já confia?",
      "Qual foi a última coisa boa que você comeu fora?",
    ],
    followups: [
      "O que fez esse lugar valer a pena?",
      "É bom pra ir sozinho(a) ou mais pra ir acompanhado?",
      "Você voltaria lá com que frequência?",
    ],
  },
  {
    id: 15, category: "comida", title: "Café ou bebida do dia",
    starters: [
      "Você é mais de café, chá ou nenhum dos dois?",
      "Tem algum jeito específico que gosta de preparar sua bebida?",
      "Precisa de cafeína pra funcionar de manhã?",
    ],
    followups: [
      "Desde quando você tem esse hábito?",
      "Já tentou alguma variação diferente dessa bebida?",
      "Tem um lugar favorito pra tomar isso?",
    ],
  },
  {
    id: 16, category: "comida", title: "Doces e sobremesas",
    starters: [
      "Você é mais time doce ou salgado?",
      "Qual sobremesa você nunca recusa?",
      "Já tentou fazer alguma sobremesa em casa?",
    ],
    followups: [
      "Como foi o resultado quando você fez?",
      "Tem uma receita de família pra essa sobremesa?",
      "Prefere comprar pronto ou fazer na hora?",
    ],
  },

  // ---------- TRABALHO ----------
  {
    id: 17, category: "trabalho", title: "Rotina de trabalho ou estudo",
    starters: [
      "Como está a rotina de trabalho ou estudo ultimamente?",
      "Prefere trabalhar de manhã cedo ou é mais produtivo à noite?",
      "No que você trabalha ou estuda no momento?",
    ],
    followups: [
      "O que mais gosta nisso que você faz?",
      "Tem algum projeto específico rolando agora?",
      "Está bem corrido ou mais tranquilo nessa fase?",
    ],
  },
  {
    id: 18, category: "trabalho", title: "Projeto atual",
    starters: [
      "Está trabalhando em algo interessante ultimamente?",
      "Tem algum projeto pessoal que anda desenvolvendo?",
      "O que te motivou a começar isso?",
    ],
    followups: [
      "Como está indo até agora?",
      "Teve algum desafio grande nesse processo?",
      "O que pretende fazer quando terminar?",
    ],
  },
  {
    id: 19, category: "trabalho", title: "Área de atuação",
    starters: [
      "O que você faz no seu dia a dia de trabalho?",
      "Sempre quis trabalhar nessa área ou foi mudando com o tempo?",
      "O que mais gosta na sua área?",
    ],
    followups: [
      "Como foi que você entrou nesse ramo?",
      "Tem algo que mudaria se pudesse?",
      "Pretende seguir nessa área por bastante tempo?",
    ],
  },
  {
    id: 20, category: "trabalho", title: "Equilíbrio entre trabalho e vida pessoal",
    starters: [
      "Como você costuma desconectar do trabalho no fim do dia?",
      "Consegue separar bem trabalho de vida pessoal?",
      "O que você faz pra relaxar depois de um dia puxado?",
    ],
    followups: [
      "Isso funciona bem pra você ou ainda está ajustando?",
      "Desde quando você faz isso?",
      "Recomendaria isso pra outras pessoas também?",
    ],
  },

  // ---------- HOBBIES ----------
  {
    id: 21, category: "hobbies", title: "Hobby atual",
    starters: [
      "Tem algum hobby que você pratica com frequência?",
      "Como você começou a fazer isso?",
      "O que mais gosta nesse hobby?",
    ],
    followups: [
      "Faz tempo que você pratica isso?",
      "Já pensou em levar isso mais a sério?",
      "Costuma fazer isso sozinho(a) ou acompanhado?",
    ],
  },
  {
    id: 22, category: "hobbies", title: "Esportes praticados",
    starters: [
      "Você pratica algum esporte ou atividade física?",
      "Prefere esporte em equipe ou individual?",
      "Como foi que você começou nesse esporte?",
    ],
    followups: [
      "Com que frequência você pratica?",
      "Já participou de alguma competição ou é mais casual?",
      "O que mais gosta nesse esporte?",
    ],
  },
  {
    id: 23, category: "hobbies", title: "Leitura",
    starters: [
      "Você costuma ler bastante? O que está lendo agora?",
      "Prefere ficção ou não-ficção?",
      "Tem algum livro que mudou seu jeito de ver algo?",
    ],
    followups: [
      "O que mais te chamou atenção nesse livro?",
      "Recomendaria pra outras pessoas?",
      "Costuma ler físico, digital ou audiolivro?",
    ],
  },
  {
    id: 24, category: "hobbies", title: "Criatividade e mão na massa",
    starters: [
      "Você costuma fazer algo criativo no tempo livre, tipo desenhar ou criar coisas?",
      "Já fez algum projeto que deu muito certo (ou muito errado)?",
      "Tem algum talento escondido que pouca gente sabe?",
    ],
    followups: [
      "Como você aprendeu a fazer isso?",
      "Pretende fazer mais coisas assim?",
      "Já pensou em compartilhar isso com mais gente?",
    ],
  },

  // ---------- TECNOLOGIA ----------
  {
    id: 25, category: "tecnologia", title: "Aplicativo ou ferramenta útil",
    starters: [
      "Tem algum aplicativo que você usa todo santo dia?",
      "Descobriu alguma ferramenta nova que facilitou sua vida?",
      "É mais Android ou iPhone, e por quê?",
    ],
    followups: [
      "Como você descobriu isso?",
      "O que mudaria nessa ferramenta se pudesse?",
      "Recomendaria isso pra mais alguém?",
    ],
  },
  {
    id: 26, category: "tecnologia", title: "Inteligência artificial no dia a dia",
    starters: [
      "Você usa alguma ferramenta de inteligência artificial no dia a dia?",
      "O que acha desse assunto de IA ultimamente?",
      "Já usou IA pra alguma coisa inesperada?",
    ],
    followups: [
      "E funcionou bem pra o que você precisava?",
      "Isso te preocupa ou te empolga mais?",
      "Já testou outra ferramenta parecida pra comparar?",
    ],
  },
  {
    id: 27, category: "tecnologia", title: "Redes sociais",
    starters: [
      "Qual rede social você mais usa hoje em dia?",
      "Você segue algum criador de conteúdo que curte bastante?",
      "Prefere postar ou só acompanhar por lá?",
    ],
    followups: [
      "O que você mais curte no conteúdo dele(a)?",
      "Desde quando você acompanha?",
      "Descobriu algo interessante por lá recentemente?",
    ],
  },
  {
    id: 28, category: "tecnologia", title: "Gadgets e dispositivos",
    starters: [
      "Tem algum aparelho que você não vive sem?",
      "Costuma trocar de celular com frequência ou usa até quebrar?",
      "Já comprou algo tecnológico que se arrependeu?",
    ],
    followups: [
      "O que te fez decidir por esse aparelho?",
      "Trocaria por outro modelo se pudesse agora?",
      "Já teve algum problema com ele?",
    ],
  },

  // ---------- CURIOSIDADES ----------
  {
    id: 29, category: "curiosidades", title: "Um superpoder à escolha",
    starters: [
      "Se pudesse escolher um superpoder agora, qual seria?",
      "Prefere invisibilidade ou voar?",
      "Já pensou em como usaria um poder assim no dia a dia?",
    ],
    followups: [
      "Por que esse te chamou mais atenção?",
      "Usaria isso mais pra ajudar os outros ou pra você mesmo?",
      "Tem algum poder que acha que seria péssimo ter?",
    ],
  },
  {
    id: 30, category: "curiosidades", title: "Fato curioso recente",
    starters: [
      "Ficou sabendo de algum fato curioso recentemente que te surpreendeu?",
      "Tem alguma curiosidade que adora contar pras pessoas?",
      "Qual foi a última coisa que te deixou surpreso(a)?",
    ],
    followups: [
      "Onde você viu isso?",
      "Isso mudou algo no que você pensava sobre o assunto?",
      "Já contou isso pra mais alguém?",
    ],
  },
  {
    id: 31, category: "curiosidades", title: "Se ganhasse na loteria",
    starters: [
      "Se ganhasse na loteria amanhã, o que faria primeiro?",
      "Continuaria trabalhando ou pararia na hora?",
      "Tem algum sonho de consumo que compraria de cara?",
    ],
    followups: [
      "Isso mudaria muito sua rotina?",
      "Contaria pra alguém ou guardaria só pra você?",
      "Já tinha pensado nisso antes ou é a primeira vez que fala sobre?",
    ],
  },
  {
    id: 32, category: "curiosidades", title: "Máquina do tempo",
    starters: [
      "Se pudesse voltar no tempo, pra qual época iria?",
      "Prefere conhecer o passado ou ver como vai ser o futuro?",
      "Tem algum momento da sua vida que voltaria só pra reviver?",
    ],
    followups: [
      "O que você mudaria, se pudesse?",
      "O que te atrai tanto nessa época?",
      "Contaria pra alguém de lá o que sabe do futuro?",
    ],
  },

  // ---------- CASA & PETS ----------
  {
    id: 33, category: "casa", title: "Pets",
    starters: [
      "Você tem algum pet? Como é ele(a)?",
      "Prefere cachorro, gato ou outro bicho?",
      "Já pensou em ter um pet, se ainda não tem?",
    ],
    followups: [
      "Como foi que ele(a) chegou na sua vida?",
      "Tem alguma manha ou hábito engraçado?",
      "Tem alguma foto dele(a) por aí pra mostrar?",
    ],
  },
  {
    id: 34, category: "casa", title: "Onde mora",
    starters: [
      "Você mora sozinho(a) ou com mais gente?",
      "Prefere casa ou apartamento?",
      "Tem algum cômodo da sua casa que mais gosta?",
    ],
    followups: [
      "Há quanto tempo você mora aí?",
      "Já pensou em mudar de casa ou de cidade?",
      "O que mais te agrada nesse lugar?",
    ],
  },
  {
    id: 35, category: "casa", title: "Plantas e jardinagem",
    starters: [
      "Você cuida de alguma planta em casa?",
      "Tem a mão boa pra plantas ou já matou algumas sem querer?",
      "Prefere planta que dá flor ou mais verde mesmo?",
    ],
    followups: [
      "Como você cuida dela no dia a dia?",
      "Foi difícil aprender a cuidar?",
      "Pretende ter mais plantas em casa?",
    ],
  },
  {
    id: 36, category: "casa", title: "Organização e decoração",
    starters: [
      "Você é mais organizado(a) ou vive na bagunça organizada?",
      "Tem algum objeto de decoração que adora na sua casa?",
      "Fez alguma mudança na decoração recentemente?",
    ],
    followups: [
      "O que te inspirou pra essa mudança?",
      "Ficou como você esperava?",
      "Pretende mudar mais alguma coisa em breve?",
    ],
  },

  // ---------- ATUALIDADES LEVES ----------
  {
    id: 37, category: "atualidades", title: "Evento local",
    starters: [
      "Ficou sabendo de algum evento legal acontecendo na cidade?",
      "Costuma ir a eventos por aqui ou prefere ficar mais em casa?",
      "Tem algo acontecendo essa semana que quer ir?",
    ],
    followups: [
      "O que te chamou atenção nesse evento?",
      "Vai com mais alguém ou sozinho(a)?",
      "Já foi a algo parecido antes?",
    ],
  },
  {
    id: 38, category: "atualidades", title: "Esporte em alta",
    starters: [
      "Acompanha algum campeonato ou time ultimamente?",
      "Assistiu algum jogo importante recentemente?",
      "Tem um time do coração ou não curte tanto esporte?",
    ],
    followups: [
      "Como foi o jogo, valeu a pena assistir?",
      "Há quanto tempo você torce por esse time?",
      "Assiste sozinho(a) ou é mais legal com turma?",
    ],
  },
  {
    id: 39, category: "atualidades", title: "Feriado ou data especial próxima",
    starters: [
      "Tem algum feriado chegando que você está esperando?",
      "Costuma fazer algo especial nessa época do ano?",
      "Prefere qual estação do ano, e por quê?",
    ],
    followups: [
      "O que você costuma fazer nessa data?",
      "Tem alguma tradição de família pra essa época?",
      "Vai fazer algo diferente esse ano?",
    ],
  },
  {
    id: 40, category: "atualidades", title: "Aprendizado recente",
    starters: [
      "Aprendeu alguma coisa nova recentemente que te surpreendeu?",
      "Tem algo que sempre quis aprender mas ainda não teve tempo?",
      "Curte aprender coisas novas sozinho(a) ou prefere curso ou aula?",
    ],
    followups: [
      "Como está sendo esse aprendizado até agora?",
      "O que te fez começar a estudar isso?",
      "Pretende continuar ou já é suficiente por enquanto?",
    ],
  },
];

// Exposto globalmente para app.js (sem módulos, pra abrir direto no navegador)
window.CATEGORIES = CATEGORIES;
window.TOPICS = TOPICS;
