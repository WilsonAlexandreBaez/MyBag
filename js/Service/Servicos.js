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
        for (let i = 0; i < produtos_db.length; i++) {
            if (produtos_db.categoria === "Masculino")
                const produto_db = produtos_db[i];

        }
        if (!produtos_db) return []
        else return produtos_db
    }

}