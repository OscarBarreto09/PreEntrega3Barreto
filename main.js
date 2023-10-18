
alert("¡Usted se ha ganado un código promocional: OSCAR10!");

const carroDeCompras = JSON.parse(localStorage.getItem('carrito')) || [];

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function agregarAlCarrito(nombre, precio) {
    const producto = new Producto(nombre, precio);
    carroDeCompras.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carroDeCompras));
    mostrarCarrito();
}

function precioDelCarrito() {
    return carroDeCompras.reduce((acumulado, producto) => producto.precio + acumulado, 0);
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');

    // Limpiar la lista antes de volver a dibujarla
    
    listaCarrito.innerHTML = ''; 

    let total = 0;

    carroDeCompras.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);

        total += item.precio;
    });

    totalCarrito.textContent = total;
}

function aplicarDescuento() {
    const cuponInput = document.getElementById('cupon');
    const codigoCupon = cuponInput.value.trim().toUpperCase();

    if (codigoCupon === "OSCAR10") {
        const precioConDescuento = precioDelCarrito() * 0.9 * 1.16;
        alert(`El precio de sus productos con descuento es de $${precioConDescuento.toFixed(2)}. ¡Gracias por utilizar el código OSCAR10!`);
    } else {
        alert("Código promocional no válido. El precio de sus productos es de $" + (precioDelCarrito() * 1.16).toFixed(2));
    }
}

function realizarCompra() {
    const precioFinal = precioDelCarrito();
    alert(`El precio de sus productos es de $${(precioFinal * 1.16).toFixed(2)} sin descuento y con IVA.`);
}

function limpiarCarrito() {
    carroDeCompras.length = 0;
    localStorage.setItem('carrito', JSON.stringify(carroDeCompras));
    mostrarCarrito();
}

function ejecutarCarrito() {
    document.getElementById("productos").style.display = "block";
    document.getElementById("carrito").style.display = "block";
    mostrarCarrito();
}

ejecutarCarrito();
