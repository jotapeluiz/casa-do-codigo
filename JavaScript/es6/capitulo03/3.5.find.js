var alunos = [
  {nome: 'João'},
  {nome: 'José'},
  {nome: 'Maria'}
];

var aluno;
// pesquisa usando ES5
for (var i = 0; i < alunos.length; i++) {
  if (alunos[i].nome === 'José') {
    aluno = alunos[i];
    break; // evita percorrer o resto da lista
  }
}

console.log(aluno);

// usando find
aluno = alunos.find(function (aluno) {
  return aluno.nome === 'José';
});

console.log(aluno);
