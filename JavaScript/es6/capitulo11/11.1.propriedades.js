// ES5
// var nome = "Maria";
// var sobrenome = "Madalena";
//
// var pessoa = {
//   nome: nome,
//   sobrenome: sobrenome
// };

// ES6
const nome = "Maria";
const sobrenome = "Madalena";

const pessoa = {
  nome,
  sobrenome,
  seApresentar() {
    console.log(`Olá! Sou a ${this.nome} ${this.sobrenome}`);
  }
};

pessoa.seApresentar();
