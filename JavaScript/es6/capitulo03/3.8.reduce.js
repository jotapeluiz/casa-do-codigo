var numeros = [1, 2, 3, 4, 5];
var soma = 0;

// usando ES5
for (var i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log(soma);

// usando reduce
soma = numeros.reduce(function (soma, numero) {
  return soma + numero;
}, 0);

console.log(soma);

var alunos = [
  {nome: 'João', idade: 10},
  {nome: 'José', idade: 20},
  {nome: 'Marcos', idade: 30},
];

var nomes = alunos.reduce(function (arrayNomes, aluno) {
  arrayNomes.push(aluno.nome);
  return arrayNomes;
}, []);

console.log(nomes);
