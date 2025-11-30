var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function criarFicha(fkUsuario, forca, agilidade, vigor, intelecto, presenca, nex, vida, sanidade, esforco, nomePersonagem, nomeJogador, historia, aparencia, personalidade, fkClasse) {    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO ficha VALUES (default, ${fkUsuario}, ${forca}, ${agilidade}, ${vigor}, ${intelecto}, ${presenca}, ${nex}, ${vida}, ${sanidade}, ${esforco}, '${nomePersonagem}', '${nomeJogador}', '${historia}', '${aparencia}', '${personalidade}', ${fkClasse});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    criarFicha
};