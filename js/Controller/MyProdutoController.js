
function carregarProduto() {
    let produtoSelecionado = ControleProdutos.produtoSelecionados()

    document.getElementById("nome").innerHTML = produtoSelecionado.nome
    document.getElementById("descricao").innerHTML = produtoSelecionado.descricao
    document.getElementById("preco").innerHTML = produtoSelecionado.preco
    document.getElementById("imagem").src = produtoSelecionado.img

    document.getElementById("navbarTitle").innerHTML = produtoSelecionado.nome

}

function voltar() {
    history.go(-1)
}

function addCarrinho() {
    let quantidade = document.getElementById("quantidade").value
    let item = {
            quantidade: quantidade,
            produto: produtoSelecionado
        }
        // Adicionar o item no carrinho
    CarrinhoService.adicionarItem(item)
}