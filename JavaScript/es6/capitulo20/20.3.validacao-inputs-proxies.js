class Usuario {}

const validador = {
	set(alvo, propriedade, valor) {
		if (propriedade === "idade") {
			if (!Number.isInteger(valor)) {
				throw new TypeError("A idade não é um número");
			}
		}

		alvo[propriedade] = valor;
	}
};

const usuario = new Proxy({}, validador);
usuario.idade = 33;

console.log(usuario.idade);
// simulando erros
usuario.idade = "trinta e três";
usuario.idade = {};
usuario.idade = true;
