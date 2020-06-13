function minhaMaeMandouEuEscolherEsseDaqui(qualEuEscolhi) {
  console.log(qualEuEscolhi);
}

minhaMaeMandouEuEscolherEsseDaqui("terceiro");
minhaMaeMandouEuEscolherEsseDaqui();

function imprimeNomeCompleto(nome, sobreNome, nomeDoMeio) {
  console.log(`${nome} ${sobreNome} ${nomeDoMeio}`);
}

imprimeNomeCompleto("Jorge", "Reis");
imprimeNomeCompleto("Isabela", "Joana Luiza", "Jesus");

function imprimeNome(nome, sobreNome, nomeDoMeio) {
  if (nomeDoMeio === undefined) {
    console.log(`${nome} ${sobreNome}`);
  } else {
    console.log(`${nome} ${sobreNome} ${nomeDoMeio}`);
  }
}

imprimeNome("João Paulo", "Lopes");
imprimeNome("João Paulo", "Lopes", "Luiz");
