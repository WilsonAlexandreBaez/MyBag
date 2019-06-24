function listaConteudo() {
    alert("teste ok!")

    let cadastro = PopularPage.buscarTodos()
    for (let i = 0; i < cadastro.length; i++) {
        const element = cadastro[i];
        
    
    document.getElementById("mochilas").innerHTML += 
    /*html */`<div>
    <div class="img-produto">
    <img src="${element.img}" alt="${element.nome}">
    <div class="descricao">
        <h2>${element.nome}</h2>
        <p>${element.decricao}</p>
        <p>${element.preco}</p>
    </div id="add-cestinha">
    <img src="${element.add}">
    </div>`
}


/**
    let cadasto = PopularPage.buscaProdutos()

    for (let i = 0; i < cadastro.length; i++) {
        const element = cadastro[i];

     document.getElementById("mochilas").innerHTML +=
    `
    <div class="produtos">
    <img src="${element.img}" alt="${element.nome}">
    <div class="card-produto-descricao">
        <h2>${element.nome}</h2>
        <p>${element.decricao}</p>
        <p>${element.preco}</p>
    </div>
    `
    }
    */
}