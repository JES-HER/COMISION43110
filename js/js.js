let precio1 = 6399
let precio2 = 5190
let precio3 = 3049
let precio4 = 4900
let precio5 = 19250
let precio6 = 17500
let precio7 = 24500
let precio8 = 22000


function mostrarPrecio(codigo) {
    switch (codigo) {
        case 1:
            alert("FLASHPOINT BEYOND " + "$" + precio1)
            break;
        case 2:
            alert("BATMAN/SUPERMAN: LOS MEJORES DEL MUNDO (INCLUYE POSTER) " + "$" + precio2)
            break;
        case 3:
            alert("BATMAN FLASH: EL PRENDEDOR " + "$" + precio3)
            break;
        case 4:
            alert("FLASH: RENACIMIENTO " + "$" + precio4)
            break;
        case 5:
            alert("GRANDES TESOROS MARVEL. CAPITÁN AMÉRICA DE JIM STERANKO " + "$" + precio5)
            break;
        case 6:
            alert("MARVEL NOW! DELUXE. INVENCIBLE IRON MAN 4: RIRI WILLIAMS " + "$" + precio6)
            break;
        case 7:
            alert("MARVEL HÉROES. EL INCREÍBLE HULK DE PETER DAVID 2: PERDIDO EN LAS VEGAS " + "$" + precio7)
            break;
        case 8:
            alert("MARVEL OMNIBUS. LOKI: AGENTE DE ASGARD " + "$" + precio8)
            break;

        default:
            alert("🤔 No comprendimos tu selección.")
            break;
    }
}

function calcularCuotas(codigo) {
       switch (codigo) {
        case 1:
            for (let i = 1; i <= 3; i++) {
                console.log("Te queda: " + i + " cuota de $" +  parseInt(precio1/3))
            }
            break;
        case 2:
            for (let i = 1; i <= 3; i++) {
                console.log("Te queda: " + i + " cuota de $" + parseInt(precio2/3))
            }
            break;
        case 3:
            for (let i = 1; i <= 3; i++) {
                console.log("Te queda: " + i + " cuota de $" + parseInt(precio3/3))
            }
            break;
        case 4:
            for (let i = 1; i <= 3; i++) {
               console.log("Te queda: " + i + " cuota de $" + parseInt(precio4/3))
            }
            break;
        case 5:
            for (let i = 1; i <= 3; i++) {
               console.log("Te queda: " + i + " cuota de $" + parseInt(precio5/3))
            }
            break;
        case 6:
            for (let i = 1; i <= 3; i++) {
               console.log("Te queda: " + i + " cuota de $" + parseInt(precio6/3))
            }
            break;
        case 7:
            for (let i = 1; i <= 3; i++) {
                console.log("Te queda: " + i + " cuota de $" + parseInt(precio7/3))
            }
            break;
        case 8:
            for (let i = 1; i <= 3; i++) {
                console.log("Te queda: " + i + " cuota de $" + parseInt(precio8/3))
            }
            break;

        default:
            alert("🤔 No comprendimos tu selección.")
            break;
    }
}


function calcularDescuento(codigo) {
    switch (codigo) {
        case 1:
            console.log("El precio final es: " + "$" + (precio1 - (precio1 * 0.1)))
            break;
        case 2:
            console.log("El precio final es: " + "$" + (precio2 - (precio2 * 0.1)))
            break;
        case 3:
            console.log("El precio final es: " + "$" + (precio3 - (precio3 * 0.1)))
            break;
        case 4:
            console.log("El precio final es: " + "$" + (precio4 - (precio4 * 0.1)))
            break;
        case 5:
            console.log("El precio final es: " + "$" + (precio5 - (precio5 * 0.1)))
            break;
        case 6:
            console.log("El precio final es: " + "$" + (precio6 - (precio6 * 0.1)))
            break;
        case 7:
            console.log("El precio final es: " + "$" + (precio7 - (precio7 * 0.1)))
            break;
        case 8:
            console.log("El precio final es: " + "$" + (precio8 - (precio8 * 0.1)))
            break;

        default:
            alert("🤔 No comprendimos tu selección.")
            break;
    }
}


function consultarComic() {
    let respuesta = confirm("Deseas conocer el precio de algun Comic en especial?")

    if (respuesta === true) {
        let codigo = parseInt(prompt("Ingresa el código numérico del Comic:"))
        if (codigo <= 8) {
            mostrarPrecio(codigo)
            let respuesta = confirm("Pagando en efectivo tenes un 10% de descuento. Deseas pagar en efectivo?")
            if (respuesta === true) {
                let codigo = parseInt(prompt("Ingresa el código numérico nuevamente: "))
                if (codigo <= 8) {
                    calcularDescuento(codigo)
                } else {
                    console.warn("Debes ingresar un código válido.")
                }
            } else {
                let respuesta = confirm("Sino tenes hasta 3 cuotas sin intereses, te interesa? ")
                if (respuesta === true){
                let codigo = parseInt(prompt("Ingresa el código numérico nuevamente: "))
                    calcularCuotas(codigo)
                }
            }
        } else {
            console.warn("Debes ingresar un código válido.")
        }
    } else {
        console.warn("No hay problema. Regresa cuando gustes.")
    }
}


consultarComic()

