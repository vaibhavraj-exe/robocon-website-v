import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon";
import InstagramFillIcon from "remixicon-react/InstagramFillIcon";
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import Link from "next/link";

export interface MemberCardPropsType {
  Name: string;
  Designation: string;
  Facebook?: string;
  Linkedin?: string;
  Instagram?: string;
}

export default function MemberCard({
  Name,
  Designation,
  Facebook,
  Linkedin,
  Instagram,
}: MemberCardPropsType) {
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
              src={`/team/photos/${Name.trimEnd()}.jpg`}
              alt="Project data image"
              width={500}
              height={500}
              className="w-auto h-full"
              unoptimized
            ></Image>
            <h1 className="text-xl absolute bottom-2 z-10 w-full bg-black/50 text-white group-hover:hidden text-center">
              {Name} <br /> <p className="text-lg">{Designation}</p>{" "}
            </h1>
          </div>
          <div className="absolute inset-0 h-full w-full bg-red/80 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center gap-3 py-5 px-3">
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
        </div>
      </div>
    </article>
  );
}
