function agregarComics() {
    comics.push(new Comics(1, "FLASHPOINT BEYOND", 6399, "DC"))
    comics.push(new Comics(2, "BATMAN/SUPERMAN: LOS MEJORES DEL MUNDO (INCLUYE POSTER)", 5190, "DC"))
    comics.push(new Comics(3, "BATMAN FLASH: EL PRENDEDOR", 3049, "DC"))
    comics.push(new Comics(4, "FLASH: RENACIMIENTO", 4900, "DC"))
    comics.push(new Comics(5, "GRANDES TESOROS MARVEL. CAPITÁN AMÉRICA DE JIM STERANKO", 19250, "MARVEL"))
    comics.push(new Comics(6, "MARVEL NOW! DELUXE. INVENCIBLE IRON MAN 4: RIRI WILLIAMS", 17500, "MARVEL"))
    comics.push(new Comics(7, "MARVEL HÉROES. EL INCREÍBLE HULK DE PETER DAVID 2: PERDIDO EN LAS VEGAS", 24500, "MARVEL"))
    comics.push(new Comics(8, "MARVEL OMNIBUS. LOKI: AGENTE DE ASGARD", 22000, "MARVEL"))
}

function buscarComic() {
    let nombre = prompt("Ingresa el nombre del comic que buscas:").toUpperCase().trim()
    let comicAbuscar = comics.find((comic) => (comic.nombre === nombre))
    console.log("El comic buscado es: ")
    console.table(comicAbuscar)
    let respuesta = confirm("Es el comic que buscabas?")
    if (respuesta) {
        let respuestaDescuento = confirm("Pagando en efectivo tenes un 10% de descuento. Deseas pagar en efectivo?");
        if (respuestaDescuento) {
            let codigo = parseInt(prompt("Ingresa el ID del Comic:"));
            if (codigo >= 1 && codigo <= 8) {
                calcularDescuento(codigo)
            }
        } else {
            let respuestaCuotas = confirm("Sino tenes hasta 3 cuotas sin intereses, te interesa? ");
            if (respuestaCuotas) {
                let codigo = parseInt(prompt("Ingresa el ID del Comic:"));
                if (codigo >= 1 && codigo <= 8) {
                    calcularCuotas(codigo);
                }
            }
        }
    } else { buscarComic() }
}

function filtrarComics() {
    let editorial = prompt("Ingresa la editorial a filtrar: ").toUpperCase().trim()
    let comicsFiltrados = comics.filter((comic) => (comic.editorial === editorial))
    console.table(comicsFiltrados)
    let respuesta = confirm("¿El comic que deseas esta en la lista?")
    if (respuesta) {
        let id = prompt("ingresa el ID por favor")
        if (id >= 1) {
            let comicFiltrado = comics.filter((comic) => comic.id === parseInt(id))
            console.log("El comic filtrado es: ")
            console.table(comicFiltrado)
            let respuesta = confirm("Es el comic que necesitabas?")
            if (respuesta) {
                let respuestaDescuento = confirm("Pagando en efectivo tenes un 10% de descuento. Deseas pagar en efectivo?");
                if (respuestaDescuento) {
                    let codigo = parseInt(prompt("Ingresa ID del Comic nuevamente por favor:"));
                    if (codigo >= 1 && codigo <= 8) {
                        calcularDescuento(codigo)
                    }
                } else {
                    let respuestaCuotas = confirm("Sino tenes hasta 3 cuotas sin intereses, te interesa? ");
                    if (respuestaCuotas) {
                        let codigo = parseInt(prompt("Ingresa el ID del Comic nuevamente por favor:"));
                        if (codigo >= 1 && codigo <= 8) {
                            calcularCuotas(codigo);
                        }
                    }
                }
            } else { filtrarComics() }
        }
    } else { filtrarComics() }
}


let precio1 = 6399
let precio2 = 5190
let precio3 = 3049
let precio4 = 4900
let precio5 = 19250
let precio6 = 17500
let precio7 = 24500
let precio8 = 22000

function mostrarPrecio(codigo) {
    let precio;
    let nombreComic;

    switch (codigo) {
        case 1:
            precio = precio1;
            nombreComic = "FLASHPOINT BEYOND";
            break;
        case 2:
            precio = precio2;
            nombreComic = "BATMAN/SUPERMAN: LOS MEJORES DEL MUNDO (INCLUYE POSTER)";
            break;
        case 3:
            precio = precio3;
            nombreComic = "BATMAN FLASH: EL PRENDEDOR";
            break;
        case 4:
            precio = precio4;
            nombreComic = "FLASH: RENACIMIENTO";
            break;
        case 5:
            precio = precio5;
            nombreComic = "GRANDES TESOROS MARVEL. CAPITÁN AMÉRICA DE JIM STERANKO";
            break;
        case 6:
            precio = precio6;
            nombreComic = "MARVEL NOW! DELUXE. INVENCIBLE IRON MAN 4: RIRI WILLIAMS";
            break;
        case 7:
            precio = precio7;
            nombreComic = "MARVEL HÉROES. EL INCREÍBLE HULK DE PETER DAVID 2: PERDIDO EN LAS VEGAS";
            break;
        case 8:
            precio = precio8;
            nombreComic = "MARVEL OMNIBUS. LOKI: AGENTE DE ASGARD";
            break;
        default:
            alert("🤔 No comprendimos tu selección.");
            return;
    }

    alert(nombreComic + " $" + precio);
}


function calcularCuotas(codigo) {
    let precio;

    switch (codigo) {
        case 1:
            precio = precio1;
            break;
        case 2:
            precio = precio2;
            break;
        case 3:
            precio = precio3;
            break;
        case 4:
            precio = precio4;
            break;
        case 5:
            precio = precio5;
            break;
        case 6:
            precio = precio6;
            break;
        case 7:
            precio = precio7;
            break;
        case 8:
            precio = precio8;
            break;
        default:
            console.warn("Debes ingresar un código válido.");
            return;
    }

    const cuota = Math.floor(precio / 3);
    for (let i = 1; i <= 3; i++) {
        console.log("Te quedan " + i + " cuotas de $" + cuota);
    }
}


function calcularDescuento(codigo) {
    let precio;

    switch (codigo) {
        case 1:
            precio = precio1;
            break;
        case 2:
            precio = precio2;
            break;
        case 3:
            precio = precio3;
            break;
        case 4:
            precio = precio4;
            break;
        case 5:
            precio = precio5;
            break;
        case 6:
            precio = precio6;
            break;
        case 7:
            precio = precio7;
            break;
        case 8:
            precio = precio8;
            break;
        default:
            console.warn("Debes ingresar un código válido.");
            return;
    }

    const descuento = precio * 0.1;
    const precioFinal = precio - descuento;
    console.log("El precio final es: $" + precioFinal);
}


