


const Producto = function(nombre,precio,stock){
    this.nombre= nombre,
    this.precio = precio
    this. stock = stock
}

let producto1= new Producto ("lenovo", 350000, 20)
let producto2= new Producto ("lenovo pad", 45500, 26)
let producto3= new Producto ("macbook", 700000, 45)
let producto4= new Producto ("apple pad", 350000, 23)
let producto5= new Producto ("smartwatch", 10000, 10)

let lista = [producto1,producto2,producto3,producto4,producto5]



function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar").trim().toUpperCase()
    let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
    }else{
        alert("no se encontro ninguna coincidencia con: "+ palabraClave)
    }

}              

function agregarProducto(){
    let nombre = prompt ("ingresa el nombre del producto").trim()
    let precio = parseFloat(prompt("ingrese el precio del producto: "))
    let stock = parseInt(prompt("ingresa el stock del producto: "))

    if(isNaN(precio) || isNaN(stock) || nombre === ""){
        alert("por favor ingresa valores validos")
        return
    }

    let producto = new Producto(nombre,precio,stock);


    if(lista.some((x)=> x.nombre === producto.nombre)){
        alert("el producto ya existe")
        return;
    } 

    lista.push(producto)
    console.table(lista)

}