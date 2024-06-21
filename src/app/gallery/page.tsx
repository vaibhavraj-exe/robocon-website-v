"use client";
import "./index.css";
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
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"; //this is the problem.

import slide_image_1 from "/public/gallery/photos/col1 (1).png";
import slide_image_2 from "/public/gallery/photos/col1 (2).png";
import slide_image_3 from "/public/gallery/photos/col1 (3).png";
import slide_image_4 from "/public/gallery/photos/col2 (1).png";
import slide_image_5 from "/public/gallery/photos/col3 (1).png";
import slide_image_6 from "/public/gallery/photos/col3 (3).png";
import slide_image_7 from "/public/gallery/photos/col3 (2).png";




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
        <h1 className="text-4xl mb-12 justify-center flex text-white bg">Gallery</h1>

        <Swiper
       
        effect= { 'coverflow' }
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
         rotate: 0,
         stretch:0, 
         depth: 100,
         modifier: 2.5,

        }}
        pagination={{el:'.swiper-pagination',clickable:true}}
        navigation={{
          nextEl:'.swiper-button-next',
          prevEl:'.swiper-button-prev',
          clickable:true,
      
        }}

        autoplay={{
          delay: 3000, // Delay in milliseconds
          disableOnInteraction: false,
        }}
        
        modules={[EffectCoverflow,Pagination,Navigation,Autoplay]}
        className="swiper_container  " 
        data-aos="zoom-out-up"
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

          <SwiperSlide>
            <img src={slide_image_6.src} alt="Slide 6" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={slide_image_7.src} alt="Slide 7" />
          </SwiperSlide>
          
          <div className="swiper-controler flex  justify-center items-center md:mx-10 ">
            <div className="swiper-button-prev  slider-arrow mr-11">
              {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
            </div>
            
            <div className="swiper-button-next slider-arrow">
              {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
            </div>
            
          </div>
          
          <div className="swiper-pagination justify-center pb-14"></div>
          
         
        </Swiper>

       

        <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 500: 2, 900: 3, 1200: 4 }} className=" md:mx-10">
          <Masonry gutter="7px" >
            {photoNames.map((image, i) => (
              <Image
                
                key={i}
                src={`/gallery/photos/${image}`}
                loader={() => imgLoader(image)}
                className="transform transition duration-300 hover:scale-125" 
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
