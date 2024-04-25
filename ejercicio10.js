//Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  // insert code
} // Definimos una función llamada average que toma un array de números como argumento
function average(numbersArray) {
  // Inicializamos una variable llamada sum que almacenará la suma total de los números en el array
  let sum = 0

  // Iteramos sobre cada elemento del array usando un bucle for
  for (let i = 0; i < numbersArray.length; i++) {
    // Sumamos el valor del elemento actual al total acumulado en la variable sum
    sum += numbersArray[i]
  }

  // Calculamos el promedio dividiendo la suma total entre la cantidad de elementos en el array
  // La cantidad de elementos se obtiene usando la propiedad length del array
  const average = sum / numbersArray.length

  // Una vez calculado el promedio, lo devolvemos como resultado de la función
  return average
}

// Llamamos a la función average con el array de números como argumento y mostramos el resultado en la consola
console.log(average(numbers)) // Output: 22.571428571428573
