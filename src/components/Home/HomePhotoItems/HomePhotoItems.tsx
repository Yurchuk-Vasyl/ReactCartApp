import { ClothesItem } from 'src/redux/slices/clothes/types';
import { PhotoItem, Skeleton } from '../../index';

import styles from './HomePhotoItems.module.scss';
import { Link } from 'react-router-dom';

type HomePhotoItemsProps = {
  items: ClothesItem[];
  isLoading: boolean;
};

export const HomePhotoItems: React.FC<HomePhotoItemsProps> = ({
  items,
  isLoading,
}) => {
  return (
    <div className={styles.collection}>
      <div className="collection__container">
        <div className={`${styles.collection__title} secondTitle`}>
          Новая коллекция
        </div>
        <div
          className={`${styles.collection__items} ${styles.itemsCollection} `}
        >
          {isLoading
            ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => (
                <PhotoItem
                  {...item}
                  chooseItemLoc="market/chooseItem"
                  key={item.id}
                />
              ))}
        </div>
        <Link
          to="market"
          className={`${styles.collection__button} main-button main-button_rev`}
        >
          Открыть магазин
        </Link>
      </div>
    </div>
  );
};
