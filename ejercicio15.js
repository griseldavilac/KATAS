//Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]

// Iteramos sobre cada elemento del array usando un bucle for
for (let i = 0; i < products.length; i++) {
  // Verificamos si el elemento actual incluye la palabra "Camiseta" usando el método includes
  if (products[i].includes('Camiseta')) {
    // Si el elemento incluye la palabra "Camiseta", lo mostramos en la consola
    console.log(products[i])
  }
}
