import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { API_CLOTHES_DATA } from 'src/constants/clothesApi';
import { LocationText, ChooseItem, MatchItems } from '../../components/index';

import styles from './ChooseItemPage.module.scss';

export type ChooseItemState = {
  id: string;
  imageUrl: string;
  name: string;
  sizes: string[];
  price: number;
  withoutSale?: number;
  category: number;
  rating: number;
  color: string[];
  collection: string;
  error?: boolean;
};

const ChooseItemPage: React.FC = () => {
  const id = useParams().id;
  const [chooseItem, setChooseItem] = useState<ChooseItemState>(
    {} as ChooseItemState
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    (async () => {
      try {
        const response = await axios.get(`${API_CLOTHES_DATA}/${id}`);
        setChooseItem({ ...response.data, error: false });
      } catch (err) {
        setChooseItem({ ...chooseItem, error: true });
      }
    })();
  }, [id]);

  return (
    <>
      <main className={styles.chooseItem}>
        <div className="chooseItem__container">
          <h1 className={`${styles.chooseItem__title} main-title`}></h1>
          <LocationText
            locationText={['Главная', 'Свитшоты', 'Свитшот Sweet Shot']}
          />
          {chooseItem?.error ? 'no data' : <ChooseItem {...chooseItem} />}
          {chooseItem?.error ? (
            ''
          ) : (
            <MatchItems
              category={chooseItem?.category}
              id={chooseItem?.id}
              error={chooseItem?.error}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default ChooseItemPage;
