import { useEffect, useState } from "react";
import AOS from "aos";
import Image from "next/image";
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import Link from "next/link";

interface AlumniCardPropsType {
  Name: string;
  Domain: string;
  Designation: string;
  About: string;
  Facebook?: string;
  Linkedin?: string;
  Instagram?: string;
  Description: string;
  Profession: string;
}

export default function AlumniCard({
  Name,
  Domain,
  Designation,
  About,
  Facebook,
  Linkedin,
  Instagram,
  Description,
  Profession,
}: AlumniCardPropsType) {
  const [slideNo, setSlideNo] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <article data-aos="flip-right" data-aos-anchor-placement="top-bottom">
      <div className="group w-[300px] h-[300px] [perspective:1000px] overflow-hidden">
        <div className="relative h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-focus:[transform:rotateY(180deg)] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 bg-slate-100 flex">
            <Image
              src={`/alumni/photos/${Name}.jpg`}
              alt="Project data image"
              width={500}
              height={500}
              className="w-auto h-full"
              unoptimized
            ></Image>
            <h1 className="text-xl absolute bottom-2 z-10 w-full bg-black/50 text-white group-hover:hidden text-center">
              {Name} <br />{" "}
              <p className="text-lg">
                {Domain} {Designation}
              </p>{" "}
            </h1>
          </div>
          <div className="absolute overflow-y-scroll inset-0 h-full w-full bg-red/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center gap-3 py-5 px-3">
            {slideNo == 0 ? (
              <div className="flex flex-col justify-center items-center">
                <div>{About}</div>
                <div className="flex gap-5 m-4">
              {Facebook ? (
                <Link href={Facebook}>
                  <FacebookBoxFillIcon
                    size={50}
                    className="hover:fill-white hover:scale-105 hover:cursor-pointer"
                  />
                </Link>
              ) : null}
              {Linkedin ? (
                <Link href={Linkedin}>
                <LinkedinBoxFillIcon
                  size={50}
                  className="hover:fill-white hover:scale-105 hover:cursor-pointer"
                />
                </Link>
              ) : null}
              {Instagram ? (
                <Link href={Instagram}>
                <InstagramFillIcon
                  size={50}
                  className="hover:fill-white hover:scale-105 hover:cursor-pointer"
                />
                </Link>
              ) : null}
            </div>
              </div>
            ) : slideNo == 1 ? (
              <div className="my-5">{Description != "" ? Description : "SRMTEAMROBOCON!"}</div>
            ) : (
              <div>{Profession}</div>
            )}
            <div>
              {slideNo != 0 ? (
                <button
                  className="text-slate-50 font-bold border-4 border-slate-50 w-28"
                  onClick={() => {
                    slideNo > 0 ? setSlideNo(slideNo - 1) : null;
                  }}
                >
                  Previous
                </button>
              ) : null}
              {slideNo != 2 ? (
                <button
                  className="text-slate-50 font-bold border-4 border-slate-50 w-28 ml-1"
                  onClick={() => {
                    slideNo < 2 ? setSlideNo(slideNo + 1) : null;
                  }}
                >
                  Next
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
