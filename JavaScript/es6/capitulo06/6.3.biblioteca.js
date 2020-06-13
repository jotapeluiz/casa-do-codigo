// simulacao de um sistema de biblioteca
var livros = [];
var estantes = new Map();
for (var livro of livros) {
  estantes.set(livro.getTitulo(), livro.getEstante());
}

function getLocalizacaoDoLivro(tituloDoLivro) {
  var estante = estantes.get(tituloDoLivro);
  if (estante === undefined) {
    return "Livro	não	encontrado	no	acervo!";
  }

  return estantes.get(tituloDoLivro);
}
