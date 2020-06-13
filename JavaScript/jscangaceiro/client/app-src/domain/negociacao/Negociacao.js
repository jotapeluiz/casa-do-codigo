import { obrigatorio } from '../../util';

export class Negociacao {
  constructor(
      _data = obrigatorio('data'), 
      _quantidade = obrigatorio('quantidade'), 
      _valor = obrigatorio('valor')) {
        
    Object.assign(this, { _quantidade, _valor });
    this._data = new Date(_data.getTime());
    Object.freeze(this);
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get quantidade() {
    return this._quantidade;
  }

  get valor() {
    return this._valor;
  }

  get volume() {
    return this._quantidade * this._valor;
  }

  equals(negociacao) {
    return JSON.stringify(this) == JSON.stringify(negociacao);
  }
}