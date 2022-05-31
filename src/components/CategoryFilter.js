import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
  setFilter,
  selectMovies
} from '../slice/movieSlice';


const CategoryFilter = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovies);
  const categoriesArray = [...new Set(movies.map(m => m.category))]

  return (
    <div className='filter-wrapper'>
      <select 
        onChange={e => dispatch(setFilter(e.target.value))} 
        name="categories" 
        id="categories"
      >
        <option value="">Tous Les Films</option>
        {categoriesArray && categoriesArray.map(c => <option value={c}>{c}</option>)}
      </select>  
    </div>
  )
}

export default CategoryFilter