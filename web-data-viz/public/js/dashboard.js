const barrasEspecifico = document.getElementById("cvs_grafico_especifico");
const barrasGeral = document.getElementById("cvs_grafico_geral");

var listaEspecifico = [];
var listaGeral = [];

function dadosDashboardEspecifica() {
  fetch(
    `/dashboard/dadosDashboardEspecifica?idUsuario=${sessionStorage.ID_USUARIO}`
  )
    .then((response) => response.json())
    .then((resultado) => {
      resultado.forEach((resultado) => {
        listaEspecifico.push(resultado.quantidade);
      });

      criarGraficoEspecifico();
    })
    .catch((error) => {
      console.error("Erro ao obter os dados das fichas: ", error);
    });
}

function dadosDashboardGeral() {
  fetch("/dashboard/dadosDashboardGeral")
    .then((response) => response.json())
    .then((resultado) => {
      resultado.forEach((resultado) => {
        listaGeral.push(resultado.quantidade);
      });

      criarGraficoGeral();
    })
    .catch((error) => {
      console.error("Erro ao obter os dados das fichas: ", error);
    });
}

function criarGraficoEspecifico() {
  new Chart(barrasEspecifico, {
    type: "bar",
    data: {
      labels: [""],
      datasets: [
        {
          label: "Combatente",
          data: [listaEspecifico[0]],
          borderColor: ["rgb(178, 34, 34)"],
          borderWidth: 0.5,
          backgroundColor: ["rgb(220, 80, 80)"],
        },
        {
          label: "Especialista",
          data: [listaEspecifico[1]],
          borderColor: ["rgb(14, 94, 233)"],
          borderWidth: 1,
          backgroundColor: ["rgb(80, 140, 255)"],
        },
        {
          label: "Ocultista",
          data: [listaEspecifico[2]],
          borderColor: ["rgb(123, 44, 191)"],
          borderWidth: 1,
          backgroundColor: ["rgb(160, 100, 220)"],
        },
      ],
    },
    options: {
      responsive: true, // Faz o gráfico redimensionar automaticamente com o container
      plugins: {
        // Configurações para plugins nativos (legend, title, tooltip, etc.)
        legend: {
          display: true, // Mostra a legenda (nome do dataset)
          labels: {
            font: {
              weight: "semi-bold",
              size: 11,
            },
            color: "white",
          },
        },
        title: {
          display: true,
          text: "Suas Classes Mais Escolhidas",
          color: "white",
          font: { size: 15, weight: "bold", family: "Arial" },
        }, // Título do gráfico
        tooltip: {
          // Personaliza o conteúdo do tooltip (o balão que aparece ao passar o mouse)
          callbacks: {
            label: function (context) {
              // "label" recebe o contexto do ponto e retorna a string que aparecerá no tooltip
              return context.dataset.label + ": " + context.parsed.y;
              // context.dataset.label = nome do dataset
              // context.parsed = valor do data do eixo y
            },
          },
        },
      },
      scales: {
        y: {
          title: {
            // Título do eixo Y
            display: true,
            text: "Quantidade de Fichas",
            color: "white",
            font: { size: 13, weight: "bold" },
          },
          beginAtZero: true,
        },
      },
    },
  });
}

function criarGraficoGeral() {
  new Chart(barrasGeral, {
    type: "bar",
    data: {
      labels: [""],
      datasets: [
        {
          label: "Combatente",
          data: [listaGeral[0]],
          borderColor: ["rgb(178, 34, 34)"],
          borderWidth: 0.5,
          backgroundColor: ["rgb(220, 80, 80)"],
        },
        {
          label: "Especialista",
          data: [listaGeral[1]],
          borderColor: ["rgb(14, 94, 233)"],
          borderWidth: 1,
          backgroundColor: ["rgb(80, 140, 255)"],
        },
        {
          label: "Ocultista",
          data: [listaGeral[2]],
          borderColor: ["rgb(123, 44, 191)"],
          borderWidth: 1,
          backgroundColor: ["rgb(160, 100, 220)"],
        },
      ],
    },
    options: {
      responsive: true, // Faz o gráfico redimensionar automaticamente com o container
      plugins: {
        // Configurações para plugins nativos (legend, title, tooltip, etc.)
        legend: {
          display: true, // Mostra a legenda (nome do dataset)
          labels: {
            font: {
              weight: "semi-bold",
              size: 11,
            },
            color: "white",
          },
        },
        title: {
          display: true,
          text: "Classes Mais Escolhidas Entre os Usuários",
          color: "white",
          font: { size: 15, weight: "bold", family: "Arial" },
        }, // Título do gráfico
        tooltip: {
          // Personaliza o conteúdo do tooltip (o balão que aparece ao passar o mouse)
          callbacks: {
            label: function (context) {
              // "label" recebe o contexto do ponto e retorna a string que aparecerá no tooltip
              return context.dataset.label + ": " + context.parsed.y;
              // context.dataset.label = nome do dataset
              // context.parsed = valor do data do eixo y
            },
          },
        },
      },
      scales: {
        y: {
          title: {
            // Título do eixo Y
            display: true,
            text: "Quantidade de Fichas",
            color: "white",
            font: { size: 13, weight: "bold" },
          },
          beginAtZero: true,
        },
      },
    },
  });
}

function rankingVida() {
  var mensagem = "";
  fetch("/dashboard/rankingVida")
    .then((response) => response.json())
    .then((resultado) => {
      var cont = 0;

      resultado.forEach((resultado) => {
        var nome = resultado.nomePersonagem;
        var vida = resultado.vida;
        cont++;

        mensagem += `
                <li>
                  <span>${cont}. ${nome}:</span>
                  <div class="barra" id="kpi_vida_pontos">${vida}/${vida}</div>
                </li>
        `;

        ol_ranking_vida.innerHTML = mensagem;
      });
    })
    .catch((error) => {
      console.error("Erro ao obter os dados das fichas: ", error);
    });
}

function rankingSanidade() {
  var mensagem = "";
  fetch("/dashboard/rankingSanidade")
    .then((response) => response.json())
    .then((resultado) => {
      var cont = 0;

      resultado.forEach((resultado) => {
        var nome = resultado.nomePersonagem;
        var sanidade = resultado.sanidade;
        cont++;

        mensagem += `
                <li>
                  <span>${cont}. ${nome}:</span>
                  <div class="barra" id="kpi_sanidade_pontos">${sanidade}/${sanidade}</div>
                </li>
        `;

        ol_ranking_sanidade.innerHTML = mensagem;
      });
    })
    .catch((error) => {
      console.error("Erro ao obter os dados das fichas: ", error);
    });
}

function rankingEsforco() {
  var mensagem = "";
  fetch("/dashboard/rankingEsforco")
    .then((response) => response.json())
    .then((resultado) => {
      var cont = 0;

      resultado.forEach((resultado) => {
        var nome = resultado.nomePersonagem;
        var esforco = resultado.esforco;
        cont++;

        mensagem += `
                <li>
                  <span>${cont}. ${nome}:</span>
                  <div class="barra" id="kpi_esforco_pontos">${esforco}/${esforco}</div>
                </li>
        `;

        ol_ranking_esforco.innerHTML = mensagem;
      });
    })
    .catch((error) => {
      console.error("Erro ao obter os dados das fichas: ", error);
    });
}