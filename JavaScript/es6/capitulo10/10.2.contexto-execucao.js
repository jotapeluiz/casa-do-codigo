console.log(this);

function imprimeMeuContextoDeExecucao() {
  console.log(this);
}

imprimeMeuContextoDeExecucao();

var objeto = {
  meuContexto: function() {
    console.log(this);
  }
};

objeto.meuContexto();

const equipe = {
  nome: "Guerreiros Z",
  membros: ["Goku", "Kuririn", "Vegeta"],
  membrosDaEquipe: function() {
    this.membros.forEach(
      function(membro) {
        console.log(`${membro} é da equipe ${this.nome}`);
      }.bind(this)
    );
  }
};

equipe.membrosDaEquipe();

const equipeZ = {
  nome: "Guerreiros Z",
  membros: ["Goku", "Kuririn", "Vegeta"],
  membrosDaEquipe: function() {
    this.membros.forEach(membro => {
      console.log(`${membro} é da equipe ${this.nome}`);
    });
  }
};

equipeZ.membrosDaEquipe();

function mostrarPropriedadeDoContexto(nomePropriedade) {
  console.log(this[nomePropriedade]);
}

var mockBuffer = {
  buffer: "Buffer"
};

var funcao = mostrarPropriedadeDoContexto.bind(mockBuffer);
