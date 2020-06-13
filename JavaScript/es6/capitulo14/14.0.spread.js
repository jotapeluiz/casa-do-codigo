console.log(1);
console.log({});
console.log(1, 2, 3);

var argumentos = [1, 2, 3];

console.log(argumentos[0], argumentos[1], argumentos[2]);

console.log.apply(console, argumentos);

console.log(...argumentos);
