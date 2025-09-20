import React, { useState } from 'react';
import './WatchMoreLessBtn.css';

const WatchMoreLessBtn = ({active}) => {

const [isActive, setIsActive] = useState(active);

  return (
    <>
      <button type='button' 
        className='more-less-btn' 
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive ? "Дивитись більше >>>" : "Дивитись менше <<<"}
      </button>
    </>
  );
}

export default React.memo(WatchMoreLessBtn);
