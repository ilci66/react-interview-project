import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
  getMoviesAsync, 
  selectMovies,
  getStatus,
  getAllMovies
} from '../slice/movieSlice';
import Card from './Card';

const Cards = () => {
  const [allMovies, setAllMovies] = useState();
  const status = useSelector(getStatus);
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [])

  useEffect(() => {
    setAllMovies(movies);
  }, [movies])

  console.log("all movies in cards",allMovies)

  return (<>
    cards
    {/* {movies.length} */}
    {allMovies && 
      allMovies.map(m => <Card
        key={m.id} 
        id={m.id} 
        title={m.title}
        category={m.category}
        likes={m.likes} 
        dislikes={m.dislikes} 
      />)}
  </>)
}

export default Cards