let produtosCadastrados = ControleProdutos.buscarTodos()

function listaConteudo() {
    document.querySelector("body").style.animation = "zoom-out .8s"

    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"
    }, 800);

    for (let i = 0; i < produtosCadastrados.length; i++) {
        const element = produtosCadastrados[i];

        document.getElementById("mochilas").innerHTML +=
            /*html */
            `<div>
    <div class="img-produto" onclick="selecionarProduto(${i})">
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

function selecionarProduto(i) {
    ControleProdutos.selecionarProduto(produtosCadastrados[i])
    document.querySelector('body').style.animation = "zoom-in .8s" //aplica animação
    setTimeout(() => {
        location.href = "compras-mybag.html"
    }, 750);
}