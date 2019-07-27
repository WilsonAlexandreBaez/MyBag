function CarregaBD() {

    //inserção de dados para tste no localStorang

    produtos_db = [{
        "categoria": "Masculino",
        "marca": "MyBag-Gabriel",
        "tipo": "Sport",
        "img": "https://images-americanas.b2w.io/produtos/01/00/image/29441/4/29441470_1GG.jpg",
        "nome": "Mochila Swissport",
        "descricao": "Mochila Notebook Ipad Executiva Swissport Preta",
        "preco": "R$ 294,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Masculino",
        "marca": "MyBag-Baez",
        "tipo": "Pasta",
        "img": "https://images-americanas.b2w.io/produtos/01/00/oferta/28729/0/28729033_1SZ.jpg",
        "nome": "Pasta Executiva",
        "descricao": "Pasta Bolsa Executiva Masculina Notebook, documentos, preta",
        "preco": "R$ 360,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Masculino",
        "marca": "MyBag-Gabriel",
        "tipo": "Sport",
        "img": "https://media.dooca.com.br/pedalokos.com.br/produto/zoom/mochila-de-hidratacao-pedalokos-termica-2-5l-c-refil-15608693141320.png",
        "nome": "Pedalokos Probike",
        "descricao": "Mochila de Hidratação Pedalokos Probike Térmica 2,5L C/refil",
        "preco": "R$ 320,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Masculino",
        "marca": "MyBag-Gabriel",
        "tipo": "Sport",
        "img": " https://static.netshoes.com.br/produtos/mochila-nike-brasilia/05/D12-5868-405/D12-5868-405_zoom1.jpg",
        "nome": "Mochila Nike ",
        "descricao": "Mochila Sport Nike Azul",
        "preco": "R$ 280,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Feminina",
        "marca": "MyBag-Baez",
        "tipo": "Mochila",
        "img": "https://images-na.ssl-images-amazon.com/images/I/71KBiV5JNaL._SL1388_.jpg",
        "nome": "Mochila Marlim bag",
        "descricao": "Mochila femenina para mulheres que carrega a casa com ela.",
        "preco": "R$ 250,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Feminina",
        "marca": "MyBag-Baez",
        "tipo": "Bolsa low blow",
        "img": "https://http2.mlstatic.com/bolsa-feminina-couro-ecologico-alta-qualidade-cod-240-D_NQ_NP_874618-MLB31123003894_062019-F.webp ",
        "nome": "Mochila Marlim bag",
        "descricao": "Bolsaso com varios compartimentos internos para não encontrar o cartão e pagar a conta.",
        "preco": "R$ 250,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Feminina",
        "marca": "MyBag-Gabriel",
        "tipo": "Carteira",
        "img": "https://http2.mlstatic.com/carteira-feminina-pequena-jeans-D_NQ_NP_938609-MLB27236277054_042018-F.webp",
        "nome": "Carteira Salary Wage",
        "descricao": "Carteira da louca já vem com proteção cotra mulheres que gastão alem do orçamento. ",
        "preco": "R$ 280,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Feminina",
        "marca": "MyBag-Baez",
        "tipo": "Bolsa",
        "img": "https://i.shafacdn.net/images/36942-65-auto-auto-SUVj_061d_w.webp ",
        "nome": "Bolsa Dama Ligth",
        "descricao": "Bolsa com suporte para celular, arma de choque.",
        "preco": "R$ 250,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Infantil",
        "marca": "MyBag-Gabriel",
        "tipo": "Mochila",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61Ck6Oa7WTL._SL1000_.jpg",
        "nome": "Invictus Defender",
        "descricao": "Tendencia militar similar a de jogos tipo PUBG",
        "preco": "R$ 380,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Infantil",
        "marca": "MyBag-Gabriel",
        "tipo": "Mochila",
        "img": "https://images-na.ssl-images-amazon.com/images/I/91X75MZZ5iL._SL1500_.jpg",
        "nome": "Mochila de lona Denlex",
        "descricao": "Ideal para estudo de laser reforçada com vaios compartimentos",
        "preco": "R$ 280,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Infantil",
        "marca": "MyBag-Baez",
        "tipo": "Mochila",
        "img": "https://images-na.ssl-images-amazon.com/images/I/41pY9hQlDML.jpg",
        "nome": "Mochila Kingsons",
        "descricao": "Mochila Kingsons Usb Resistente: Água e Material Cortante 17,3",
        "preco": "R$ 250,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Infantil",
        "marca": "MyBag-Baez",
        "tipo": "Mochila",
        "img": "https://images-na.ssl-images-amazon.com/images/I/61yeB555xtL._SL1024_.jpg",
        "nome": "Mochila OutAction",
        "descricao": "Mochila Escolar Out Unltd Girls Grande 3 Bolsos Dermiwil",
        "preco": "R$ 180,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg",
    },
    {
        "categoria": "Infantil",
        "marca": "MyBag-Baez",
        "tipo": "Mochila",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Z3HnYzpYL._SL1000_.jpg",
        "nome": "Mochila Masha e o Urso",
        "descricao": "Mochila Mochilete Escolar 3D e Lancheira MaxToy Masha e o Urso",
        "preco": "R$ 245,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Viagem",
        "marca": "MyBag-Baez",
        "tipo": "Mala",
        "img": "https://images-na.ssl-images-amazon.com/images/I/81oTG6AW6KL._SL1200_.jpg",
        "nome": "Mala de Bordo ",
        "descricao": "Mala Pequena De Bordo Viagem Abs Leve Giro 360 Santino 7003",
        "preco": "R$ 239,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Viagem",
        "marca": "MyBag-Baez",
        "tipo": "Mala",
        "img": "https://images-na.ssl-images-amazon.com/images/I/5116JF2BLyL._SL1000_.jpg",
        "nome": "Mala Swissport",
        "descricao": "Conjunto de Malas Abs 360º para Viagem Resistente Swissport",
        "preco": "R$ 499,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Viagem",
        "marca": "MyBag-Baez",
        "tipo": "Mala",
        "img": "https://images-na.ssl-images-amazon.com/images/I/812ckXuGQNL._SL1500_.jpg",
        "nome": "Mala Lumrn Carry-on",
        "descricao": " Mala de bordo Lumen Carry-on Preta ",
        "preco": "R$ 919,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    },
    {
        "categoria": "Viagem",
        "marca": "MyBag-Baez",
        "tipo": "Mala",
        "img": "https://images-na.ssl-images-amazon.com/images/I/51Z3HnYzpYL._SL1000_.jpg",
        "nome": "Mala ",
        "descricao": " Malas para ir bem longe ",
        "preco": "R$ 568,00",
        "add": "https://image.flaticon.com/icons/svg/1077/1077979.svg"
    }
    ]
    localStorage.setItem('produtos_db', JSON.stringify(produtos_db));

}