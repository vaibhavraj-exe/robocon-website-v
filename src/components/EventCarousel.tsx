"use client";
import { Event } from "@/constants/types";
import DialogBox from "./DialogBox";
import { useEffect, useState } from "react";

export default function Carousel({ data }: { data: Event[] }) {
  const [isOpen, open] = useState<Event | null>(null);
  const [isPhone, setIsPhone] = useState<boolean>(window.innerWidth <= 768);

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
      className={`w-full ${
        isPhone ? "flex-col" : "flex-row lg:w-5/6"
      } h-full flex gap-2 overflow-y-scroll rounded-lg snap-mandatory ${
        isPhone ? "snap-y" : "snap-x"
      } carousel`}
    >
      {data.map((event: Event, index: number) => (
        <button
          key={index}
          className={`${
            isPhone ? "w-full h-auto mb-4" : "h-full"
          }`}
          onClick={() => {
            open(isOpen ? null : event);
          }}
        >
          <div
            className={`${
              isPhone ? "w-full h-[400px]" : "w-[350px] h-[500px]"
            } bg-cover bg-center rounded-lg  carousel-element ${
              isPhone ? "snap-start" : "snap-center"
            }`}
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
      ))}
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
    </div>
  );
}
