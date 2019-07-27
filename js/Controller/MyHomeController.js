function listaConteudo() {
    document.querySelector("body").style.animation = "zoom-out .8s"

    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"

    }, 800);
    let produtosCadastrados = ControleProdutos.buscarTodos()

    for (let i = 0; i < produtosCadastrados.length; i++) {
        const element = produtosCadastrados[i];

        document.getElementById("mochilas").innerHTML +=
            /*html */
            `
            <div>
                <div class="img-produto">
                <img src="${element.img}" alt="${element.nome}">
                </div>
                <div class="mochilas-descricao">
                    <h2>${element.nome}</h2>
                    <p class="categoria">Categoria:${element.categoria}</p>
                    <p class="descricao">${element.descricao}</p>
                    <p class="preco">${element.preco}</p>
                   
             </div>`
    }

}
/* <div id="add-cestinha">
                    <form>
                    <input type="number" name="quantidade" min="1" max="5">
                    </form>
                        <img src="${element.add}" alt=""  onclick = "comprar()">
                    </div>*/

function comprar (){
    alert("Produto adcionado com Sucesso!!!")
}
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}