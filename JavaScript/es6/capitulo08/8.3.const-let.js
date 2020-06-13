var mensagem = "olá";

{
  var mensagem = "mensagem";
}

console.log(mensagem);

var texto = "olá";

function mensagem() {
  var texto = "adeus";
}

console.log(texto);

const arrayVar = [];

for (var i = 1; i < 5; i++) {
  arrayVar.push(function() {
    console.log(i);
  });
}

i = 10;

let arrayLet = [];

for (let i = 1; i < 5; i++) {
  arrayLet.push(function() {
    console.log(i);
  });
}

arrayVar.forEach(function(funcao) {
  funcao();
});

arrayLet.forEach(function(funcao) {
  funcao();
});

imprimirNome("joao paulo");

function imprimirNome(nome) {
  console.log(nome);
}

let valor = 0;

if (true) {
  //	novo	escopo,	o	TDZ	do	'valor'	começa
  //	Ao	tentar	acessar	a	variável,	tomamos	ReferenceError,
  //	pois	neste	momento	ela	é	uma	variável
  //	que	não	foi	inicializada
  console.log(valor);

  let valor; //	TDZ	termina	e	'valor'	é	definida	com	'undefined'

  console.log(valor);

  valor = 1;

  console.log(valor);
}

console.log(valor);
