

function calcularPrecio (producto, descuento){
    return producto[1]*1.16*(1-descuento)
}

alert ("Usted se ha ganado un codigo promocional: OSCAR10")

let proteina = ["proteina", 300000];
let creatina = ["creatina", 150000];
let aminoacidos = ["aminoacidos", 200000];
let productoSeleccionado;

while (productoSeleccionado==null){
    let nombre = prompt ("Que producto desea comprar \n -Proteina \n -Creatina \n -Aminoacidos")
    nombre=nombre.toLowerCase()
    if (nombre=="proteina"){
        productoSeleccionado=proteina;
    }
    else if(nombre=="creatina"){
        productoSeleccionado=creatina;
    }
    else if(nombre=="aminoacidos"){
        productoSeleccionado=aminoacidos;
    }
    else{
        alert ("El producto que usted selecciono no esta en nuestro catalogo")
    }
}

let codigo = prompt ("Ingrese su codigo promocional (si NO tiene, escriba NO)")

if (codigo=="OSCAR10"){
    alert ("El precio de su "+productoSeleccionado[0] + " es de "+ Math.round(calcularPrecio (productoSeleccionado,0.1) ))
}
else{
    alert  ("El precio de su "+productoSeleccionado[0] + " es de "+ Math.round (productoSeleccionado[1]*1.16))
}