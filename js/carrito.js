// Precios de las productos
const precios = {
    va: 45000,
    en: 43000,
    te: 51000,
    ca: 46000,
    cl: 43000,
    co: 76000,
};

// Carrito y total
let carrito = [];
let total = 0;

function agregarAlCarrito() {
    // Cantidades de productos
    const cantidadVa = parseInt(document.getElementById("va").value);
    const cantidadEn = parseInt(document.getElementById("en").value);
    const cantidadTe = parseInt(document.getElementById("te").value);
    const cantidadCa = parseInt(document.getElementById("ca").value);
    const cantidadCl = parseInt(document.getElementById("cl").value);
    const cantidadCo = parseInt(document.getElementById("co").value);

    // Vaciar el carrito actual
    carrito = [];
    total = 0;

    // Agregar productos seleccionados al carrito
    if (cantidadVa > 0) {
        carrito.push({ nombre: "Pantalones Vaqueros", cantidad: cantidadVa, precio: precios.va });
        total += cantidadVa * precios.va;
    }
    if (cantidadEn > 0) {
        carrito.push({ nombre: "Jeans Entubados", cantidad: cantidadEn, precio: precios.en });
        total += cantidadEn * precios.en;
    }
    if (cantidadTe > 0) {
        carrito.push({ nombre: "Blusa de Tela", cantidad: cantidadTe, precio: precios.te });
        total += cantidadTe * precios.te;
    }
    if (cantidadCa > 0) {
        carrito.push({ nombre: "Jeans de Campana", cantidad: cantidadCa, precio: precios.ca });
        total += cantidadCa * precios.ca;
    }
    if (cantidadCl > 0) {
        carrito.push({ nombre: "Jeans Clasicos", cantidad: cantidadCl, precio: precios.cl });
        total += cantidadCl * precios.cl;
    }
    if (cantidadCo > 0) {
        carrito.push({ nombre: "Combo Blusa/Short", cantidad: cantidadCo, precio: precios.co });
        total += cantidadCo * precios.co;
    }

    // Actualizar el carrito y el total
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoElement = document.getElementById("carrito");
    carritoElement.innerHTML = "";

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = `${item.cantidad} x ${item.nombre} - $${(item.cantidad * item.precio)}`;
        carritoElement.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function solicitarPedido() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Por favor, agregar productos.");
        return;
    }

    let pedido = "Tu pedido:\n";
    carrito.forEach(item => {
        pedido += `${item.cantidad} x ${item.nombre} - $${(item.cantidad * item.precio)}\n`;
    });
    pedido += `Total: $${total}`;
    alert(pedido);
}

function limpiarCarrito() {
    document.getElementById("va").value = 0;
    document.getElementById("en").value = 0;
    document.getElementById("te").value = 0;
    document.getElementById("ca").value = 0;
    document.getElementById("cl").value = 0;
    document.getElementById("co").value = 0;

    carrito = [];
    total = 0;
    actualizarCarrito();
}