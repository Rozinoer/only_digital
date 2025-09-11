import { TimelineData } from 'shared/data/type';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { PaginationButton } from 'widgets/Timeline/common/pagination-btn/pagination-btn';

import { SlideContent } from './slide-content/slide-content';
import './timeline-swiper.scss';

export const TimelineSwiper = ({ slides }: { slides: TimelineData[number]['events'] }) => (
  <div className="timeline-swapper__wrapper">
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={true}
        slidesPerView={1.6}
        spaceBetween={12}
        navigation={{
          prevEl: '.swiper-notes__arrow.left',
          nextEl: '.swiper-notes__arrow.right',
        }}
        watchSlidesProgress={true}
        className="swiper-notes"
        breakpoints={{
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
             <SlideContent content={slide}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <PaginationButton direction="left" variant="swiper" className="swiper-notes__arrow left" />
    <PaginationButton direction="right" variant="swiper" className="swiper-notes__arrow right" />
  </div>
);
