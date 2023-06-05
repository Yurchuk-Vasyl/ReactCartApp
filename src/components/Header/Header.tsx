import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from 'src/redux/slices/cartItems/select';

import styles from './Header.module.scss';

import cartIcon from './img/02.svg';
import logoIcon from './img/01.svg';
import { clothesLocalStorage } from './../../constants/clothesLocalStorage';

export const Header: React.FC = () => {
  const [menuIcon, setMenuIcon] = useState<boolean>(false);
  const [menuIconActive, setMenuIconActive] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const isMounted = useRef<boolean>(false);

  const onMenuIconClick = () => {
    menuIconActive ? setMenuIconActive(false) : setMenuIconActive(true);
  };

  const { items } = useSelector(selectCartItems);
  const countItems: number = items.reduce(
    (acc, item) => (acc = acc + item.count),
    0
  );

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem(clothesLocalStorage, json);
    }
    isMounted.current = true;
  }, [countItems]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 550) {
        setMenuIcon(true);
      } else {
        setMenuIcon(false);
        setMenuIconActive(false);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else if (window.scrollY > 0 && !isScrolled) {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles.header_scrolled : ''
        }`}
      >
        <div className="header__container">
          <div className={styles.header__items}>
            <Link to=".." className={styles.header__logo}>
              <img src={logoIcon} alt="logo"></img>
              <div className={styles.logo__text}>Womazing</div>
            </Link>
            <nav className={styles.nav}>
              <div
                className={`${styles.nav__items} ${
                  menuIconActive && styles.nav__items_active
                }`}
                onClick={() => {
                  menuIconActive && setMenuIconActive(false);
                }}
              >
                <NavLink to="..">
                  <div className={styles.nav__itemLink}>Главная</div>
                </NavLink>
                <NavLink to="market">
                  <div className={styles.nav__itemLink}>Магазин</div>
                </NavLink>
                <NavLink to="about">
                  <div className={styles.nav__itemLink}>О бренде</div>
                </NavLink>
              </div>
              <div
                onClick={onMenuIconClick}
                className={`${styles.nav__icon} ${
                  menuIcon && styles.nav__icon_exist
                } ${menuIconActive && styles.nav__icon_active}`}
              >
                <span></span>
              </div>
            </nav>
            <div className={styles.header__info}>
              <div className={styles.header__contacts}>
                <a href="tel:+74958235412">+7 (495) 823-54-12</a>
              </div>
              <NavLink to="cart" className={styles.header__cart}>
                <img src={cartIcon} alt="cart" />
                <span
                  className={
                    countItems > 0 ? styles.header__cart_countActive : ''
                  }
                >
                  {countItems}
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
