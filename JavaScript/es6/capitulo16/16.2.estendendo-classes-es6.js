class Carro {
  constructor(modelo, chassi, qtdePortas) {
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdePortas = qtdePortas;
  }

  andar() {
    console.log("vrum vrum");
  }
}

class Sonix extends Carro {
  constructor(modelo, chassi, qtdePortas) {
    super(modelo, chassi, qtdePortas);
  }

  abrirTetoSolar() {
    console.log("Abrindo o teto solar");
  }
}

const sonix = new Sonix("Sonix", "9120219", 4);
sonix.abrirTetoSolar();
sonix.andar();

console.log(sonix.modelo);
