/*
For...of avanzado: Usa un bucle for...of para recorrer todos los juguetes y añade los que tengan más de 15 ventas (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:
*/
const popularToys = []
const toys = [
  { id: 5, name: 'Buzz MyYear', sellCount: 10 },
  { id: 11, name: 'Action Woman', sellCount: 24 },
  { id: 23, name: 'Barbie Man', sellCount: 15 },
  { id: 40, name: 'El gato con Guantes', sellCount: 8 },
  { id: 40, name: 'El gato felix', sellCount: 35 }
]
// Iteramos sobre cada juguete usando un bucle for...of
for (const toy of toys) {
  // Verificamos si el número de ventas del juguete es mayor que 15
  if (toy.sellCount > 15) {
    // Si es así, añadimos el juguete al array popularToys
    popularToys.push(toy)
  }
}

// Imprimimos el array popularToys en la consola
console.log(popularToys)
