"use client";
import { Event } from "@/constants/types";
import DialogBox from "./DialogBox";
import { useEffect, useState } from "react";

export default function Carousel({ data }: {data: Event[]}) {
  const [isOpen, open] = useState<Event | null>(null);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <div className="w-full lg:w-5/6 h-full flex gap-2 overflow-y-scroll rounded-lg snap-mandatory snap-x carousel">
      {data.map((event: Event, index: number) => {
        return (
          <>
            <button
              key={index}
              className="h-full"
              onClick={() => {
                open(isOpen ? null : event);
              }}
            >
              <div
                className="w-[350px] h-[500px] bg-cover bg-center rounded-lg  duration-500 carousel-element snap-center"
                style={{ backgroundImage: `url(${event.coverImage})` }}
              >
                <div className="bg-black opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg duration-500">
                  <div>
                    <h2 className="text-white text-xl">{event.name}</h2>
                    {/* <p className="text-white text-sm">{event.abstract}</p> */}
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
                isOpen={isOpen !== null}
              />
            )}
          </>
        );
      })}
    </div>
  );
}
