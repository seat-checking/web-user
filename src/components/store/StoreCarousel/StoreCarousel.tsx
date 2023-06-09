import {
  SlideImage,
  SwiperContainer,
} from 'components/store/StoreCarousel/StoreCarousel.styled';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

interface ItemsProps {
  id: number;
  image: string;
}

export const StoreCarousel: React.FC = () => {
  const carouselItems: ItemsProps[] = [
    {
      id: 1,
      image:
        'https://cdn.pixabay.com/photo/2023/05/28/13/15/helicopter-8023696_1280.jpg',
    },
    {
      id: 2,
      image:
        'https://cdn.pixabay.com/photo/2023/05/18/09/28/monastery-8001787_1280.jpg',
    },
    {
      id: 3,
      image:
        'https://cdn.pixabay.com/photo/2017/09/12/11/56/universe-2742113_1280.jpg',
    },
  ];

  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideImage src={item.image} alt={`Slide ${item.id}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};
