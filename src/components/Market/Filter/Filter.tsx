import React from 'react';

import styles from './Filter.module.scss';
import { useDispatch } from 'react-redux';
import { setCategoryId } from 'src/redux/slices/filter/filterSlice';

type FilterData = { name: string; category: string }[];

export const filterData: FilterData = [
  { name: 'Все', category: '0' },
  { name: 'Пальто', category: '1' },
  { name: 'Свитшоты', category: '2' },
  { name: 'Кардиганы', category: '3' },
  { name: 'Толстовки', category: '4' },
];

type FilterProps = {
  categoryId: string;
};

export const Filter: React.FC<FilterProps> = ({ categoryId }) => {
  const dispatch = useDispatch();

  const onClickFilterButton = (category: string) => {
    dispatch(setCategoryId(category));
  };

  return (
    <>
      <div className={`${styles.market__filter} ${styles.filter}`}>
        <div className={styles.filter__items}>
          {filterData.map((item, index) => (
            <div key={index} className={styles.filter__item}>
              <button
                className={`${styles.filter__button} ${
                  item.category === categoryId ? 'buttonDark_active' : ''
                }  buttonDark buttonDark secondText`}
                onClick={() => onClickFilterButton(item.category)}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
