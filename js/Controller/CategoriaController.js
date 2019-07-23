function masculino() {

    let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
    for (let i = 0; i < produtos_db.length; i++) {
        if (produtos_db[i].categoria === "Masculino") {
            produtos_db = produtos_db
            const element = produtos_db[i];
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
}
function Feminina() {

    let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
    for (let i = 0; i < produtos_db.length; i++) {
        if (produtos_db[i].categoria === "Feminina") {
            produtos_db = produtos_db
            const element = produtos_db[i];
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
}
function Infantil() {

    let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
    for (let i = 0; i < produtos_db.length; i++) {
        if (produtos_db[i].categoria === "Infantil") {
            produtos_db = produtos_db
            const element = produtos_db[i];
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
}
function Viagem() {

    let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
    for (let i = 0; i < produtos_db.length; i++) {
        if (produtos_db[i].categoria === "Viagem") {
            produtos_db = produtos_db
            const element = produtos_db[i];
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
}


