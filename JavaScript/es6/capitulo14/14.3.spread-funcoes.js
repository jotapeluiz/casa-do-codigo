function contaQuantidadeVogaisNaoAcentuadas(...palavras) {
  let qtdeVogais = 0;

  for (let palavra of palavras) {
    let palavraLowerCase = palavra.toLowerCase();
    const letras = [...palavraLowerCase];

    for (let letra of letras) {
      if ("aeiou".indexOf(letra) !== -1) {
        qtdeVogais++;
      }
    }
  }

  return qtdeVogais;
}

console.log(contaQuantidadeVogaisNaoAcentuadas("ecmascript"));
console.log(contaQuantidadeVogaisNaoAcentuadas("javascript"));
console.log(contaQuantidadeVogaisNaoAcentuadas("SWIFT"));
console.log(contaQuantidadeVogaisNaoAcentuadas("jAvA"));
console.log(contaQuantidadeVogaisNaoAcentuadas("es6"));
console.log(contaQuantidadeVogaisNaoAcentuadas("java", "javascript", "delphi"));
console.log(contaQuantidadeVogaisNaoAcentuadas("NãO	ConSideRa	AcentUADoS"));
