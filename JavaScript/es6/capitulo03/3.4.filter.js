var alunos = [
  {nome: 'João', idade: 15},
  {nome: 'José', idade: 18},
  {nome: 'Maria', idade: 20}
];

var alunoDeMaior = [];
// filtro usando ES5
for (var i = 0; i < alunos.length; i++) {
  if (alunos[i].idade > 18) {
    alunoDeMaior.push(alunos[i]);
  }
}

console.log(alunoDeMaior);

// usando filter
alunoDeMaior = alunos.filter(function (aluno) {
  return aluno.idade > 18;
});

console.log(alunoDeMaior);
