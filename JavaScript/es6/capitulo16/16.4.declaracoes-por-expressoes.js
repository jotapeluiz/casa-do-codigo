// Exemplo de classe anonima
// const Classe = class {
//   implementacao da classe
// };
//
// const instancia = new Classe();

// Declaracao da classe anonima localmente
const Classe = class Nome {
  getClassName() {
    return Nome.name;
  }
};

const instancia = new Classe();

console.log(instancia.getClassName()); // imprime 'Nome'
console.log(Nome.name); // ReferenceError: Nome is not defined
