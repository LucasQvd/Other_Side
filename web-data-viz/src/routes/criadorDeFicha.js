var express = require("express");
var router = express.Router();

var criadorDeFichaController = require("../controllers/criadorDeFichaController");

//Recebendo os dados do html e direcionando para a função criarFicha de criadorDeFichaController.js
router.post("/criarFicha", function (req, res) {
    criadorDeFichaController.criarFicha(req, res);
})

module.exports = router;