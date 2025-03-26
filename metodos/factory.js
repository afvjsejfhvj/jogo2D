class Notificacao {
    enviarNotif(mensagem){
        console.log(mensagem) // envia a notficacao
    }
}
class NotificacaoSMS extends Notificacao {
    enviarNotif(mensagem){
        console.log(`mensagem via SMS ${mensagem}`) // envia a notficacao por SMS
    }
}

class NotificacaoEMAIL extends Notificacao{
    enviarNotif(mensagem){
        console.log(`mensagem via EMAIL ${mensagem}`) // envia a notficacao por EMAIL
    }
}

class factoryNotificacao{
    static criarnotificacao(tipo){
        switch(tipo){
            case 'sms':
                return new NotificacaoSMS()
            case 'email':
                return new NotificacaoEMAIL()
            default:
                throw new Error('tipo desconhecido')
        }
    }
}
const notif = new NotificacaoEMAIL()
notif.enviarNotif('aqui vai mensage')

const notif2 = factoryNotificacao.criarnotificacao('email').enviarNotif('aqui vai a notficacao')