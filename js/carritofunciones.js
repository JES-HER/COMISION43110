
const guardarCarritos = () => {
    if (comicsEnCarrito.length > 0) {
        localStorage.setItem('comicsEnCarrito', JSON.stringify(comicsEnCarrito))
    }
}

const recuperarCarritos = () => {
    return JSON.parse(localStorage.getItem('comicsEnCarrito')) || []
}

const comicsEnCarrito = recuperarCarritos()


const agregarComics = (comicId) => {
    if (comicId > 0) {
        const resultado = arrayComics.find((comic) => comic.id === parseInt(comicId))
        if (resultado !== undefined) {
            comicsEnCarrito.push(resultado)
        }
    }
}