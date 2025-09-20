import React from 'react';
import './BookCard.css';
import { http } from '../app/http';
import CartGreen from '../assets/cart-green_32-32.png';
import WishBtn from './OtherComponents/WishBtn';
import MoreOptions from './OtherComponents/MoreOptions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBookReview } from '../slices/booksSlice';


const BookCard = ({book}) => {

  const dispatch = useDispatch();

  const reviewHandler = () => {
    dispatch(addBookReview(book));
  }

  
  return (
    <div className='book-card'>
      <div className='book-card__img'>
        <div className='option-btn__baner'>
          <MoreOptions product={book} />
        </div>
        <img src={`${http.getUri()}/uploads/${book.image}`} alt='book__image'/>
        <div className='wish-btn__baner'>
          <WishBtn />
        </div>
      </div>
      <div className='book-card__body'>
        <Link to="/bookPage" 
          title={book.title}
          onClick={reviewHandler}
        >
          <div className='card__body__title'>{book.title}</div>
        </Link>
        <div className='card__body__author'>{book.author}</div>
      </div>
      <div className='book-card__sell'>
        <div className='card__sell__price'>{book.price ? book.price + " грн" : "Price.)"}</div>
        <div className='card__sell__cart'>
          <img src={CartGreen} alt='cart'/>
        </div>
      </div>
      {/* <div className='card__sell__date'>{book.date ? book.date.slice(0, 10) : "Date"}</div> */}
    </div>
  );
}

export default BookCard;
