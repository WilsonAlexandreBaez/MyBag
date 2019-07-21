function listaConteudo() {

    //inserção de dados para tste no localStorang

    /** produtos_mb = [{ 'img': 'https://images.tcdn.com.br/img/img_prod/465173/mochila_sport_savana_18_l_com_5_compartimentos_moto_ciclista_260_1_20190418155338.jpg', 'nome': 'Mochila Sport Savana ', 'descricao': 'Mochila Sport Savana 18 L Com 5 Compartimentos Moto Ciclista', 'preco': 'R$ 280,00', 'add': 'https://image.flaticon.com/icons/svg/1077/1077979.svg' }, { 'img': 'https://cdn.awsli.com.br/600x450/420/420053/produto/27511504/1a0028eb9f.jpg', 'nome': 'Mochila Victorinox ', 'descricao': 'Mochila Vermelha reforçada', 'preco': 'R$ 250,00', 'add': 'https://image.flaticon.com/icons/svg/1077/1077979.svg' }]
    localStorage.setItem('produtos_mb', JSON.stringify(produtos_mb));
*/

    let cadastro = PopularPage.buscarTodos()
    for (let i = 0; i < cadastro.length; i++) {
        const element = cadastro[i];
        //local de ajuste  

        document.getElementById("mochilas").innerHTML +=
            /*html */
            `<div>
    <div class="img-produto">
    <img src="${element.img}" alt="${element.nome}">
    </div>
    <div class="descricao">
        <h2>${element.nome}</h2>
        <p>${element.descricao}</p>
        <p>${element.preco}</p>
    </div>
    <div  id="add-cestinha">
    <img src="${element.add}">
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