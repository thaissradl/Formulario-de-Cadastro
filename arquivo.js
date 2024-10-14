form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevenir o comportamento padrão do formulário

  // Salvar no localStorage
  salvarNoLocalStorage(cadastro);

  // Exibir no console
  console.log("Cadastro salvo no localStorage: ", cadastro);
});

// Função para criar o cadastro
function criarCadastro() {
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const email = document.getElementById("email").value;

  console.log("Dados recebidos do formulário: ", {
    nome,
    telefone,
    dataNascimento,
    email,
  });

  if (nome && telefone && dataNascimento && email) {
    const cadastro = { nome, telefone, dataNascimento, email };
    localStorage.setItem("cadastro", JSON.stringify(cadastro)); // Armazena no Local Storage
    alert("Cadastro salvo com sucesso!");
    limparFormulario();
  } else {
    alert("Preencha todos os campos.");
  }
}

// Função para consultar o cadastro salvo
function consultarCadastro() {
  const cadastro = localStorage.getItem("cadastro");
  console.log("Consultando cadastro salvo no localStorage: ", cadastro);

  if (cadastro) {
    const dados = JSON.parse(cadastro); // Converte de volta para objeto
    document.getElementById("dadosCadastrados").innerHTML = `
          <p><strong>Nome:</strong> ${dados.nome}</p>
          <p><strong>Telefone:</strong> ${dados.telefone}</p>
          <p><strong>Data de Nascimento:</strong> ${dados.dataNascimento}</p>
          <p><strong>Email:</strong> ${dados.email}</p>
      `;
  } else {
    document.getElementById("dadosCadastrados").innerHTML =
      "Nenhum dado cadastrado.";
  }
}

// Função para apagar o cadastro
function apagarCadastro() {
  console.log("Apagando cadastro...");
  localStorage.removeItem("cadastro");
  document.getElementById("dadosCadastrados").innerHTML = "Cadastro apagado.";
  alert("Cadastro apagado com sucesso!");
}

function limparFormulario() {
  const form = document.querySelector("form");
  if (form) {
    console.log("Limpando o formulário...");
    form.reset(); // Limpa o formulário
  } else {
    console.log("Formulário não encontrado.");
  }
}
