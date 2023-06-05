import React from 'react';

import { useSelector } from 'react-redux';
import { selectItems } from 'src/redux/slices/clothes/selector';
import { ClothesItem, Status } from 'src/redux/slices/clothes/types';

import { PhotoItem } from '../../index';

import styles from './MarketPhotoItems.module.scss';
import { Skeleton } from './../../Skeletons/SkeletonCommon/SkeletonCommon';

export const MarketPhotoItems: React.FC = () => {
  const { clothesItems, status } = useSelector(selectItems);
  return (
    <>
      <div className={`${styles.market__gallery} ${styles.gallery}`}>
        <div className={styles.gallery__items}>
          {status === Status.LOADING ? (
            [...new Array(3)].map((_, index) => <Skeleton key={index} />)
          ) : status === Status.ERROR ? (
            <div className="secondTitle">
              We can not fetch data. <br /> Please try again later...
            </div>
          ) : (
            clothesItems.map((item) => (
              <PhotoItem chooseItemLoc="chooseItem" {...item} key={item.id} />
            ))
          )}
        </div>
      </div>
    </>
  );
};
