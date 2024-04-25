// Definimos un array de strings que contiene nombres de superhéroes
const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

// Definimos una función llamada palabraMasLarga que toma un array de strings como argumento
function palabraMasLarga(palabra) {
  // Inicializamos una variable llamada palabraLarga que almacenará el string más largo encontrado
  let palabraLarga = ''

  // Iteramos sobre cada elemento del array usando un bucle for
  for (let i = 0; i < palabra.length; i++) {
    // Verificamos si la longitud del string actual (palabra[i]) es mayor que la longitud del string más largo encontrado hasta el momento (palabraLarga)
    if (palabra[i].length > palabraLarga.length) {
      // Si la longitud del string actual es mayor, actualizamos la variable longestWord con el nuevo string más largo encontrado
      palabraLarga = palabra[i]
    }
  }

  // Una vez que hemos recorrido todo el array, devolvemos el string más largo encontrado
  return palabraLarga
}

// Llamamos a la función palabraMasLarga con el array de superhéroes como argumento y mostramos el resultado en la consola
console.log(palabraMasLarga(avengers)) // Output: IronMan
