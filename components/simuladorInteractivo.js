// Calcular pagos en cuotas sobre un monto determinado.

/* VARIABLES GLOBABLES */
let totalAPagar = 0;
let aLlevar;
let xDepartamento;
let totalxCuotas;
/*====================*/

/* ARRAY */
const productos = [
  {
    nombre: "Martillo",
    precio: 12000,
    stock: 3,
    departamento: "Herramientas",
  },
  {
    nombre: "Taladro Dewalt",
    precio: 145000,
    stock: 0,
    departamento: "Herramientas",
  },
  {
    nombre: "Linterna",
    precio: 5000,
    stock: 2,
    departamento: "Electricos",
  },
  {
    nombre: "Pala",
    precio: 20000,
    stock: 1,
    departamento: "Herramientas",
  },
  {
    nombre: "Destornillador",
    precio: 6000,
    stock: 10,
    departamento: "Herramientas",
  },
  {
    nombre: "Bombillo LED",
    precio: 7000,
    stock: 4,
    departamento: "Electricos",
  },
  {
    nombre: "Panel de luz de incrustar",
    precio: 14000,
    stock: 0,
    departamento: "Electricos",
  },
  {
    nombre: "Cemento 50kg",
    precio: 30000,
    stock: 10,
    departamento: "Construcción",
  },
  {
    nombre: "Arena de pega",
    precio: 5000,
    stock: 8,
    departamento: "Construcción",
  },
  {
    nombre: "Arena de revoque",
    precio: 6000,
    stock: 2,
    departamento: "Construcción",
  },
  {
    nombre: "Pegacor",
    precio: 25000,
    stock: 0,
    departamento: "Construcción",
  },
];

/* FUNCIONES */
const sinStock = () => {
  const producto = productos
    .filter((p) => p.stock == 0)
    .map((p) => p.nombre)
    .join(" - ");
  alert(
    `¡ATENCIÓN! ⚠️\n Los siguientes productos no tienen stock en este momento:\n ${producto}`
  );
};
const buscarPorDepartamento = () => {
  do {
    xDepartamento = prompt(
      "¿Que árticulo estás buscando?\n Puedes conocerlo a través de nuestros departamentos, los cuales son\n (1) Herramientas\n (2) Electricos\n (3) Construcción\n Escribe salir para elegir los articulos a comprar"
    );
    if (xDepartamento == "salir") {
      break;
    }
    const producto = productos.find((p) => p.departamento == xDepartamento)
    console.log(producto);
    if (producto == undefined) {
      alert("No tenemos esa categoria");
    }

    for (const pro of productos) {
      if (pro.departamento == xDepartamento) {
        // console.log(`${p.nombre} tiene un valor de ${p.precio}`)
        alert(`${pro.nombre} tiene un valor de ${pro.precio}\n`);
      }
    }
  } while (xDepartamento != "");
};
function deposito() {
  do {
    aLlevar = prompt(
      "¿Que articulo llevarás? 🛒(Escribe 'salir' si deseas dejar de comprar) \n 1) Martillo \n 2) Linterna \n 3) Pala \n 4) Destornillador \n 5) Bombillo LED\n 6) Taladro Dewalt\n 7) Pegacor\n 8) Panel de luz de incrustar."
    );
    if (aLlevar == "salir") {
      break;
    }

    const producto = productos.find((p) => p.nombre == aLlevar);

    if (producto == undefined) {
      alert("No tenemos ese producto");
    }

    for (const pro of productos) {
      if (aLlevar === pro.nombre) {
        if (pro.stock != 0) {
          totalAPagar = totalAPagar + pro.precio;
          alert(
            `Se agregó al carrito un ${aLlevar} con un valor de ${pro.precio}`
          );
          pro.stock -= 1;
        } else {
          alert("¡No hay stock de este producto!");
        }
      }
    }
  } while (aLlevar);
}

function pagoPorCuotas() {
  let xCuotas;
  do {
    xCuotas = prompt("¿Deseas pagar a cuotas?");
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
}
/* FIN FUNCIONES */
sinStock();
buscarPorDepartamento();
deposito();

let qs;

do {
  qs = prompt("¿Deseas seguir comprando? 🛍️").toLowerCase();
  if (qs == "si") {
    deposito();
    pagoPorCuotas();
    break;
  } else if (qs == "no") {
    pagoPorCuotas();
    break;
  } else {
    alert("¡La respuesta debe ser si o no! ⚠️");
  }
} while (qs != "");
