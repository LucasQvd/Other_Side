function verSenha() {
  if (ipt_senha.type == "password") {
    ipt_senha.type = "text";
    icone_olho.classList.remove("fa-eye");
    icone_olho.classList.add("fa-eye-slash");
  } else {
    ipt_senha.type = "password";
    icone_olho.classList.remove("fa-eye-slash");
    icone_olho.classList.add("fa-eye");
  }
}

function entrar() {
  // Assim que o botão é acionado chama a função aguardar() criada no sessao.js, que simula um pequeno tempo de espera com um gif como se os campos estivessem sendo validados (usada para fins estéticos)
  aguardar();

  // Armazena o valor das inputs em variáveis
  var emailVar = email_input.value;
  var senhaVar = senha_input.value;

  // Valida se os campos estão preenchidos
  if (emailVar == "" || senhaVar == "") {
    // Se estiverem em branco: Ativa um card de erro e dentro dele passa uma mensagem
    cardErro.style.display = "block";
    mensagem_erro.innerHTML =
      "(Mensagem de erro para todos os campos em branco)";
    // Chama a função que apaga o gif de aguardar
    finalizarAguardar();
    return false;
  } else {
    // Se não estiverem em branco: Desaparece com o card de erro depois de 5 segundos
    setInterval(sumirMensagem, 5000);
  }

  console.log("FORM LOGIN: ", emailVar);
  console.log("FORM SENHA: ", senhaVar);

  fetch("/usuarios/autenticar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!");

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then((json) => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.id;
          sessionStorage.AQUARIOS = JSON.stringify(json.aquarios);

          setTimeout(function () {
            window.location = "./dashboard/cards.html";
          }, 1000); // apenas para exibir o loading
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");

        resposta.text().then((texto) => {
          console.error(texto);
          finalizarAguardar(texto);
        });
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}
