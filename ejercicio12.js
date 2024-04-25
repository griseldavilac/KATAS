/*
Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

pista (cuando eliminamos algo de un array, su longitud se verá afectada)
*/
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]

// Definimos una función llamada removeDuplicates que toma un array como argumento
function removeDuplicates(array) {
  // Creamos un nuevo array vacío para almacenar los valores únicos
  let uniqueArray = []

  // Iteramos sobre cada elemento del array usando un bucle for
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el elemento actual no está presente en el nuevo array uniqueArray
    if (!uniqueArray.includes(array[i])) {
      // Si el elemento no está presente, lo agregamos al nuevo array uniqueArray
      uniqueArray.push(array[i])
    }
  }

  // Una vez que hemos recorrido todo el array y eliminado los elementos duplicados, devolvemos el nuevo array uniqueArray
  return uniqueArray
}

// Llamamos a la función removeDuplicates con el array de elementos duplicados como argumento y mostramos el resultado en la consola
console.log(removeDuplicates(duplicates)) // Output: ["sushi", "pizza", "burger", "potatoe", "pasta", "ice-cream", "chicken", "onion rings", "soda"]
