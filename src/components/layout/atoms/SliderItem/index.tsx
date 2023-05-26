import { Container, Img } from 'components/layout/atoms/SliderItem/styled';
import type { VFC } from 'common/utils/types';
import type { HTMLAttributes } from 'react';

interface SliderItemProps extends HTMLAttributes<HTMLDivElement> {
  img: string;
}

export const SliderItem: VFC<SliderItemProps> = ({ img, ...props }) => {
  return (
    <Container {...props}>
      <Img src={img} alt='' />
    </Container>
  );
};
