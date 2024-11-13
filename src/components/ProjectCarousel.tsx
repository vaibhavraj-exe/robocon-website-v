"use client";
import {  Project } from "@/constants/types";
import DialogBox from "./DialogBox-projects";
import { useEffect, useState } from "react";



export default function Carousel({ data }: {data: Project[]}) {
  const [isOpen, open] = useState<Project | null>(null);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <div className="w-full lg:w-5/6 h-full flex gap-2 overflow-x-scroll rounded-lg snap-mandatory snap-x carousel">
      <div style={{
        marginTop:0,
        marginRight:20
      }}>
      <h1 style={{
          fontSize:30,
          color:"white"
          
        }}>Projects</h1>

      </div>
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
                style={{ backgroundImage: `url(${project.coverImage})`,
                height:`500px`,
                width:`${500*(project.dimensions.width/project.dimensions.height)}px`,
                
                
                
              }
                
              }
              >
                <div className="bg-black opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg duration-500">
                  <div>
                    <h2 className="text-white text-xl">{project.name}</h2>
                    <p className="text-white text-sm">{project.abstract.split(" ").slice(0, 15).join(" ") + (project.abstract.split(" ").length > 15 ? "..." : "")}
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
        );
      })}
    </div>
  );
}
