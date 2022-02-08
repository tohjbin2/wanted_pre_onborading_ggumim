import styled from 'styled-components';

export const ModalSection = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 85px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  background-color: white;
  z-index: 1000;
`;

export const ImageSection = styled.div``;

export const ThumbnailImage = styled.img`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

export const TextSection = styled.div`
  font-size: ${({ theme }) => theme.fontSize.regular};
`;

export const Title = styled.div`
  overflow: hidden;
  white-space: initial;
`;

export const PriceSection = styled.div``;

export const PriceText = styled.div``;

export const PriceNum = styled.div``;
