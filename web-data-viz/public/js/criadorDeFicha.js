var nomePersonagem = "";
var nomeJogador = "";
var nex = 0;
var forca = 0;
var agilidade = 0;
var vigor = 0;
var presenca = 0;
var intelecto = 0;
var classe = "";

function trocarCard(num) {
  if (num == 1) {
    nomePersonagem = ipt_nome_personagem.value;
    nomeJogador = ipt_nome_jogador.value;
    nex = Number(ipt_nex.value);
    if (!nomePersonagem || !nomeJogador || isNaN(nex)) {
      if (!nomePersonagem) {
        alert("Insira o nome do personagem antes de prosseguir!");
      } else if (!nomeJogador) {
        alert("Insira o nome do jogador antes de prosseguir!");
      } else if (isNaN(nex)) {
        alert("Insira o nível do personagem antes de prosseguir!");
      }
    } else {
      informacoes.style.display = "none";
      atributos.style.display = "flex";
    }
  } else if (num == 2) {
    atributos.style.display = "none";
    informacoes.style.display = "flex";
  } else if (num == 3) {
    forca = Number(ipt_forca.value);
    agilidade = Number(ipt_agilidade.value);
    vigor = Number(ipt_vigor.value);
    presenca = Number(ipt_presenca.value);
    intelecto = Number(ipt_intelecto.value);
    var soma = forca + agilidade + vigor + presenca + intelecto;
    if (soma == 9) {
      atributos.style.display = "none";
      classes.style.display = "flex";
    } else if (soma < 9) {
      alert("Você possui 4 pontos de atributo para distribuir antes de prosseguir, a soma de todos deve ser igual a 9!");
    } else {
      alert("Você distribuiu mais de 4 pontos entre seus atributos, a soma de todos deve ser igual a 9!");
    }
  } else if (num == 4) {
    classes.style.display = "none";
    atributos.style.display = "flex";
  }
}

var descricoes = {
  forca: {
    nome: "Força",
    desc: "Determina sua potência muscular e habilidade atlética. Um personagem com Força alta tem grande capacidade física, seja por predisposição genética, treinamento constante ou modificação paranormal.<br><br>Força é o atributo-base de Atletismo e Luta, além de ser aplicada em suas rolagens de dano corpo a corpo e com armas de arremesso.",
  },
  agilidade: {
    nome: "Agilidade",
    desc: "Define sua coordenação motora, velocidade de reação e destreza manual. Uma pessoa com Agilidade elevada é rápida e tem movimentos precisos, como um ginasta ou dançarino.<br><br>Agilidade é o atributo-base das perícias Acrobacia, Furtividade, Iniciativa, Crime, Pilotagem, Pontaria e Reflexos.",
  },
  vigor: {
    nome: "Vigor",
    desc: "Determina sua saúde e resistência física. Uma pessoa com Vigor elevado pode ser grande e robusta, ou simplesmente ter bom fôlego e disposição.<br><br>Vigor é o atributo-base de Fortitude, além de conceder pontos de vida adicionais por nível de exposição. Se você aumentar seu Vigor, seus PV aumentam retroativamente.",
  },
  presenca: {
    nome: "Presença",
    desc: "Define sua capacidade de observação, força de vontade e habilidades sociais. Um personagem com Presença alta é atento, determinado e boa pinta.<br><br>Presença é o atributo-base de Diplomacia, Enganação, Intimidação, Percepção, Vontade, etc. Além de conceder pontos de esforço adicionais por nível de exposição.",
  },
  intelecto: {
    nome: "Intelecto",
    desc: "Mede seu raciocínio, memória e educação geral. Uma pessoa com Intelecto elevado tem um raciocínio rápido, conhecimento amplo e habilidades que envolvem estudo, como conhecimento científico.<br><br>Intelecto é o atributo-base de Investigação, Medicina, Ocultismo, Tecnologia, etc. Além disso, você recebe treinamento em perícias adicionais igual ao seu Intelecto.",
  },
};

function mudarDescricao(atributo) {
  if (atributo == 1) {
    tituloAtributo.style.color = "var(--forca)";
    tituloAtributo.innerHTML = descricoes.forca.nome;
    descricaoAtributo.innerHTML = descricoes.forca.desc;
  } else if (atributo == 2) {
    tituloAtributo.style.color = "var(--agilidade)";
    tituloAtributo.innerHTML = descricoes.agilidade.nome;
    descricaoAtributo.innerHTML = descricoes.agilidade.desc;
  } else if (atributo == 3) {
    tituloAtributo.style.color = "var(--vigor)";
    tituloAtributo.innerHTML = descricoes.vigor.nome;
    descricaoAtributo.innerHTML = descricoes.vigor.desc;
  } else if (atributo == 4) {
    tituloAtributo.style.color = "var(--presenca)";
    tituloAtributo.innerHTML = descricoes.presenca.nome;
    descricaoAtributo.innerHTML = descricoes.presenca.desc;
  } else if (atributo == 5) {
    tituloAtributo.style.color = "var(--intelecto)";
    tituloAtributo.innerHTML = descricoes.intelecto.nome;
    descricaoAtributo.innerHTML = descricoes.intelecto.desc;
  }
}

function validarCampo(atributo) {
  if (atributo == 1) {
    if (ipt_forca.value > 3) {
      ipt_forca.value = 3;
    } else if (ipt_forca.value < 0) {
      ipt_forca.value = 0;
    }
  }
  if (atributo == 2) {
    if (ipt_agilidade.value > 3) {
      ipt_agilidade.value = 3;
    } else if (ipt_agilidade.value < 0) {
      ipt_agilidade.value = 0;
    }
  }
  if (atributo == 3) {
    if (ipt_vigor.value > 3) {
      ipt_vigor.value = 3;
    } else if (ipt_vigor.value < 0) {
      ipt_vigor.value = 0;
    }
  }
  if (atributo == 4) {
    if (ipt_presenca.value > 3) {
      ipt_presenca.value = 3;
    } else if (ipt_presenca.value < 0) {
      ipt_presenca.value = 0;
    }
  }
  if (atributo == 5) {
    if (ipt_intelecto.value > 3) {
      ipt_intelecto.value = 3;
    } else if (ipt_intelecto.value < 0) {
      ipt_intelecto.value = 0;
    }
  }
}

function selecionarClasse(id) {
  combatente.classList.remove("selecionado");
  especialista.classList.remove("selecionado");
  ocultista.classList.remove("selecionado");

  if (id == 1) {
    classe = "Combatente";
    combatente.classList.add("selecionado");
  } else if (id == 2) {
    classe = "Especialista";
    especialista.classList.add("selecionado");
  } else if (id == 3) {
    classe = "Ocultista";
    ocultista.classList.add("selecionado");
  }
}

function criarFicha() {
  var nomePersonagemVar = nomePersonagem;
  var nomeJogadorVar = nomeJogador;
  var nexVar = nex;
  var forcaVar = forca;
  var agilidadeVar = agilidade;
  var vigorVar = vigor;
  var presencaVar = presenca;
  var intelectoVar = intelecto;
  var classeVar = classe;

  if (classeVar == "") {
    alert("Selecione uma das 3 classes antes de prosseguir!");
    return
  }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        alert(
          "Cadastro realizado com sucesso! Redirecionando para tela de Login..."
        );

        window.location = "login.html";
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}