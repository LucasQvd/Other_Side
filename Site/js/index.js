var cards = [
  {
    texto:
      "<h2>O que é RPG?</h2><p>A sigla RPG vem do inglês Role-Playing Game, trata-se de um jogo de interpretação de papéis onde um grupo de jogadores assume o papel de personagens em um mundo imaginário, enquanto um mestre ou narrador conduz a história, descreve o cenário e os desafios.<br><br>O jogo se desenvolve por meio de diálogos entre os jogadores e o Mestre, com os jogadores descrevendo as ações de seus personagens e o Mestre determinando o resultado dessas ações, geralmente com o auxílio de dados e regras específicas de um sistema de jogo.<br><br>Durante o jogo os personagens vivem aventuras que lembram os grandes épicos de nossa literatura e cinema: enfrentam monstros, salvam princesas, desafiam impérios galácticos... Ou não, pois também é possível interpretar vilões e anti-heróis. Existem RPGs de todos os tipos: de fantasia medieval ao terror, de viagens espaciais a cenários históricos. E isso sem precisar desgrudar da cadeira e largar o refrigerante, pois tudo se passa na imaginação.</p>",
    imagem: "<img src='../assets/rpg_card1.jpeg' class='img_rpg'>",
  },
  {
    texto:
      "<h2>Como funciona?</h2><p>O mestre prepara uma história e os jogadores criam os personagens que se envolverão nesta trama. Essas histórias são geralmente chamadas de “aventuras” e um conjunto de aventuras jogado com os mesmos personagens forma uma “campanha”.<br><br>Todo jogo tem regras e no RPG geralmente elas vêm escritas em livros que contém instruções e ideias para a criação das campanhas e personagens. Muitos desses livros também descrevem os cenários onde as aventuras podem acontecer e o tipo de personagem que os jogadores podem ou não criar. Esses livros de regras são comumente chamados de Sistemas.<br><br>Cada jogador tem um formulário – a “ficha de personagem” – onde tudo que seu personagem sabe fazer está anotado. Geralmente essas habilidades estão associadas a um número (“Natação: 10, “Briga: 8”, etc.) e se jogam dados contra esses valores para saber se o personagem foi ou não bem sucedido em sua ação. Vem daí o apelido de RPG “de mesa”, já que é comum jogar ao redor desse apoio para os livros, os dados, etc.<br><br>O jogo inteiro baseia-se nas escolhas feitas pelos personagens que, interpretados pelos jogadores, modificam a trama, afetando o mundo da narração. Então o mestre descreve as consequências das ações dos personagens, e isso gera novas situações para que eles escolham novas ações. Assim, a história vai se construindo coletivamente.</p>",
    imagem: "<img src='../assets/rpg_card2.jpeg' class='img_rpg'>",
  },
  {
    texto:
      "<h2>Sistemas Famosos</h2><p>Um sistema é um conjunto de regras em um RPG de mesa. Eles permitem que você jogue seguindo regras fixas e que isso deixe a experiência mais equilibrada. Conheça os principais sistemas da atualidade dos RPGs:</p><h3>Dungeons & Dragons</h3><p>O principal e um dos mais conhecidos sistemas de RPGs de todos os tempos. Muito do que existe hoje foi baseado nele. Popular, acessível e com regras bem abrangentes para mundos de fantasia. Normalmente limitado ao seu próprio mundo de fantasia.</p><h3>Vampiro: A Máscara</h3><p>Vampiro faz parte de um universo chamado World of Darkness que engloba RPGs de Lobisomem, Mago e outras criaturas fantásticas. O mais comum, porém, é com Vampiro. Neste sistema vivemos na pele de imortais que sugam sangue para sobreviver.</p><h3>Call of Cthullu</h3><p>Um sistema de RPG baseado nas obras de H.P. Lovecraft, ideal para jogos de terror e mistério. Você será um investigador de eventos sobrenaturais onde a sua sanidade estará constantemente sendo testada.</p>",
    imagem: "<img src='../assets/rpg_card3.jpeg' class='img_rpg'>",
  },
  {
    texto:
      "<h2>Referências na Mídia</h2><p>O hobby vem ganhando visibilidade nos últimos anos graças a menções em obras famosas, transmissões em plataformas de streaming e produções cinematográficas. Um dos exemplos mais famosos entre os jovens são as menções em “Stranger Things”, série da Netflix onde os protagonistas jogam e muito dos seus antagonistas são inspirados no universo de D&D.<br><br>O público mais velho deve se lembrar do famoso “Caverna do Dragão”, criado pela mesma empresa que criou o D&D. Lá você encontra todos os elementos de uma típica aventura de RPG: heróis, criaturas fantásticas, armas mágicas, feiticeiros malignos, dragões e até o mestre do jogo – o Mestre dos Magos, que a cada episódio trazia novos desafios aos heróis.<br><br>Mais recentemente tivemos o filme Dungeons & Dragons Honor Among Thieves, aventura cinematográfica baseada no universo de Dungeons & Dragons centrada num grupo de ladrões/antihérois que precisam recuperar uma relíquia perdida. O filme mistura ação, humor e tropos clássicos de fantasia, sendo uma boa porta de entrada para o universo.</p>",
    imagem: "<img src='../assets/rpg_card4.jpeg' class='img_rpg'>",
  },
];

var atual = 0;

function mostrarCard() {
  if (atual % 2 != 0) {
    card_rpg.innerHTML =
      '<div id="texto_rpg" class="texto_rpg"></div><div id="img_rpg"></div>';
  } else {
    card_rpg.innerHTML =
      '<div id="img_rpg"></div><div id="texto_rpg" class="texto_rpg"></div>';
  }

  var texto = cards[atual].texto;
  var imagem = cards[atual].imagem;

  texto_rpg.innerHTML = texto;
  img_rpg.innerHTML = imagem;
}

function avancar() {
    if (atual < cards.length - 1) {
        atual +=1;
        mostrarCard();
    }
}

function voltar() {
    if (atual > 0) {
        atual -=1;
        mostrarCard();
    }
}

mostrarCard();