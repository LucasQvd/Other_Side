var listaCaracteresEspeciais = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "¨¨",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "}",
  "ª",
  "[",
  "]",
  "~",
  "^",
  ":",
  ";",
  ".",
  ",",
  "?",
  "°",
  "/",
];

function verSenha(num) {
  if (num == 1) {
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
  else if (num == 2) {
    if (ipt_confirmar_senha.type == "password") {
      ipt_confirmar_senha.type = "text";
      icone_olho2.classList.remove("fa-eye");
      icone_olho2.classList.add("fa-eye-slash");
    } else {
      ipt_confirmar_senha.type = "password";
      icone_olho2.classList.remove("fa-eye-slash");
      icone_olho2.classList.add("fa-eye");
    }
  }
}

function cadastrar() {
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = ipt_nome.value;
  var emailVar = ipt_email.value;
  var senhaVar = ipt_senha.value;
  var confirmacaoSenhaVar = ipt_confirmar_senha.value;

  var tamanhoSenha = senhaVar.length;
  var senhaMaiuscula = senhaVar.toUpperCase();
  var senhaMinuscula = senhaVar.toLowerCase();

  var temCaracteresEspeciais = 0;
  var temNumeros = 0;

  for (var i = 0; i < tamanhoSenha; i++) {
    if (listaCaracteresEspeciais.includes(senhaVar[i])) {
      temCaracteresEspeciais++;
    }
    if (!isNaN(senhaVar[i])) {
      temNumeros++;
    }
  }

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
  ) {
    alert("Todos os campos devem ser preenchidos");
    return;
  }

  if (
    !emailVar.includes("@") ||
    tamanhoSenha < 8 ||
    senhaVar == senhaMaiuscula ||
    senhaVar == senhaMinuscula ||
    temNumeros == 0 ||
    temCaracteresEspeciais == 0 ||
    senhaVar != confirmacaoSenhaVar
  ) {
    if (!emailVar.includes("@")) {
      alert("E-mail deve conter @!");
      return;
    } else if (tamanhoSenha < 8) {
      alert("Senha deve ter 8 caracteres ou mais");
      return;
    } else if (senhaVar == senhaMaiuscula) {
      alert("Senha deve conter letra maiúscula!");
      return;
    } else if (senhaVar == senhaMinuscula) {
      alert("Senha deve conter letra minúscula!");
      return;
    } else if (temNumeros == 0) {
      alert("Senha deve conter número!");
      return;
    } else if (temCaracteresEspeciais == 0) {
      alert("Senha deve conter caractere especial!");
      return;
    } else if (senhaVar != confirmacaoSenhaVar) {
      alert("As duas senhas devem ser a mesma!");
      return;
    }
  }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      nomeServer: nomeVar,
      emailServer: emailVar,
      senhaServer: senhaVar,
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        alert(
          "Cadastro realizado com sucesso! Redirecionando para tela de Login..."
        );

        window.location = "login.html";
      } else {
        throw "Houve um erro ao tentar realizar o cadastro!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}