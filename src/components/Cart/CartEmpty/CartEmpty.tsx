import React from 'react';
import { Link } from 'react-router-dom';

import img_01 from './img/01.png';
import styles from './CartEmpty.module.scss';

export const CartEmpty: React.FC = () => {
  return (
    <div className={`${styles.cart__cartEmpty} ${styles.cartEmpty}`}>
      <div className={`${styles.cartEmpty__title} main-title`}>
        Your cart is empty
      </div>
      <div className={styles.cartEmpty__items}>
        <div className={styles.cartEmpty__item}>
          <img src={img_01} className={styles.cartEmpty__img} />
        </div>
        <div className={`${styles.cartEmpty__item} main-text`}>
          <div className={styles.cartEmpty__text}>
            Ваш кошик порожній, тому, щоб виправити це, поверніться на ринок і
            виберіть щось
          </div>
        </div>
        <div
          className={`${styles.cartEmpty__item} ${styles.cartEmpty__item_button}`}
        >
          <Link
            to="../market"
            className={`${styles.cartEmpty__button} buttonDark main-text`}
          >
            Повернутися до магазину
          </Link>
        </div>
      </div>
    </div>
  );
};
