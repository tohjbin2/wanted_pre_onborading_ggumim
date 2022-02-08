import React, { useEffect, useState } from 'react';
import * as S from './Main.style';
import API_PRODUCTLIST from '../config';
import SelectTag from '../components/SelectTag';
import ProductModal from '../components/ProductModal';

function Main() {
  const [mainImageId, setMainImageId] = useState('');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [productInfo, setProductInfo] = useState([]);

  const [toggleOn, setToggleOn] = useState(true);
  const handleToggle = () => {
    setToggleOn(!toggleOn);
  };

  useEffect(() => {
    fetch(API_PRODUCTLIST, {})
      .then(res => res.json())
      .then(data => {
        setMainImageId(data.id);
        setMainImageUrl(data.imageUrl);
        setProductInfo(data.productList);
      });
  }, []);

  // const handleToggle = targetId => {
  //   fetch(API_PRODUCTLIST, {})
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.productId === targetId) {
  //         setProductInfo(productInfo.map(data => data.productId !== targetId));
  //         setToggleOn(!toggleOn);
  //       }
  //     });
  // };

  return (
    <S.MainPage>
      <S.Header>
        <S.Date>2022.01.12 17:55</S.Date>
        <S.Title>화이트, 우드, 라탄! 세 가지 컨셉으로 꾸민 내 방</S.Title>
        <S.Tag>
          #방꾸미기 &nbsp; &nbsp; #우드톤 &nbsp; &nbsp; #화이트 &nbsp; &nbsp;
          #라탄
        </S.Tag>
        <S.Data>
          <S.DataText>보관함</S.DataText>
          <S.DataNum>93</S.DataNum>
          <S.DataText>댓글</S.DataText>
          <S.CommentCount>0</S.CommentCount>
        </S.Data>
      </S.Header>
      <S.ContentsSection>
        <S.MainImageSection>
          <S.MainImage src={mainImageUrl} id={mainImageId} />
          {/* MEMO: props로 따로 뺀 경우 (SelectTag.js)
          {productInfo.map(data => {
            return (
              <SelectTag
                key={data.productId}
                productId={data.productId}
                pointX={data.pointX}
                pointY={data.pointY}
              />
            );
          })}
          */}

          {/* MEMO: props로 따로 빼지 않은 경우 */}
          {productInfo.map(data => {
            return (
              <S.ItemTag
                key={data.productId}
                dataId={data.productId}
                style={{ top: data.pointX * 1.6, left: data.pointY * 1.6 }}
                onClick={handleToggle}
              >
                <S.IconTag src="/images/tag-icon.png" />
              </S.ItemTag>
            );
          })}

          {!toggleOn
            ? productInfo.map(productList => {
                return (
                  <ProductModal
                    key={productList.productId}
                    productList={productList}
                  />
                );
              })
            : null}
        </S.MainImageSection>
        <S.Swiper>
          <S.SwiperImages />
        </S.Swiper>
      </S.ContentsSection>
    </S.MainPage>
  );
}

export default Main;
