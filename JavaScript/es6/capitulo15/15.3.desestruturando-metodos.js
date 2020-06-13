// simula a chamada de uma API que retorna os dados de um servico de temperatura
function recuperaDadosDaAPI() {
  return {
    temperatura: "25°C",
    descricao: "Ensolarado",
    umidade: "baixa",
    maxima: "32°C",
    minima: "13°C"
  };
}

const { temperatura, maxima, minima } = recuperaDadosDaAPI();
console.log(temperatura);
console.log(maxima);
console.log(minima);
