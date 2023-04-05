function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes() 
    msg.innerHTML = `Agora são ${hora} hora(s) e ${minuto} minuto(s).`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.backgroundColor = 'rgb(242, 196, 140)'
    } else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = 'orange'
    } else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = 'blue'
    }
}

    


