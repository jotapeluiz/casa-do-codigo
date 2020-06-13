class Carro {
  constructor(modelo, chassi, qtdePortas) {
    this.modelo = modelo;
    this.chassi = chassi;
    this.qtdePortas = qtdePortas;
  }

  info() {
    console.log(this.modelo);
    console.log(this.chassi);
    console.log(this.qtdePortas);
  }

  andar() {
    console.log("vrum vrum");
  }
}

const basico = new Carro("Básico", "123123", 2);

basico.info();
basico.andar();
