import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from './SkeletonCommon.module.scss';

export const Skeleton = () => (
  <ContentLoader
    className={styles.skeletonCommon}
    speed={2}
    width={350}
    height={570}
    viewBox="0 0 350 570"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="345" height="478" />
    <rect x="60" y="499" rx="5" ry="5" width="230" height="24" />
    <rect x="143" y="533" rx="5" ry="5" width="64" height="22" />
  </ContentLoader>
);
