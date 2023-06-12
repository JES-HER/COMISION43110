const comics=[]

const creoId= ()=> parseInt(Math.random() *10000)

class Comics {
    constructor(id, nombre, precio, editorial) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.editorial = editorial
    }
}