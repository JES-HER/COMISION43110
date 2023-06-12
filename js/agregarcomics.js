function agregarComics(){
    comics.push(new Comics(1, "FLASHPOINT BEYOND ", 6399, "DC"))
    comics.push(new Comics(2, "BATMAN/SUPERMAN: LOS MEJORES DEL MUNDO (INCLUYE POSTER) ", 5190, "DC"))
    comics.push(new Comics(3, "BATMAN FLASH: EL PRENDEDOR ", 3049, "DC"))
    comics.push(new Comics(4, "FLASH: RENACIMIENTO ", 4900, "DC"))
    comics.push(new Comics( 5, "GRANDES TESOROS MARVEL. CAPITÁN AMÉRICA DE JIM STERANKO ", 19250, "MARVEL"))
    comics.push(new Comics(6, "MARVEL NOW! DELUXE. INVENCIBLE IRON MAN 4: RIRI WILLIAMS ", 17500, "MARVEL"))
    comics.push(new Comics(7, "MARVEL HÉROES. EL INCREÍBLE HULK DE PETER DAVID 2: PERDIDO EN LAS VEGAS ", 24500, "MARVEL"))
    comics.push(new Comics(8, "MARVEL OMNIBUS. LOKI: AGENTE DE ASGARD ", 22000, "MARVEL"))
}

/*function buscarComic() {
    let nombre = prompt("Ingresa el nombre del comic que buscas:")
    let comicAbuscar = comics.find((comic) => (comic.nombre === nombre))
    console.table(comicAbuscar)
}

function filtrarComics() {
    let editorial = prompt("Ingresa la editorial a filtrar: ")
    let comicsFiltrados = comics.filter((comic) => (comic.editorial === editorial))
    console.table(comicsFiltrados)
}*/