const tbody = document.querySelector('tbody.tbody')
const total = document.querySelector('span#total')
const btnQuitar = document.querySelector('button#btnquitar.quitar')

const armarTablaHTML = (carrito) => {
    return `<tr>
                <td><img src=${carrito.imagen} class="imagen-carrito"></td>
                <td>${carrito.nombre}</td>
                <td>$ ${carrito.precio}</td>
                <td>${carrito.editorial}</td>
            </tr>`
}

const mostrarCarritos = () => {
    if (comicsEnCarrito.length > 0) {
        comicsEnCarrito.forEach((carrito) => {
            tbody.innerHTML += armarTablaHTML(carrito)
        })
    }
}
mostrarCarritos()


btnQuitar.addEventListener('click', () => {
    localStorage.removeItem('comicsEnCarrito')
    tbody.innerHTML = ''
    total.innerHTML = ''
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se vacio el carrito de compras',
        showConfirmButton: false,
        timer: 1500
    })
    
})

btncomprar.addEventListener('click', () => {
    Swal.fire({
        title: 'Compra finalizada',
        text: 'Muchas gracias por su compra!',
        confirmButtonText: 'Aceptar'
    })
        .then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('comicsEnCarrito')
                carrito.length = 0
                location.href = 'index.html'
            }
        })
    localStorage.removeItem('comicsEnCarrito')
    tbody.innerHTML = ''
})


function calcularCarrito() {
    if (comicsEnCarrito.length > 0) {
        const totalCompra = comicsEnCarrito.reduce((acc, { precio }) => {
            return acc + precio;
        }, 0);
        total.textContent = totalCompra
    }
}


calcularCarrito()