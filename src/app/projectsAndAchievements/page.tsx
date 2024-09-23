"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Achievement from "@/components/AchievementsCard";
import { achievements } from "@/constants/constants"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

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
      <div className="text-xl whitespace-nowrap md:text-4xl text-white mb-10 ml-10 md:ml-40 mt-10">Our Projects</div>
      <div className="w-3/4 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                className="bg-black/0 h-full w-[300px] relative mb-10"
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
                <div className="text-gray-50 flex flex-col justify-center items-center gap-3 p-4 text-2xl h-full">
                  <p>{d.name}</p>
                  <p className="max-w-120 text-sm md:text-base text-center h-full">
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
          {achievements.map((achievement: {
            imageSrc: string;
            altText: string;
            description: string;
          }, index: number) => {
            return <Achievement key={index} imageSrc={achievement.imageSrc} description={achievement.description} altText={achievement.altText} />
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const data = [
  {
    name: `PYRO`,
    img: `/projects/pyro.png`,
    about: `A self-sufficient four-wheel drive vehicle providing a cutting-edge solution for maintaining hygienic environments.`,
  },
  {
    name: "IDEX",
    img: `/projects/IDEX.png`,
    about: `A next gen 3D printed helmet for welders addressing the common challenge of obscured visibility during welding.`,
  },
  {
    name: "SPIDER BOT",
    img: `/projects/SPIDER.png`,
    about: `A next gen 3D printed helmet for welders addressing the common challenge of obscured visibility during welding primarily designed for search and rescue missions, the Spider Bot excels in navigating diverse terrains and reaching otherwise inaccessible areas.`,
  },
  {
    name: "EVA",
    img: `/projects/EVA.png`,
    about: `Enhanced Visitor Assistant fuses the functions of a Visitor Assistant with an Autonomous Professor, presenting an intelligent humanoid robot, which makes use of automated control systems and cutting-edge AI technology.`,
  },
  {
    name: "Two Factor RFID Authentication Device",
    img: `/projects/RFID.jpg`,
    about: `The Two Factor Authentication RFID Security System is a security measure that uses RFID technology along with another authentication factor to provide a higher level of security.`,
  },
  {
    name: "ROV",
    img: `/projects/ROV.png`,
    about: `The ROV is a remotely piloted underwater vehicle, equipped with advanced sensors and high-resolution cameras to revolutionise maintenance, safety, and environmental monitoring in hydroelectric projects.`,
  },
];

export default page;
