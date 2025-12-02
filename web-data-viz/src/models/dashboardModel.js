var database = require("../database/config")

function exibirEspecifica(idUsuario) {
    var instrucaoSql = `
        SELECT fkClasse, COUNT(fkClasse) AS quantidade FROM ficha WHERE fkUsuario = ${idUsuario} GROUP BY fkClasse ORDER BY fkClasse;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirGeral() {
    var instrucaoSql = `
        SELECT fkClasse, COUNT(fkClasse) AS quantidade FROM ficha GROUP BY fkClasse ORDER BY fkClasse;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingVida() {
    var instrucaoSql = `
        SELECT nomePersonagem, vida FROM ficha ORDER BY vida DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingSanidade() {
    var instrucaoSql = `
        SELECT nomePersonagem, sanidade FROM ficha ORDER BY sanidade DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rankingEsforco() {
    var instrucaoSql = `
        SELECT nomePersonagem, esforco FROM ficha ORDER BY esforco DESC LIMIT 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    exibirEspecifica,
    exibirGeral,
    rankingVida,
    rankingSanidade,
    rankingEsforco,
};