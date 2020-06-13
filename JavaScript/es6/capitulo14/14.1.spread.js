const listaMae = ["leite", "ovos", "papel"];
const listaNamorada = ["arroz", "feijão", "suco"];
const listaEscritorio = ["adesivos", "canetas", "fita adesiva"];

let listaCompras = listaMae.concat(listaNamorada);

console.log(listaCompras, listaCompras.length);

// sem o spread
listaCompras = [listaMae, listaNamorada, listaEscritorio];

console.log(listaCompras);

// com o spread
listaCompras = [...listaMae, ...listaNamorada, ...listaEscritorio];

console.log(listaCompras);
