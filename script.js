//pegar elemento canvas pelo id
const canvas = document.getElementById('jogo2D')
// inicializar o canvas
const ctx = canvas.getContext('2d')

const gravidade = 1 


document.addEventListener('keypress', (e) => {
    if(e.code == 'Space' && personagem.pulando == false){
        personagem.velocidadey = 20
        personagem.pulando = true
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



//criar função loop 60 hz
function loop() {
    //apaga o de antes
    ctx.clearRect(0,0,canvas.width,canvas.height)
    //desenha denovo
    desenharPersonagem()
    //atualiza posições 
    atualizarPersonagem()


    //chama loop denovo
    requestAnimationFrame(loop)

}

loop()