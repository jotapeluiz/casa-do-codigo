function* percorrerLinha477() {
  console.log("Passei pela rua 1");
  yield "Parada 1";
  console.log("Passei pela rua 2");
  yield "Parada 2";
  console.log("Passei pela rua 3");
  yield "Parada 3";
  console.log("Passei pela rua 4");
  yield "Parada 4";
}

const linha = percorrerLinha477();

let next = linha.next();
console.log(next);
next = linha.next();
console.log(next);
next = linha.next();
console.log(next);
next = linha.next();
console.log(next);
