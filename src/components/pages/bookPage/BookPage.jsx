import React, { useState } from 'react';
import './BookPage.css';
import { useSelector } from 'react-redux';
import { http } from '../../../app/http';
import WatchMoreLessBtn from '../../OtherComponents/WatchMoreLessBtn';


const BookPage = () => {

  const [watchMoreActive, setWatchMoreActive] = useState(false);

  const {bookReview: bookReview} = useSelector(state => state.books);

  
   const showMoreItems = () => {
    setWatchMoreActive(!watchMoreActive);
  }


  return (
    <div className='main-container'>
      <div className='book-page__container'>
        <div className='product-about'>
          <div className='product__fotoboard'>
            <div className='product__fotoboard__img'>
              <img src={`${http.getUri()}/uploads/${bookReview.image}`} alt='book__image'/>
            </div>
          </div>
          <div className='product__item'>
            <h2 className='product__item__title'>{bookReview.title}</h2>
            <div className='product__item__field'>
              <p className='item__field__title'>Автор:</p>
              <p className='item__field__data'>{bookReview.author}</p>
            </div>
            <div className='product__item__field'>
              <p className='item__field__title'>Видавництво:</p>
              <p className='item__field__data'>{bookReview.publication}</p>
            </div>
            <div className='product__item__field'>
              <p className='item__field__title'>Рік видання:</p>
              <p className='item__field__data'>{bookReview.year}</p>
            </div>
            <div className='product__item__field'>
              <p className='item__field__title'>Мова:</p>
              <p className='item__field__data'>{bookReview.language}</p>
            </div>
            <div className='product__item__field'>
              <p className='item__field__title'>Кількість сторінок:</p>
              <p className='item__field__data'>{bookReview.pages}</p>
            </div>
            <div className='product__item__description'>
              <p className='item__description__title'>Опис:</p>
              <p className='item__description__data'>
                { !watchMoreActive ? bookReview.description.slice(0,500)+"..." : bookReview.description}
              </p>
              <div className='item__description__more' onClick={showMoreItems}>
                <WatchMoreLessBtn active={watchMoreActive} />
              </div>
            </div>
          </div>
          { bookReview.review && 
              <div className='product__review'>
                <p className='item__review__title'>Про книгу:</p>
                <p className='item__review__data'>{bookReview.review}</p>
              </div>
          }
          <div className='product-side'>
            <h2>Seller</h2>
            <p>This is seller side</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookPage;
