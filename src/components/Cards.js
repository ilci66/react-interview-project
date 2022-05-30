import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
  getMoviesAsync, 
  selectMovies,
  getAllMovies
} from '../slice/movieSlice';
import Card from './Card';

const Cards = () => {
  const [allMovies, setAllMovies] = useState();
  const dispatch = useDispatch();
  // const movies = useSelector(selectMovies);
  // console.log("movies after selector", movies)

  useEffect(() => {
    setAllMovies(dispatch(getAllMovies()))
  }, [])

  console.log("all movies in cards",allMovies)

  return (<>
    cards
    {/* <Card /> */}
    {/* {allMovies && allMovies.map(m => m.id)} */}
    <Card />
  </>)
}

export default Cards