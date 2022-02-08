import React from 'react';
import * as S from './ProductModal.style';

function ProductModal({ productList }) {
  const {
    productId,
    productName,
    pointX,
    pointY,
    outside,
    priceOriginal,
    priceDiscount,
    discountRate,
    imageUrl,
  } = productList;

  return (
    <S.ModalSection style={{ top: pointX * 1.6, left: pointY * 1.6 }}>
      <S.ImageSection>
        <S.ThumbnailImage alt="태그 썸네일" src={imageUrl} />
      </S.ImageSection>
      <S.TextSection>
        <S.Title>{productName}</S.Title>
        <S.PriceSection>
          <S.PriceText />
          <S.PriceNum />
        </S.PriceSection>
      </S.TextSection>
    </S.ModalSection>
  );
}

export default ProductModal;
