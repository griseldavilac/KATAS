/*
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. 
Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:
*/
const numbers = [1, 2, 3, 5, 45, 37, 58]

// Definimos una función llamada sumAll que toma un array de números como argumento
function sumAll(numbersArray) {
  // Inicializamos una variable llamada sum que almacenará la suma total de los números en el array
  let sum = 0

  // Iteramos sobre cada elemento del array usando un bucle for
  for (let i = 0; i < numbersArray.length; i++) {
    // Sumamos el valor del elemento actual al total acumulado en la variable sum
    sum += numbersArray[i]
  }

  // Una vez que hemos recorrido todo el array y sumado todos los números, devolvemos la suma total
  return sum
}

// Llamamos a la función sumAll con el array de números como argumento y mostramos el resultado en la consola
console.log(sumAll(numbers)) // Output: 151
