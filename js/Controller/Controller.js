function listaConteudo() {

    //inserção de dados para tste no localStorang


    let cadastro = PopularPage.buscarTodos()
    for (let i = 0; i < cadastro.length; i++) {
        const element = cadastro[i];
        document.getElementById("mochilas").innerHTML +=
            /*html */
            `<div>
    <div class="img-produto">
    <img src="${element.img}" alt="${element.nome}">
    </div>
    <div class="mochilas-descricao">
        <h2>${element.nome}</h2>
        <p>${element.descricao}</p>
        <p>${element.preco}</p>
    </div>
        `
    }


}
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

/**
function openDrawer() {
    document.querySelector('.drawer').style.display = 'flex'
    document.querySelector('.drawer-menu').style.animation = 'abrir-menu .5s ease-in'
    document.querySelector('body').style.overflowY = 'hidden'
}

function closeDrawer() {
    document.querySelector('.drawer-menu').style.animation = 'fechar-menu .5s ease'

    setTimeout(() => {
        document.querySelector('.drawer').style.display = 'none'
        document.querySelector('body').style.overflowY = 'scroll'
    }, 500)

}
 */