import './App.css';
// import { useEffect, useState } from 'react';
// import Card from './components/Card';
import Cards from './components/Cards';
import CategoryFilter from './components/CategoryFilter';
import Pagination from './components/Pagination';
import redCurtain from './assets/red-curtain.jpg'


function App() {

  return (
    <div className="App">
      <img src={redCurtain} alt="A dark cinema" className='bg-img'/>
      <div className='content-wrapper'>
        <div className='page-title-wrapper'>
          <h1 className='main-title'>FILMS</h1>
          <CategoryFilter />
        </div>
        <Cards />
        <Pagination />
      </div>
    </div>
  );  
}

export default App;
