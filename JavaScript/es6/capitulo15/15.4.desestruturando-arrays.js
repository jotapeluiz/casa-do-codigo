const cores = ["azul", "cinza", "branco", "preto"];

console.log(cores[0]);
console.log(cores[3]);

const [cor1, , , cor2] = cores;

console.log(cor1);
console.log(cor2);

const [, , branco, , , outraCor] = cores;

console.log(branco);
console.log(outraCor);

const contatos = [
  {
    nome: "Alex Júnior",
    numero: "1234-5678"
  },
  {
    nome: "Carolina Moya",
    numero: "1234-6789"
  },
  {
    nome: "Fernando Jorge",
    numero: "1234-5567"
  }
];

const [, Carol] = contatos;

function mostraNumero({ numero }) {
  console.log(numero);
}

mostraNumero(Carol);

function mostraNumeroDaCarol([, { numero }]) {
  console.log(numero);
}

mostraNumeroDaCarol(contatos);
