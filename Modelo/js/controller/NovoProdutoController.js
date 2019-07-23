
document.querySelector("body").style.animation  = "zoom-out .8s"

setTimeout(() => {
    document.querySelector("body").style.opacity = "1"
    
}, 800);


function voltar() {
    document.querySelector('body').style.animation = "zoom-in .8s"
    setTimeout(() => {
        history.go(-1)
        
    }, 750 );
}

function salvar(){
    let produto = {}
    produto.img = document.getElementById('imagem').value
    produto.nome = document.getElementById('nome').value
    produto.descricao = document.getElementById('descricao').value
    produto.preco = document.getElementById('preco').value

    ProdutoService.cadastrar(produto)
    alert('Salvo com Sucesso')
    document.querySelector('body').style.animation = "zoom-in .8s"

    setTimeout(() => {
        location.href = "home.html"
        
    }, 750);


}