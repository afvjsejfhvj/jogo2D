//pegar elemento canvas pelo id
const canvas = document.getElementById('jogo2D')
// inicializar o canvas
const ctx = canvas.getContext('2d')

const gravidade = 1 

document.addEventListener('keypress', (e) => {
    if(e.code == 'KeyW' && personagem.pulando == false){
        personagem.velocidadey = 25
        personagem.pulando = true
    }}
)

document.addEventListener('click', (e)=> {
 if(gameover == true){
    location.reload()
 }
})

const personagem = {
    x: 50,
    y:canvas.height - 50,
    altura: 50,
    largura: 50,
    velocidadey: 0,
    pulando: false,
} 

function desenharPersonagem(){
    ctx.fillStyle = 'silver'
    ctx.fillRect(personagem.x,personagem.y,personagem.altura,personagem.largura)

}

function atualizarPersonagem(){
    if(personagem.pulando == true){
        personagem.velocidadey -= gravidade
        personagem.y -= personagem.velocidadey
        if(personagem.y >= canvas.height-50){
            personagem.velocidadey = 0 
            personagem.pulando = false
            personagem.y = canvas.height-50
        }
    }  
}

const Obstaculo = {
    x: canvas.width - 50,
    y: canvas.height - 100,
    largura: 50,
    altura: 100,
    velocidadex: 5
}

function desenharObstaculo(){
    ctx.fillStyle = 'orange'
    ctx.fillRect(Obstaculo.x,Obstaculo.y,Obstaculo.largura,Obstaculo.altura )
}

function atualizaObstaculo(){
    Obstaculo.x -= Obstaculo.velocidadex
    if(Obstaculo.x <= 0 - Obstaculo.largura){
        Obstaculo.x = canvas.width
        Obstaculo.velocidadex += 0.2
        let nova_altura = (Math.random() * 50) + 100
        Obstaculo.altura = nova_altura
        Obstaculo.y = canvas.height - nova_altura 
    }
}

function HouveColisao(){
    personagem.velocidadey = 0 
    Obstaculo.velocidadex = 0 
    ctx.fillStyle = 'red'
    ctx.fillRect((canvas.width/2)-200,(canvas.height/2)-50, 400,100)
    ctx.fillStyle='black'
    ctx.font = '50px Arial'
    ctx.fillText("GAME OVER", (canvas.width/20) + 250, (canvas.height/20) + 200, 200, 600)
    gameover = true

}

function verificaColisao(){
    if(personagem.x < Obstaculo.x + Obstaculo.largura && 
       personagem.x + personagem.largura > Obstaculo.x &&  
       personagem.y < Obstaculo.y + Obstaculo.altura && 
       personagem.y + personagem.altura > Obstaculo.y
    ){
        HouveColisao()
    }

}

function loop() {//criar função loop 60 hz

    if(gameover = true){
    //apaga o de antes
    ctx.clearRect(0,0,canvas.width,canvas.height)
    //desenha denovo
    desenharPersonagem()
    //atualiza posições 
    verificaColisao()
    
    atualizarPersonagem()
    desenharObstaculo()
    atualizaObstaculo()
    //chama loop denovo
    requestAnimationFrame(loop)
    }

}

loop()
