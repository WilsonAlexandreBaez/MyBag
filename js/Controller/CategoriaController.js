function masculino() {
    document.querySelector("body").style.animation = "zoom-out .8s"

    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"

    }, 800);

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
    document.querySelector("body").style.animation = "zoom-out .8s"

    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"

    }, 800);
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
    document.querySelector("body").style.animation = "zoom-out .8s"

    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"

    }, 800);
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
    document.querySelector("body").style.animation = "zoom-out .8s"

    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"

    }, 800);
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
            
            <div id="add-cestinha">
            <form>
            <input type="number" name="quantidade" min="1" max="5">
            </form>
                <img src="${element.add}" alt="" >
            </div>
            </div>
            `
        }
    }
}

function next() {
    document.querySelector("body").style.animation = "zoom-out .8s"
    setTimeout(() => {
        document.querySelector("body").style.opacity = "1"
    }, 800);
}

function voltar() {
    document.querySelector('body').style.animation = "zoom-in .8s"
    setTimeout(() => {
        history.go(-1)

    }, 800);
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}