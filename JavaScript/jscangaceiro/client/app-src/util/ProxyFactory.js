export class ProxyFactory {
  static create(objeto, props, armadilha) {
    return new Proxy(objeto, {
      get(target, prop, receiver) {
        if (ProxyFactory._ehFuncao(target[prop]) && props.includes(prop)) {
            return function () {                                
                target[prop].apply(target, arguments);
                armadilha(target);
            };
        }

        return target[prop];
      },

      set(target, prop, value, receiver) {
        const updated = Reflect.set(target, prop, value);

        if (prop.includes(prop)) armadilha(target);

        return updated;
      }
    });   
  }

  static _ehFuncao(fn) {
    return typeof(fn) == typeof(Function);
  }
}