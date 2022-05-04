// Simulador de e-commerce ferretero

/* VARIABLES GLOBABLES */
const mostrarProductos = document.getElementById("containerProductos");
const divCarrito = document.getElementById("carrito");
const btnCarritoHTML = document.getElementById("btnCarrito");
const mostrarCarrito = document.getElementById("containerCarrito");
const totalCarrito = document.getElementById("carritoTotal");
const tamañoCarrito = document.getElementById("lenght");
const alertaCarrito = document.getElementById("alerta");
const carrito1 = JSON.parse(localStorage.getItem("carrito"));
/*====================*/
document.addEventListener("DOMContentLoaded", () => {
  if (carrito1) carrito = carrito1;
  
  mostrarCar(carrito);
  mostrarProducts();
  lenghtCarrito();
});


/* ARRAY CARRITO DE COMPRAS */
let carrito = [];

/* GUARDAR EN LOCAL STORAGE CARRITO DE COMPRAS */
const guardarLocal = (key, value) => {
  localStorage.setItem(key, value);
};

/* Funcion que determina el tamaño del carrito */
function lenghtCarrito() {
  const carrito1 = JSON.parse(localStorage.getItem("carrito"));
  carrito1.length === 0
    ? (tamañoCarrito.innerHTML = "")
    : (tamañoCarrito.innerHTML = `(${carrito.length})`);
}

/* Función que elimina un producto del carrito */
function quitarProducto(id) {
  let productoAEliminar = carrito.find((p) => p.id === id);
  let SumarStock = productos.find(p => p.id === id)

  SumarStock.stock++
  productoAEliminar.cantidad--;

  if (productoAEliminar.cantidad === 0) {
    let index = carrito.indexOf(productoAEliminar);
    carrito.splice(index, 1);

    Toastify({
      text: `¡Se eliminó el producto del carrito!`,
      className: "info",
      position: "center",
      color: "white",
      style: {
        background: "red",
      }
    }).showToast();
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCar(carrito);
  lenghtCarrito()
}
/* Función que determina el total a pagar */
function calcularTotal() {
  const mostrarTotal = carrito.reduce((a, b) => a + b.precio * b.cantidad, 0);

  return mostrarTotal;
}

/* Función que agrega un producto al carrito */
function addToCar(productoId) {
  let productoEnCarrito = carrito.find((p) => p.id === productoId);
  for (const p of productos) {
    if (p.id === productoId) {
      if (p.stock != 0) {
        p.stock -= 1;
        if (productoEnCarrito) {
          productoEnCarrito.cantidad += 1;
        } else {
          const { id, nombre, precio, img } = productos.find(
            (p) => p.id === productoId
          );
          carrito.push({
            id: id,
            nombre: nombre,
            precio: precio,
            img: img,
            cantidad: 1,
          });

          Toastify({
            text: `¡Agregaste al carrito un ${p.nombre}!`,
            className: "info",
            position: "center",
            color: "white",
            style: {
              background: "green",
            }
          }).showToast();

        }
      } else {
        Toastify({
          text: `¡No hay más stock de ${p.nombre}!`,
          className: "info",
          position: "center",
          color: "white",
          style: {
            background: "red",
          }
        }).showToast();
      }
    }
  }

  guardarLocal("carrito", JSON.stringify(carrito));
  mostrarCar(carrito);
  lenghtCarrito();
}


/* Mostrar productos en el DOM*/
function mostrarProducts() {

  productos.map((p) => {
    const productCard = document.createElement("div");
    productCard.classList.add("productCard");

    const productImage = document.createElement("div");
    productImage.classList.add("productImage");

    const imgProducto = document.createElement("img");
    imgProducto.src = p.img;
    imgProducto.classList.add("imagen-producto");

    const productInfo = document.createElement("div");
    productInfo.classList.add("div");

    const productNameDiv = document.createElement("div");
    productNameDiv.classList.add("productName");

    const productName = document.createElement("h3");
    productName.textContent = p.nombre;

    const productDep = document.createElement("div");
    productDep.classList.add("productDep");

    const categoriaName = document.createElement("h3");
    categoriaName.textContent = p.departamento;

    const stock = document.createElement("h3");
    stock.textContent = `Stock: ${p.stock}`;

    const productAgregar = document.createElement("div");
    productAgregar.classList.add("productAgregar");

    const precio = document.createElement("h3");
    precio.textContent = `$. ${p.precio}`;

    const productBtn = document.createElement("button");
    productBtn.className = "productBtn";
    productBtn.textContent = "Agregar";
    productBtn.onclick = () => {
      addToCar(p.id);

      p.stock === 0 ? stock.textContent = `Stock: ${p.stock}` : stock.textContent = `Stock: ${p.stock}`

    };

    productCard.appendChild(productImage);
    productImage.appendChild(imgProducto);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productNameDiv);
    productNameDiv.appendChild(productName);
    productInfo.appendChild(productDep);
    productDep.appendChild(categoriaName);
    productDep.appendChild(stock);
    productInfo.appendChild(productAgregar);
    productAgregar.appendChild(precio);
    productAgregar.appendChild(productBtn);

    mostrarProductos.appendChild(productCard);
  });
}

/* Función para mostrar el carrito */
function mostrarCar(c) {
  mostrarCarrito.innerHTML = ""
  c.map((p) => {
    const listaCarrito = document.createElement("div");
    listaCarrito.classList.add("listaCarrito");

    const productoEnCarrito = document.createElement("div");
    productoEnCarrito.classList.add("productoEnCarrito");

    const prodImg = document.createElement("img");
    prodImg.classList.add("prodImg");
    prodImg.src = p.img;

    const productoNombre = document.createElement("h5");
    productoNombre.textContent = `${p.nombre}  x${p.cantidad}`;

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btnEliminar");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = () => {
      quitarProducto(p.id);
      
      
    };

    const precioProductoenCarrito = document.createElement("div");
    precioProductoenCarrito.classList.add("precioProductoenCarrito");

    const precioProducto = document.createElement("h5");
    precioProducto.textContent = `$. ${p.precio * p.cantidad}`;

    listaCarrito.appendChild(productoEnCarrito);
    productoEnCarrito.appendChild(prodImg);
    productoEnCarrito.appendChild(productoNombre);
    productoEnCarrito.appendChild(btnEliminar);
    listaCarrito.appendChild(precioProductoenCarrito);
    precioProductoenCarrito.appendChild(precioProducto);

    mostrarCarrito.appendChild(listaCarrito);
    console.log(carrito.length);
  });
  if(carrito.length === 0) mostrarCarrito.innerHTML = "¡El carrito está vacio!"
  totalCar();
}

/* Función para mostrar el total a pagar */
function totalCar() {
  totalCarrito.innerHTML = "";
  const total = document.createElement("div");
  total.classList.add("total");

  const totalTitle = document.createElement("div");
  totalTitle.classList.add("totalTitle");

  const title = document.createElement("h3");
  title.textContent = "Total a pagar";

  const totalMonto = document.createElement("div");
  totalMonto.classList.add("totalMonto");

  const monto = document.createElement("h3");
  monto.textContent = `$. ${calcularTotal()}`;

  total.appendChild(totalTitle);
  totalTitle.appendChild(title);
  total.appendChild(totalMonto);
  totalMonto.appendChild(monto);

  totalCarrito.appendChild(total);
}
