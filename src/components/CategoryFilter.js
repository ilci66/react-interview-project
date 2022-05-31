import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
  setFilter
} from '../slice/movieSlice';


const CategoryFilter = () => {
  const dispatch = useDispatch();

  return (
    <div className='filter-wrapper'>
      <select 
        onChange={e => dispatch(setFilter(e.target.value))} 
        name="categories" 
        id="categories"
      >
        <option value="">Tous Les Films</option>
        <option value="Comedy">Comedy</option>
        <option value="Thriller">Thriller</option>
        <option value="Drame">Drame</option>
      </select>  
    </div>
  )
}

export default CategoryFilter