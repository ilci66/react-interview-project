import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { 
  setItemPerPage,
  selectIPP,
  setPage,
  selectPage,
  nextPage,
  previousPage
} from '../slice/movieSlice';

const Pagination = () => {
  const dispatch = useDispatch();

  // const page = useSelector(selectPage);
  // const iPP = useSelector(selectIPP);

  return (
    <div className='pagination-wrapper'>
      <button className='pagination-button' onClick={() => dispatch(previousPage())}>
        Prev
      </button>
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
      {/* <p>current page is: {page}</p>
      <p>current ipp is: {iPP}</p> */}
      <button className='pagination-button' onClick={() => dispatch(nextPage())}>
        Next
      </button>
    </div>
  )
}

export default Pagination