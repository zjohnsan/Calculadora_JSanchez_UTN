export class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
  }

  resto(a, b) {
    return a % b;
  }

  potencia(a, b) {
    return Math.pow(a, b);
  }
}
