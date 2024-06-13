"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import photoNames from "../../../public/gallery/photoData";
import AOS from "aos";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper"; //this is the problem.

import slide_image_1 from "/public/gallery/photos/col1 (1).png";
import slide_image_2 from "/public/gallery/photos/col1 (2).png";
import slide_image_3 from "/public/gallery/photos/col1 (3).png";
import slide_image_4 from "/public/gallery/photos/col2 (1).png";
import slide_image_5 from "/public/gallery/photos/col3 (1).png";

const imgLoader = (src: string) => {
  return `/gallery/photos/${src}`;
};

export default function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div>
      <Header />
      <section className="m-10 md:mx-28 md:my-20">
        <h1 className="text-4xl mb-12 text-white">Gallery</h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={slide_image_1.src} alt="Slide 1" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_2.src} alt="Slide 2" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_3.src} alt="Slide 3" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_4.src} alt="Slide 4" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_5.src} alt="Slide 5" />
          </SwiperSlide>

          <div className="swiper-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>

            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>

        <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 500: 2, 900: 3, 1200: 4 }} className="md:mx-10">
          <Masonry gutter="7px">
            {photoNames.map((image, i) => (
              <Image
                key={i}
                src={`/gallery/photos/${image}`}
                loader={() => imgLoader(image)}
                style={{ width: "100%", display: "block" }}
                alt={`Gallery image ${i}`}
                width={300}
                height={300}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
      <Footer />
    </div>
  );
}
