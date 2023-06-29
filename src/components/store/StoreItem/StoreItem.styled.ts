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
export const StoreItemDescription = styled.div`
  padding-left: 0.6rem;
  line-height: 1.8rem;
`;
export const StoreItemName = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: ${(props): string => props.theme.palette.black.main};
`;
export const StoreItemIntroduction = styled.span`
  font-weight: 0.5rem;
  font-size: 1.4rem;
  color: ${(props): string => props.theme.palette.black.main};
`;
