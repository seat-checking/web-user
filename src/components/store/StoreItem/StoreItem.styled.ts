import mainImg from 'assets/icons/storeImg.svg';
import styled from 'styled-components';

export const StoreItemDiv = styled.div`
  max-width: 67.5rem;
  height: 9.6rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${(props): string => props.theme.palette.grey[50]};
`;

export const StoreItemImgDiv = styled.div`
  padding: 1.2rem;
`;
export const StoreItemImg = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 0.6rem;
`;
export const StoreItemDefaultImg = styled.img`
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 0.7rem;
`;
export const StoreItemDescription = styled.div`
  padding-left: 0.6rem;
  line-height: 1.8rem;
`;
export const StoreItemName = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${(props): string => props.theme.palette.black.main};
  display: flex;
  gap: 0.6rem;
`;
export const StoreItemIntroduction = styled.span`
  font-weight: 0.5rem;
  font-size: 1.4rem;
  color: ${(props): string => props.theme.palette.black.main};
`;

export const Ready = styled.div`
  width: 5.5rem;
  height: 2rem;
  border-radius: 0.4rem;
  background: ${(props): string => props.theme.palette.grey[50]};
  color: ${(props): string => props.theme.palette.grey[500]};
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height 2rem;
`;
export const Start = styled.div`
  width: 3.8rem;
  height: 2rem;
  border-radius: 0.4rem;
  background: rgba(255, 141, 78, 0.1);
  color: ${(props): string => props.theme.palette.primary.orange};
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  line-height 2rem;
`;
