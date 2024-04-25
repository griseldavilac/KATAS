/*
Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.

Puedes usar este array:
*/
const placesToTravel = [
  'Japon',
  'Venecia',
  'Murcia',
  'Santander',
  'Filipinas',
  'Madagascar'
]

// Iteramos sobre cada elemento del array usando un bucle for...of
for (const place of placesToTravel) {
  // Mostramos el valor actual en la consola
  console.log(place)
}
