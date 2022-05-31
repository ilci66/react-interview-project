import React from 'react'
import { useDispatch } from 'react-redux';
import { 
  setItemPerPage,
  nextPage,
  previousPage
} from '../slice/movieSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';


const Pagination = () => {
  const dispatch = useDispatch();


  return (
    <div className='pagination-wrapper'>
      <FontAwesomeIcon 
        className='pagination-button'
        onClick={() => dispatch(previousPage())}
        icon={faArrowLeft} 
      /> 
      <div className='ipp-wrapper'>
        <select 
          onChange={e => dispatch(setItemPerPage(e.target.value))} 
          name="categories" 
          id="categories"
        >
          <option value="12">12</option>
          <option value="8">8</option>
          <option value="4">4</option>
        </select>  
      </div>
      <FontAwesomeIcon 
        className='pagination-button'
        onClick={() => dispatch(nextPage())}
        icon={faArrowRight} 
      /> 
    </div>
  )
}

export default Pagination