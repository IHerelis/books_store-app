import React from 'react';
import './BookCard.css';
import { http } from '../app/http';
import CartGreen from '../assets/cart-green_32-32.png';
import WishBtn from './OtherComponents/WishBtn';


const BookCard = ({book}) => {

  
  return (
    <div className='book-card'>
      <div className='book-card__img'>
        <img src={`${http.getUri()}/uploads/${book.image}`} alt='book__image'/>
        <div className='wish-btn__baner'>
          <WishBtn />
        </div>
      </div>
      <div className='book-card__body'>
        <div className='card__body__title'>{book.title}</div>
        <div className='card__body__autor'>{book.autor}</div>
      </div>
      <div className='book-card__sell'>
        <div className='card__sell__price'>Price.)</div>
        <div className='card__sell__cart'>
          <img src={CartGreen} alt='cart'/>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
