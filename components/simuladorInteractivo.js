// Calcular pagos en cuotas sobre un monto determinado.

/* VARIABLES GLOBABLES */
let totalAPagar = 0;
let aLlevar;
let xDepartamento;
let totalxCuotas;
const mostrarProductos = document.getElementById("containerProductos")
const mostrarCarrito = document.getElementById("containerCarrito")
const totalCarrito = document.getElementById("carritoTotal")

/*====================*/

/* ARRAY */
const productos = [
  {
    id:0,
    nombre: "Martillo",
    precio: 12000,
    stock: 3,
    departamento: "Herramientas",
    img: "https://th.bing.com/th/id/OIP.bwIzHu9M-nYWBjaJjXcx7gHaHa?pid=ImgDet&rs=1",
  },
  {
    id:1,
    nombre: "Taladro Dewalt",
    precio: 145000,
    stock: 0,
    departamento: "Herramientas",
    img: "https://http2.mlstatic.com/taladro-dewalt-dcd771c2-20v-max-12-nuevo-D_NQ_NP_718404-MLM25730731414_072017-F.jpg",
  },
  {
    id:2,
    nombre: "Linterna",
    precio: 5000,
    stock: 2,
    departamento: "Electricos",
    img: "https://http2.mlstatic.com/linterna-plastica-recargable-50-lumenes-11-leds-truper-19847-D_NQ_NP_177401-MLM20327985203_062015-F.jpg",
  },
  {
    id:3,
    nombre: "Pala",
    precio: 20000,
    stock: 1,
    departamento: "Herramientas",
    img: "https://www.bricomarian.com/4174-thickbox_default/pala-camping.jpg",
  },
  {
    id:4,
    nombre: "Destornillador",
    precio: 6000,
    stock: 10,
    departamento: "Herramientas",
    img: "https://www.urreaonline.mx/wp-content/uploads/sites/3/2021/04/9804R.jpg",
  },
  {
    id:5,
    nombre: "Bombillo LED",
    precio: 7000,
    stock: 4,
    departamento: "Electricos",
    img: "https://th.bing.com/th/id/OIP.jwYY8WLxmIOvfu9z8uAzWwHaHa?pid=ImgDet&rs=1",
  },
  {
    id:6,
    nombre: "Panel de luz de incrustar",
    precio: 14000,
    stock: 0,
    departamento: "Electricos",
    img: "https://static.wixstatic.com/media/f0ec05_226294eaf77b400f8f513e2caac77901~mv2.jpg/v1/fill/w_498,h_498,al_c,q_85,usm_0.66_1.00_0.01/f0ec05_226294eaf77b400f8f513e2caac77901~mv2.jpg",
  },
  {
    id:7,
    nombre: "Cemento 50kg",
    precio: 30000,
    stock: 10,
    departamento: "Construcción",
    img:"https://homecenterco.scene7.com/is/image/SodimacCO/33226?$producto310$",
  },
  {
    id:8,
    nombre: "Arena de pega",
    precio: 10000,
    stock: 8,
    departamento: "Construcción",
    img: "https://th.bing.com/th/id/OIP.nYixiinL8Tx5ir4fTHuRlQHaHa?pid=ImgDet&rs=1",
  },
  {
    id:9,
    nombre: "Arena de revoque",
    precio: 6000,
    stock: 2,
    departamento: "Construcción",
    img: "https://colcemento.com/img/c/27.jpg",
  },
  {
    id:10,
    nombre: "Pegacor",
    precio: 25000,
    stock: 0,
    departamento: "Construcción",
    img: "https://corona.co/medias/pegante-pegacor-interior-gris-25-kg-901021501.jpg?context=bWFzdGVyfGltYWdlc3w4NTg2OXxpbWFnZS9qcGVnfGhiMS9oZDUvODc5NjY4MzYzMjY3MC9wZWdhbnRlLXBlZ2Fjb3ItaW50ZXJpb3ItZ3Jpcy0yNS1rZy05MDEwMjE1MDEuanBnfGUxMTU2M2U1OGQxYjYyMDg1ZjJkZWMxNjQ0MTYxYzAyYjkxMGI5NTRhMTVmZDYwMjA1NDIzYjg4MjliMmMyZGY",
  },
];
const carrito = [];

/* FUNCIONES */
/*const sinStock = () => {
  const producto = productos
    .filter((p) => p.stock == 0)
    .map((p) => p.nombre)
    .join(" - ");
  alert(
    `¡ATENCIÓN! ⚠️\n Los siguientes productos no tienen stock en este momento:\n ${producto}`
  );
};*/
/*const buscarPorDepartamento = () => {
  do {
    xDepartamento = prompt(
      "¿Que árticulo estás buscando?\n Puedes conocerlo a través de nuestros departamentos, los cuales son\n (1) Herramientas\n (2) Electricos\n (3) Construcción\n Escribe salir para elegir los articulos a comprar"
    );
    if (xDepartamento === "salir") {
      break;
    }
    const producto = productos.find((p) => p.departamento == xDepartamento);
    console.log(producto);
    if (producto === undefined) {
      alert("No tenemos esa categoria");
    }

    for (const pro of productos) {
      if (pro.departamento == xDepartamento) {
        // console.log(`${p.nombre} tiene un valor de ${p.precio}`)
        alert(`${pro.nombre} tiene un valor de ${pro.precio}\n`);
      }
    }
  } while (xDepartamento != "");
};*/
/*function deposito() {
  do {
    aLlevar = prompt(
      "¿Que articulo llevarás? 🛒(Escribe 'salir' si deseas dejar de comprar) \n 1) Martillo \n 2) Linterna \n 3) Pala \n 4) Destornillador \n 5) Bombillo LED\n 6) Taladro Dewalt\n 7) Pegacor\n 8) Panel de luz de incrustar\n Escribe 'pagar' para pagar los productos seleccionados."
    );
    if (aLlevar === "pagar") {
      pregunta();
      break;
    } else if (aLlevar === "salir") {
      break;
    }

    const producto = productos.find((p) => p.nombre == aLlevar);

    if (producto === undefined) {
      alert("No tenemos ese producto");
    }

for (const pro of productos) {
  if(pro.id === btnCarrito.id){
  if (pro.stock != 0) {
    totalAPagar = totalAPagar + pro.precio;
    alert(
      `Se agregó al carrito un ${pro.nombre} con un valor de ${pro.precio}`
    );
    pro.stock -= 1;
    carrito.push(pro);
  } else {
    alert("¡No hay stock de este producto!");
  }
}
}
  } while (aLlevar);
}*/
function addToCar(id){
  for(const p of productos){
    if(p.id === id){
      if(p.stock != 0){
        totalAPagar = totalAPagar + p.precio;
        carrito.push(p)
        p.stock-=1
      }else{
        alert("NO HAY STOCK DE ESE PRODUCTO")
      }
    }
  }
  mostrarCar(carrito)
  totalCar()
}
/*function pagoPorCuotas() {
  let xCuotas;
  do {
    xCuotas = prompt("¿Deseas pagar a cuotas? (si o no)");
    if (xCuotas === "si") {
      let cuotas = parseInt(prompt("¿Cuantas cuotas?"));

      switch (cuotas) {
        case 2:
          totalxCuotas = Math.round(totalAPagar / 2);
          break;
        case 3:
          totalxCuotas = Math.round(totalAPagar / 3);
          break;
        case 6:
          totalxCuotas = Math.round(totalAPagar / 6);
          break;
        case 12:
          totalxCuotas = Math.round(totalAPagar / 12);
          break;
      }
      alert(
        `Pagarás a ${cuotas} cuotas de ${totalxCuotas} un total de ${totalAPagar}`
      );
      break;
    } else if (xCuotas === "no") {
      alert(`La cantidad total a pagar es de ${totalAPagar}`);
      alert("Saliste de la compra");
      break;
    } else {
      alert("¡La respuesta debe ser si o no! ⚠️");
    }
  } while (xCuotas != "");
}*/
/*const pregunta = () => {
  let qs;
  do {
    qs = prompt("¿Deseas seguir comprando? (si o no) 🛍️").toLowerCase();
    if (qs === "si") {
      deposito();
      break;
    } else if (qs === "no") {
      pagoPorCuotas();
      break;
    } else {
      alert("¡La respuesta debe ser si o no! ⚠️");
    }
  } while (qs != "");
};*/

/* FIN FUNCIONES */
/*let opciones;

do {
  opciones = parseInt(
    prompt(
      "FERRETERIA | MENU DE OPCIONES \n 1) Mostrar todos los productos\n 2) Mostrar categorias\n 3) Mostrar carrito \n 4) salir"
    )
  );
  switch (opciones) {
    case 1:
      sinStock();
      deposito();
      break;
    case 2:
      buscarPorDepartamento();
      break;
    case 3:
      const mostrarCarrito = carrito.map((c) => c.nombre).join("\n");
      const mostrarTotal = carrito.reduce((a, b) => a + b.precio, 0);
      alert(
        `Los productos a llevar son: \n ${mostrarCarrito} \n El total a pagar es de ${mostrarTotal} `
      );
      break;
    case 4:
      break;
    default:
      alert("Esa opción no existe");
      break;
  }
} while (opciones != 4);*/

 document.addEventListener("DOMContentLoaded", () => {
  mostrarProducts()
 })
 function mostrarProducts(){
  productos.map(p => {
    const productCard = document.createElement('div')
    productCard.classList.add('productCard')

    const productImage = document.createElement('div')
    productImage.classList.add('productImage')

    const imgProducto = document.createElement('img')
    imgProducto.src = p.img
    imgProducto.classList.add('imagen-producto')

    const productInfo = document.createElement('div')
    productInfo.classList.add("div")

    const productNameDiv = document.createElement('div')
    productNameDiv.classList.add('productName')

    const productName = document.createElement('h3')
    productName.textContent = p.nombre

    const productDep = document.createElement('div')
    productDep.classList.add("productDep")

    const categoriaName = document.createElement('h3')
    categoriaName.textContent = p.departamento

    const stock = document.createElement('h3')
    stock.textContent = `Stock: ${p.stock}`

    const productAgregar = document.createElement('div')
    productAgregar.classList.add('productAgregar')

    const precio = document.createElement('h3')
    precio.textContent = `$. ${p.precio}`

    const productBtn = document.createElement('button')
    productBtn.className = 'productBtn'
    productBtn.textContent = 'Agregar'
    productBtn.onclick = () => {
      addToCar(p.id)
    }

    productCard.appendChild(productImage)
    productImage.appendChild(imgProducto)
    productCard.appendChild(productInfo)
    productInfo.appendChild(productNameDiv)
    productNameDiv.appendChild(productName)
    productInfo.appendChild(productDep)
    productDep.appendChild(categoriaName)
    productDep.appendChild(stock)
    productInfo.appendChild(productAgregar)
    productAgregar.appendChild(precio)
    productAgregar.appendChild(productBtn)
  


    mostrarProductos.appendChild(productCard)


  })
}
  mostrarProductos.innerHTML = htmlProductos
  const btnCarrito = document.getElementsByClassName('productBtn')
  

  function mostrarCar(producto){
    mostrarCarrito.innerHTML = ""
    producto.map(p => {
      const listaCarrito = document.createElement('div')
      listaCarrito.classList.add('listaCarrito')

      const productoEnCarrito = document.createElement('div')
      productoEnCarrito.classList.add('productoEnCarrito')

      const productoNombre = document.createElement('h3')
      productoNombre.textContent = p.nombre

      const precioProductoenCarrito = document.createElement('div')
      precioProductoenCarrito.classList.add('precioProductoenCarrito')

      const precioProducto = document.createElement('h3')
      precioProducto.textContent = `$. ${p.precio}`

      listaCarrito.appendChild(productoEnCarrito)
      productoEnCarrito.appendChild(productoNombre)
      listaCarrito.appendChild(precioProductoenCarrito)
      precioProductoenCarrito.appendChild(precioProducto)

      mostrarCarrito.appendChild(listaCarrito)
    })

  }

  function totalCar() {
    
    totalCarrito.innerHTML= ""
      const total = document.createElement('div')
      total.classList.add('total')

      const totalTitle = document.createElement('div')
      totalTitle.classList.add('totalTitle')

      const title = document.createElement('h3')
      title.textContent= 'Total a pagar'

      const totalMonto = document.createElement('div')
      totalMonto.classList.add('totalMonto')

      const monto = document.createElement('h3')
      monto.textContent = `$. ${totalAPagar}`

      total.appendChild(totalTitle)
      totalTitle.appendChild(title)
      total.appendChild(totalMonto)
      totalMonto.appendChild(monto)

      totalCarrito.appendChild(total)
    
  }
  const totalPagar = carrito.reduce((a, b) => a + b.precio, 0);
  console.log(totalPagar)

