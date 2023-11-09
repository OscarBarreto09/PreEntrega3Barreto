const url = "https://rickandmortyapi.com/api/character/?page=19";
const container = document.getElementById("personajes");
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let precioTotal = 0; // Variable para almacenar el precio total

const precios = {
  1: 500000,
  2: 150000,
  3: 300000,
  4: 100000,
  5: 200000,
  6: 380000,
  7: 50000,
  8: 80000,
  9: 110000,
  10: 120000,
  11: 80000,
  12: 280000,
  13: 60000,
  14: 80000,
  15: 290000,
  16: 180000,
  17: 310000,
  18: 275000,
  19: 85000,
  20: 310000,
};

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const characters = data.results;
    let currentContainer;

    characters.forEach((character, index) => {
      if (index % 4 === 0) {
        currentContainer = document.createElement("div");
        currentContainer.className =
          "row mt-6 mb-5 d-flex justify-content-around";
        container.appendChild(currentContainer);
      }

      const price = precios[index + 1] || 1000;

      const card = document.createElement("div");
      card.className = "col-md-2";

      card.innerHTML = `
        <div class="card" style="width: 18rem;">
          <img src="${character.image}" class="card-img-top" alt="${character.name}">
          <div class="card-body cardPersonajes">
            <h4 class="card-title tituloCarta">${character.name}</h4>
            <p class="card-subtitle descripcion mb-2">${character.species}</p>
            <p class="card-subtitle descripcion mb-2">${character.status}</p>
            <p class="card-text titutloPrecio">Precio: $${price}</p>
            <button class="btn btn-primary addToCartBtn">Agregar al carrito</button>
          </div>
        </div>
      `;

      currentContainer.appendChild(card);

      const addToCartBtn = card.querySelector(".addToCartBtn");
      addToCartBtn.addEventListener("click", () => addToCart(character, price));
    });
  });

function addToCart(character, price) {
  carrito.push({ character, price });
  precioTotal += price; // Sumar el precio al precio total

  // Guardar en localStorage (conversión a cadena JSON)
  localStorage.setItem('carrito', JSON.stringify(carrito));

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Personaje agregado al carrito",
    showConfirmButton: false,
    timer: 800
  });

  const offcanvasBody = document.getElementById("carrito");

  const miniCard = document.createElement("div");
  miniCard.className = "card mb-3 miniCarta";
  miniCard.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${character.image}" class="img-fluid rounded-start" alt="${character.name}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title tituloCarta2">${character.name}</h5>
          <p class="card-text ">Precio: $${price}</p>
        </div>
      </div>
    </div>
  `;

  offcanvasBody.appendChild(miniCard);

  // Actualizar el elemento con el ID "precioTotal"
  const precioTotalElement = document.getElementById("precioTotal");
  precioTotalElement.innerHTML = `Precio Total: $${precioTotal}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const eliminarBtn = document.getElementById("eliminar");
  eliminarBtn.innerHTML = '<button class="btn btn-danger">Eliminar Carrito</button>';

  const carritoElement = document.getElementById("carrito");

  eliminarBtn.addEventListener("click", () => {
    // Mostrar Sweet Alert de confirmación
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará todos los elementos del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar todos los elementos del carrito
        carritoElement.innerHTML = "";
        
        // Reiniciar el precio total
        precioTotal = 0;

        // Limpiar el localStorage
        localStorage.removeItem('carrito');

        // Mostrar Sweet Alert
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Los elementos se han eliminado",
          showConfirmButton: false,
          timer: 1500
        });

        // Actualizar el elemento con el ID "precioTotal"
        const precioTotalElement = document.getElementById("precioTotal");
        precioTotalElement.innerHTML = `Precio Total: $${precioTotal}`;
      }
    });
  });

  // Agregar botón "Finalizar Compra"
  const finalizarCompraBtn = document.getElementById("finalizarCompra");
  finalizarCompraBtn.innerHTML = '<button class="btn btn-success">Finalizar Compra</button>';

  finalizarCompraBtn.addEventListener("click", () => {
    // Mostrar Sweet Alert de confirmación
    Swal.fire({
      title: '¿Finalizar compra?',
      text: '¿Estás seguro de finalizar la compra?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Mostrar Sweet Alert con el precio final
        Swal.fire({
          title: '¡Compra Finalizada!',
          text: `El precio total de la compra es: $${precioTotal}`,
          icon: 'success',
          confirmButtonColor: '#28a745'
        });

        // Eliminar las mini cards y el carrito de compras
        carrito = [];
        localStorage.removeItem('carrito');
        carritoElement.innerHTML = "";

        // Reiniciar el precio total
        precioTotal = 0;

        // Actualizar el elemento con el ID "precioTotal"
        const precioTotalElement = document.getElementById("precioTotal");
        precioTotalElement.innerHTML = `Precio Total: $${precioTotal}`;
      }
    });
  });
});
