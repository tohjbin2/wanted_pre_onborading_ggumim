import React from 'react';
import * as S from './ProductModal.style';

function ProductModal({ productList }) {
  const {
    productId,
    productName,
    outside,
    pointX,
    pointY,
    priceOriginal,
    priceDiscount,
    discountRate,
    imageUrl,
  } = productList;
  return (
    <S.ModalSection>
      <S.ImageSection>
        <S.ThumbnailImage alt="상품이미지" src={imageUrl} />
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
