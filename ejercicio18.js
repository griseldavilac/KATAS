// Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:
const placesToTravel = [
  { id: 5, name: 'Japan' },
  { id: 11, name: 'Venecia' },
  { id: 23, name: 'Murcia' },
  { id: 40, name: 'Santander' },
  { id: 44, name: 'Filipinas' },
  { id: 59, name: 'Madagascar' }
]

// Iteramos sobre el array usando un bucle for
for (let i = 0; i < placesToTravel.length; i++) {
  // Verificamos si el id del elemento actual es igual a 11 o 40
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
    // Si es así, eliminamos el elemento actual del array usando el método splice
    placesToTravel.splice(i, 1)
    // Como hemos eliminado un elemento, debemos decrementar el índice para que no saltemos ningún elemento
    i--
  }
}

// Imprimimos el array resultante en la consola
console.log(placesToTravel)
