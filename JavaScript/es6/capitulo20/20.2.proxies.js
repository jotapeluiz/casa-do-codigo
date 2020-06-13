class Usuario {
	constructor(login, senha) {
		this.login = login;
		this.senha = senha;
	}
}

const usuario = new Usuario("SuperJS", "123");

console.log(usuario.login);
console.log(usuario.senha);

const proxy = new Proxy(usuario, {
	get(alvo, propriedade) {
		console.log(`${propriedade} foi solicitada`);
		return alvo[propriedade];
	}
});

console.log(proxy.login);
console.log(proxy.senha);
