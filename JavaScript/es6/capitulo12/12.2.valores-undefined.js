function multiplicadoPor(valor, multiplicador = 2) {
  return valor * multiplicador;
}

console.log(multiplicadoPor(2, 2));
console.log(multiplicadoPor(2, undefined));

function print(valor = "") {
  console.log(valor);
}

print();
print(null);
