class ControleProdutos {

    static validar(mochila) {
        if (!mochila.nome) {
            return "O nome é obrigatório."
        }
    }
    /**
     * buscara todos o produtos cadastrados 
     */

    static buscarTodos() {
        let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
        if (!produtos_db) return []
        else return produtos_db
    }
    
    static selecionarProduto(produto_db) {
        localStorage.setItem("produtoSelecionados_db", JSON.stringify(produto_db))
    }

    static produtoSelecionados() {
        return JSON.parse(localStorage.getItem("produtoSelecionados_db"))
    }

    static cadastrar (produtos_db) {
        //pega produtos ja cadastrados e adiciona novo

        let cadastrados = ControleProdutos.buscarTodos();
        cadastrados.push(produtos_db)
        //atualizar lista do localstorage
        localStorage.setItem('produtos_db', JSON.stringify(cadastrados))
    }
   
}