var database = require("../database/config")

function criarFicha(fkUsuario, forca, agilidade, vigor, intelecto, presenca, nex, vida, sanidade, esforco, nomePersonagem, nomeJogador, historia, aparencia, personalidade, fkClasse) {
    var instrucaoSql = `
        INSERT INTO ficha VALUES (default, ${fkUsuario}, ${forca}, ${agilidade}, ${vigor}, ${intelecto}, ${presenca}, ${nex}, ${vida}, ${sanidade}, ${esforco}, '${nomePersonagem}', '${nomeJogador}', '${historia}', '${aparencia}', '${personalidade}', ${fkClasse});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function exibirFichas(idUsuario) {
    var instrucaoSql = `
        SELECT idFicha, nomePersonagem, nome, vida, sanidade, esforco FROM ficha JOIN classe ON fkClasse = idClasse WHERE fkUsuario = ${idUsuario} ORDER BY idFicha;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    criarFicha,
    exibirFichas
};