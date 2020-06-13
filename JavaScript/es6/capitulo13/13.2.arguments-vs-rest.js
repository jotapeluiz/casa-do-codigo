function somar(...valores) {
  let soma = 0;
  for (let i = 0; i < valores.length; i++) {
    soma += valores[i];
  }

  return soma;
}

console.log(somar(1, 2));
console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4));

function somarReduce(...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor;
  }, 0);
}

console.log(somarReduce(4, 5));
console.log(somarReduce(4, 5, 6));
console.log(somarReduce(4, 5, 6, 7));
