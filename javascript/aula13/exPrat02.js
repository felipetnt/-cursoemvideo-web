function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'images/manha.jpeg'
        document.body.style.background = '#e2cd9f'
        img.style.width = '400px'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#b9846f'
        img.style.width = '400px'
    } else {
        // BOA NOITE!
        img.src = 'images/noite.jpg'
        document.body.style.background = '#515151'
        img.style.width = '400px'
    }
}