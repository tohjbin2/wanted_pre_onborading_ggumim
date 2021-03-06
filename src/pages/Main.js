import React, { useEffect, useState } from 'react';
import * as S from './Main.style';
import API_PRODUCTLIST from '../config';
import SelectTag from '../components/SelectTag';

function Main() {
  const [mainImageId, setMainImageId] = useState('');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    fetch(API_PRODUCTLIST, {})
      .then(res => res.json())
      .then(data => {
        setMainImageId(data.id);
        setMainImageUrl(data.imageUrl);
        setProductInfo(data.productList);
      });
  }, []);

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

          {/* // MEMO: props를 이용하지 않은 경우 
          {productInfo.map(data => {
            return (
              <S.ItemTag
                key={data.productId}
                data-furniture-idx={data.productId}
                style={{ top: data.pointX * 1.6, left: data.pointY * 1.6 }}
              >
                <S.IconTag src="/images/tag-icon.png" />
              </S.ItemTag>
            );
          })}
          */}

          {/*
          <S.ItemTag
            data-furniture-idx="219762"
            style={{ top: '777.6px', left: '327.267px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="83544"
            style={{ top: '510.4px', left: '284.067px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="134225"
            style={{ top: '460.8px', left: '154.467px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="219773"
            style={{ top: '240px', left: '333.667px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="127757"
            style={{ top: '328px', left: '720.867px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="219774"
            style={{ top: '308.8px', left: '474.467px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="157412"
            style={{ top: '558.4px', left: '156.067px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="21913"
            style={{ top: '564.8px', left: '444.034px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          <S.ItemTag
            data-furniture-idx="151860"
            style={{ top: '275.2px', left: '199.267px' }}
          >
            <S.IconTag src="/images/tag-icon.png" />
          </S.ItemTag>
          */}
        </S.MainImageSection>
        <S.Swiper>
          <S.SwiperImages />
        </S.Swiper>
      </S.ContentsSection>
    </S.MainPage>
  );
}

export default Main;
