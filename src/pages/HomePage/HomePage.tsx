import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { MainContent, SliderDreamTeam, HomePhotoItems } from '../../components';

import { getApiResource } from 'src/utils/network';

import { API_CLOTHES_DATA } from 'src/constants/clothesApi';
import { ClothesItem } from 'src/redux/slices/clothes/types';

import importantIcon1 from './img/05.svg';
import importantIcon2 from './img/06.svg';
import importantIcon3 from './img/07.svg';

import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const [newColectionItems, setnewColectionItems] = useState<ClothesItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      const collection = await getApiResource(
        `${API_CLOTHES_DATA}?page=1&limit=3&sortBy=collection&order=asc`
      );
      setnewColectionItems(collection);
      setIsLoading(false);
      window.scrollTo(0, 0);
    })();
  }, []);

  return (
    <main>
      <MainContent />
      <HomePhotoItems items={newColectionItems} isLoading={isLoading} />
      <div className={styles.important}>
        <div className="important__container">
          <div className={`${styles.important__title} secondTitle`}>
            {' '}
            Что для нас важно
          </div>
          <div className={styles.important__items}>
            <div
              className={`${styles.important__item} ${styles.itemImportant}`}
            >
              <div className={styles.itemImportant__icon}>
                <img src={importantIcon1} alt="icon" />
              </div>
              <div className={`${styles.itemImportant__title} thirdTitle`}>
                Качество
              </div>
              <div className={`${styles.itemImportant__text} secondText`}>
                Наши профессионалы работают на лучшем оборудовании для пошива
                одежды беспрецедентного качества
              </div>
            </div>
            <div
              className={`${styles.important__item} ${styles.itemImportant}`}
            >
              <div className={styles.itemImportant__icon}>
                <img src={importantIcon2} alt="icon" />
              </div>
              <div className={`${styles.itemImportant__title} thirdTitle`}>
                Скорость
              </div>
              <div className={`${styles.itemImportant__text} secondText`}>
                Благодаря отлаженной системе в Womazing мы можем отшивать до
                20-ти единиц продукции в наших собственных цехах
              </div>
            </div>
            <div
              className={`${styles.important__item} ${styles.itemImportant}`}
            >
              <div className={styles.itemImportant__icon}>
                <img src={importantIcon3} alt="icon" />
              </div>
              <div className={`${styles.itemImportant__title} thirdTitle`}>
                Ответственность
              </div>
              <div className={`${styles.itemImportant__text} secondText`}>
                Мы заботимся о людях и планете. Безотходное производство и
                комфортные условия труда - все это Womazing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.dreamTeam}>
        <div className="dreamTeam__container">
          <div className={`${styles.dreamTeam__title} secondTitle`}>
            Команда мечты Womazing
          </div>
          <div className={styles.dreamTeam__content}>
            <div className={styles.dreamTeam__slider}>
              <SliderDreamTeam />
            </div>
            <div className={`${styles.dreamTeam__info} ${styles.info}`}>
              <div className={`${styles.info__title} thirdTitle`}>
                Для каждой
              </div>
              <div className={`${styles.info__text} secondText`}>
                <p>
                  {' '}
                  Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                </p>{' '}
                <p>
                  Womazing ищет эти мелочи и создает прекрасные вещи, которые
                  выгодно подчеркивают достоинства каждой девушки.
                </p>
              </div>
              <div className={`${styles.info__detail} secondText`}>
                Подробнее о бренде
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
