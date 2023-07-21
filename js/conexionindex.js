const divContainer = document.querySelector('div.container#container')

const URL = "js/comics.json"


const arrayComics = []


const armarCardDinamica = ({ imagen, precio, nombre, id }) => {
    return `<div class="card">
                <div class="card-image"><img src=${imagen} class="imagen-prod"></div>
                <div class="card-name">${nombre}</div>
                <div class="card-price">$ ${precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${id}">COMPRAR</button>
                </div>
            </div>`
}


function cargarComics() {
    arrayComics.forEach((comic) => {
        divContainer.innerHTML += armarCardDinamica(comic)
        agregarClickEnBotones()
    })
}

async function solicitarComic() {
    const response = await fetch(URL)
    const data = await response.json()
    arrayComics.push(...data)
    arrayComics.length > 0 ? cargarComics() : divContainer.innerHTML = retornoCardError()
}

const agregarClickEnBotones = () => {
    const botones = document.querySelectorAll('.button-add')
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            agregarComics(e.target.id)
            guardarCarritos()
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El comic se agrego al carrito de compras',
                showConfirmButton: false,
                timer: 1500
            })
        })
    })
}



function retornoCardError() {
    return `<div class="card-error">
                <h2>🔍</h2>
                <h2>Houston, tenemos un problema.</h2>
                <h3>No encontramos productos para mostrar.</h3>
                <h4>Intenta de nuevo en unos instantes...</h4>
            </div>`
}



solicitarComic()

