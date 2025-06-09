import React, { useState } from 'react';
import './WishBtn.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const WishBtn = () => {
  const [elect, setElect] = useState(false);

  const updateElect = () => {
    setElect(!elect);
  }


  return (
    <div className='product-wish__wrapper' onClick={() => {
        updateElect();
        }}>
      <div className='product-wish'>
        {(!elect) ? <FavoriteBorderIcon /> : <FavoriteIcon />}
      </div>
    </div>
  );
}

export default WishBtn;
