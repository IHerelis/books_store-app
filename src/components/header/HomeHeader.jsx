import React from 'react';
import './HomeHeader.css';
import { Link } from 'react-router-dom';
import BurgerButton from '../OtherComponents/burgerBtn/BurgerButton';

const HomeHeader = () => {
  
  return (
    <div className='home-header__container'>
      <div className='header'>
        <div className='header__logo'>
          <Link to="/">Book Store</Link>
        </div>
        <nav className='header__nav'>
          <h1>Happy start project !</h1>
          <BurgerButton />
        </nav>
      </div>
    </div>
  );
}

export default HomeHeader;
