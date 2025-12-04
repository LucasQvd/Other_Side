var database = require("../database/config")

function exibirEspecifica(idUsuario) {
    var instrucaoSql = `
        SELECT
            c.idClasse,
            COUNT(f.idFicha) AS quantidade
        FROM classe c
        LEFT JOIN ficha f 
            ON f.fkClasse = c.idClasse
            AND f.fkUsuario = ${idUsuario}
        GROUP BY c.idClasse
        ORDER BY c.idClasse;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirGeral() {
    var instrucaoSql = `
        SELECT
            c.idClasse,
            COUNT(f.idFicha) AS quantidade
        FROM classe c
        LEFT JOIN ficha f 
            ON f.fkClasse = c.idClasse
        GROUP BY c.idClasse
        ORDER BY c.idClasse;
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