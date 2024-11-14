"use client";
import { Project } from "@/constants/types";
import DialogBox from "./DialogBox-projects";
import { useEffect, useState } from "react";

export default function Carousel({ data }: { data: Project[] }) {
  const [isOpen, open] = useState<Project | null>(null);
  const [isPhone, setIsPhone] = useState<boolean>(window.innerWidth <= 768);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`w-full h-full flex gap-2 rounded-lg snap-mandatory carousel ${
        isPhone ? "flex-col overflow-y-auto" : "flex-row overflow-x-auto"
      }`}
    >
      {data.map((project, index) => (
        <div key={index} className="flex-shrink-0">
          <button
            className="h-full"
            onClick={() => open(isOpen ? null : project)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`w-full bg-cover bg-center rounded-lg transition-transform duration-300 ease-in-out carousel-element snap-center ${
                isPhone ? "h-auto" : "h-[500px]"
              }`}
              style={{
                backgroundImage: `url(${project.coverImage})`,
                width: isPhone
                  ? "100%"
                  : `${(500 * project.dimensions.width) / project.dimensions.height}px`,
                height: isPhone
                  ? `${(project.dimensions.height / project.dimensions.width) * 350}px`
                  : "500px",
                transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
              }}
            >
              <div className="bg-black opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg">
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
        </div>
      ))}
      {isOpen && (
        <DialogBox
          {...isOpen}
          setOpen={open}
          isOpen={!!isOpen}
        />
      )}
    </div>
  );
}
