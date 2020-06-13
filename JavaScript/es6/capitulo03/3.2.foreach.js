var nomes = ['maria', 'jose', 'joao'];

function imprimeNome(nome) {
  console.log(nome);
}

// laco usando ES5
for (var i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// laco usando forEach atraves de uma funcao anonima
nomes.forEach(function (nome) {
  console.log(nome);
});

// laco usando forEach atraves sem o uso de uma funcao anonima
nomes.forEach(imprimeNome);

var canais = ['Globo', 'Sbt', 'Record'];

canais.forEach(function (canal) {
    // este item sera ignorado pois os item sao processados antes da
    // primeira iteracao do forEach
    canais.push('RedeTV');
    console.log(canal);
});

console.log(canais);
