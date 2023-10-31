function toggleMode() {
    const html= document.documentElement

    /*if (html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    
    a função toggle já faz essa lógica do if else*/

    html.classList.toggle('light')

    //pegar a tag image
    const img = document.querySelector("#profile img")
    //substituir a imagem
    if (html.classList.contains('light')) {
    //se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    } else {
    //se tiver sem light mode, manter a mesma imagem
    img.setAttribute("src", "./assets/assets/avatar.png")
}
}
