var joao = "João";

console.log("Bem-vindo, " + joao);

const paulo = "Paulo";

console.log(`Bem-vindo, ${paulo}`);

const n1 = 1,
  n2 = 2;

console.log(`${n1} + ${n2} = ${n1 + n2}`);

console.log("exibindo\numa\npalavra\npor\nlinha");

console.log(
  `exibindo
  uma
  palavra
  por
  linha`
);

const nome = "João Paulo";
const idade = 33;
const endereco = "Rua qualquer, Bairro qualquer um número 156";

const div = `<div>
<p><strong>Nome:</strong> ${nome}</p>
<p><strong>Idade:</strong> ${idade}</p>
<p><strong>Endereço:</strong> ${endereco}</p>
</div>`;

// ES5
var tag = "<div>";
tag += "<p><b>Nome:</b>	" + nome + "</p>";
tag += "<p><b>Idade:</b>	" + idade + "</p>";
tag += "<p><b>Endereço:</b>	" + endereco + "</p>";
tag += "</div>";

console.log(tag);
