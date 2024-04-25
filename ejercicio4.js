//1.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers1[0])

//1.2 Cambia el primer elemento de avengers a "IRONMAN"
const avengers2 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers2[0] = 'IRONMAN'
console.log(avengers2)

//1.3 console numero de elementos en el array usando la propiedad correcta de Array.
const avengers3 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers3.length)

//1.4 Añade 2 elementos al array: "Morty" y "Summer".
//Muestra en consola el último personaje del array
const rickAndMortyCharacters1 = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters1.push('Morty', 'Summer')
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1])

//1.5 Elimina el último elemento del array y muestra el primero y el último por consola.
const rickAndMortyCharacters2 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
const ultimoElemento = rickAndMortyCharacters2.pop() // eliminamos el último elemento del array y lo guardamos.
console.log('Primer personaje:', rickAndMortyCharacters2[0]) // mostramos el primer elemento del array por consola.
console.log('Último personaje:', ultimoElemento) // mostramos el último personaje eliminado por consola.

//1.6 Elimina el segundo elemento del array y muestra el array por consola.
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1) // eliminamos el segundo elemento del array, y le indicamos en splice que es el segundo elemento 0-1 , en este caso 1 y el otro 1 es el numero de elementos que se eliminara, en este caso 1
console.log(rickAndMortyCharacters3)
