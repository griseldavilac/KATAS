/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
*/
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
// Definimos una función llamada repeatCounter que toma un array como argumento
function repeatCounter(array) {
  // Creamos un objeto vacío para almacenar las palabras y sus repeticiones
  const repeticiones = {}

  // Iteramos sobre cada elemento del array usando un bucle for
  for (let i = 0; i < array.length; i++) {
    // Extraemos la palabra actual del array
    const palabra = array[i]

    // Verificamos si la palabra ya existe como propiedad en el objeto repeticiones
    if (repeticiones[palabra]) {
      // Si la palabra ya existe, incrementamos su contador de repeticiones
      repeticiones[palabra] += 1
    } else {
      // Si la palabra no existe, la inicializamos con un contador de repeticiones igual a 1
      repeticiones[palabra] = 1
    }
  }

  // Una vez que hemos contado todas las repeticiones, devolvemos el objeto con las palabras y sus repeticiones
  return repeticiones
}

// Llamamos a la función repeatCounter con el array de palabras como argumento
// Mostramos el resultado en la consola
console.log(repeatCounter(counterWords))
// Output: { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }
