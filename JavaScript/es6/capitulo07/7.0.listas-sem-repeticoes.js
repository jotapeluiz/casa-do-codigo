function Set() {
  var array = [];
  this.add = function(valor) {
    if (array.indexOf(valor) === -1) {
      array.push(valor);
    }

    this.mostrarValores = function() {
      console.log(array);
    };
  };
}

var set = new Set();
set.add(2);
set.add(1);
set.add(2);
set.mostrarValores();
