"use client";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
export default function Slider({ images }) {
  return (
    <Swiper
      navigation={true}
      modules={[Autoplay, Navigation, FreeMode]}
      autoplay={{ delay: 4050 }}
      slidesPerView={1}
      loop={true}
      className="absolute left-0 right-0 h-full w-full"
    >
      {images.map((imageSrc, index) => {
        return (
          <SwiperSlide
            onClick={() => {
              console.log("clicked");
            }}
            key={index}
          >
            <img
              src={imageSrc}
              className="brightness-50 h-full w-full min-h-[600px] object-cover select-none"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
