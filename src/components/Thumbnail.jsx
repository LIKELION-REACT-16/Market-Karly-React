import React from 'react';
import Badge from './Badge';
import styles from '@/styles/components/List/thumbnail.module.scss';

// img
import cart from '@/assets/button-cart.svg';

export const Thumbnail = ({
  productName,
  price,
  productDesc,
  salePrice,
  saleRatio,
  thumbnail,
  imgAlt,
}) => {
  const badgeInfo = {
    karlyOnly: {
      name: 'Karly Only',
      color: '#5F0080',
    },
    limited: {
      name: '한정수량',
      color: '#2b2b2b',
    },
  };

  const koPrice = price.toLocaleString('ko-KR');
  const discountRate = saleRatio * 100;

  return (
    <div className={styles.thumbnailWrapper}>
      <div className={styles.thumbnailVisual}>
        <img className={styles.thumbnailImg} alt={imgAlt} src={thumbnail} />
        <button className={styles.cartButton} type="button">
          <img src={cart} />
        </button>
      </div>
      <p className={styles.starDelivery}>샛별배송</p>
      <h4>{productName}</h4>
      <span className={discountRate == 0 ? null : styles.saleRatio}>
        {discountRate == 0 ? null : `${discountRate}%`}
      </span>
      <span>
        {discountRate == 0
          ? `${koPrice}`
          : `${salePrice.toLocaleString('ko-KR')}`}
        원
      </span>
      <span className={discountRate !== 0 ? styles.originalPrice : null}>
        {discountRate !== 0 ? `${koPrice}원` : null}
      </span>
      <p>{productDesc}</p>
      <div className={styles.badgeWrapper}>
        <Badge
          badgeName={badgeInfo.karlyOnly.name}
          nameColor={badgeInfo.karlyOnly.color}
        />
        <Badge
          badgeName={badgeInfo.limited.name}
          nameColor={badgeInfo.limited.color}
        />
      </div>
    </div>
  );
};
