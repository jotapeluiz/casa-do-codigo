var boasVindas = function(nome) {
  return "Seja bem-vindo, " + nome;
};

console.log(boasVindas("João"));

var boasVindas1 = nome => {
  return "Seja bem-vindo, " + nome;
};

console.log(boasVindas1("Paulo"));

var boasVindas2 = nome => "Seja bem vindo, " + nome;

console.log(boasVindas2("Luiz"));

var boasVindas3 = nome => `Seja bem vindo, ${nome}`;

console.log(boasVindas3("Lopes"));
