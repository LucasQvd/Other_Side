var classe = "";

function trocarCard(num) {
  if (num == 1) {
    informacoes.style.display = "none";
    atributos.style.display = "flex";
  } else if (num == 2) {
    atributos.style.display = "none";
    informacoes.style.display = "flex";
  } else if (num == 3) {
    atributos.style.display = "none";
    classes.style.display = "flex";
    var forca = Number(ipt_forca.value);
    var agilidade = Number(ipt_agilidade.value);
    var vigor = Number(ipt_vigor.value);
    var presenca = Number(ipt_presenca.value);
    var intelecto = Number(ipt_intelecto.value);
    var soma = forca + agilidade + vigor + presenca + intelecto;
    // if (soma == 9) {
    //   atributos.style.display = "none";
    //   classes.style.display = "flex";
    // } else if (soma < 9) {
    //   alert(
    //     "Você possui 4 pontos de atributo para distribuir antes de prosseguir, a soma de todos deve ser igual a 9!"
    //   );
    // } else {
    //   alert(
    //     "Você distribuiu mais de 4 pontos entre seus atributos, a soma de todos deve ser igual a 9!"
    //   );
    // }
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

// function selecionarClasse(num) {
//     combatente.style.transform = "none";
//     especialista.style.transform = "none";
//     ocultista.style.transform = "none";
//     if (num == 1) {
//         classe = "Combatente";
//         combatente.style.transform = "scale(1.02)";
//     }
//     else if (num == 2) {
//         classe = "Especialista";
//         especialista.style.transform = "scale(1.02)";
//     }
//     else if (num == 3) {
//         classe = "Ocultista";
//         ocultista.style.transform = "scale(1.02)";
//     }
// }

var classeSelecionada = "";

function selecionarClasse(id) {
  combatente.classList.remove("selecionado");
  especialista.classList.remove("selecionado");
  ocultista.classList.remove("selecionado");

  if (id == 1) {
    classeSelecionada = "Combatente"
    combatente.classList.add("selecionado");
  }
  else if (id == 2) {
    classeSelecionada = "Especialista"
    especialista.classList.add("selecionado");
  }
  else if (id == 3) {
    classeSelecionada = "Ocultista"
    ocultista.classList.add("selecionado");
  }

  console.log("Classe escolhida:", classeSelecionada);
}
