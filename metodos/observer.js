class Loja{
    constructor(){
        this.assinantes = []
    }
    assinar(usuario){
        this.assinantes.push(usuario)
    }
    cancelarAssinatura(){
        // remove usuario
    }
    notificar(novaMSG){
        this.assinantes.forEach(assinantes => assinantes.update(novaMSG))
    }

}
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    update(novaMSG){
        console.log(`${this.nome} foi notificado com ${novaMSG}`)
    }

}
const loja = new Loja()
const pessoa = new Pessoa('ramon')
const pessoa2 = new Pessoa('mateus')
const pessoa3 = new Pessoa('giovanna')
loja.assinar(pessoa)
loja.assinar(pessoa3)
loja.notificar('primeira mensagem')
loja.assinar(pessoa2)
loja.notificar('segunda mensagem')