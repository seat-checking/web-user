import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const BackBtn = styled.button`
  position: absolute;
  top: 4.4rem;
  left: 1.6rem;
  z-index: 999999999;
`;
export const HeaderWrap = styled.div`
  padding: 2.4rem 1.6rem;
  display: flex;
  justify-content: space-between;
`;

export const LeftWrap = styled.div``;

export const JoinBtn = styled.button`
  height: fit-content;
  padding: 0.6rem 1.2rem;

  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  background-color: ${({ theme }) => theme.palette.grey[50]};
  border-radius: 12.8rem;

  font-size: 1.2rem;
  font-weight: 500;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.palette.grey[500]};

  &:hover {
    filter: brightness(90%);
  }
`;

export const Name = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;

  margin-bottom: 0.8rem;
`;

export const Introduction = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
`;
