
import { Calculadora } from './calculadora.mjs';
import { mostrarMenu, pedirNumeros } from './menu.mjs';

const calc = new Calculadora();

let salir = true;

while (salir) {
 
    const opcion = await mostrarMenu();

    if (opcion === "0") {
      console.log("saliendo...");
      salir = false;
      break;
    }

    const [a, b] = await pedirNumeros();
    let resultado;

    switch (opcion) {
      case "1":
        resultado = calc.sumar(a, b);
        break;
      case "2":
        resultado = calc.restar(a, b);
        break;
      case "3":
        resultado = calc.multiplicar(a, b);
        break;
      case "4":
        resultado = calc.dividir(a, b);
        break;
      case "5":
        resultado = calc.resto(a, b);
        break;
      case "6":
        resultado = calc.potencia(a, b);
        break;
      default:
        console.log("Opción inválida");
        continue;
    }

    console.log(`Resultado: ${resultado}`);
    await input("Presioná ENTER para continuar...");
  
}

/*
git init
git add .
git commit -m "calculadora"
pegar lo de la pagina

*/
