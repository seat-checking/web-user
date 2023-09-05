import {
  SlideImage,
  SwiperContainer,
} from 'components/store/Carousel/Carousel.styled';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps {
  images: string[] | null;
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        rewind
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideImage src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};
