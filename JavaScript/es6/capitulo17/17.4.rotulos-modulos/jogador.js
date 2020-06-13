import Perfil from "./perfil";

adicionarPerfil();

import { adicionarPerfil as adicionarJogador } from "./perfil";

adicionarPerfil(); // Não OK!
adicionarJogador(); // OK!

// gera erro pois 'soma' ainda nao foi definido
// somar(1, 2);
// import { soma } from "./metematica";
