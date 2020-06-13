const { proxy, revoke } = Proxy.revocable({}, {});
proxy.teste = "teste";

console.log(proxy.teste);
// desativa o proxy
revoke();

console.log(proxy.teste);
