"use client";
import { Project } from "@/constants/types";
import DialogBox from "./DialogBox-projects";
import { useEffect, useState } from "react";
import DialogBoxEvents from "./DialogBox";

export default function Carousel({ data }: { data: Project[] }) {
  const [isOpen, open] = useState<Project | null>(null);
  const [isPhone, setIsPhone] = useState<boolean>(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsPhone(window.innerWidth <= 768);
    console.log(isPhone);
  }, []);
  return (
    <div className="w-full lg:w-5/6 h-full grid lg:flex gap-2 overflow-x-scroll text-white rounded-lg snap-mandatory snap-x carousel place-items-center">
      {data.map((project: Project, index: number) => {
        return (
          <div key={index}>
            <button
              key={index}
              className="h-full"
              onClick={() => {
                open(isOpen ? null : project);
              }}
            >
              <div
                className="w-full h-[500px] bg-cover bg-center rounded-lg  duration-500 carousel-element snap-center "
                style={
                  isPhone
                    ? {
                        backgroundImage: `url(${project.coverImage})`,
                        width: `350px`,
                        height: `${
                          (project.dimensions.height /
                            project.dimensions.width) *
                          350
                        }px`,
                      }
                    : {
                        backgroundImage: `url(${project.coverImage})`,
                        height: `500px`,
                        width: `${
                          500 *
                          (project.dimensions.width / project.dimensions.height)
                        }px`,
                      }
                }


              >
                <div className="bg-black opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg duration-500">
                  <div>
                    <h2 className="text-white text-xl">{project.name}</h2>
                    <p className="text-white text-sm pe-0 ps-0">
                      {project.shortkey}
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </div>
        );
      })}
      {isOpen && (
        <DialogBox
          name={isOpen.name}
          coverImage={isOpen.coverImage}
          description={isOpen.description}
          abstract={isOpen.abstract}
          gallery={isOpen.gallery}
          setOpen={open}
          dimensions={isOpen.dimensions}
          shortkey={isOpen.shortkey}
          isOpen={isOpen !== null}
        />
      )}
    </div>
  );
}
