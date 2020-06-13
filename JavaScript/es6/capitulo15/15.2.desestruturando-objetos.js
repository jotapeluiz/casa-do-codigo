const suco = {
  sabor: "uva",
  quantidade: "500ml"
};

const doce = {
  tipo: "açucar"
};

function descreveSuco({ sabor, quantidade }, { tipo }) {
  console.log(
    `Este suco é de sabor ${sabor} e possui ${quantidade} adocicado com ${tipo}`
  );
}

descreveSuco(suco, doce);
