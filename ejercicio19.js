/*
Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:
*/
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]

// Iteramos sobre el array de juguetes usando un bucle for
for (let i = 0; i < toys.length; i++) {
  // Verificamos si el nombre del juguete actual incluye la palabra "gato"
  if (toys[i].name.includes('gato')) {
    // Si es así, eliminamos el juguete actual del array usando el método splice
    toys.splice(i, 1)
    // Como hemos eliminado un elemento, debemos decrementar el índice para que no saltemos ningún elemento
    i--
  }
}

// Imprimimos el array resultante en la consola
console.log(toys)
