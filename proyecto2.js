
alert ("Usted se ha ganado un codigo promocional: OSCAR10")

const carroDeCompras = []

function Producto (nombre, precio, marca){
    this.nombre=nombre;
    this.precio=precio;
    this.marca=marca;
}

let producto1 = new Producto ("proteina", 250000, "carnivor")
let producto2 = new Producto ("creatina", 150000, "universal")
let producto3 = new Producto ("aminoacidos", 180000, "metrx")
let producto4 = new Producto ("pre-entreno", 150000, "c4")
let producto5 = new Producto ("multivitaminico", 220000, "animal")

let lista = [producto1, producto2, producto3, producto4, producto5]


function precioDelCarrito (){
    return carroDeCompras.reduce((acumulado,x) => (x.precio+acumulado), 0)
}

function agregarAlCarrito (){
    let pregunta = prompt (`Quieres agregar un producto?`).toLocaleLowerCase()

    if (pregunta == "si"){
        
        let nuevoProducto = prompt(`Que producto quieres agregar?
        1. Proteina
        2. Creatina 
        3. Aminoacidos
        4. Pre-Entreno
        5. Multivitaminico`).toLowerCase().trim();
    
        let existe = lista.reduce((acomulado, x) => (x.nombre == nuevoProducto) || acomulado, false)
    
        if (existe){
            let agregar = lista.filter (x => x.nombre == nuevoProducto)
            carroDeCompras.push(agregar[0])
            agregarAlCarrito ();

        } else {
            console.log(existe)
    
        alert ("Este producto no se encontro")    
        agregarAlCarrito()
        }
    }
    else if (pregunta=="no"){
        let precioFinal = precioDelCarrito();
        alert(precioFinal==0?"Tu carro de compras esta vacio":"Este es el precio de tus productos : $"+precioFinal+" sin descuento y sin IVA.")
    }
    else {
        alert(`Respuesta Incorrecta`)
        agregarAlCarrito();
    }

}


agregarAlCarrito()


let codigo = prompt ("Ingrese su codigo promocional (si NO tiene, escriba NO)")

if (codigo=="OSCAR10"){
    alert ("El precio de sus productos es de $"+ (precioDelCarrito ()*0.9*1.16 ))
}
else{
    alert  ("El precio de sus productos es de $"+ (precioDelCarrito()*1.16))
}

