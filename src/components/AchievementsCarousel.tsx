"use client";
import { Project } from "@/constants/types";
import DialogBox from "./DialogBox-projects";
import { useEffect, useState } from "react";

export default function Carousel({ data }: { data: Project[] }) {
  const [isOpen, open] = useState<Project | null>(null);
  const [isPhone, setIsPhone] = useState<boolean>(window.innerWidth <= 768);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Update isPhone state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`w-full h-full flex gap-2 rounded-lg snap-mandatory carousel ${
        isPhone ? "flex-col overflow-y-auto" : "flex-row overflow-x-auto"
      }`}
    >
      {data.map((project: Project, index: number) => (
        <div key={index} className="flex-shrink-0">
          <button
            className="h-full"
            onClick={() => {
              open(isOpen ? null : project);
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-full bg-cover bg-center rounded-lg duration-500 carousel-element snap-center ${
                isPhone ? "h-auto" : "h-[500px]"
              }`}
              style={{
                backgroundImage: `url(${project.coverImage})`,
                width: isPhone
                  ? "100%"
                  : project.dimensions && project.dimensions.width && project.dimensions.height
                  ? `${(500 * project.dimensions.width) / project.dimensions.height}px`
                  : "500px",
                height: isPhone
                  ? project.dimensions && project.dimensions.height && project.dimensions.width
                    ? `${(project.dimensions.height / project.dimensions.width) * 350}px`
                    : "350px"
                  : "500px",
              }}
            >
              <div
                className={`bg-black transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-70" : "opacity-0"
                } hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg`}
              >
                <div>
                  <h2 className="text-white text-xl">{project.name}</h2>
                  <p className="text-white text-sm">
                    {project.abstract.split(" ").slice(0, 15).join(" ") +
                      (project.abstract.split(" ").length > 15 ? "..." : "")}
                  </p>
                </div>
              </div>
            </div>
          </button>
          {isOpen && (
            <DialogBox
              name={isOpen.name}
              coverImage={isOpen.coverImage}
              description={isOpen.description}
              abstract={isOpen.abstract}
              gallery={isOpen.gallery}
              setOpen={open}
              dimensions={isOpen.dimensions}
              isOpen={isOpen !== null}
            />
          )}
        </div>
      ))}
    </div>
  );
}
