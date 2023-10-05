import styled from 'styled-components';

export const ListWrapper = styled.div`
  max-width: 67.5rem;
  width: 100%;
  cursor: pointer;
`;

export const ListContent = styled.div`
  padding: 1.6rem;
  margin: 0 auto;
  display: flex;
  gap: 21.7rem;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props): string => props.theme.palette.grey[50]};
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
`;
export const NickName = styled.div`
  color: ${(props): string => props.theme.palette.black.main};
  font-size: 1.6rem;
  font-weight: 700;
`;

export const StoreSpace = styled.div`
  color: ${(props): string => props.theme.palette.grey[400]};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
`;

export const ListDate = styled.div`
  color: ${(props): string => props.theme.palette.grey[300]};
  text-align: right;
  font-size: 1.2rem;
  font-weight: 400;
`;
