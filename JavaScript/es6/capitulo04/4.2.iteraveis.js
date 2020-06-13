var bruxos = ['Harry Potter', 'Hermione	Granger', 'Rony	Weasley'];
// obtem o iterador
var iteradorBruxos = bruxos[Symbol.iterator]();

console.log(iteradorBruxos.next());
console.log(iteradorBruxos.next());
console.log(iteradorBruxos.next());
console.log(iteradorBruxos.next());