import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';

import { setChooseItem } from 'src/redux/slices/chooseItem/chooseItemSlice';

import styles from './PhotoItem.module.scss';

import overlay from './img/overlay.png';

type PhotoItemProps = {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  withoutSale?: number;
  chooseItemLoc: string;
  category: number;
  color: string[];
  sizes: string[];
};

export const PhotoItem: React.FC<PhotoItemProps> = ({
  id,
  imageUrl,
  name,
  price,
  withoutSale,
  chooseItemLoc,
  category,
  color,
  sizes,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickPhotoItem = () => {
    const props = {
      imageUrl,
      name,
      price,
      withoutSale,
      // chooseItemLoc,
      category,
      color,
      sizes,
    };
    dispatch(setChooseItem(props));
    navigate(`${chooseItemLoc}/${id}`);
  };

  return (
    <>
      <div
        className={`${styles.itemsCollection__item} ${styles.itemCollection}`}
      >
        <div onClick={onClickPhotoItem} className={styles.itemCollection__img}>
          <div className={styles.itemCollection__overlay}>
            <img src={overlay} />
          </div>
          <img src={imageUrl} alt="img" />
        </div>
        <div className={styles.itemCollection__title}>{name}</div>
        <div className={styles.itemCollection__price}>
          <span>${price}</span>{' '}
          {withoutSale && (
            <span className={styles.withoutSale}>${withoutSale}</span>
          )}
        </div>
      </div>
    </>
  );
};
