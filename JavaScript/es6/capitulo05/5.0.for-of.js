var numeros = [1, 2, 3, 4, 5];

for (var numero of numeros) {
  console.log(numero);
}

var perfilDoFacebook = {
  nome: 'Carlos',
  idade: 22
};

// ocorre um erro pois for of percorre apenas objetos iteraveis
for (var dado of perfilDoFacebook) {
  console.log(dado);
}
