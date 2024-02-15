function box(){
    let fechar = document.getElementsByClassName("fecharimg")
    let button = document.getElementById('BtnConts')
    let container = document.getElementById('mascara-Form')
    let menu = document.getElementById('contacts')
    let campo = document.getElementById('campo')
    button.addEventListener('click', function(){
        container.style.visibility = 'visible'
        campo.style.left = '50%'
        campo.style.transform = 'translateX(-50%)'
    })
    contacts.addEventListener('click', function(){
        container.style.visibility = 'visible'
        campo.style.left = '50%'
        campo.style.transform = 'translateX(-50%)'
    })

}
function fechar(){
    let container = document.getElementById('mascara-Form')
    let campo = document.getElementById('campo')
    container.addEventListener('click',function(){
        container.style.visibility = 'hidden'
        campo.style.left = '-165px'
    });
        
}

box()
fechar()