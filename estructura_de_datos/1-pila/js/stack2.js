"use strict";

/**
 *           Métodos de una pila: Usando un Array
 *
 *           * push: Agrega un nuevo valor a la pila
 *           * pop: Elimina el último valor ingresado a la pila
 *           * peek: Obtiene el valor de un elemento
 *           * size: Obtiene el número de elementos que contiene la pila
 */
class Stack2 {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
    return this.stack;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

const stack2 = new Stack2();
console.log(stack.size()); // 0
console.log(stack.push("Sam Hernández")); // ['Sam Hernández']
console.log(stack.push("Ivana Alarcón")); // ['Sam Hernández', 'Ivana Alarcón']
console.log("Longitud del array " + stack.size()); // 2
stack.print(); // ['Sam Hernández', 'Ivana Alarcón']
console.log(stack.peek()); // 'Ivana Alarcón'
console.log("elemento removido: " + stack.pop()); // 'Ivana Alarcón'
console.log(stack.peek()); // 'Sam Hernández'
