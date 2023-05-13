import {
  Container,
  Dot,
  DotContainer,
  ImgContainer,
} from 'pages/StoreDetail/components/ImageSlider.styled';
import { SliderItem } from 'pages/StoreDetail/components/SliderItem';
import { useEffect, useRef, useState } from 'react';
import type { VFC } from 'common/utils/types';
import type { TouchEvent } from 'react';

export interface SlideItem {
  url: string;
}
interface Props {
  dataList: SlideItem[];
}

const TRANSITION_SPEED = 0.3;
/**
 * 이미지 슬라이더 컴포넌트
 */
export const ImageSlider: VFC<Props> = ({ dataList }) => {
  const imgList = [dataList[dataList.length - 1], ...dataList, dataList[0]];

  const [currentImgIndex, setCurrentImgIndex] = useState(1);

  const [touch, setTouch] = useState({
    start: 0,
    end: 0,
  });

  const [style, setStyle] = useState({
    transform: `translateX(-${currentImgIndex}00%)`,
    transition: `all ${TRANSITION_SPEED}s ease-in-out`,
  });

  const ref = useRef<HTMLDivElement>(null);

  const prevSlide = (): void => {
    setCurrentImgIndex((prevSate) => prevSate - 1);
    setStyle({
      transform: `translateX(-${currentImgIndex - 1}00%)`,
      transition: `all ${TRANSITION_SPEED}s ease-in-out`,
    });
  };

  const nextSlide = (): void => {
    setCurrentImgIndex((prevSate) => prevSate + 1);
    setStyle({
      transform: `translateX(-${currentImgIndex + 1}00%)`,
      transition: `all ${TRANSITION_SPEED}s ease-in-out`,
    });
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    setTouch({ ...touch, start: e.touches[0].pageX });
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>): void => {
    if (ref.current) {
      const movedDx = e.targetTouches[0].pageX - touch.start;
      const currentX = ref.current.clientWidth * currentImgIndex;

      setStyle({
        ...style,
        transform: `translateX(-${-currentX + movedDx}px)`,
        transition: '0ms',
      });
    }
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>): void => {
    const end = e.changedTouches[0].pageX;
    if (touch.start - end > 10) {
      nextSlide();
    } else if (end - touch.start > 10) {
      prevSlide();
    }
    setTouch({ ...touch, end });
  };

  useEffect(() => {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(imgList.length - 2);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-${imgList.length - 2}00%)`,
          transition: '0ms',
        });
      }, 500);
      return;
    }
    if (currentImgIndex >= imgList.length - 1) {
      setCurrentImgIndex(1);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-${1}00%)`,
          transition: '0ms',
        });
      }, 500);
    }
  }, [currentImgIndex, imgList.length]);

  return (
    <Container>
      <ImgContainer ref={ref} style={style}>
        {imgList.map(({ url }, index) => (
          <SliderItem
            key={url + index}
            img={url}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        ))}
      </ImgContainer>
      <DotContainer>
        {Array.from({ length: imgList.length - 2 }, (_, index) => (
          <Dot key={index} active={index === currentImgIndex - 1} />
        ))}
      </DotContainer>
    </Container>
  );
};
