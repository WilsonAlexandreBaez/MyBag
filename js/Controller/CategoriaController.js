function listaCategoria() {

    //inserção de dados para tste no localStorang


    let cadastro = PopularPage.masculino()
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
        <p class="categoria">Categoria:${element.categoria}</p>
        <p class="descricao">${element.descricao}</p>
        <p class="preco">${element.preco}</p>
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