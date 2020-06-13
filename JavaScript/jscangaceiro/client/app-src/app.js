import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap/js/modal';
import '../css/meucss.css';

import { NegociacaoController } from './controllers/NegociacaoController.js';
import { Negociacao } from './domain/index.js';

const controller = new NegociacaoController();
const body = JSON.stringify(new Negociacao(new Date(), 1, 200));
const method = 'POST';

const headers = new Headers();
headers.set('Content-Type', 'application/json');

const config = { method, headers, body };

fetch(`${SERVICE_URL}/negociacoes`, config).then(() => console.log('Dado enviado com sucesso'));