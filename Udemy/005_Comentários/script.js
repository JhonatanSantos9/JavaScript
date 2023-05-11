// Esse é meu nome
let name = 'Jhon'

/*
Esse
eh
meu
nome
MUAHAHA
*/

function hora(){
    let agora = new Date()
    let h1 = document.querySelector('h1')
    h1.innerHTML = Intl.DateTimeFormat('pt-BR', {
        timeStyle: "medium"
    }).format(agora)
    setInterval('hora()', 500)
}