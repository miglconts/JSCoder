// Simulador de retención de impuestos de México de regimen RESICO

// TODO Recopilar Datos de ingresos

let ingreso = parseInt(prompt("Ingresos netos mensuales en MNX"));

let tope0 = 25000;
let tope1 = 50000;
let tope2 = 83333;
let tope3 = 208333;

// TODO COndicional de ingresos, mayor ingreso mayor porcentaje de impuestos
function limite(ingreso, tope0, tope1, tope2, tope3) {
  switch (true) {
    case ingreso <= tope0:
      alert(
        `Con un ingreso de ${ingreso} MNX el ISR es de ${
          ingreso * 0.01
        } MNX, el saldo libre de impuestos es de ${
          ingreso - ingreso * 0.01
        } MNX`
      );
      break;
    case ingreso <= tope1:
      alert(
        `Con un ingreso de ${ingreso} MNX el ISR es de ${
          ingreso * 0.011
        } MNX, el saldo libre de impuestos es de ${
          ingreso - ingreso * 0.011
        } MNX`
      );
      break;
    case ingreso <= tope2:
      alert(
        `Con un ingreso de ${ingreso} MNX el ISR es de ${
          ingreso * 0.015
        } MNX, el saldo libre de impuestos es de ${
          ingreso - ingreso * 0.015
        } MNX`
      );
      break;
    case ingreso <= tope3:
      alert(
        `Con un ingreso de ${ingreso} MNX el ISR es de ${
          ingreso * 0.02
        } MNX, el saldo libre de impuestos es de ${
          ingreso - ingreso * 0.02
        } MNX`
      );
      break;

    default:
      alert(
        "Ingresa una cantidad menor a 208,333 MNX, de lo contrario tu régimen es incorrecto o ingresaste un carácter que no es un número "
      );
      break;
  }
}

limite(ingreso, tope0, tope1, tope2, tope3);
