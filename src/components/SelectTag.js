import React from 'react';
import * as S from './SelectTag.style';

function SelectTag({ productId, pointX, pointY, targetId }) {
  return (
    <S.ItemTag
      targetId={targetId}
      dataId={productId}
      style={{ top: pointX * 1.6, left: pointY * 1.6 }}
    >
      <S.IconTag src="/images/tag-icon.png" />
    </S.ItemTag>
  );
}

export default SelectTag;
