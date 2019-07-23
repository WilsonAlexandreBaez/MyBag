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
    static mascullino() {
        let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
        //Objeto
        let produtos = produtos_db;

        //Para prop (propriedade) in obj (objeto) faça
        for (var prop in produtos_db) {
            // ctrl+shift+k (para abrir o console no mozilla firefox)
            console.log("produtos_db." + prop + " = " + produtos_db[prop]);
        }

    }

}