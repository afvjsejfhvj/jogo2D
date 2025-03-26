class hamburguer{
    constructor(pao, carne, queijo, salada, molho){
        this.pao = pao;
        this.carne = carne;
        this.queijo = queijo;
        this.salada = salada;
        this.molho = molho
    }
    getDescricao(){
        return `Hanburguer com pao ${this.pao}, carne ${this.carne}, queijo ${this.queijo}, ${this.salada? 'com salada' :  'sem salada'}, molho ${this.molho}`
    }
}
const burguer = new hamburguer('trigo',  'frango',  'prato', false, 'maionese caseira')
console.log(burguer.getDescricao()) 

class hamburguerBuilder{
    constructor(){
        this.pao = 'tradicional';
        this.carne = 'bovina';
        this.queijo = 'mussarela';
        this.salada = true;
        this.molho = 'ketchup'
    }
    setPao(pao){
        this.pao = pao
        return this;
    }

    setCarne(carne){
        this.carne = carne
        return this;
    }
    
    setQueijo(queijo){
        this.queijo = queijo
        return this;
    }
    
    saddSalada(salada){
        this.salada = !this.salada
        return this;
    }

    setMolho(molho){
        this.molho = molho
        return this;
    }

}

const burguer2 = new hamburguerBuilder()
burguer2.setPao('integral')
burguer2.setMolho('maionese')
console.log(burguer2)

