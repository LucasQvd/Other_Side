var dashboardModel = require("../models/dashboardModel");

function dadosDashboardEspecifica(req, res) {
  console.log("REQ QUERY:", req.query);

  const idUsuario = req.query.idUsuario;
  console.log("ID RECEBIDO NO CONTROLLER:", idUsuario);

  dashboardModel
    .exibirEspecifica(idUsuario)
    .then((resultado) => {
      res.status(200).json(resultado);
      console.log("DADOS DO MODEL RECEBIDOS NO CONTROLLER:", resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ error: erro.message });
    });
}

function dadosDashboardGeral(req, res) {
  dashboardModel
    .exibirGeral()
    .then((resultado) => {
      res.status(200).json(resultado);
      console.log("DADOS DO MODEL RECEBIDOS NO CONTROLLER:", resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ error: erro.message });
    });
}

function rankingVida(req, res) {
  dashboardModel
    .rankingVida()
    .then((resultado) => {
      res.status(200).json(resultado);
      console.log("DADOS DO MODEL RECEBIDOS NO CONTROLLER:", resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ error: erro.message });
    });
}

function rankingSanidade(req, res) {
  dashboardModel
    .rankingSanidade()
    .then((resultado) => {
      res.status(200).json(resultado);
      console.log("DADOS DO MODEL RECEBIDOS NO CONTROLLER:", resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ error: erro.message });
    });
}

function rankingEsforco(req, res) {
  dashboardModel
    .rankingEsforco()
    .then((resultado) => {
      res.status(200).json(resultado);
      console.log("DADOS DO MODEL RECEBIDOS NO CONTROLLER:", resultado);
    })
    .catch((erro) => {
      console.error(erro);
      res.status(500).json({ error: erro.message });
    });
}

module.exports = {
  dadosDashboardEspecifica,
  dadosDashboardGeral,
  rankingVida,
  rankingSanidade,
  rankingEsforco,
};