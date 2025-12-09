function exibirFichas() {
  var mensagem = "";
  fetch(`/ficha/exibirFichas?idUsuario=${sessionStorage.ID_USUARIO}`)
    .then((response) => response.json())
    .then((resultado) => {

      resultado.forEach((resultado) => {
        var idFicha = resultado.idFicha;
        var nomePersonagem = resultado.nomePersonagem;
        var classe = resultado.nome;
        var vida = resultado.vida;
        var sanidade = resultado.sanidade;
        var esforco = resultado.esforco;

        mensagem = `
                <div class="card_ficha" onclick="abrirFicha(${idFicha})">

                    <h3>${nomePersonagem}</h3>
                    <ul class="status">
                        <li><b>Classe:</b> ${classe}</li>
                        <li><b style='color: var(--vida);'>Vida:</b> ${vida}</li>
                        <li><b style='color: var(--sanidade);'>Sanidade:</b> ${sanidade}</li>
                        <li><b style='color: var(--esforco);'>Pontos de Esforço:</b> ${esforco}</li>
                    </ul>

                </div>
                `;

        div_biblioteca.innerHTML += mensagem;

      });
    })
    .catch((error) => {
      console.error("Erro ao obter os dados das fichas: ", error);
    });
}

// function abrirFicha(id) {
//     sessionStorage.setItem
// }