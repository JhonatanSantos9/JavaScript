// Função entrar()
function entrar(){
    let msg = document.querySelector('#msg')
    let texto = prompt('Digite seu nome')
    if(texto == '' || texto == null){
        alert('Digite seu nome!!')
        msg.innerHTML = 'Bem-vindo...'
    }else{
        msg.innerHTML = 'Bem-vindo ' + texto
    }
}

// Função entrar2()
function entrar2(){
    let nome = 'Jhon'
    let msg = document.querySelector('#msg2')
    let sobrenome = prompt('Digite seu sobrenome:')
    msg.innerHTML = `${nome} ${sobrenome}`

}