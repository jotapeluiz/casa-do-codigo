function Pessoa(nome) {
  this._nome = nome;
}

Pessoa.prototype.getNome = function() {
  return this._nome;
};

var joao = new Pessoa("João");
console.log(joao.getNome());
console.log(joao._nome);

var Pessoa = (function() {
  var dadosPrivados = new WeakMap();

  function Pessoa(nome) {
    dadosPrivados.set(this, { nome: nome });
  }

  Pessoa.prototype.getNome = function() {
    return dadosPrivados.get(this).nome;
  };

  return Pessoa;
})();

var paulo = new Pessoa("Paulo");
console.log(paulo.getNome());
console.log(paulo.nome);
