import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';

import 'swiper/css/effect-fade';

import { mainSliderData } from '../../../data/index';

import arrowIcon from './img/01.svg';

import imgLeft from './img/03.png';
import imgRight from './img/04.png';

import styles from './MainContent.module.scss';
export const MainContent: React.FC = () => {
  return (
    <>
      <main className={styles.main}>
        <Swiper
          loop={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[Pagination, EffectFade, Autoplay]}
          autoHeight={true}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
        >
          {' '}
          {mainSliderData.map((obj, index) => (
            <SwiperSlide key={index}>
              <div className="main__container">
                <div className={styles.main__items}>
                  <div className={styles.main__info}>
                    <div className={`${styles.main__title} main-title`}>
                      {obj.title}
                    </div>
                    <div className={`${styles.main__text} main-text`}>
                      {obj.text}
                    </div>
                    <div
                      className={`${styles.main__controlButton} ${styles.controlButton}`}
                    >
                      <div className={styles.controlButton__arrow}>
                        {' '}
                        <img src={arrowIcon} alt="arrow" />
                      </div>
                      <Link
                        to="market"
                        className={`${styles.controlButton__button} main-button`}
                      >
                        Открыть магазин
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`${styles.main__photos} ${styles.photosMain}`}
                  >
                    <img
                      src={obj.img}
                      className={styles.photosMain__main}
                      alt="img"
                    />
                    <img
                      src={imgLeft}
                      className={styles.photosMain__left}
                      alt="img"
                    />
                    <img
                      src={imgRight}
                      className={styles.photosMain__right}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
};
