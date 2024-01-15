import { useRouter } from "next/navigation";
import React from "react";

const ProjectsDisplay = () => {
  const router = useRouter();

  return (
    <div className="w-screen flex items-center justify-center my-28">
      <div className="w-full">
        <div className="">
          <h1 className="text-3xl md:text-4xl pl-10 md:pl-44 text-white mb-7">
            Our Projects
          </h1>
          <div className="flex justify-center overflow-x-auto">
            {data.slice(0, 3).map((d, index) => (
              <div
                key={index}
                className="group flex-shrink-0 h-[400px] w-1/3 relative"
              >
                <div className="group flex justify-center text-center relative overflow-hidden w-full h-full">
                  <img
                    src={d.img}
                    alt=""
                    className=" object-cover ease-in-out duration-500 group-hover:rotate-2 group-hover:scale-125 w-full h-full"
                  />
                  <div className="absolute bg-red w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80 flex items-center justify-center">
                    <h2 className="text-white text-xl md:text-5xl font-kurat select-none">
                      {index === 0
                        ? "PYRO"
                        : index === 1
                        ? "Smart Helmet"
                        : index === 2
                        ? "Spider"
                        : index === 3
                        ? "Jerry"
                        : "Water Management"}
                    </h2>
                  </div>
                  {index === 2 && (
                    <div className="h-[400px] w-[120px] absolute right-0 bottom-0 bg-red text-white p-2 opacity-60 group-hover:opacity-80 transition-opacity duration-500 cursor-pointer flex items-center justify-center font-kurat text-4xl"
                    onClick={()=> router.push("/projectsAndAchievements")}>
                      <div>{">>"} More</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  { img: `/projects/pyro.png` },
  { img: `/projects/IDEX.png` },
  { img: `/projects/SPIDER.png` },
];

export default ProjectsDisplay;
