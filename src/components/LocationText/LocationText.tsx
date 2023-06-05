import React from 'react';

import styles from './Location.module.scss';

type LocationInfo = { locationText: string[] };

export const LocationText: React.FC<LocationInfo> = ({ locationText }) => {
  return (
    <div className={`${styles.main__location} ${styles.location}`}>
      <div className={styles.location__items}>
        {locationText.map((item, index) => (
          <div key={index} className={styles.location__item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
