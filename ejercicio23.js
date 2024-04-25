/*Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.*/
const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]
// Creamos tres arrays vacíos para almacenar películas de diferentes duraciones
const smallMovies = []
const mediumMovies = []
const largeMovies = []

// Iteramos sobre cada película en el array de películas
for (const movie of movies) {
  // Verificamos la duración de la película y la agregamos al array correspondiente
  if (movie.durationInMinutes < 100) {
    smallMovies.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie)
  } else {
    largeMovies.push(movie)
  }
}

// Imprimimos cada array de películas por consola
console.log('Películas pequeñas (menos de 100 minutos):')
console.log(smallMovies)

console.log('Películas medianas (más de 100 minutos y menos de 200 minutos):')
console.log(mediumMovies)

console.log('Películas grandes (más de 200 minutos):')
console.log(largeMovies)
