import React from 'react';
import './BookPage.css';
import { useSelector } from 'react-redux';


const BookPage = () => {

  const {bookReview: bookReview} = useSelector(state => state.books);


  return (
    <div className='main-container'>
      <div className='book-page__container'>
        <h1>My curent book</h1>
        <h2><strong>{bookReview.title}</strong></h2>
        <div>{bookReview.autor}</div>
      </div>
    </div>
  );
}

export default BookPage;
