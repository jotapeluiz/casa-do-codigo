var alunos = [
  {nome: 'João', idade: 15},
  {nome: 'José', idade: 18},
  {nome: 'Maria', idade: 20}
];

var todosAlunosDeMaior = true;
// usando ES5
for (var i = 0; i < alunos.length; i++) {
  if (alunos[i].idade < 18) {
    todosAlunosDeMaior = false;
    break;
  }
}

console.log(todosAlunosDeMaior);

// usando every
todosAlunosDeMaior = alunos.every(function (aluno) {
  return aluno.idade >= 18;
});

console.log(todosAlunosDeMaior);
