var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/dadosDashboardEspecifica", function (req, res) {
    dashboardController.dadosDashboardEspecifica(req, res);
})

router.get("/dadosDashboardGeral", function (req, res) {
    dashboardController.dadosDashboardGeral(req, res);
})

router.get("/rankingVida", function (req, res) {
    dashboardController.rankingVida(req, res);
})

router.get("/rankingSanidade", function (req, res) {
    dashboardController.rankingSanidade(req, res);
})

router.get("/rankingEsforco", function (req, res) {
    dashboardController.rankingEsforco(req, res);
})

module.exports = router;