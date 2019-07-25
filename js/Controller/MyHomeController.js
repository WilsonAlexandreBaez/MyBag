function listaConteudo() {
    let produtosCadastrados = ControleProdutos.buscarTodos()

    for (let i = 0; i < produtosCadastrados.length; i++) {
        const element = produtosCadastrados[i];

        document.getElementById("mochilas").innerHTML +=
            /*html */`
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


function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }