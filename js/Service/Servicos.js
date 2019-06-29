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

        let produtos_mb = JSON.parse(localStorage.getItem("produtos_mb"))
        if (!produtos_mb) return []
        else return produtos_mb
    }
    
}

/**
 *  let produtos = JSON.parse(localStorage.getItem("produtos"))
        if (!produtos) {
            return []            
        }else return produtos
 */