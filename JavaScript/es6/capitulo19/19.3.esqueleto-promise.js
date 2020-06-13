let promise = new Promise((resolve, reject) => {
	let resultado = false;

	if (resultado) {
		resolve("deu tudo certo!");
	} else {
		reject("deu tudo errado!");
	}
});

promise.then(data => console.log(`resultado positivo: ${data}`));
promise.catch(data => console.log(`resultado negativo: ${data}`));
