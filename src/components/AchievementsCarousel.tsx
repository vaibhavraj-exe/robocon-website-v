"use client";
import { Achievement } from "@/constants/types";
import DialogBox from "./DialogBox-achievements";
import { useEffect, useState } from "react";

export default function Carousel({ data }: { data: Achievement[] }) {
  const [isOpen, open] = useState<Achievement | null>(null);
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
      {data.map((achievements: Achievement, index: number) => {
        return (
          <div key={index}>
            <button
              key={index}
              className="h-full"
              onClick={() => {
                open(isOpen ? null : achievements);
              }}
            >
              <div
                className="w-full  bg-cover bg-center rounded-lg  duration-500 carousel-element snap-center "
                style={
                  isPhone
                    ? {
                        backgroundImage: `url(${achievements.coverImage})`,
                        width: `350px`,
                        height: `${
                          (achievements.dimensions1.height /
                            achievements.dimensions1.width) *
                          350
                        }px`,
                      }
                    : {
                        backgroundImage: `url(${achievements.coverImage})`,
                        height: `500px`,
                        width: `${
                          500 *
                          (achievements.dimensions1.width /
                            achievements.dimensions1.height)
                        }px`,
                      }
                }
              >
                <div className="bg-black opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg duration-500">
                  <div>
                    <h2 className="text-white text-xl">{achievements.name}</h2>
                    <p className="text-white text-sm"></p>
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
          dimensions1={isOpen.dimensions1}
          isOpen={isOpen !== null}
        />
      )}
    </div>
  );
}
