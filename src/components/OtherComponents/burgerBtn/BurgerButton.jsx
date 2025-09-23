import React, { useState } from 'react';
import styles from './BurgerButton.module.css';
import classNames from 'classnames';


const BurgerButton = ({burgerActive=false}) => {
  const [activBurgerBtn, setActivBurgerBtn] = useState(burgerActive);

  const upDateActiveBurger = () => {
    setActivBurgerBtn(!activBurgerBtn);
  };

  return (
    <div className={classNames(styles.burger__container, activBurgerBtn ? styles.active : "")} onClick={() => upDateActiveBurger()}>
      <div className={classNames(styles.burger__layer, activBurgerBtn ? styles.active : "")}></div>
    </div>
  );
}

export default BurgerButton;
 