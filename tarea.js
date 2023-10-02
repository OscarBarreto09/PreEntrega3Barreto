// pedimos al usuario que inrese varios datos en una funcion constructora
// mientras el usuario siga agregando cosas, lo agregamos al array 
// mostrar solo una de las propiedades de TODOS los datos, en la consola 
// encontrar un dato dentro del array y eliminarlo 


const cositas =[]

// Se declara funcion constructora

function Productos(nombre, precio, marca, size){
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.size = size;
}

// Se pide al usuario que agregue los productos

while (prompt("Quieres agregar un producto?").toLowerCase()== "si"){
    let nuevo =  new Productos (prompt("Nombre"), parseFloat(prompt("Precio")), prompt("Marca"), prompt("Size"))
    cositas.push(nuevo)
    console.log(nuevo)
}


// Se muestra una sola propiedad de TODOS los datos, en la consola 


const actualizado = cositas.map(x => x.marca)

console.log(actualizado)


// Encontrar un dato dentro del array y eliminarlo 


const eliminado = cositas.filter(x => x.precio != 20000)


console.log("eliminado: ", eliminado)

