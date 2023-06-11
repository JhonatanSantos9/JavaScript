let nmr1 = document.querySelector('#nmr1')
let nmr2 = document.querySelector('#nmr2')
let btn = document.querySelector('#btn')
btn.addEventListener('click', dividir)

function dividir(){
    let resultado = Number(nmr1.value) % Number(nmr2.value)
    if (resultado === 0){
        let caixa = document.querySelector('#container')
        caixa.style.background = 'green'

        setTimeout(() => {
            let caixa = document.querySelector('#container')
            caixa.style.background = 'black'
        }, 2000);
    }else{
        let caixa = document.querySelector('#container')
        caixa.style.background = 'red'

        setTimeout(() => {
            let caixa = document.querySelector('#container')
            caixa.style.background = 'black'
        }, 2000);
    }
}



/*
btn.addEventListener('click', () => {
    let divisao = nmr1 % nmr2
    if (divisao == 0) {
        let quadrado = document.querySelector('#container')
        quadrado.style.background = 'green'
    }else {
        let quadrado = document.querySelector('#container')
        quadrado.style.background = 'red'
    }
})
*/
