agregarComics()
console.table(comics)



let respuesta = confirm("Es usted administrador?")
if (respuesta) {//ESTA PRIMERA PARTE FUNCIONA
    let respuesta = confirm("Desea ingresar un articulo nuevo?")
    if (respuesta) {
        agregarComics()
        function agregarComics() {
            let id = creoId()
            let nombre = prompt("Ingrese el nombre del nuevo comic")
            let precio = prompt("Ingrese el precio del nuevo comic")
            let editorial = prompt("Ingrese la editorial del nuevo comic")
            let nuevoComic = { id: id, nombre: nombre, precio: parseFloat(precio), editorial: editorial }
            comics.push(nuevoComic)
            console.table(comics)
            let respuesta = confirm("deseas continuar cargando?")
            if (respuesta) {
                agregarComics()
            } else { alert("Terminar la carga") }
        }
    }
} else {//APARTIR DE ACA TENGO EL PROBLEMA
    let respuesta = confirm("Es usted cliente?")
    if (respuesta) {
        let respuesta = confirm("Deseas buscar?")
        if (respuesta) {
            function buscarComic() {
                let nombre = prompt("Ingresa el nombre del comic que buscas:")
                let comicAbuscar = comics.find((comic) => (comic.nombre === nombre))
                console.table(comicAbuscar)
            }
        } else {
            function filtrarComics() {
                let editorial = prompt("Ingresa la editorial a filtrar: ")
                let comicsFiltrados = comics.filter((comic) => (comic.editorial === editorial))
                console.table(comicsFiltrados)
            }
            let respuesta = confirm("¿El comic que deseas esta en la lista?")
            if (respuesta) {
                let id = prompt("ingresa el ID por favor")
                if (id >= 1) {
                    let comicFiltrado = comics.filter((comic) => comic.id === parseInt(id))
                    console.table(comicFiltrado)
                }

            }
        }
    }
}











//NO FIJARSE EN ESTO ES SOLO UN AYUDA MEMORIA



/*function filtrarComics() {

    let editorial = prompt("Ingresa la editorial a filtrar: ");
    let comicsFiltrados = comics.filter((comic) => (comic.editorial === editorial.toUpperCase().trim()))
    console.table(comicsFiltrados)

    let respuesta = confirm("¿El comic que deseas esta en la lista?")
    if (respuesta) {
        let id = prompt("ingresa el ID por favor")
        if (id >= 1 && id <= 8) {
            let comicFiltrado = comics.filter((comic) => comic.id === parseInt(id));
            console.table(comicFiltrado)
            let respuesta = confirm(alert("Lo quieres llevar"))
            if (respuesta) {
                
            }
        }

    }
}*/





/*function buscarProducto() {
    let codigo = prompt("Ingresa el nombre del comic que buscas:")

    let productoAbuscar = comics.find((comic) => (comic.id === parseInt(id) || (comic.editorial === editorial) || (comic.nombre === nombre ))
    console.table(productoAbuscar);

    let respuesta = confirm("Deseas comprarlo? ")

    if (respuesta) {
        let nombre = comics.find((comic) => comic.nombre === parseInt(codigo))
        console.table(nombre);
        let precio =comics.find((comic) => comic.precio === parseInt(codigo))
        console.table(precio);

        console.log("Te estas llevando " + nombre + " a  $ " + precio);

    }
}*/
