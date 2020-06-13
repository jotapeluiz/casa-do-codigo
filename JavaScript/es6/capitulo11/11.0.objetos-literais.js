function Livro(titulo) {
  this.titulo = titulo;
}

var livro = new Livro("Entendendo ES6");

console.log(livro.titulo);

var livro = {
  titulo: "Anjos e Demônios"
};

console.log(livro.titulo);

var outroLivro = livro;
livro.titulo = "O Código da Vinci";

// as variaveis apontam para a mesma referencia
console.log(outroLivro.titulo);
console.log(livro.titulo);

livro.autor = "Dan Brown";
livro["mostrarLivro"] = function() {
  console.log(this.titulo + ", " + this.autor);
};

livro.mostrarLivro();
