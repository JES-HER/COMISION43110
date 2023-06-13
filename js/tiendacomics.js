agregarComics()



function ingresarConsola() {
    console.table(comics)
    let respuesta = confirm("Es usted administrador?")
    if (respuesta) {
        let respuesta = confirm("Desea ingresar un articulo nuevo?")
        if (respuesta) {
            agregarComics()
            function agregarComics() {
                let id = creoId()
                let nombre = prompt("Ingrese el nombre del nuevo comic").toUpperCase().trim()
                let precio = prompt("Ingrese el precio del nuevo comic")
                let editorial = prompt("Ingrese la editorial del nuevo comic").toUpperCase().trim()
                let nuevoComic = { id: id, nombre: nombre, precio: parseFloat(precio), editorial: editorial }
                comics.push(nuevoComic)
                console.table(comics)
                let respuesta = confirm("deseas continuar cargando?")
                if (respuesta) {
                    agregarComics()
                } else { alert("Terminar la carga") }
            }
        }
    } else {
        let respuesta = confirm("Es usted cliente?")
        if (respuesta) {
            let respuesta = confirm("Deseas buscar?")
            if (respuesta) {
                buscarComic()
            } else {
                filtrarComics()
                
            }
        }
    }
}
