const dataNascimento = "12/02/1985";
// a instrucao abaixo gera um erro pois nao se pode alterar uma variavel const
// dataNascimento = "09/08/1994";

const pessoa = { nome: "joão" };
pessoa.idade = 12;

console.log(pessoa);

const novaPessoa = { nome: "maria" };
// o mesmo erro ocorre na instrucao abaixo
// pessoa = novaPessoa;
