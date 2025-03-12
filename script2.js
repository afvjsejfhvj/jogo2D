class veiculo {
    #velocidade
    constructor(tipo, marca, cor, velocidade, passageiros){
        this.tipo = tipo
        this.marca = marca
        this.cor = cor
        this.#velocidade = velocidade
        this.passageiros = passageiros

    }

    acelerar = function(){ 
        this.velocidade += 10
        console.log(this.velocidade)
    }

    frear = function(){
        if(this.velocidade > 0 ){
            this.velocidade -= 5
            console.log(this.velocidade)
        } else { 
            console.log(this.velocidade)
        }
    }
    
    }

class aviao extends veiculo{
    #velocidade
    constructor(tipo, marca, cor, velocidade, passageiros, companhia){
        super(tipo, marca, cor, velocidade, passageiros);
        this.companhia = companhia;
        
    }
    acelerar = function(){ 
        this.#velocidade += 0.1
        console.log(this.#velocidade)
    }

    frear = function(){
        if(this.velocidade > 0 ){
            this.velocidade -= 0.05
            console.log(this.velocidade)
        } else { 
            console.log(this.velocidade)
        }}
    
}


class barco extends veiculo{
    #velocidade
    constructor(tipo, marca, cor, velocidade, passageiros, proa_tamanho){
        super(tipo, marca, cor, velocidade, passageiros);
        this.proa_tamanho = proa_tamanho;
       
    }
    acelerar = function(){ 
        this.velocidade += 10
        console.log(this.velocidade)
    }
    frear = function(){
        if(this.velocidade > 0 ){
            this.velocidade -= 5
            console.log(this.velocidade)
        } else { 
            console.log(this.velocidade)
        }}
    
    
}

const carro = new veiculo(
    'suv', 
    'bmw', 
    'azul',
    0,
    0 
)

const carro2 = new veiculo(
    'sedan', 
    'bmw', 
    'verde',
    0,
    0 
)

console.log (carro)
carro.acelerar()
carro.acelerar()
carro.frear()
carro.frear()
carro.frear()

console.log (carro2)
carro2.acelerar()
carro2.acelerar()
carro2.frear()
carro2.frear()
carro2.frear()

const Aviao = new aviao('comercial','boeing', 'branco', 0, 0 ,'GOL')
console.log(Aviao)
Aviao.acelerar()

const Barco = new barco('cargueiro','Hyundai Merchant Marine', 'vermelho', 0, 0,'30 metros')
console.log(Barco)
Barco.acelerar()
