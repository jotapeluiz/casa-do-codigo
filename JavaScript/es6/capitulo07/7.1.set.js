var set = new Set();
set.add(2);
set.add(1);
set.add(2);

for (const valor of set) {
  console.log(valor);
}

var set = new Set([3, 1, 3]);
for (const valor of set) {
  console.log(valor);
}

var musicas = new Set();
musicas.add("musica1");

for (var musica of musicas) {
  console.log(musica);
}

var musicas = new Set(["musica1", "musica2"]);
musicas.delete("musica1");

for (var musica of musicas) {
  console.log(musica);
}

var musicas = new Set(["musica1", "musica2", "musica3"]);

musicas.clear();

for (var musica of musicas) {
  console.log(musica);
}

var musicas = new Set(["musica1"]);
musicas.add("musica1");

for (var musica of musicas) {
  if (musicas.has("musica1")) {
    console.log("ja esta na lista");
  }
}

var musicas = new Set(["musica1", "musica2", "musica3"]);

console.log("Ha", musicas.size, "musicas na lista");
