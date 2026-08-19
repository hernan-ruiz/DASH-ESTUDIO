// ======================================
// CARRITO DASH ESTUDIO
// ======================================

let carrito = [];


// BOTÓN DEL CARRITO

const botonCarrito =
    document.getElementById("boton-carrito");

const carritoVentana =
    document.getElementById("carrito");

const cerrarCarrito =
    document.getElementById("cerrar-carrito");


// ABRIR CARRITO

botonCarrito.addEventListener("click", function () {

    carritoVentana.classList.add("activo");

});


// CERRAR CARRITO

cerrarCarrito.addEventListener("click", function () {

    carritoVentana.classList.remove("activo");

});


// BOTONES AGREGAR AL CARRITO

const botonesComprar =
    document.querySelectorAll(".comprar");


botonesComprar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const nombre =
            boton.dataset.nombre;

        const precio =
            Number(boton.dataset.precio);


        const productoExistente =
            carrito.find(function (producto) {

                return producto.nombre === nombre;

            });


        if (productoExistente) {

            productoExistente.cantidad++;

        } else {

            carrito.push({

                nombre: nombre,

                precio: precio,

                cantidad: 1

            });

        }


        actualizarCarrito();

        carritoVentana.classList.add("activo");

    });

});


// ======================================
// MOSTRAR CARRITO
// ======================================

function actualizarCarrito() {

    const lista =
        document.getElementById("lista-carrito");

    const total =
        document.getElementById("total-carrito");

    const contador =
        document.getElementById("contador-carrito");


    lista.innerHTML = "";


    let totalCompra = 0;

    let cantidadProductos = 0;


    if (carrito.length === 0) {

        lista.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío.
            </p>
        `;

    }


    carrito.forEach(function (producto, indice) {


        const subtotal =
            producto.precio *
            producto.cantidad;


        totalCompra += subtotal;

        cantidadProductos +=
            producto.cantidad;


        const productoHTML = `

            <div class="producto-carrito">

                <div>

                    <h3>
                        ${producto.nombre}
                    </h3>

                    <p>
                        $${producto.precio.toLocaleString("es-CO")}
                    </p>

                </div>


                <div class="cantidad">

                    <button
                        onclick="disminuirCantidad(${indice})"
                    >
                        −
                    </button>


                    <span>
                        ${producto.cantidad}
                    </span>


                    <button
                        onclick="aumentarCantidad(${indice})"
                    >
                        +
                    </button>

                </div>


                <strong>

                    $${subtotal.toLocaleString("es-CO")}

                </strong>


                <button
                    class="eliminar"
                    onclick="eliminarProducto(${indice})"
                >
                    🗑️
                </button>

            </div>

        `;


        lista.innerHTML += productoHTML;

    });


    total.textContent =
        "$" + totalCompra.toLocaleString("es-CO");


    contador.textContent =
        cantidadProductos;

}


// ======================================
// AUMENTAR CANTIDAD
// ======================================

function aumentarCantidad(indice) {

    carrito[indice].cantidad++;

    actualizarCarrito();

}


// ======================================
// DISMINUIR CANTIDAD
// ======================================

function disminuirCantidad(indice) {

    if (carrito[indice].cantidad > 1) {

        carrito[indice].cantidad--;

    } else {

        carrito.splice(indice, 1);

    }


    actualizarCarrito();

}


// ======================================
// ELIMINAR PRODUCTO
// ======================================

function eliminarProducto(indice) {

    carrito.splice(indice, 1);

    actualizarCarrito();

}


// ======================================
// COMPRAR POR WHATSAPP
// ======================================

const comprarWhatsapp =
    document.getElementById("comprar-whatsapp");


comprarWhatsapp.addEventListener(
    "click",
    function () {


        if (carrito.length === 0) {

            alert(
                "Tu carrito está vacío."
            );

            return;

        }


        let mensaje =
            "Hola DASH ESTUDIO 👋%0A%0A";

        mensaje +=
            "Quiero realizar el siguiente pedido:%0A%0A";


        let totalCompra = 0;


        carrito.forEach(function (producto) {


            const subtotal =
                producto.precio *
                producto.cantidad;


            totalCompra += subtotal;


            mensaje +=
                "• " +
                producto.nombre +
                " x" +
                producto.cantidad +
                " = $" +
                subtotal.toLocaleString("es-CO") +
                "%0A";

        });


        mensaje +=
            "%0A💰 Total: $" +
            totalCompra.toLocaleString("es-CO");


        mensaje +=
            "%0A%0AQuedo atento/a para realizar la compra. 😊";


        const numero =
            "573166867792";


        const enlace =
            "https://wa.me/" +
            numero +
            "?text=" +
            mensaje;


        window.open(
            enlace,
            "_blank"
        );

    }
);