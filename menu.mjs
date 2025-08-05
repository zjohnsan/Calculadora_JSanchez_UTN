import { input } from './utils.mjs';

export async function mostrarMenu() {
  console.log("\n--- CALCULADORA ---");
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Resto");
  console.log("6. Potencia");
  console.log("0. Salir");

  const opcion = await input("Elegí una opción: ");
  return opcion.trim();
}

export async function pedirNumeros() {
  const a = parseFloat(await input("Ingresá el primer número: "));
  const b = parseFloat(await input("Ingresá el segundo número: "));
  return [a, b];
}
