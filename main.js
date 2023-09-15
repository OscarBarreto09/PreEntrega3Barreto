
 //CLASE 01


//esta variable ya no se utiliza mas en la programacion

/*var mate = "yerba"*/

/*let taza = "cafe"               //variable, porque el contenido puede cambiar 
taza = "mate-cocido"
taza = "cafe con leche"



const azucarera = "azucar"        //constante, porque el contenido siempre sera el mismo 


// El = hace referencia a la asignacion de la variable 

// Dos = = seguidos se comparan 


//CLASE 02

let num1 = prompt ("ingresa el numero")
let num2 = prompt ("ingresa el numero")

if (num1 == num2){
    //El codigo a ejecutar
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}

/*Anidaciones

Else if: se utiliza para anidar mas condicionales*//*  */

/*Operadores Logicos */

// ESTTRUCUTR DEL FOR 

/* 

DESDE  ;    HASTA;    ACTUALIZACION

*/

/*
for (let i = 0; i < 10; i++) {
    alert(i)
}*/


function costoDescuentosImpuestos(precio, descuentos, impuestos){
    //Asumir que descuentos son >=0 y <100% e impuestos>=0
    let final = precio;
    if(typeof(descuentos)=="number"){
        final*=(1-descuentos);
    }
    else{
        for(let i=0;i<descuentos.length;i++){
            final*=(1-descuentos[i]);
        }
    }
    if(typeof(impuestos)=="number"){
        final*=(1+impuestos);
    }
    else{
        for(let i=0;i<impuestos.length;i++){
            final*=(1+impuestos[i]);
        }
    }

    return final;
}

function getImpuestos(){
    let impuestos = [];
    let conditional = true;
    let contador=0;
    while(conditional){
        let temp = parseFloat(prompt("Ingrese un impuesto [%] \n Nota: si no hay impuestos, ingrese 0."));
        if(temp == 0){
            conditional = false;
            console.log(temp)
        }
        else{
            impuestos[contador]=temp/100;
            contador++;
        }
    }
        return impuestos;
}

let a = parseFloat (prompt ("ingrese el costo del producto"))
let b = parseFloat (prompt ("ingrese el descuento"))
let c = getImpuestos();

alert ("el costo final es: " + costoDescuentosImpuestos (a,b,c))


