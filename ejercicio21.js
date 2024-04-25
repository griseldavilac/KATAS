/*
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
"Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]
//----------PRIMER BUCLE---------------------------
// Iteramos sobre cada usuario en el array de usuarios
for (const user of users) {
  // Verificamos si la edad del usuario es menor que 18
  if (user.years < 18) {
    // Si es menor que 18, imprimimos el nombre del usuario
    console.log('Usuarios menores de edad:', user.name)
  } else {
    // Si la edad del usuario es 18 o mayor, imprimimos el nombre del usuario precedido del texto "Usuarios mayores de edad:"
    console.log('Usuarios mayores de edad:', user.name)
  }
}
