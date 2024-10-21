"use client";
import { Event } from "@/constants/types"

const events: Event[] = [
  {
    coverImage: "/events/ARC.JPG",
    name: "ARC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
  },
  {
    coverImage: "/events/swb2.jpg",
    name: "SolidWorks Bootcamps 2.0",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nulla nec purus",
  },
];

export default function Carousel() {
  return (
    <div className=" w-3/4 h-full flex gap-2 overflow-y-scroll no-scrollbar">
      {events.map((event: Event, index: number) => {
        return (
          <div key={index} className="h-full">
            <div
              className="w-[350px] h-[500px] bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${event.coverImage})` }}
            >
              <div className="bg-black opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg duration-500">
                <h2 className="text-white text-xl">{event.name}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
