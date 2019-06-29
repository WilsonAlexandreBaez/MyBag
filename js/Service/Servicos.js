class PopularPage {

    static validar(mochila) {
        if (!mochila.nome) {
            return "O nome é obrigatório."
        }
    }
    /**
     * buscara todos o produtos cadastrados 
     */

    static buscarTodos() {

        let produtos = JSON.parse(localStorage.getItem("produtos"))
        if (!produtos) return []
        else return produtos
    }
    
}

/**
 *  let produtos = JSON.parse(localStorage.getItem("produtos"))
        if (!produtos) {
            return []            
        }else return produtos
 */