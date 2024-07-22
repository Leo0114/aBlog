import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";

export default function AutoSwipe() {
  return (
    <main className=" py-6 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{ enabled: true }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Autoplay, Navigation, Pagination, Keyboard]}
        className=" h-96 transition-all ease-in"
      >
        <SwiperSlide className="flex justify-center items-center place-content-center transition-all">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className=" object-cover w-full h-full  block rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className=" object-cover w-full h-full  block rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            className=" object-cover w-full h-full  block rounded-xl"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            className=" object-cover w-full h-full  block rounded-xl"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            className=" object-cover w-full h-full  block rounded-xl"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            className=" object-cover w-full h-full  block rounded-xl"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            className=" object-cover w-full h-full  block rounded-xl"
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            className=" object-cover w-full h-full  block rounded-xl"
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>

        <SwiperSlide className=" flex justify-center items-center place-content-center transition-all">
          <img
            className=" object-cover w-full h-full  block rounded-xl"
            src="https://swiperjs.com/demos/images/nature-10.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
