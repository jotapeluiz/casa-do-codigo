const nomeMetodo = "invocar";
const objeto = {
  [nomeMetodo]() {
    console.log("executou método");
  }
};

objeto[nomeMetodo]();

const nomeFuncao = "mostrar";
const propriedade = "Nome";

const obj = {
  Nome: "Objeto",
  [`${nomeFuncao}${propriedade}`]() {
    console.log(this[propriedade]);
  }
};

obj.mostrarNome();

const apelido = "apelido";
const pessoa = {
  nome: "José",
  [apelido]: "Zé"
};

console.log(pessoa[apelido]);
