function logarTodosArgumentos() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

logarTodosArgumentos(1, 2, "joao", "paulo", "luiz");

function somar() {
  let soma = 0;
  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i];
  }

  return soma;
}

console.log(somar(1, 2));
console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4));
