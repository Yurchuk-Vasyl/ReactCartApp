import React, { useEffect, useState } from 'react';

import { PhotoItem } from '../../index';
import { getApiResource } from 'src/utils/network';
import { API_CLOTHES_DATA } from 'src/constants/clothesApi';

import styles from './MatchItems.module.scss';
import { ClothesItem } from 'src/redux/slices/clothes/types';
import { Skeleton } from './../../Skeletons/SkeletonCommon/SkeletonCommon';

export const MatchItems: React.FC<{
  category: number;
  id: string;
  error: boolean | undefined;
}> = ({ category, id, error }) => {
  const [matchData, setMatchData] = useState<ClothesItem[]>([]);

  useEffect(() => {
    if (error === false) {
      (async () => {
        const data = await getApiResource(
          `${API_CLOTHES_DATA}?limit=3&category=${category}`
        );
        setMatchData(data.filter((item) => item.id !== id));
      })();
    }
  }, [category, id]);
  return (
    <>
      <div className={`${styles.chooseItem__match} ${styles.matchChooseItem}`}>
        <div className={`${styles.matchChooseItem__title} secondTitle`}>
          Связанные товары
        </div>
        <div className={styles.matchChooseItem__items}>
          {matchData.length
            ? matchData.map((item, index) => (
                <PhotoItem
                  chooseItemLoc={'../chooseItem'}
                  key={index}
                  {...item}
                />
              ))
            : [...new Array(3)].map((item, index) => <Skeleton key={index} />)}
        </div>
      </div>
    </>
  );
};
