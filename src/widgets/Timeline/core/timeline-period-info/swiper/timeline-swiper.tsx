import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { PaginationButton } from "../../../common/pagination-btn/pagination-btn";
import { SlideContent } from "./slide-content/slide-content";
import "./timeline-swiper.scss";
import { TimelineData } from "shared/data/type";

export const TimelineSwiper = ({
  slides,
}: {
  slides: TimelineData[number]["events"];
}) => (
  <div className="timeline-swapper__wrapper">
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={true}
        slidesPerView={1.2}
        spaceBetween={16}
        navigation={{
          prevEl: ".swiper-notes__arrow.left",
          nextEl: ".swiper-notes__arrow.right",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 24,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isNext }) => <SlideContent content={slide} isNext={isNext} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <PaginationButton
      direction="left"
      variant="swiper"
      className="swiper-notes__arrow left"
    />
    <PaginationButton
      direction="right"
      variant="swiper"
      className="swiper-notes__arrow right"
    />
  </div>
);
