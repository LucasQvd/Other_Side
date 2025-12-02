var express = require("express");
var router = express.Router();

var fichaController = require("../controllers/fichaController");

//Recebendo os dados do html e direcionando para a função criarFicha de criadorDeFichaController.js
router.post("/criarFicha", function (req, res) {
    fichaController.criarFicha(req, res);
})

router.get("/exibirFichas", function (req, res) {
    fichaController.exibirFichas(req, res);
})

module.exports = router;