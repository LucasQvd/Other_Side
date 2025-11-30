var criadorDeFichaModel = require("../models/criadorDeFichaModel");

function criarFicha(req, res) {

  // Crie uma variável que vá recuperar os valores do arquivo criadorDeFicha.html
  var fkUsuario = req.body.fkUsuarioServer;
  var forca = req.body.forcaServer;
  var agilidade = req.body.agilidadeServer;
  var vigor = req.body.vigorServer;
  var intelecto = req.body.intelectoServer;
  var presenca = req.body.presencaServer;
  var nex = req.body.nexServer;
  var vida = req.body.vidaServer;
  var sanidade = req.body.sanidadeServer;
  var esforco = req.body.esforcoServer;
  var nomePersonagem = req.body.nomePersonagemServer;
  var nomeJogador = req.body.nomeJogadorServer;
  var historia = req.body.historiaServer;
  var aparencia = req.body.aparenciaServer;
  var personalidade = req.body.personalidadeServer;
  var fkClasse = req.body.fkClasseServer;

  // Faça as validações dos valores
  if (fkUsuario == undefined) {
    res.status(400).send("A fk do seu usuário está undefined!");
  } else if (forca == undefined) {
    res.status(400).send("Sua forca está undefined!");
  } else if (agilidade == undefined) {
    res.status(400).send("Sua agilidade está undefined!");
  } else if (vigor == undefined) {
    res.status(400).send("Seu vigor está undefined!");
  } else if (intelecto == undefined) {
    res.status(400).send("Seu intelecto está undefined!");
  } else if (presenca == undefined) {
    res.status(400).send("Sua presença está undefined!");
  } else if (nex == undefined) {
    res.status(400).send("Seu nex está undefined!");
  } else if (vida == undefined) {
    res.status(400).send("Sua vida está undefined!");
  } else if (sanidade == undefined) {
    res.status(400).send("Sua sanidade está undefined!");
  } else if (esforco == undefined) {
    res.status(400).send("Seu esforco está undefined!");
  } else if (nomePersonagem == undefined) {
    res.status(400).send("O nome do seu personagem está undefined!");
  } else if (nomeJogador == undefined) {
    res.status(400).send("O nome do seu jogador está undefined!");
  } else if (historia === undefined) {
    res.status(400).send("Sua história está undefined!");
  } else if (aparencia === undefined) {
    res.status(400).send("Sua aparência está undefined!");
  } else if (personalidade === undefined) {
    res.status(400).send("Sua personalidade está undefined!");
  } else if (fkClasse == undefined) {
    res.status(400).send("A fk da sua classe está undefined!");
  }
  else {
    // Passe os valores como parâmetro e vá para o arquivo criadorDeFichaModel.js
    criadorDeFichaModel
      .criarFicha(fkUsuario, forca, agilidade, vigor, intelecto, presenca, nex, vida, sanidade, esforco, nomePersonagem, nomeJogador, historia, aparencia, personalidade, fkClasse)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          "\Houve um erro ao realizar a criação da ficha! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  criarFicha,
};