/*
Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
*/
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]
// Definimos una función llamada finderName que toma un array y un valor como argumentos
function finderName(array, value) {
  // Buscamos el índice del elemento dentro del array usando el método indexOf y lo almacenamos en una variable
  const index = array.indexOf(value)

  // Verificamos si el índice es diferente de -1, lo que significa que el elemento se encontró en el array
  if (index !== -1) {
    // Si el elemento se encuentra, devolvemos true y la posición del elemento
    return { found: true, position: index }
  } else {
    // Si el elemento no se encuentra, devolvemos false
    return { found: false }
  }
}

// Llamamos a la función finderName con el array de nombres y el valor que queremos buscar como argumentos
// Mostramos el resultado en la consola
console.log(finderName(nameFinder, 'Bruce')) // Output: { found: true, position: 7 }
console.log(finderName(nameFinder, 'Loki')) // Output: { found: false }
