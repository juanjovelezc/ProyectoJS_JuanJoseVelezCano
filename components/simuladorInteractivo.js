// Calcular pagos en cuotas sobre un monto determinado.

/* VARIABLES GLOBABLES */
let totalAPagar = 0;
let aLlevar;
let totalxCuotas;
/*====================*/

/* ARRAY */
const productos = [
  {
    nombre: "Martillo",
    precio: 12000,
    stock: 3,
  },
  {
    nombre: "Linterna",
    precio: 5000,
    stock: 2,
  },
  {
    nombre: "Pala",
    precio: 20000,
    stock: 1,
  },
  {
    nombre: "Destornillador",
    precio: 6000,
    stock: 10,
  },
  {
    nombre: "Bombillo LED",
    precio: 7000,
    stock: 4,
  },
];

/* FUNCIONES */
function deposito() {
  do {
    aLlevar = prompt(
      "¿Que articulo llevarás? 🛒(Escribe 'salir' si deseas dejar de comprar) \n 1) Martillo \n 2) Linterna \n 3) Pala \n 4) Destornillador \n 5) Bombillo LED."
    );
    if (aLlevar == "salir") {
      break;
    }
    let i=0
    do {
      if (aLlevar === productos[i].nombre) {
        if (productos[i].stock != 0) {
          totalAPagar = totalAPagar + productos[i].precio;
          console.log(totalAPagar);
          alert(
            `Se agregó al carrito un ${aLlevar} con un valor de ${productos[i].precio}`
          );
          productos[i].stock -= 1;
        } else {
          alert("¡No hay stock de este producto!");
        }
      }else{
        alert("¡No existe ese producto!")
      }
      i++
    }while(i< productos.length)
    /*    switch (aLlevar) {
      case productos[0].nombre:
        if(productos[0].stock != 0){
        totalAPagar = totalAPagar + productos[0].precio;
        console.log(totalAPagar);
        alert(
          `Se agregó al carrito un ${aLlevar} con un valor de ${productos[0].precio}`
        );
        productos[0].stock-=1
        }else{
          alert("¡No hay stock de este producto!")
        }

        break;
      case productos[1].nombre:
        if(productos[1].stock !=0){
          totalAPagar = totalAPagar + productos[1].precio;
          console.log(totalAPagar);
          alert(
            `Se agregó al carrito un ${aLlevar} con un valor de ${productos[1].precio}`
          );
          productos[1].stock-=1
        }else{
          alert("¡No hay stock de este producto!")
        }
        break;
      case productos[2].nombre:
        if(productos[2].stock != 0){
          totalAPagar = totalAPagar + productos[2].precio;
          console.log(totalAPagar);
          alert(
            `Se agregó al carrito un ${aLlevar} con un valor de ${productos[2].precio}`
          );
          productos[2].stock-=1
        }else{
          alert("¡No hay stock de este producto!")
        }
        break;
      case productos[3].nombre:
        if(productos[3].stock != 0){
          totalAPagar = totalAPagar + productos[3].precio;
          console.log(totalAPagar);
          alert(
            `Se agregó al carrito un ${aLlevar} con un valor de ${productos[3].precio}`
          );
          productos[3].stock-=1
        }else{
          alert("¡No hay stock de este producto!")
        }
        break;
      case productos[4].nombre:
        if(productos[4].stock != 0){
          totalAPagar = totalAPagar + productos[4].precio;
          alert(
            `Se agregó al carrito un ${aLlevar} con un valor de ${productos[4].precio}`
          );
          productos[4].stock-=1
        }else{
          alert("¡No hay stock de este producto!")
        }
        break;
      default:
        alert("¡No tenemos ese articulo¡");
        break;
    }*/
  } while (aLlevar != "");
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
