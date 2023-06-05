import styles from './Footer.module.scss';

import logoIcon from '../Header/img/01.svg';

import label_1 from './img/01.svg';
import label_2 from './img/02.svg';
import label_3 from './img/03.svg';
import payment_4 from './img/04.svg';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="footer__container">
          <header className={styles.footer__header}>
            <div className={styles.header__items}>
              <div className={styles.header__logo}>
                <img src={logoIcon} alt="logo"></img>
                <div className={styles.logo__text}>Womazing</div>
              </div>
              <nav className={styles.nav}>
                <div className={styles.nav__items}>
                  <div className={styles.nav__itemLink}>Главная</div>
                  <div className={styles.nav__itemLink}>Магазин</div>
                  <div className={styles.nav__itemLink}>О бренде</div>
                  <div className={styles.nav__itemLink}>О бренде</div>
                  <div className={styles.nav__itemLink}>Контакть</div>
                </div>
              </nav>
              <div className={styles.header__info}>
                <div className={styles.header__contacts}>
                  <a>+7 (495) 823-54-12</a>
                </div>
              </div>
            </div>
          </header>
          <div className={styles.footer__gmail}>hello@womazing.com</div>
          <div className={`${styles.header__bottom} ${styles.bottomHeader}`}>
            <div className={styles.bottomHeader__items}>
              <div className={styles.bottomHeader__item}>
                <div className={`${styles.bottomHeader__text} thirdText`}>
                  <p>© Все права защищены</p>
                  <p>Политика конфиденциальности</p>
                  <p>Публичная оферта</p>
                </div>
              </div>
              <div className={styles.bottomHeader__item}>
                <div
                  className={`${styles.bottomHeader__category} ${styles.categoryHeader}`}
                >
                  <div className={styles.categoryHeader__items}>
                    <div className={`${styles.categoryHeader__item} thirdText`}>
                      Пальто
                    </div>
                    <div className={`${styles.categoryHeader__item} thirdText`}>
                      Свитшоты
                    </div>
                    <div className={`${styles.categoryHeader__item} thirdText`}>
                      Кардиганы
                    </div>
                    <div className={`${styles.categoryHeader__item} thirdText`}>
                      Толстовки
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottomHeader__item}>
                <div
                  className={`${styles.bottomHeader__label} ${styles.label}`}
                >
                  <div className={styles.label__item}>
                    <img
                      className={styles.label__icon}
                      src={label_1}
                      alt="lable"
                    />
                    <img
                      className={styles.label__icon}
                      src={label_2}
                      alt="lable"
                    />
                    <img
                      className={styles.label__icon}
                      src={label_3}
                      alt="lable"
                    />
                  </div>
                  <div className={styles.label__item}>
                    <img
                      src={payment_4}
                      className={styles.label__paymentIcon}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
