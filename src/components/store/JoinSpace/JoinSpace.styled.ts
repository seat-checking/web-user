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
  justify-content: space-between;
  border-bottom: 0.1rem solid ${(props): string => props.theme.palette.grey[50]};
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: center;
  width: 100%;
`;
export const NickName = styled.div`
  color: ${(props): string => props.theme.palette.black.main};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.6rem;
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
  width: 100%;
`;

export const ListDate = styled.div`
  color: ${(props): string => props.theme.palette.grey[300]};
  text-align: right;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2rem;
`;

export const ErrorMessage = styled.div`
  width: 90%;
  height: 2rem;
  margin: 0 auto;
  padding-top: 1rem;
  font-weight: 400;
  font-size: 1.2rem;
  color: ${(porps): string => porps.theme.palette.error.main};
  text-align: center;
  white-space: pre-line;
`;
