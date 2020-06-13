const objeto = {
	valor: 10,
	[Symbol("simbolo")]: "Oi, sou um símbolo"
};

console.log(objeto.valor);
console.log(objeto.simbolo);

const primos = [2, 3, 5];
const iterator = primos[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const equipe = {
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

for (let integrante of equipe) {
	console.log(integrante);
}
