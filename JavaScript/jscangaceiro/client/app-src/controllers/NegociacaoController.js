import { Negociacoes, Negociacao } from '../domain';
import { NegociacoesView, MensagemView, Mensagem, DateConverter } from '../ui';
import { getNegociacaoDao, Bind, getExceptionMessage, debounce, controller, bindEvent } from '../util';

@controller('#data', '#quantidade', '#valor')
export class NegociacaoController {
  constructor(_inputData, _inputQuantidade, _inputValor) {
    Object.assign(this, {_inputData, _inputQuantidade, _inputValor});
  
    this._negociacoes = new Bind(
      new Negociacoes(), 
      new NegociacoesView('#negociacoes'),
      'adiciona', 'esvazia'
    );

    this._mensagem = new Bind(
      new Mensagem(),
      new MensagemView('#mensagemView'),
      'texto'
    );

    this._init();
  }
  
  async _init() {
    try {
      const dao = await getNegociacaoDao();
      const negociacoes = await dao.listaTodos();
      negociacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));

    } catch (error) {
      this._mensagem.texto = getExceptionMessage(error);
    }    
  }

  _limpaFormulario() {
    this._inputValor.value = 0.0;
    this._inputQuantidade.value = 1;
    this._inputData.value = '';
    this._inputData.focus();
  }
  
  _criaNegociacao() {
    return new Negociacao(
      DateConverter.paraData(this._inputData.value),
      parseFloat(this._inputValor.value),
      parseInt(this._inputQuantidade.value)
    );  
  }

  @bindEvent('click', '#botao-importa')
  @debounce(1500)
  async importaNegociacoes() {
    try {
      const { NegociacaoService } = await import('../domain/negociacao/NegociacaoService');
      const service = new NegociacaoService();
      const negociacoes = await service.obtemNegociacoesDoPeriodo();
      negociacoes.filter(novaNegociacao => !this._negociacoes.paraArray()
        .some(negociacaoExistente => novaNegociacao.equals(negociacaoExistente))
      ).forEach(negociacao => this._negociacoes.adiciona(negociacao));
      this._mensagem.texto = 'Negociações do período importadas com sucesso';

    } catch (error) {
      this._mensagem.texto = error;
    }    
  }

  @bindEvent('submit', '.form')
  @debounce()
  async adiciona(event) {
    try {
      const negociacao = this._criaNegociacao();
      const dao = await getNegociacaoDao();

      await dao.adiciona(negociacao);
      this._negociacoes.adiciona(negociacao);
      this._mensagem.texto = 'Negociação adicionada com sucesso';
      this._limpaFormulario();
      
    } catch (error) {
      this._mensagem.texto = getExceptionMessage(error);
    }
  }
  
  @bindEvent('click', '#botao-apaga')
  async apaga() {
    try {
      const dao = await getNegociacaoDao();
      await dao.apagaTodos();
      
      this._negociacoes.esvazia();
      this._mensagem.texto = 'Negociações apagadas com sucesso';
      
    } catch (error) {
      this._mensagem.texto = getExceptionMessage(error);      
    }    
  }
}