const Usuario = {
  nome: "Elliot",
  sobrenome: "Alderson",
  senha: "mrrobot",
  confirmacaoSenha: "mrrobot",
  email: "elliot.alderson@gmail.com",
  profissao: "Engenheiro	de	Cibersegurança",
  github: "https://github.com/ElliotAlderson"
};

console.log(Usuario.email);

const { email } = Usuario;
console.log({ email });

const { senha, confirmacaoSenha } = Usuario;
console.log(senha);
console.log(confirmacaoSenha);

const { numeroCartao } = Usuario;
console.log(numeroCartao);
