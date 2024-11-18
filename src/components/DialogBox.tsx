import { Event, Project } from "@/constants/types";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AOS from "aos";
import { useEffect, useState } from "react";

const imgLoader = (src: string) => {
  return src
}

export default function DialogBoxEvents({
  name,
  description,
  coverImage,
  abstract,
  gallery,
  setOpen,
  dimensions,
  isOpen
}: Event & { setOpen: (isOpen: Event | null) => void; isOpen: boolean }) {
  useEffect(() => {
    AOS.init({
      duration: 150,
      once: false,
    });
  }, []);

  const [isPhone, setPhone] = useState(false);

  useEffect(() => {
    setPhone(window.innerWidth <= 768);
  })
  return (
    <div className="dialog-box text-white bg-black overflow-y-scroll w-full h-full grid place-items-center no-scrollbar">
      <div className=" no-scrollbar grid gap-2 w-full h-full lg:w-5/6 py-2 px-4 border-y-0 rounded-3xl shadow-red shadow-2xl overflow-y-scroll">
        <div className="grid place-items-end">
          <button className="close-button bg-red p-2 rounded-lg"
            onClick={() => {
              setOpen(null);
            }}
          >
            Close
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-2xl p-2 font-bold underline">{name}</h2>
        </div>
        <div className="grid lg:flex gap-2">
          <div className="">
            <Image
              src={coverImage}
              alt={name}
              width={dimensions.width * (isPhone ? 350 / dimensions.width : 500 / dimensions.width)}
              height={dimensions.height * (isPhone ? 350 / dimensions.width : 500 / dimensions.width)}
              className="rounded-xl  hover:scale-105 duration-500"
            />
          </div>
          <div className="bg-red rounded-lg p-4 w-fit overflow-y-auto grid place-items-center">
            <p className="text-justify">{abstract}</p>
          </div>
        </div>
        <div>
          <p className="p-2 text-justify">{description}</p>
        </div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 100: 1, 500: 2, 600: 3 }} className="md:mx-10">
          <Masonry gutter="7px">
            {gallery.map((image, i) => {
              return (
                <Image
                  key={i}
                  src={image}
                  style={{ width: "100%", display: "block" }}
                  alt=""
                  className="rounded-lg"
                  width={1200}
                  height={1200}
                  loader={() => imgLoader(image)}
                />
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
        <div className="py-4 grid place-items-center">
          <button className="close-button bg-red p-2 rounded-lg w-1/4"
            onClick={() => {
              setOpen(null);
            }}

          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
