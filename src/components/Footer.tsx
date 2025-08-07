import Image from "next/image"
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon"
import InstagramFillIcon from "remixicon-react/InstagramFillIcon"
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon"
import YoutubeFillIcon from "remixicon-react/YoutubeFillIcon"

export default function Footer(){
    return (
        <section className="py-15 bg-black/10 backdrop-blur-sm text-white">
        {/* <img src="/footerDivider.svg" className="w-full" /> */}
        <div className="flex justify-around flex-wrap py-7">
          <div className="mt-10 flex flex-col gap-5">
            <div className="md:ml-10">
              <Image
                src={"/textLogo.svg"}
                alt="logo"
                width={210}
                height={200}
                unoptimized
              ></Image>
            </div>
            <div className="md:m-10 w-64 md:w-[400px]">
              BEL 604, 5th Floor, Basic Engineering Lab,SRMIST, Kattankulathur,
              Chennai (603203)
            </div>
          </div>
          <div className="mt-10">
            <div className="text-xl border-b-0 border-red pl-4 pb-3">
              Social Media
            </div>
            <div className="flex gap-5 m-4">
              <FacebookBoxFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://www.facebook.com/roboconindia/")}
              />
              <LinkedinBoxFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://in.linkedin.com/company/srmteamrobocon/")}
              />
              <InstagramFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://www.instagram.com/srmteamrobocon/")}
              />
              <YoutubeFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://www.youtube.com/channel/UCDPES1-ulIEMp-mEpOsdaoA/")}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Image
              src={"/LOGO.png"}
              alt="logo"
              width={150}
              height={150}
              className="md:w-44 md:h-44"
              unoptimized
            ></Image>
            <Image
              src={"/collegelogo.png"}
              alt="logo"
              width={150}
              height={150}
              className="md:w-44 md:h-44"
              unoptimized
            ></Image>
          </div>
        </div>
      </section>
    )
}