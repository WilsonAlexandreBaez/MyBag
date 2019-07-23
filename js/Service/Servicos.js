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

        let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
        if (!produtos_db) return []
        else return produtos_db
    }

    static masculino() {

        let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
        if (!produtos_db) return []
        else return produtos_db
    }

}