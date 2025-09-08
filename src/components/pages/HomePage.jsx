import React from 'react';
import './HomePage.css';
import { useSelector } from 'react-redux';
import BooksBoard from '../BooksBoard';
import { Link } from 'react-router-dom';
import SliderPresentations from '../OtherComponents/SliderPresentations';

import bookFoto1 from '../../assets/picture_slider/Books-picture1.webp';
import bookFoto2 from '../../assets/picture_slider/Books-picture2.jpg';
import bookFoto3 from '../../assets/picture_slider/Books-picture3.jpg';

const booksSliderList = [bookFoto1, bookFoto2, bookFoto3];



const HomePage = () => {

  const {booksList: books} = useSelector(state => state.books);


  return (
    <div className='main-container'>
      <div className='home-page__container'>
        <h1>This is Main Page</h1>

        <Link to="/adminPage/createBook">Create Book</Link>

        <div className='home-page__slider'>
          <SliderPresentations presentationsList={booksSliderList} />
        </div>

        <BooksBoard books={books} />
      </div>
    </div>
  );
}

export default HomePage;
