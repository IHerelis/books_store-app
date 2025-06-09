import React from 'react';
import './BooksBoard.css';
import BookCard from './BookCard';

const BooksBoard = ({books}) => {


  return (
    <div className='books-board__container'>
      <h2>Book List</h2>
      <div className='books-board'>
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>  
    </div>
  );
}

export default BooksBoard;
