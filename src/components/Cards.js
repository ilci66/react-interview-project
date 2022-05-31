import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
  getMoviesAsync, 
  selectMovies,
  selectFilter,
  selectPage,
  selectIPP,
} from '../slice/movieSlice';
import Card from './Card';

const Cards = () => {
  const filter = useSelector(selectFilter);
  const movies = useSelector(selectMovies);
  
  const page = useSelector(selectPage);
  const iPP = useSelector(selectIPP);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getMoviesAsync());
  }, [dispatch, filter]);




  return (<>
    {/* <CategoryFilter movies={}/> */}
    {movies && filter === "" ? 
      <>{movies.slice((page-1)*iPP, page*iPP).map(m => <Card
        key={m.id} 
        id={m.id} 
        title={m.title}
        liked={m.liked}
        disliked={m.disliked}
        category={m.category}
        likes={m.likes} 
        dislikes={m.dislikes} 
      />)}</> 
      : 
      movies && filter !==  "" && movies.filter(m => m.category === filter).slice((page-1)*iPP, page*iPP).map(m => <Card
        key={m.id} 
        id={m.id} 
        title={m.title}
        category={m.category}
        liked={m.liked}
        disliked={m.disliked}
        likes={m.likes} 
        dislikes={m.dislikes} 
      />) 
    }
  </>)
}

export default Cards