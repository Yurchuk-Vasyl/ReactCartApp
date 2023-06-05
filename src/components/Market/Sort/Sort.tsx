import React, { useEffect, useRef, useState } from 'react';

import styles from './Sort.module.scss';
import { Sort, SortTypeEnum } from 'src/redux/slices/filter/types';

import { useDispatch } from 'react-redux';
import { setSortType } from 'src/redux/slices/filter/filterSlice';

const sortList: Sort[] = [
  { sortProperty: SortTypeEnum.RATING_DESC, name: 'популярності(desc)' },
  { sortProperty: SortTypeEnum.RATING_ASC, name: 'популярності(asc)' },
  { sortProperty: SortTypeEnum.PRICE_DESC, name: 'ціні(desc)' },
  { sortProperty: SortTypeEnum.PRICE_ASC, name: 'ціні(asc)' },
  {
    sortProperty: SortTypeEnum.COLLECTION_DESC,
    name: 'новизні колекції(desc)',
  },
  { sortProperty: SortTypeEnum.COLLECTION_ASC, name: 'новизні колекції(asc)' },
  { sortProperty: SortTypeEnum.TITLE_DESC, name: 'заголовку(desc)' },
  { sortProperty: SortTypeEnum.TITLE_ASC, name: 'заголовку(asc)' },
];

type SortCompProps = {
  sortProperty: Sort;
};

export const SortComp: React.FC<SortCompProps> = ({ sortProperty }) => {
  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const [poppupActive, setPoppupActive] = useState<boolean>(false);

  const onClickPoppupItem = (sort: Sort) => {
    dispatch(setSortType(sort));
    setPoppupActive(false);
  };
  useEffect(() => {
    const handleClickSort = (e: MouseEvent) => {
      if (e.target && sortRef.current) {
        const _target = e.target as EventTarget & {
          closest: (selector: string) => Element | null;
        };
        if (!_target.closest(`.${sortRef.current.className}`)) {
          setPoppupActive(false);
        }
      }
    };
    if (poppupActive) {
      document.body.addEventListener('click', handleClickSort);
    }

    return () => {
      document.body.removeEventListener('click', handleClickSort);
    };
  }, [poppupActive]);
  return (
    <>
      <div className={`${styles.market__sort} ${styles.sort} secondText`}>
        <div ref={sortRef} className={styles.sort__item}>
          <div
            className={styles.sort__textSortBy}
            onClick={() => {
              poppupActive === true
                ? setPoppupActive(false)
                : setPoppupActive(true);
            }}
          >
            сортування по <span>{sortProperty.name}</span>
          </div>
          <div
            className={`${styles.sort__poppup} ${styles.poppup} ${
              poppupActive === true ? styles.poppup_active : ''
            }`}
          >
            <div className={styles.poppup__items}>
              {sortList.map((item, index) => (
                <div
                  key={index}
                  className={styles.poppup__item}
                  onClick={() => onClickPoppupItem(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
