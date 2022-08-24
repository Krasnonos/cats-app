import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './customSwiper.css';
import { MainContentNav } from '../MainContentNav/MainContentNav';
import { CatsDescr } from '../CatsDescr/CatsDescr';
import { Wrap, ImageWrap, ImgCard, SwiperWrap } from './FullCatsInfo.styled';

export const FullCatsInfo = ({ catsInfo, page }) => {
  return (
    <Wrap>
      <MainContentNav currentPage={page} id={catsInfo.id} />
      <SwiperWrap>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
        >
          {catsInfo.imagesObj.map(image => (
            <SwiperSlide key={image.img_id}>
              <ImageWrap>
                <ImgCard src={image.image} alt={catsInfo.name} />
              </ImageWrap>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>
      <CatsDescr catsInfo={catsInfo} />
    </Wrap>
  );
};
