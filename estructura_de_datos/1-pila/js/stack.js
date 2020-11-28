"use strict";

/**
 *           Métodos de una pila: Usando un Objeto
 *
 *           * push: Agrega un nuevo valor a la pila
 *           * pop: Elimina el último valor ingresado a la pila
 *           * peek: Obtiene el valor de un elemento
 *           * size: Obtiene el número de elementos que contiene la pila
 */
class Stack {
  constructor() {
    this.stack = {}; // objeto de Javascript
    this.count = 0; // referencia de la posición actual
  }

  push(element) {
    this.stack[this.count] = element;
    this.count++;
    return this.stack;
  }

  pop() {
    this.count--;
    const element = this.stack[this.count];
    delete this.stack[this.count];
    return element;
  }

  peek() {
    return this.stack[this.count - 1];
  }

  size() {
    return this.count;
  }

  print() {
    console.log(this.stack);
  }
}

const stack = new Stack();
console.log(stack.size()); // 0
console.log(stack.push("Sam Hernández")); // ['Sam Hernández']
console.log(stack.push("Ivana Alarcón")); // ['Sam Hernández', 'Ivana Alarcón']
console.log("Longitud del array " + stack.size()); // 2
stack.print(); // ['Sam Hernández', 'Ivana Alarcón']
console.log(stack.peek()); // 'Ivana Alarcón'
console.log("elemento removido: " + stack.pop()); // 'Ivana Alarcón'
console.log(stack.peek()); // 'Sam Hernández'
