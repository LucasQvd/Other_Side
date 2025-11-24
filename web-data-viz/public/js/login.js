function verSenha() {
  if (ipt_senha.type == "password") {
    ipt_senha.type = "text";
    icone_olho1.classList.remove("fa-eye");
    icone_olho1.classList.add("fa-eye-slash");
  } else {
    ipt_senha.type = "password";
    icone_olho1.classList.remove("fa-eye-slash");
    icone_olho1.classList.add("fa-eye");
  }
}

function entrar() {
  // Armazena o valor das inputs em variáveis
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;

  // Valida se os campos estão preenchidos
  if (emailVar == "" || senhaVar == "") {
    alert("Todos os campos devem ser preenchidos");
    return;
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
          sessionStorage.ID_USUARIO = json.idUsuario;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.EMAIL_USUARIO = json.email;

          
          window.location = "./biblioteca.html";
        });
      } else {
        console.log("Houve um erro ao tentar realizar o login!");
        alert("Email ou senha incorretos!");
      }
    })
    .catch(function (erro) {
      console.log(erro);
    });

  return false;
}