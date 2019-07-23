function masculino() {
        
    let produtos_db = JSON.parse(localStorage.getItem("produtos_db"))
    for (let i = 0; i < produtos_db.length; i++) {
       
            console.log(produtos_db[i])
        }
    }