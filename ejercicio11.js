//Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

//pista (typeof)

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

// Definimos una función llamada averageWord que toma un array como argumento
function averageWord(array) {
  // Inicializamos una variable llamada sum que almacenará la suma total de los números o la longitud de los strings en el array
  let sum = 0

  // Iteramos sobre cada elemento del array usando un bucle for
  for (let i = 0; i < array.length; i++) {
    // Verificamos si el tipo de dato del elemento actual es 'number'
    if (typeof array[i] === 'number') {
      // Si es un número, lo sumamos al total acumulado en la variable sum
      sum += array[i]
    } else {
      // Si no es un número, calculamos la longitud del string y lo sumamos al total acumulado en la variable sum
      sum += array[i].length
    }
  }

  // Calculamos el promedio dividiendo la suma total entre la cantidad de elementos en el array
  const average = sum / array.length

  // Una vez calculado el promedio, lo devolvemos como resultado de la función
  return average
}

// Llamamos a la función averageWord con el array de elementos mixtos como argumento y mostramos el resultado en la consola
console.log(averageWord(mixedElements)) // Output: 4.111111111111111
