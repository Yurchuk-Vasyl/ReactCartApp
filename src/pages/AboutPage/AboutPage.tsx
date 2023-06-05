import React from 'react';
import { LocationText } from './../../components/LocationText/LocationText';

import img_1 from './img/01.png';
import img_2 from './img/02.png';

import styles from './AboutPage.module.scss';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  window.scrollTo(0, 0);
  return (
    <main className={styles.about}>
      <div className="about__container">
        <div className={`${styles.about__title} main-title`}>О бренде</div>
        <LocationText locationText={['Главная', 'О бренде']} />
        <div className={`${styles.about__info} ${styles.infoAbout}`}>
          <div className={styles.infoAbout__items}>
            <div className={styles.infoAbout__item}>
              <img src={img_1} className={styles.infoAbout__img} />
            </div>
            <div className={styles.infoAbout__item}>
              <div className={`${styles.infoAbout__title} thirdTitle`}>
                Идея и женщина
              </div>
              <div className={`${styles.infoAbout__text} secondText`}>
                <p>
                  Womazing была основана в 2010-ом и стала одной из самых
                  успешных компаний нашей страны. Как и многие итальянские
                  фирмы, Womazing остаётся семейной компанией, хотя ни один из
                  членов семьи не является модельером.
                </p>{' '}
                <p>
                  Мы действуем по успешной формуле, прибегая к услугам известных
                  модельеров для создания своих коллекций. Этот метод был описан
                  критиком моды Колином Макдауэллом как форма дизайнерского
                  со-творчества, характерная для ряда итальянских prêt-a-porter
                  компаний.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.infoAbout__items} ${styles.infoAbout__items_r}`}
          >
            <div className={styles.infoAbout__item}>
              <img src={img_2} className={styles.infoAbout__img} />
            </div>
            <div className={styles.infoAbout__item}>
              <div className={`${styles.infoAbout__title} thirdTitle`}>
                Магия в деталях
              </div>
              <div className={`${styles.infoAbout__text} secondText`}>
                <p>
                  Первый магазин Womazing был открыт в маленьком городке на
                  севере страны в 2010-ом году. Первая коллекция состояла из
                  двух пальто и костюма, которые были копиями парижских моделей.
                </p>{' '}
                <p>
                  Несмотря на то, что по образованию основательница была
                  адвокатом, ее семья всегда была тесно связана с шитьём
                  (прабабушка основательницы шила одежду для женщин, а мать
                  основала профессиональную школу кроя и шитья). Стремление
                  производить одежду для масс несло в себе большие перспективы,
                  особенно в то время, когда высокая мода по-прежнему
                  доминировала, а рынка качественного prêt-a-porter попросту не
                  существовало.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to="../market" className={`${styles.about__button} main-button`}>
          Перейти в магазин
        </Link>
      </div>
    </main>
  );
};

export default AboutPage;
