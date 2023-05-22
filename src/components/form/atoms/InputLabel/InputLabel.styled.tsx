import styled from 'styled-components';

export const Wrapper = styled.span`
  max-width: 675px;
  width: 82%;
  display: block;
`;

export const Label = styled.label`
  color: ${(porps): string => porps.theme.palette.grey[400]};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const Required = styled.span`
  color: ${(props): string => props.theme.palette.error.main};
  padding-left: 4px;
  font-size: 12px;
`;
