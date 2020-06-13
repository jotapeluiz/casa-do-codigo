function montaQuerySelect() {
  const tabela = arguments[0];
  const qtdeArgs = arguments.length;
  let cols = "";

  if (qtdeArgs > 1) {
    for (let index = 0; index < qtdeArgs; index++) {
      cols += `${arguments[index]}, `;
    }

    cols = cols.substring(0, cols.length - 2);
  } else {
    cols = "*";
  }

  return `SELECT ${cols} FROM ${tabela}`;
}

const query1 = montaQuerySelect("tabela");
const query2 = montaQuerySelect("tabela", "coluna1");
const query3 = montaQuerySelect("tabela", "coluna1", "coluna2");

console.log(`${query1}\n${query2}\n${query3}`);
