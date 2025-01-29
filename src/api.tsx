export const conta = {
    email: "test@conta.com",
    password: '123456',
    nome: `Teste`,
    balance: 2000,
    id: '1'
}

export const api = new Promise((resolve) => {
setTimeout(() => {
  resolve(conta)
}, 100);


})