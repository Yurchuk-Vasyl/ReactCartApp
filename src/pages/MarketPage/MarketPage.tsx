import React, { useEffect } from 'react';
import {
  Filter,
  LocationText,
  MarketPhotoItems,
  Pagination,
  SortComp,
} from 'src/components/';
import { useAppDispatch } from 'src/redux/store';
import { fetchClothes } from '../../redux/slices/clothes/clothesSlice';
import { FetchPizzaArgs } from 'src/redux/slices/clothes/types';

import styles from './MarketPage.module.scss';
import { useSelector } from 'react-redux';
import { selectFilter } from 'src/redux/slices/filter/selector';
import { setCurrentPage } from 'src/redux/slices/filter/filterSlice';

const MarketPage: React.FC = () => {
  const { currentPage, categoryId, sortType } = useSelector(selectFilter);
  const dispatch = useAppDispatch();
  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  useEffect(() => {
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId === '0' ? '' : categoryId;
    const params = {
      currentPage: currentPage,
      category,
      sortBy,
      order,
    } as FetchPizzaArgs;
    dispatch(fetchClothes(params));
    window.scrollTo(0, 0);
  }, [currentPage, categoryId, sortType]);

  return (
    <>
      <main className={styles.market}>
        <div className="market__container">
          <div className={`${styles.market__title} main-title`}>Магазин</div>
          <LocationText locationText={['Главная', 'Магазин']} />
          <Filter categoryId={categoryId} />
          <SortComp sortProperty={sortType} />
          <MarketPhotoItems />
          <Pagination
            currentPage={currentPage}
            onChangePage={(number: number) => onChangePage(number)}
          />
        </div>
      </main>
    </>
  );
};

export default MarketPage;
