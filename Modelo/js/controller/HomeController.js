// Chamar o buscarTodos do ProdutoService
let produtosCadastrados = ProdutoService.buscarTodos()

function listarProdutos() {
    document.querySelector("body").style.animation = "zoom-out .8s"

    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"
    }, 800);

    for (let i = 0; i < produtosCadastrados.length; i++) {
        const element = produtosCadastrados[i];

        // Criar os cards de produtos no home.html
        document.getElementById("produtos").innerHTML +=
        /* html */ `
        <div class="card-produto" onclick="selecionarProduto(${i})">
            <img src="${element.img}" alt="${element.nome}">
            <div class="card-produto-descricao">
                <h2>${element.nome}</h2>
                <p>${element.descricao}</p>
                <p>${element.preco}</p>
            </div>
        </div>
        `

    }

}

function selecionarProduto(i) {
    ProdutoService.selecionarProduto(produtosCadastrados[i])
    document.querySelector('body').style.animation = "zoom-in .8s" //aplica animação
    setTimeout(() => {
        location.href = "produto.html"
    }, 750);
}