import './App.css';
// import { useEffect, useState } from 'react';
// import Card from './components/Card';
import Cards from './components/Cards';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import cinema from './assets/dark-cinema.jpg'
import popcorn from './assets/popcorn.jpg'
import redCurtain from './assets/red-curtain.jpg'


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

  // let movies;

  // const [allMovies, setAllMovies] = useState();
  // const [filtered, setFiltered] = useState();
  // const [loading, setLoading] = useState(true);
  // const [num, setNum] = useState(4);
  
  // useEffect(() => {
  //   (async() => {
  //     let { movies$ } = await import('./data/movies');
  //     // console.log("movies", Promise.resolve(movies$).then(console.log))
      
  //     // movies$.then(data => movies = data);
  //     movies = await movies$.then(data => data);
  //     // setTimeout(() => {console.log("asd",movies)}, 1000)
  //     console.log("a", movies)
  //     setAllMovies(movies)
  //     setLoading(false)
  //   })();

  // },[])

  return (
    <div className="App">
      {/* {loading ? "loading..." : "" } */}
      {/* {allMovies && allMovies.map(m => {
        return <Card 
          key={m.id} 
          id={m.id} 
          title={m.title}
          category={m.category}
          likes={m.likes} 
          dislikes={m.dislikes} 
        />
      })} */}
      <img src={redCurtain} alt="A dark cinema" className='bg-img'/>
      <div className='page-title-wrapper'>
        <h1 className='main-title'>FILMS</h1>
        <CategoryFilter />
      </div>
      <Cards />
      <Pagination />
    </div>
  );  
}

export default App;
