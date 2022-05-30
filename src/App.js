import './App.css';
import { useState } from 'react';
import Card from './components/Card';

// this works so far in the 3. render
// let movies;


// (async() => {
//   let { movies$ } = await import('./movies');
//   // console.log("movies", Promise.resolve(movies$).then(console.log))
  
//   movies$.then(data => movies = data);

// })();

// useEffect(() => {
//   setAllmovies(movies);
// }, [movies])



function App() {

  let movies;

  const [allMovies, setAllMovies] = useState();
  const [filtered, setFiltered] = useState();
  const [loading, setLoading] = useState(true);
  const [num, setNum] = useState(4);

  (async() => {
    let { movies$ } = await import('./data/movies');
    // console.log("movies", Promise.resolve(movies$).then(console.log))
    
    // movies$.then(data => movies = data);
    movies = await movies$.then(data => data);
    // setTimeout(() => {console.log("asd",movies)}, 1000)
    console.log("a", movies)
    setAllMovies(movies)
    setLoading(false)
  })();


  return (
    <div className="App">
      {loading ? "loading..." : "loaded" }
      {allMovies && allMovies.map(m => {
        return <Card id={m.id} title={m.title}category={m.category} likes={m.likes} dislikes={m.dislikes} />
      })}
    </div>
  );  
}

export default App;
