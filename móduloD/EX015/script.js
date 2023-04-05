function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lengh == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    }   else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançah.jpg')
            } else if (idade < 21) { 
                //jovem
                img.setAttribute('src', 'jovemh.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adultoh.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }else if (fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançam.jpg')
            } else if (idade < 21) { 
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adutom.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        img.setAttribute('width', '200px')
        img.setAttribute('height', '200px')
        img.setAttribute('display', 'block')
    }
}