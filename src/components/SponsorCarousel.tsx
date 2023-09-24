import { Swiper, SwiperSlide } from "swiper/react";
import sponsors from "@/../public/sponsors/sponsors.js";
import Image from "next/image";
import useIsDesktop, { useRef } from "react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function SponsorCarousel() {
  return (
    <div className="my-10 w-screen">
      <Swiper
        slidesPerView={ (window.innerWidth / 300) <=5 ? (window.innerWidth / 300) : 5 }
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sponsors.map((sponsor, key) => {
          return (
            <SwiperSlide className=" bg-slate-50 w-44 sponsor-clip flex justify-center items-center py-5 pr-5 pl-20" key={key}>
              <Image src={`/sponsors/${sponsor}`} alt={sponsor} height={150} width={150}></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
