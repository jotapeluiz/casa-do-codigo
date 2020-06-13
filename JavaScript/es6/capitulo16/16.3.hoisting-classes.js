// Exemplo de ReferenceError onde a classe Carro so vai existir quando
// a execucao do codigo chega ao ponto onde a classe e avaliada
const carro = new Carro("Sonix");

class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }
}
