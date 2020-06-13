let promise = new Promise((resolve, reject) => {
	let resultado = true;
	let tempo = 2000; // milisegundos

	setTimeout(() => {
		if (resultado) {
			resolve("deu tudo certo!");
		} else {
			reject("deu tudo errado!");
		}
	}, tempo);
});

promise.then(data => console.log(`resultado positivo: ${data}`));
promise.catch(data => console.log(`resultado negativo: ${data}`));

console.log("fui executado antes!");
