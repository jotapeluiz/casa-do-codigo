// 12.3 - referenciando outros valores padrões
function calculaPotencia(x = 2, y = x) {
  console.log(Math.pow(x, y));
}

calculaPotencia();
calculaPotencia(2);
calculaPotencia(2, 2);

// 12.4 - referenciando variáveis internas
const v = "valor 1";
function funcao(x = v) {
  const v = "valor 2";
  console.log(x);
}

funcao();

// 12.5 - utilizando funções como valores padrões
function facaAlgoComMeuNome(
  nome,
  callback = z => {
    console.log(z);
  }
) {
  callback(nome);
}

facaAlgoComMeuNome("Muriel");

// 12.6 - tornando parâmetros obrigatórios
function parametroObrigatorio(parametro) {
  throw new Error(`O parâmetro "${parametro}" é obrigatório!`);
}

function inserirNaTela(objeto = parametroObrigatorio("objeto")) {
  // implementacao
}

inserirNaTela();
