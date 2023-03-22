var agora = new Date()
var hora = agora.getHours
console.log(`Agora são ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Boa Tarde!')
} else if(hora <= 00){
    console.log('Boa noite PUTA!')
} else{
    console.log('Boa madrugada piranha! <3')    
} 