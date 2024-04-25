//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

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

// Calculamos la media de ventas dividiendo el total de ventas entre la cantidad de productos
const averageSales = totalSales / products.length

// Mostramos por consola el total de ventas y la media de ventas
console.log('Total de ventas:', totalSales)
console.log('Media de ventas:', averageSales)
