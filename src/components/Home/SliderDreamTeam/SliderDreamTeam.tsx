import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { dreamTeamSliderData } from '../../../data/index';

import './SliderDreamTeam.scss';

export const SliderDreamTeam: React.FC = () => {
  //rewright
  return (
    <>
      <div>
        <Swiper
          className="swiperDreamTeam"
          spaceBetween={20}
          centeredSlides={true}
          grabCursor={true}
          loop={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation]}
          autoHeight={true}
        >
          {dreamTeamSliderData.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="slide" />
            </SwiperSlide>
          ))}

          <div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
};
