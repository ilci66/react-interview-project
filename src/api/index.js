export const getMovies = async function() {
  let { movies$ } = await import('./data/movies');
  // console.log("movies", Promise.resolve(movies$).then(console.log))
  
  // movies$.then(data => movies = data);
  let movies = await movies$.then(data => data);
  // setTimeout(() => {console.log("asd",movies)}, 1000)
  console.log("a", movies)
  return movies;
};