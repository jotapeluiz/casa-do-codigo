var bruxos = ['Harry Potter', 'Hermione	Granger', 'Rony	Weasley'];
var iterador = bruxos[Symbol.iterator]();
var done = false;
var proximo = iterador.next();

do {
    var bruxo = proximo.value;
    console.log(bruxo);
    proximo = iterador.next();
}while (!proximo.done);
