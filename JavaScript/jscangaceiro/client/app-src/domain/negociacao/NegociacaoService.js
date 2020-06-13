import { HttpService } from '../../util/HttpService';
import { Negociacao } from './Negociacao';
import { ApplicationException } from '../../util/ApplicationException';

export class NegociacaoService {
  constructor() {
    this._http = new HttpService();
  }

  async obtemNegociacoesDoPeriodo() {
    try {
      const periodo = await Promise.all([
        this.obterNegociacoesDaSemana(),
        this.obterNegociacoesDaSemanaAnterior(),
        this.obtemNegociacoesDaSemanaRetrasada()
      ]);
      
      return periodo
        .reduce((novoArray, item) => novoArray.concat(item), [])
        .sort((a, b) => b.data.getTime() - a.data.getTime());

    } catch (error) {
      console.error(error);      
      new ApplicationException('Não	foi	possível	obter	as	negociações	do	período');      
    }    
  }

  obterNegociacoesDaSemana() {
    return this._http.get(`${SERVICE_URL}/negociacoes/semana`)
      .then(
        dados => dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)),
        err => { new ApplicationException('Não foi possível obter as negociações') }
      );    
  }

  obterNegociacoesDaSemanaAnterior() {
    return this._http.get(`${SERVICE_URL}/negociacoes/anterior`)
      .then(
        dados => dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)),
        err => { new ApplicationException('Não foi possível obter as negociações da semana anterior') }
      );    
  }

  obtemNegociacoesDaSemanaRetrasada() {
    return this._http.get(`${SERVICE_URL}/negociacoes/retrasada`)
      .then(
        dados => dados.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)),
        err => { new ApplicationException('Não foi possível obter as negociações da semana retrasada') }
      );
  }
}