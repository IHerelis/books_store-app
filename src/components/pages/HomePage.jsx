import React from 'react';
import './HomePage.css';
import CreateBook from '../CreateBook';
import { useSelector } from 'react-redux';
import BooksBoard from '../BooksBoard';

const HomePage = () => {

  const {data: books} = useSelector(state => state.books);


  return (
    <div className='main-container'>
      <div className='home-page__container'>
        <h1>This is Main Page</h1>

        <CreateBook />

        <BooksBoard books={books} />
      </div>
    </div>
  );
}

export default HomePage;
