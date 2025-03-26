const canvas = document.getElementById('jogo2d')
// inicializar o canvas
const ctx = canvas.getContext('2d')
let gameover = false


document.addEventListener('keypress', (e) => {
    if (e.code == 'Space' && personagem.pulando == false) {
        console.log('clicou')
        personagem.saltar()
    }
})

document.addEventListener('click', (e) => {
    if (gameover == true) {
        location.reload()
    }
})

class Entidade{
    #gravidade
    constructor (x,y,largura,altura){
        this.x = x
        this.y = y 
        this.largura = largura 
        this.altura = altura 
        this.#gravidade = 0.4
    }
    get gravidade (){
        return this.#gravidade
    }
    


    desenhar = function (ctx, cor){
        ctx.fillStyle = cor
        ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}

class Personagem extends Entidade{
    #pulando
    #velocidadey

    constructor(x,y,largura,altura){
        super(x,y,altura,largura)
        this.#pulando = false
        this.#velocidadey = 0
    }
     
    saltar = function (){
        
        personagem.#velocidadey = 15
        personagem.#pulando = true
        console.log('pulou')
    }

    get pulando () {
        return this.#pulando
    }

    atualizarPersonagem() {
        if (this.#pulando == true) {
            this.#velocidadey -= this.gravidade
            this.y -= this.#velocidadey
            if (this.y >= canvas.height - 50) {
                this.#velocidadey = 0
                this.#pulando = false
                this.y = canvas.height - 50
            }
        }
    }
        
}

class Obstaculo extends Entidade{
    

    constructor(x,y,largura,altura, velocidadex = 5){
        super(x,y,largura,altura )
        this.velocidadex = velocidadex
        
    }

    atualizaObstaculo(){
        this.x -= this.velocidadex
        if(this.x <= 0 - this.largura){
            this.x = canvas.width
            this.velocidadex += 0.5 
            let nova_altura = (Math.random() * 50) + 100
            this.altura = nova_altura
            this.y = canvas.height - nova_altura 
        }
    }
}

 function HouveColisao(){
        this.velocidadey = 0 
        this.velocidadex = 0 
        ctx.fillStyle = 'red'
        ctx.fillRect((canvas.width/2)-200,(canvas.height/2)-50, 400,100)
        ctx.fillStyle='black'
        ctx.font = '50px Arial'
        ctx.fillText("GAME OVER", (canvas.width/20) + 250, (canvas.height/20) + 200, 200, 600)
        gameover = true 
} 
             
function verificaColisao() {
            if (personagem.x < obstaculo.x + obstaculo.largura && 
                personagem.x + personagem.largura > obstaculo.x &&  
                personagem.y < obstaculo.y + obstaculo.altura && 
                personagem.y + personagem.altura > obstaculo.y
            ) {
                HouveColisao()
                
            }
}
    const personagem = new Personagem(50,canvas.height - 50, 50,50)
    this.obstaculo = new Obstaculo(canvas.width - 50, canvas.height - 100, 50, 100 )

let pontos = 0;
let elemento = document.getElementById("pontos")
function atualizarPontos(){
    setInterval(() => {
       pontos ++;
       elemento.innerHTML = pontos.toString(); 
    }, 2000);

}

function loop() {
    if (gameover == false) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        personagem.desenhar(ctx,'orange')
        this.obstaculo.desenhar(ctx,'green')
        personagem.atualizarPersonagem()
        this.obstaculo.atualizaObstaculo()
        verificaColisao()
        atualizarPontos()
        requestAnimationFrame(loop)
        
    }
}
loop()