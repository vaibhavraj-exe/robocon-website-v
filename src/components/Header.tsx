import Image from "next/image";
import { useEffect } from "react";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import Menu3FillIcon from "remixicon-react/Menu3FillIcon";
import AOS from "aos";
import { useRouter } from "next/navigation";

interface HeaderPropsType {
    isMenuOpen: boolean;
    setIsMenuOpen: (arg0: boolean) => void;
}

export default function Header( {isMenuOpen, setIsMenuOpen} :HeaderPropsType ) {
    useEffect(() => {
        AOS.init({
          duration: 800,
          once: false,
        });
      }, []);

      const router = useRouter();
    return (
        <div>
            {/* Header section */}
        <div className="mt-12 md:mt-16 pl-10 md:pl-16 flex justify-between w-full">
          {/* Navbar Logo */}
          <Image
            src={"/textLogo.svg"}
            alt="logo"
            width={210}
            height={200}
            className="w-44 md:w-52"
            unoptimized
          ></Image>

          {/* Desktop NavBar */}
          <div
            className="hidden md:flex items-center bg-white text-[#3B3B3B] nav-bar-clip"
            data-aos="slide-left"
          >
            <button className="ml-16 px-5 hover:text-red hover:scale-105" onClick={()=> router.push("/")}>
              Home
            </button>
            <button className="px-5 hover:text-red hover:scale-105" onClick={()=> router.push("/team")}>
              Team
            </button>
            <button className="px-5 hover:text-red hover:scale-105">
              Projects & Achievements
            </button>
            <button className="px-5 hover:text-red hover:scale-105" onClick={()=> router.push("/gallery")}>
              Gallery
            </button>
            <button className="px-5 hover:text-red hover:scale-105">
              Contact Us
            </button>
          </div>

          {/* Phone NavBar */}
          <div
            className={`bg-red nav-bar-clip pl-6 pr-4 flex justify-center items-center md:hidden z-20`}
            data-aos="slide-left"
            onClick={() => {setIsMenuOpen(!isMenuOpen); console.log(isMenuOpen)}}
          >
            {isMenuOpen ? (
              <CloseFillIcon size={30} className="text-white" />
            ) : (
              <Menu3FillIcon size={30} className="text-white" />
            )}
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } fixed top-0 w-screen h-full px-10 justify-center items-center z-10 bg-black/20 backdrop-blur-sm md:hidden`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="bg-red flex flex-col justify-center items-center phone-menu-clip gap-10 p-12 z-20" data-aos="fade-right">
            <button className="px-8 hover:text-black hover:scale-105" onClick={()=> router.push("/")}>
              Home
            </button>
            <button className="px-8 hover:text-black hover:scale-105" onClick={()=> router.push("/team")}>
              Team
            </button>
            <button className="px-8 hover:text-black hover:scale-105">
              Projects & Achievements
            </button>
            <button className="px-8 hover:text-black hover:scale-105" onClick={()=> router.push("/gallery")}>
              Gallery
            </button>
            <button className="px-8 hover:text-black hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>

        {/* svg below navbar */}
        <div className="hidden md:flex justify-end mt-5" data-aos="fade-left">
          <div className="nav-bar-clip h-10 bg-red w-64"></div>
        </div>
        </div>
    )
}