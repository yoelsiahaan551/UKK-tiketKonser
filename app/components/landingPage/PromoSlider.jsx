"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PromoSlider() {

  const promos = [
    "https://picsum.photos/1200/400?1",
    "https://picsum.photos/1200/400?2",
    "https://picsum.photos/1200/400?3",
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">

      <Swiper spaceBetween={20} slidesPerView={1}>

        {promos.map((img) => (
          <SwiperSlide key={img}>
            <img
              src={img}
              className="rounded-xl w-full"
            />
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}