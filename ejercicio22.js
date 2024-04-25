/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.
*/

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']
const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]
// Iteramos sobre cada comida en foodschedule
for (let i = 0; i < foodSchedule.length; i++) {
  // Verificamos si la comida no es vegana
  if (!foodSchedule[i].isVegan) {
    // Remplazamos la comida no vegana con la primera fruta del array de frutas
    foodSchedule[i].name = fruits.shift()
  }
}

// Imprimimos el array resultante
console.log(foodSchedule)
