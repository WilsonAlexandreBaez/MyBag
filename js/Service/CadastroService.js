
    function PegaCadastro(){
        let produtos  = []
            for (let i = 0; i < produtos.length; i++) {
                const element = produtos[i];
                produtos =  JSON.parse( document.forms["cadastro"].elements[i].value)
                
            }

            alert("produtos")
    }
    
    
