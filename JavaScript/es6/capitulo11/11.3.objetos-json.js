// exemplo ficticio de envio de dados para uma API
function obterDadosDaTela() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const sexo = document.getElementById("sexo").value;
  const convenio = document.getElementById("convenio").value;

  return { nome, idade, sexo, convenio };
}

const url = "https://sistemasaude.com.br/api/cadastros/paciente";
const dados = obterDadosDaTela();
const dadosJson = JSON.stringify(dados);

$.ajax({
  url: url,
  dataType: "json",
  contentType: "application/json;	charset=UTF-8",
  data: dadosJson,
  type: "POST",
  complete: callback //	etc
});
