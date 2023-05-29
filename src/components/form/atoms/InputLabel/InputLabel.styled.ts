import styled from 'styled-components';

export const Wrapper = styled.span`
  max-width: 67.5rem;
  width: 82%;
  display: block;
`;

export const Label = styled.label`
  color: ${(porps): string => porps.theme.palette.grey[400]};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const Required = styled.span`
  color: ${(props): string => props.theme.palette.error.main};
  padding-left: 0.4rem;
  font-size: 1.2rem;
`;
