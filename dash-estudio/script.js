// =====================================
// DASH ESTUDIO
// FUNCIONES DE LA PÁGINA
// =====================================


// Mostrar mensaje cuando se carga la página

document.addEventListener("DOMContentLoaded", function () {

    console.log("DASH ESTUDIO - Página cargada correctamente");

});


// =====================================
// BOTONES DE COMPRA
// =====================================

// Seleccionamos todos los botones de compra

const botonesComprar = document.querySelectorAll(".comprar");


// Agregamos una función a cada botón

botonesComprar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        console.log("El cliente seleccionó un producto");

    });

});


// =====================================
// ANIMACIÓN AL HACER SCROLL
// =====================================

const productos = document.querySelectorAll(".producto");


function mostrarProductos() {

    productos.forEach(function (producto) {

        const posicion = producto.getBoundingClientRect();

        if (posicion.top < window.innerHeight - 100) {

            producto.style.opacity = "1";

            producto.style.transform = "translateY(0)";

        }

    });

}


productos.forEach(function (producto) {

    producto.style.opacity = "0";

    producto.style.transform = "translateY(30px)";

    producto.style.transition = "0.6s";

});


window.addEventListener("scroll", mostrarProductos);


// Ejecutar una vez al cargar

mostrarProductos();