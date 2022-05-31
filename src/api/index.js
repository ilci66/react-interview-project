export const getMovies = async function() {

  let { movies$ } = await import('../data/movies');

  let movies = await movies$.then(data => data);

  return movies;

};