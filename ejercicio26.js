//Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

// Iteramos sobre cada producto en el array de productos
for (const product of products) {
  // Verificamos si el producto tiene más de 20 ventas
  if (product.sellCount > 20) {
    // Si tiene más de 20 ventas, lo añadimos al array goodProducts
    goodProducts.push(product)
  } else {
    // Si tiene 20 o menos ventas, lo añadimos al array badProducts
    badProducts.push(product)
  }
}

// Mostramos por consola los arrays goodProducts y badProducts
console.log('Productos buenos:', goodProducts)
console.log('Productos malos:', badProducts)
