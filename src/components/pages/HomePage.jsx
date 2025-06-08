import React from 'react';
import './HomePage.css';
import CreateBook from '../CreateBook';
import { useSelector } from 'react-redux';

const HomePage = () => {

  const {data: books} = useSelector(state => state.books);


  return (
    <div className='main-container'>
      <div className='home-page__container'>
        <h1>This is Main Page</h1>

        <CreateBook />

        <div>
          <h2>Book List</h2>
          {
            books.map((book) => (
              <div key={book._id}>
                {book.autor}, {book.title}, {book.description}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
