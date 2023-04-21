function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Dados inválidos muahaha'
        res.style.color = 'red'
        res.style.fontWeight = 'bold'
    }else{
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Impossível contar com o "passo" com o valor "0", modificaremos para "Passo" com valor "1" ')
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F970}`
                res.style.color = 'black'
                res.style.fontWeight = 'normal'
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F970}`
                res.style.color = 'black'
                res.style.fontWeight = 'normal'
            }            
        }
        res.innerHTML += `\u{1F625}`
    } 
}