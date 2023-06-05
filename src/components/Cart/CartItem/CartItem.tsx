import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { setChooseItem } from 'src/redux/slices/chooseItem/chooseItemSlice';
import { removeItems } from 'src/redux/slices/cartItems/cartItemsSlice';
import { CartItems } from '../../../redux/slices/cartItems/types';

import styles from './CartItem.module.scss';

export const CartItem: React.FC<CartItems> = ({
  chooseItemLoc,
  id,
  imageUrl,
  name,
  sizes,
  price,
  withoutSale,
  category,
  color,
  count,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onClickPhotoItem = () => {
    const props = {
      imageUrl,
      name,
      price,
      withoutSale,
      category,
      color,
      sizes,
    };
    dispatch(setChooseItem(props));
    navigate(`${chooseItemLoc}/${id}`);
  };
  const countItem = price * count;
  return (
    <div className={`${styles.cart__clotheItem} ${styles.clotheItemCart}`}>
      <div className={`${styles.clotheItemCart__items} secondText`}>
        <div
          className={`${styles.clotheItemCart__item} ${styles.clotheItemCart__main}`}
        >
          <div
            onClick={() => dispatch(removeItems(id))}
            className={styles.clotheItemCart__removeItem}
          >
            <span></span>
            <span></span>
          </div>
          <div
            onClick={onClickPhotoItem}
            className={styles.clotheItemCart__photo}
          >
            <img src={imageUrl} />
          </div>
          <div className={styles.clotheItemCart__title}>{name}</div>
        </div>
        <div className={styles.clotheItemCart__item}>
          <div className={styles.clotheItemCart__price}>${price}</div>
        </div>
        <div className={styles.clotheItemCart__item}>
          <div className={styles.clotheItemCart__count}>{count}</div>
        </div>
        <div className={styles.clotheItemCart__item}>
          <div className={styles.clotheItemCart__countPrice}>${countItem}</div>
        </div>
      </div>
    </div>
  );
};
