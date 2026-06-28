"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export const trustedPartners = [
  { name: "Larsen & Toubro", logo: "/assets/Larsen&Toubro_logo.png" },
  { name: "Lightning Electro Mechanical", logo: "/assets/lightning-electro-mechanical.webp" },
  { name: "Credence Trading and Contracting", logo: "/assets/Crecend.png" },
  {
    name: "Qarae Electro-Mechanical Co. WLL - Qatar (QEMC)",
    logo: "/assets/electro_mechanical_co_w_l_l_logo.jpg",
  },
  {
    name: "Navigate Technology Trading and Contracting W.L.L",
    logo: "/assets/Navigate-technology-trading-and-contracting.png",
  },
  {
    name: "Mirrikh Contracting WLL",
    logo: "/assets/mirrikh_contracting_wll_logo.jpg",
  },
  {
    name: "Qatar Power Construction",
    logo: "/assets/qatar-power-construction.png",
  },
  {
    name: "Consolidated Contractors Company (CCC)",
    logo: "/assets/ccc.png",
  },
];

export function TrustedPartners() {
  return (
    <section className="bg-[#EBEBEB] py-14 px-10">
      <div className="space-y-5 mb-10">
        <h2 className="text-3xl font-bold text-center">
          Our Trusted Partners
        </h2>
        <p className="text-center">
          Join hundreds of leading organizations who trust us with their
          corporate procurement needs
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {trustedPartners.map((item, index) => (
            <SwiperSlide key={index} className="py-10">
            <div className="bg-white rounded-3xl p-6 h-56 flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-2xl">
                <div className="h-20 flex items-center justify-center">
                <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-16 max-w-[150px] object-contain"
                />
                </div>

                <div className="mt-6">
                <h3 className="text-base font-semibold text-gray-800 leading-snug">
                    {item.name}
                </h3>
                </div>
            </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}