//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

// Inicializamos una variable para almacenar el total de ventas
let totalSales = 0

// Iteramos sobre cada producto en el array de productos
for (const product of products) {
  // Sumamos el valor de sellCount de cada producto al total de ventas
  totalSales += product.sellCount
}

// Imprimimos el total de ventas por consola
console.log('Total de ventas:', totalSales)
