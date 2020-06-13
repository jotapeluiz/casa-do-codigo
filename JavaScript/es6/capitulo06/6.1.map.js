var map = new Map();
function funcao() {}
var objeto = {};

map.set("string", "sou uma string");
map.set(objeto, "sou um objeto");
map.set(funcao, "sou uma funcao");

console.log(map.get("string"));
console.log(map.get(objeto));
console.log(map.get(funcao));

console.log("tamanho:", map.size);

console.log(map.has("string"));
console.log(map.has("abc"));

map.delete("string");

console.log(map.has("string"));

map.clear();

console.log("tamanho:", map.size);

var mapa = new Map();
mapa.set("um", 1);
mapa.set("dois", 2);
mapa.set("tres", 3);

for (var chave of mapa) {
  console.log(chave);
}

for (var valor of mapa.values()) {
  console.log(valor);
}

for (var entrada of mapa.entries()) {
  console.log(entrada);
}
