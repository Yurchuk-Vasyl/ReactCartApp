import React from 'react';

import styles from './CartItemsPage.module.scss';
import { LocationText } from './../../components/LocationText/LocationText';
import { CartItem, CartEmpty } from '../../components/Cart';
import { useSelector } from 'react-redux';
import { selectCartItems } from 'src/redux/slices/cartItems/select';

const CartItemsPage: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCartItems);
  return (
    <>
      <main className={styles.cart}>
        <div className="cart__container">
          <div className={`${styles.cart__title} main-title`}>Корзина</div>
          <LocationText locationText={['Главная', 'Корзина']} />
          <>
            {items.length ? (
              <>
                <div className={styles.cart__content}>
                  <div
                    className={`${styles.cart__contentTitles} ${styles.contentTitlesCart}`}
                  >
                    <div className={styles.contentTitlesCart__items}>
                      <div className={styles.contentTitlesCart__item}>
                        Товар
                      </div>
                      <div className={styles.contentTitlesCart__item}>Цена</div>
                      <div className={styles.contentTitlesCart__item}>
                        Количество
                      </div>
                      <div className={styles.contentTitlesCart__item}>
                        Всего
                      </div>
                    </div>
                  </div>
                  {items.map((obj) => (
                    <CartItem
                      key={obj.id}
                      {...obj}
                      chooseItemLoc={'../market/chooseItem'}
                    />
                  ))}
                </div>
                <div className={`${styles.cart__coupon} ${styles.coupon}`}>
                  <input
                    className={`${styles.coupon__input} secondText`}
                    placeholder="Введите купон"
                  />
                  <div className={`${styles.coupon__buttonSubmit} main-button`}>
                    Применить купон
                  </div>
                </div>
                <div
                  className={`${styles.cart__resultCart} ${styles.resultCart}`}
                >
                  <div className={styles.resultCart__items}>
                    <div className={`${styles.resultCart__result} thirdTitle`}>
                      <span>Итого:</span> ${totalPrice}
                    </div>
                    <div
                      className={`${styles.resultCart__submitButton} main-button`}
                    >
                      Оформить заказ
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <CartEmpty />
            )}
          </>
        </div>
      </main>
    </>
  );
};

export default CartItemsPage;
