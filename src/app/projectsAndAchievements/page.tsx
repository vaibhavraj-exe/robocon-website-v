"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import classes from "./projects.module.css";
import resets from "./resets.module.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

const CustomNextArrow = (props: any) => (
  <div
    {...props}
    className="custom-next-arrow text-2xl md:text-4xl"
    style={{
      position: "absolute",
      right: "10px",
      top: "30%",
      zIndex: 1,
      cursor: "pointer",
      color: "white",
      fontWeight: "bold",
    }}
  >
    &gt;&gt;
  </div>
);

const CustomPrevArrow = (props: any) => (
  <div
    {...props}
    className="custom-prev-arrow text-2xl md:text-4xl"
    style={{
      position: "absolute",
      left: "10px",
      top: "30%",
      zIndex: 1,
      cursor: "pointer",
      color: "white",
      fontWeight: "bold",
    }}
  >
    &lt;&lt;
  </div>
);

const page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <Header />
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                className="bg-black/0 h-[600px] w-[300px] relative"
                key={d.name}
              >
                <div className="flex justify-center items-center relative">
                  <div style={{}}></div>
                  {/* triangle  */}
                  <div
                    className="sm:block hidden"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "22%",
                      width: 0,
                      height: 0,
                      borderTop: "140px solid #c20000",
                      borderRight: "160px solid transparent",
                      borderLeft: "30px solid transparent",
                      opacity: 1,
                    }}
                  ></div>

                  {/* triangle  */}
                  <div
                    className="sm:block hidden"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      right: "25%",
                      width: 0,
                      height: 0,
                      borderBottom: "100px solid #c20000",
                      borderLeft: "100px solid transparent",
                      borderRight: "30px solid transparent",
                      opacity: 1,
                    }}
                  ></div>

                  <img src={d.img} alt="" className="h-96 w-96 z-1" />
                </div>
                <div className="text-gray-50 flex flex-col justify-center items-center gap-3 p-4 text-2xl">
                  <p className="max-w-120 text-xl md:text-2xl text-center">
                    {d.about}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <div className={`${resets.Resets} ${classes.root}`}>
        <div className={classes.container}> */}
        <div className=" mx-4 md:mx-40">
          <div className="text-xl whitespace-nowrap md:text-4xl text-white mb-10">Our Achievements</div>
          <div className="flex flex-wrap gap-x-28 gap-y-7 md:gap-y-12 justify-center mb-20">
            {[1, 2, 3, 4, 5, 6].map((e, i) => (
            <div className="flex items-center justify-center md:w-1/3 h-24 md:h-44 border-r-2 border-red pr-2 md:pr-5" key={i}>
              <Image
                src={`/projects/image8.png`}
                alt="Project data image"
                width={500}
                height={500}
                className="w-auto h-full"
                unoptimized
              ></Image>
              <div className="text-white text-right text-sm md:text-base pl-1">
                Six teams from SRM Team Robocon participated in the Smart India
                Hackathon, an initiative taken by the Government of India.
              </div>
            </div>))}
          </div>
          </div>
      <Footer />
    </div>
  );
};

const data = [
  {
    name: `first`,
    img: `/projects/fourth.png`,
    about: `Reimagine the knowledge from robotics into producing a solution for the growing society, for a better tomorrow.`,
  },
  {
    name: "second",
    img: `/projects/fourth.png`,
    about: `Reimagine the knowledge from robotics into producing a solution for the growing society, for a better tomorrow.`,
  },
  {
    name: "third",
    img: `/projects/fourth.png`,
    about: `Reimagine the knowledge from robotics into producing a solution for the growing society, for a better tomorrow.`,
  },
];

export default page;
