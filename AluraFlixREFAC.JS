function adicionarFilme(){
    var campoFilmeFavorito = document.querySelector('#filme')
     var filmeFavorito = campoFilmeFavorito.value 
    document.write("<img src=" + filmeFavorito +">")
}