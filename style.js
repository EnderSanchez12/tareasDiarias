// Escribe una función que tome dos números (a y b) como argumento, Suma a y b. Devuelve el resultado

// const myFuntion = (a, b) => {
//   return a + b;
// };
// console.log(myFuntion(2, 2));

// Escribe una función que tome dos valores, digamos a y b, como argumentos, Devuelve verdadero si los dos valores son iguales y del mismo tipo

// const myFuntion = (a, b) => {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(myFuntion(2, "2"));

// Escribir una función que tome un valor como argumento
// Devuelve el tipo del valor

// const myFuntion = (a) => {
// return typeof (a)
// }
// console.log(myFuntion(""))

// Escribir una función que tome una cadena (a) y un número (n) como argumento
// Devuelve el carácter enésimo de 'a'

// function myFuntion(a, n) {
//   return a[n - 1];
// }

// console.log(myFuntion("abcd", 1));

// Escribir una función que tome una cadena (a) como argumento
// Eliminar los primeros 3 caracteres de un
// Devuelve el resultado

// function myFuntion(a){
//     return a.slice(3)
// }
// console.log(myFuntion('abcdefg'));

// Escribir una función que tome una cadena como argumento
// Extrae los últimos 3 caracteres de la cadena
// Devuelve el resultado

// function myFuntion(str){
//     return str.slice(-3)
// }
// console.log(myFuntion('abcdefg'));

// Escribir una función que tome una cadena (a) como argumento
// Obtener los primeros 3 caracteres de un
// Devuelve el resultado

// function myFunction(a) {
//   return a.slice(0, 3);
// }
// console.log(myFunction('abcdefg'))

// Escribir una función que tome una cadena (a) como argumento
// Extrae la primera mitad de un
// Devuelve el resultado

// function myFunction(a) {
//   return a.slice(0, a.length / 2);
// }
//  console.log(myFunction('1234'))

// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de un
// Devuelve el resultado

// function myFunction(a) {
//   return a.slice(0, - 3)
// }
// console.log(myFunction('abcdefg'))

// Escribe una función que tome dos números (a y b) como argumento
// Devuelve b por ciento de a

// function myFunction(a, b) {
//   return b / 100 * a;
// }
// console.log(myFunction(10,1))

// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos
// Suma a y b
// Luego restamos por c
// Luego multiplica por d y divide por e
// Finalmente elevamos a la potencia de f y devolvemos el resultado

// function myFunction(a, b, c, d, e, f) {
//   return (((a + b - c) * d) / e )** f;
// }
// console.log(myFunction(6,2,1,4,2,3))

// Escribir una función que tome un número como argumento
// Si el número es par, devuelve verdadero
// De lo contrario, devuelve falso

// const myFunction = (a) => a % 2 == 0

// console.log(myFunction(14));

// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b

// function myFunction(a, b) {
//   return b.split("").filter((x) => x == a).length;
// }
// console.log(myFunction("m", "how mmm many times does the character occur in this sentence?"));

// Escribir una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso

// function myFunction(a) {
// return a - Math.floor(a) === 0
// }
// console.log(myFunction(1049));

// Escribe una función que tome dos números (a y b) como argumentos
// Si a es menor que b, dividimos a por b
// De lo contrario, multiplica ambos números
// Devuelve el valor resultante

// function myFunction(a, b) {
//   return a < b ? a / b : a * b;
// }

// console.log(myFunction(10, 100));

// Escribe una función que tome dos cadenas (a y b) como argumentos
// Si a contiene b, agrega b al principio de a
// Si no, añádelo al final
// Devuelve la concatenación

// function myFunction(a, b) {
//   return a.includes(b) ? b + a : a + b;
// }
// console.log(myFunction(" think, therefore I am", "I"));

// Escribir una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en una matriz
// Consejo: es posible que desee cambiar el tipo de número para la división

// function myFunction(a) {
//     return Array.from(String(a), Number)

// }

// console.log(myFunction(123456));

// Escribir una función que tome una matriz (a) y un valor (n) como argumento
// Devuelve el n-ésimo elemento de 'a'

// function myFunction(a, n) {
//     return a [n -1]
// }
// console.log(myFunction([10,9,8,7,6],5))

// Escribir una función que tome una matriz (a) como argumento
// Elimina los primeros 3 elementos de 'a'
// Devuelve el resultado

// function myFunction() {

//     return
// }
// console.log(myFunction())

// function myFunction(a) {
//   return a.slice(3);
// }
// console.log(myFunction([1, 2, 3, 4]));

// Escribir una función que tome una matriz (a) como argumento
// Extraer los últimos 3 elementos de un
// Devuelve la matriz resultante

// function myFunction(a) {
//   return a.slice(-3)
// }
// console.log(myFunction([1, 2, 3, 4]));

// Escribir una función que tome una matriz (a) como argumento
// Extrae los primeros 3 elementos de un
// Devuelve la matriz resultante

// function myFunction(a) {
//   return a.slice(0, 3);
// }
// console.log(myFunction([5, 4, 3, 2, 1, 0]));

// Escribe una función que tome una matriz (a) y un número (n) como argumentos
// Debería devolver los últimos n elementos de un

// function myFunction(a, n) {
//   return a.slice(-n);
// }
// console.log(myFunction([1, 2, 3, 4, 5], 2));

// Escribir una función que tome una matriz (a) y un valor (b) como argumento
// La función debe limpiar a de todas las apariciones de b
// Devuelve la matriz filtrada

// function myFunction(a, b) {
//   return a.filter(x=>x !==b);
// }
// console.log(myFunction([1,2,'2'], '2'));


// Escribir una función que tome una matriz (a) como argumento
// Devuelve el número de elementos en un

function myFunction(a) {
  return a.length
}
console.log(myFunction([1,2,'2']));
