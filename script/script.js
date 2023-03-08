let inputBuscarFilme = window.document.querySelector("#input-buscar-filme");
let btnBuscarFilme = document.querySelector("#btn-buscar-filme");

btnBuscarFilme.onclick = () => {
    if(inputBuscarFilme.value.length > 0){
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=81b79755="+inputBuscarFilme.value)
        .then((resp)=> resp.json())
        .then((resp)=>{
            resp.Search.forEach((item)=>{
                console.log(item);
                let filme = new Filme(
                    item.imdbID,
                    item.Title,
                    item.Year,
                    null,
                    null,
                    item.Poster,
                    null,
                    null,
                    null,
                    null,
                    null
                );
                filmes.push(filme)
            })
        })
        return false;
    }
}

let listarFilmes = async(filmes) =>{
    let listaFilmes = await document.querySelector("#lista-filmes");
    listaFilmes.innerHTML = "";
    if(filmes.length>0){
        filmes.forEach(async(filme) => {
            listaFilmes.appendChild(await filme.getCard());
        })
    }
}