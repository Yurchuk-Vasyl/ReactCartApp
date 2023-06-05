import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addItems,
  removeItems,
} from 'src/redux/slices/cartItems/cartItemsSlice';
import { selectCartItemById } from 'src/redux/slices/cartItems/select';

import { ChooseItemState } from '../../../pages/ChooseItemPage/ChooseItemPage';

import minusIcon from './img/minus.svg';
import plusIcon from './img/plus.svg';

import styles from './ChooseItem.module.scss';

export const ChooseItem: React.FC<ChooseItemState> = (props) => {
  const [chooseSize, setChooseSize] = useState(0);
  const [chooseColor, setChooseColor] = useState(0);
  const { count } = useSelector(selectCartItemById(props.id)) || 0;
  const [countState, setCountState] = useState(0);
  useEffect(() => {
    setCountState(count || 0);
  }, [props]);

  const dispatch = useDispatch();
  const onClickAddItem = () => {
    if (countState > 0) {
      const propsCart = {
        imageUrl: props.imageUrl,
        name: props.name,
        price: props.price,
        id: props.id,
        color: props.color,
        sizes: props.sizes,
        count: countState,
        withoutSale: props?.withoutSale,
        category: props.category,
      };
      dispatch(addItems(propsCart));
    }
  };
  return (
    <>
      <div className={`${styles.chooseItem__itemChoose} ${styles.itemChoose}`}>
        <div className={styles.itemChoose__items}>
          <div className={styles.itemChoose__item}>
            <div className={styles.itemChoose__photo}>
              <img src={props.imageUrl} />
            </div>
          </div>
          <div className={styles.itemChoose__item}>
            <div
              className={`${styles.itemChoose__info} ${styles.infoChooseItem}`}
            >
              <div className={styles.infoChooseItem__price}>
                {' '}
                <span>${props.price}</span>{' '}
                {props.withoutSale && (
                  <span className={styles.withoutSale}>
                    {props.withoutSale}$
                  </span>
                )}
              </div>
              <div className={`${styles.infoChooseItem__chooseSize}`}>
                <div className={`${styles.chooseSize__title}`}>
                  Выберите размер
                </div>
                <div className={`${styles.chooseSize__items}`}>
                  {props.sizes &&
                    props.sizes.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setChooseSize(index)}
                        className={`${styles.chooseSize__item} ${
                          chooseSize === index
                            ? styles.chooseSize__item_active
                            : ''
                        } `}
                      >
                        {item}
                      </div>
                    ))}
                </div>
              </div>
              <div
                className={`${styles.infoChooseItem__chooseColor} ${styles.chooseColor}`}
              >
                <div className={styles.chooseColor__title}> Выберите цвет</div>
                <div className={`${styles.chooseColor__items}`}>
                  {props.color &&
                    props.color.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => setChooseColor(index)}
                        className={`${styles.chooseColor__item} ${
                          chooseColor === index
                            ? styles.chooseColor__item_active
                            : ''
                        }`}
                        style={{ backgroundColor: item }}
                      ></div>
                    ))}
                </div>
              </div>
              <div
                className={`${styles.infoChooseItem__buttons} ${styles.buttonsChoose}`}
              >
                <div className={styles.buttonsChoose__counter}>
                  <div
                    onClick={() => {
                      if (countState > 1) {
                        setCountState(countState - 1);
                      } else {
                        setCountState(0);
                        dispatch(removeItems(props.id));
                      }
                    }}
                    className={styles.buttonsChoose__minus}
                  >
                    <img src={minusIcon} alt="minus" />
                  </div>
                  <div className={styles.buttonsChoose__count}>
                    {countState}
                  </div>
                  <div
                    onClick={() => setCountState(countState + 1)}
                    className={styles.buttonsChoose__add}
                  >
                    <img src={plusIcon} alt="plus" />
                  </div>
                </div>
                <div
                  onClick={onClickAddItem}
                  className={`${styles.buttonsChoose__buttonGo} main-button`}
                >
                  Добавити в корзину
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
      </div>{' '}
    </>
  );
};
