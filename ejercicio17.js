//Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:
const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}

// Iteramos sobre las propiedades del objeto usando un bucle for...in
for (const key in alien) {
  //Verificamos si cada propiedad del objeto alien es propia del objeto utilizando hasOwnProperty(). Si es así, imprimimos la propiedad y su valor en la consola. Esto nos asegura que solo estamos viendo las propiedades que hemos definido directamente en el objeto alien, y no las propiedades que puede haber heredado de su prototipo.
  if (alien.hasOwnProperty(key)) {
    // Mostramos la propiedad y su valor en la consola
    console.log(key + ': ' + alien[key])
  }
}
