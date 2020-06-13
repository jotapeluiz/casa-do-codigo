const timeDesenvolvimento = {
	quantidade: 3,
	maturidade: "alta",
	senior: "Luís",
	pleno: "Márcia",
	junior: "Christian",
	[Symbol.iterator]: function*() {
		yield this.senior;
		yield this.pleno;
		yield this.junior;
	}
};

const timeNegocios = {
	quantidade: 2,
	diretor: "Marcelo",
	vice: "Guilherme",
	[Symbol.iterator]: function*() {
		yield this.diretor;
		yield this.vice;
	}
};

const equipe = {
	timeDesenvolvimento,
	timeNegocios,
	[Symbol.iterator]: function*() {
		yield* timeDesenvolvimento;
		yield* timeNegocios;
	}
};

for (let integrante of equipe) {
	console.log(integrante);
}
