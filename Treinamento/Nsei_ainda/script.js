let container = document.querySelector('#container')

container.addEventListener('dblclick', () => {
    container.style.background = 'green'
})

function horas(){
    let horario = document.querySelector('#horario')
    let agora = new Date()
    let hora = agora.getHours().toString().padStart(2, '0')
    let minuto = agora.getMinutes().toString().padStart(2, '0')
    let segundo = agora.getSeconds().toString().padStart(2, '0')
    horario.innerHTML = `São exatamente ${hora}:${minuto}:${segundo}`  
    setInterval(() => {
        horas()
    }, 500);
}