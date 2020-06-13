function somaTudoEMultiplicaPor(multiplicador, ...valores) {
  return valores.reduce((soma, valor) => {
    return soma + valor * multiplicador;
  }, 0);
}

console.log(somaTudoEMultiplicaPor(2, 1, 2));
console.log(somaTudoEMultiplicaPor(2, 6, 7));

function montaQuerySelect(tabela, ...colunas) {
  let colunasQuery = "";

  if (colunas.length > 0) {
    colunasQuery = colunas.reduce((colunasQuery, coluna) => {
      return (colunasQuery += `${coluna}, `);
    }, "");

    colunasQuery = colunasQuery.substring(0, colunasQuery.length - 2);
  } else {
    colunasQuery = "*";
  }

  return `SELECT ${colunasQuery} FROM ${tabela}`;
}

const query1 = montaQuerySelect("tabela");
const query2 = montaQuerySelect("tabela", "coluna1");
const query3 = montaQuerySelect("tabela", "coluna1", "coluna2");

console.log(`${query1}\n${query2}\n${query3}`);
