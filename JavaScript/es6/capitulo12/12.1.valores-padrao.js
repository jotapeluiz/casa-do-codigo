function imprimeNomeParametroDefinido(nome, sobreNome, nomeDoMeio = "") {
  console.log(`${nome} ${sobreNome} ${nomeDoMeio}`);
}

imprimeNomeParametroDefinido("João", "da Silva", "Aparecido");
imprimeNomeParametroDefinido("João", "da Silva");
