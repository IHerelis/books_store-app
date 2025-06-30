import { Carousel } from 'antd';
import React from 'react';
import './SliderPresentations.css';

const SliderPresentations = ({presentationsList}) => {

  return (
    <div className='presentations__slider'>
      <Carousel autoplay autoplaySpeed={5000} effect="fade">
        {presentationsList && presentationsList.map((picture, index) => (
            <div key={index}>
              <h3 className='slider__img'>
                <img src={picture} alt='picture' />
              </h3>
            </div> 
          ))
        }
      </Carousel>
    </div>
  );
}

export default React.memo(SliderPresentations);
