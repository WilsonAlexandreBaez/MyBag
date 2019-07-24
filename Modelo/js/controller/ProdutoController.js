let produtoSelecionado = ControleProdutos.produtoSelecionado()

function carregarProduto() {

        document.querySelector("body").style.animation  = "zoom-out .8s"
       
        document.getElementById("imagem").src = produtoSelecionado.img
        document.getElementById("nome").innerHTML = produtoSelecionado.nome
        document.getElementById("descricao").innerHTML = produtoSelecionado.descricao
        document.getElementById("preco").innerHTML = produtoSelecionado.preco
        document.getElementById("navbarTitle").innerHTML = produtoSelecionado.nome
setTimeout(() => {
    document.querySelector("body").style.opacity = "1"
    
}, 800);

}

function voltar() {
    document.querySelector('body').style.animation = "zoom-in .8s"
    setTimeout(() => {
        history.go(-1)
        
    }, 800 );
}

function addCarrinho() {
    let quantidade = document.getElementById("quantidade").value
    let item = {
        quantidade: quantidade,
        produto: produtoSelecionado
    }
    // Adicionar o item no carrinho
    CarrinhoService.adicionarItem(item)
    alert("Produto adicionado com sucesso")
    document.getElementById("quantidade").value = ""
}