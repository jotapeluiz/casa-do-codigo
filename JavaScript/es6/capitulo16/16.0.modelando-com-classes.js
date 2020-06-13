function Carro(modelo, chassi, qtdePortas) {
  this.modelo = modelo;
  this.chassi = chassi;
  this.qtdePortas = qtdePortas;
}

Carro.prototype.andar = function() {
  console.log("vrum vrum");
};

const prototipo = new Carro("prototipo", "1290381209", 2);

console.log(prototipo.modelo);
console.log(prototipo.chassi);
console.log(prototipo.qtdePortas);

prototipo.andar();

function Sonix(modelo, chassi, qtdePortas) {
  Carro.call(modelo, chassi, qtdePortas);
}

Sonix.prototype = Object.create(Carro.prototype);
Sonix.prototype.construct = Sonix;
Sonix.prototype.abrirTetoSolar = function() {
  console.log("abrindo teto solar");
};

const sonix = new Sonix("Sonix", "9120219", 4);

console.log(sonix.modelo);

sonix.andar();
sonix.abrirTetoSolar();
