// Productos
const productos = [
    { id: 1, nombre: "Croissant", precio: 4, img: "https://panamarbakery.com/public/Image/2022/10/130571_croissant_choco_blanco95_Galeria.png" },
    { id: 2, nombre: "Concha", precio: 8, img: "https://i5-mx.walmartimages.com/gr/images/product-images/img_large/00020010100000L3.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" },
    { id: 3, nombre: "Donut", precio: 10, img: "https://wuollet.com/cdn/shop/products/62d88878e755e8848e69cbb8_5edc3fece5cf1e090554e22e_sprinkled_2520yeast_2520donut_4bb0f82a-271e-4f8d-959a-86d795cc4581_grande.jpg?v=1675114152" },
    { id: 4, nombre: "Bagel", precio: 22, img: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bagel.jpg" },
    { id: 5, nombre: "Muffin", precio: 5, img: "https://saboresdeljardin.wordpress.com/wp-content/uploads/2010/10/muffin.jpg" },
    { id: 6, nombre: "Pretzel", precio: 3, img: "https://www.brekz.it/47108/large_default.jpg" },
    { id: 7, nombre: "Eclair", precio: 4, img: "https://kafo.cr/wp-content/uploads/2023/03/eclaire.jpg" },
    { id: 8, nombre: "Macaron", precio: 30, img: "https://www.colofonpasteleria.com/wp-content/uploads/2020/05/colofon_pasteleria_artesanal_burgos_macarons_rosas_frambuesa_01.jpg" },
    { id: 9, nombre: "Brownie", precio: 9, img: "https://img.freepik.com/foto-gratis/porcion-brownie-chocolate-aislada-sobre-fondo-blanco_123827-27904.jpg" },
    { id: 10, nombre: "Cheesecake", precio: 6, img: "https://kuchenaltareposteria.com/cdn/shop/products/pastelrebanado_76ddf6f7-83ca-4f50-8e0c-dae90aa2dd26_1000x.png?v=1665438075" },
    { id: 11, nombre: "Tartaleta", precio: 15, img: "https://elatelierdediegocaride.com/850-large_default/tartaleta-lemon-pie-con-frutas-y-chocolatina.jpg" },
    { id: 12, nombre: "Galleta", precio: 2.5, img: "https://ketology.mx/cdn/shop/files/cocochip_691306c3-d449-4211-bb4c-3aa7c4cf796e.png?v=1711666323" },
    { id: 13, nombre: "Churro", precio: 1.5, img: "https://precofood.com/wp-content/uploads/2021/03/churros.png" },
    { id: 14, nombre: "Pancake", precio: 10, img: "https://olo-images-live.imgix.net/b1/b1012946e0e445fd9731477df3902227.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=860&h=484&fit=fill&bg=%23fff&s=23c3078d7dac8ba872e30d91ecc4f0ed" },
    { id: 15, nombre: "Waffle", precio: 5, img: "https://olo-images-live.imgix.net/48/48011a73b27347a68719c33b10f4faba.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=860&h=484&fit=fill&bg=%23fff&s=2fe9304efcfb961223d86dc38a7cb551" },
    { id: 16, nombre: "Cupcake", precio: 15, img: "https://listonic.com/phimageproxy/listonic/products/cupcakes.webp" },
    { id: 17, nombre: "Pastel", precio: 300, img: "https://walmartsv.vtexassets.com/arquivos/ids/176627/Pastel-Choco-Galleta-10-Porciones-1-12076.jpg?v=637642621992170000" },
    { id: 18, nombre: "Tiramisu", precio: 120, img: "https://listonic.com/phimageproxy/listonic/products/tiramisu_cake.webp" },
    { id: 19, nombre: "Cannoli", precio: 20, img: "https://sweetboutique.ca/cdn/shop/products/plain-cannoli.jpg?v=1635522320" },
    { id: 20, nombre: "Flan", precio: 45, img: "https://elcajeton.com/wp-content/uploads/2023/04/cajeton-receta-flan.png" },
    { id: 21, nombre: "Profiterol", precio: 36, img: "https://www.krispykreme.mx/wp-content/uploads/2024/07/shell-crema-pastelera-dona-profiterol.webp" },
    { id: 22, nombre: "Napolitana", precio: 27, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCCBKAqG9ph-KtG0abqWvTlN6psKiDXtFGBg&s" },
    { id: 23, nombre: "Panqué", precio: 23, img: "https://lh6.googleusercontent.com/proxy/FY3DCtmLQIQrjzmrAWyfPOexTXCMGVP8tddPlbtxlCjwH4sBQMXNAc-fWF8P35ubHOXwHWuIDgkYyLEyA_WokRABYMA_9eSxqg" },
    { id: 24, nombre: "Strudel", precio: 42, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShBw-yUz3jujADIaSrEq7RKhtnM-e14tIu5Q&s" }
];

// Mostrar productos
const contenedorProductos = document.getElementById("productos");
if (contenedorProductos) {
    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <div class="producto">
                <img src="${producto.img}" alt="${producto.nombre}" width="100">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio.toFixed(2)}</p>
                <input type="number" id="cantidad-${producto.id}" min="1" value="1" style="width: 50px;">
                <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
            </div>
        `;
    });
}

// Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Agregar al carrito con cantidad personalizada
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const cantidadInput = document.getElementById(`cantidad-${id}`);
    const cantidad = parseInt(cantidadInput.value) || 1;
    
    if (!producto) {
        alert("Producto no encontrado");
        return;
    }

    if (cantidad <= 0) return;

    const item = carrito.find(p => p.id === id);

    if (item) {
        item.cantidad += cantidad;
    } else {
        carrito.push({ ...producto, cantidad });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarMensaje(`${cantidad} ${producto.nombre}(s) fue(ron) agregado(s) al carrito`);
}

// Mostrar mensaje temporal
function mostrarMensaje(texto) {
    const mensaje = document.getElementById("mensaje");
    if (mensaje) {
        mensaje.textContent = texto;
        setTimeout(() => mensaje.textContent = "", 2000);
    }
}

// Mostrar carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    const totalContainer = document.getElementById("total");

    carritoContainer.innerHTML = "";
    let total = 0;

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        carritoContainer.innerHTML += `
            <div class="producto">
                <h3>${item.nombre}</h3>
                <p>$${item.precio.toFixed(2)} x ${item.cantidad} = $${subtotal.toFixed(2)}</p>
                <button onclick="aumentarCantidad(${item.id})">➕</button>
                <button onclick="reducirCantidad(${item.id})">➖</button>
                <button onclick="eliminarDelCarrito(${index})">❌ Eliminar</button>
            </div>
        `;
    });

    totalContainer.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
}

// Aumentar cantidad
function aumentarCantidad(id) {
    const item = carrito.find(p => p.id === id);
    if (item) {
        item.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
    }
}

// Reducir cantidad o eliminar si llega a 0
function reducirCantidad(id) {
    const item = carrito.find(p => p.id === id);
    if (item) {
        item.cantidad--;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(p => p.id !== id);
        }
        localStorage.setItem("carrito", JSON.stringify(carrito));
        mostrarCarrito();
    }
}

// Eliminar producto
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Vaciar carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// Comprar
function comprar() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos para comprar.");
        return;
    }

    localStorage.removeItem("carrito");
    carrito = [];
    mostrarCarrito();

    const mensajeCompra = document.getElementById("mensajeCompra");
    mensajeCompra.textContent = "¡Compra realizada con éxito! Gracias por tu compra.";
    setTimeout(() => mensajeCompra.textContent = "", 3000);
}

// Ir a inicio
function irAInicio() {
    window.location.href = "index.html";
}

// Mostrar carrito si estamos en la página del carrito
if (window.location.pathname.includes("cart.html")) {
    mostrarCarrito();
}
