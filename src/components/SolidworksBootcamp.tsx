import { useEffect } from 'react';
import Image from "next/image";
import { Inter } from "next/font/google";
import SolidworksLogo from "@/../public/solidworksbootcamp/solidworks.png";
const inter = Inter({ subsets: ["latin"] });

export default function SolidworksBootcamp() {
    useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
        const background1 = document.querySelector('.bg-1') as HTMLElement;
        const background2 = document.querySelector('.bg-2') as HTMLElement;
        const logoImage = document.querySelector('.solidworks-logo') as HTMLElement;
        const parallaxHeight = (scrollPosition * 0.1)-180;
        const parallaxHeight2 = (scrollPosition * 0.05)-120;
        background1.style.transform = `translateY(${parallaxHeight}px)`;
        background2.style.transform = `translateY(${parallaxHeight}px)`;
        logoImage.style.transform = `translateY(${parallaxHeight2}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div
          className={`flex min-h-screen flex-col items-center justify-between md:flex-row md:p-24 p-10 ${inter.className}`}
      >
        <div className="absolute inset-0 w-full h-full bg-[#EEE1C6] bg-1 bg-opacity-80"
             style={{clipPath: "polygon(0 0, 0 100%, 50% 50%, 100% 0%)"}}></div>
        <div className="absolute inset-0 w-full h-full bg-red bg-2 bg-opacity-80"
             style={{clipPath: "polygon(100% 100%, 100% 0%, 49.9% 49.9% ,0 100%)"}}></div>
        <div className="md:w-3/4 md:pr-16 z-10 max-md:hidden"></div>
        <div className="md:w-1/4 md:pr-16 z-10">
          <div className={"flex"}>
            <Image src={SolidworksLogo} alt="Solidworks Logo"
                   className="h-[3.4rem] w-[10rem] mb-8 md:absolute md:left-[8rem] md:top-[35vh] md:h-[10rem] md:w-[30rem] max-md:mt-[1rem] pl-[1rem] solidworks-logo"/>
          </div>
          <div className="container mx-auto md:text-right">
            <h1 className="text-3xl font-semibold mb-2"><a
                href="https://www.instagram.com/srmteamrobocon/"
                target="_blank" rel="noopener noreferrer"
                className="text-red-600 lg:text-[#e8f4ec] md:text-black max-md:text-red md:hover:underline">SRM Team<br
                className={"md:hidden"}/> Robocon </a><span className={"text-gray-700"}>Presents</span></h1>
            <h1 className="text-3xl font-semibold text-blue-900 mb-2">Solidworks Bootcamp 2.0</h1>
            <p className="text-black mb-8 font-bold">Three-day Workshop<br className={"md:hidden"}/> on CAD Modelling
            </p>
            <a href="https://docs.google.com/forms/d/1zIynSahCUS2yOzmWiiVimjydZYzCorGjoHA9oWtHUOE/edit"
               target="_blank"
               rel="noopener noreferrer">
              <button className="bg-green-600 hover:bg-green-600 text-white font-bold py-3 px-6 rounded mb-8">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </div>
  );
}




// export default function SolidworksBootcamp() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//
//       // Selecting elements by class name directly
//       const background1 = document.querySelector('.bg-1');
//       const background2 = document.querySelector('.bg-2');
//       const logoImage = document.querySelector('.solidworks-logo');
//
//       // Adjusting translateY values to control the parallax effect
//       background1.style.transform = `translateY(${scrollPosition * 0.2}px)`;
//       background2.style.transform = `translateY(${scrollPosition * 0.1}px)`;
//       logoImage.style.transform = `translateY(${scrollPosition * 0.05}px)`;
//     };
//
//     window.addEventListener('scroll', handleScroll);
//
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//
//   return (
//       <div
//           className={`flex min-h-screen flex-col items-center justify-between md:flex-row md:p-24 p-10 ${inter.className}`}
//       >
//         <div className="absolute inset-0 w-full h-full bg-[#EEE1C6] bg-1"
//              style={{clipPath: "polygon(0 0, 0 100%, 50% 50%, 100% 0%)"}}></div>
//         <div className="absolute inset-0 w-full h-full bg-red bg-2"
//              style={{clipPath: "polygon(100% 100%, 100% 0%, 49.9% 49.9% ,0 100%)"}}></div>
//         <div className="md:w-3/4 md:pr-16 z-10 max-md:hidden"></div>
//         <div className="md:w-1/4 md:pr-16 z-10">
//           <div className={"flex"}>
//             <Image src={SolidworksLogo} alt="Solidworks Logo"
//                    className="solidworks-logo h-[3.4rem] w-[10rem] mb-8 md:absolute md:left-[8rem] md:top-[35vh] md:h-[10rem] md:w-[30rem] max-md:mt-[1rem] pl-[1rem]"/>
//           </div>
//           <div className="container mx-auto md:text-right">
//             <h1 className="text-3xl font-semibold mb-2"><a
//                 href="https://www.instagram.com/srmteamrobocon/"
//                 target="_blank" rel="noopener noreferrer"
//                 className="text-red-600 lg:text-[#e8f4ec] md:text-black md:hover:underline">SRM Team<br
//                 className={"md:hidden"}/> Robocon </a><span className={"text-gray-700"}>Presents</span></h1>
//             <h1 className="text-3xl font-semibold text-blue-900 mb-2">Solidworks Bootcamp 2.0</h1>
//             <p className="text-black mb-8 font-bold">Three-day Workshop<br className={"md:hidden"}/> on CAD Modelling
//             </p>
//             <a href="https://docs.google.com/forms/d/1zIynSahCUS2yOzmWiiVimjydZYzCorGjoHA9oWtHUOE/edit"
//                target="_blank"
//                rel="noopener noreferrer">
//               <button className="bg-green-600 hover:bg-green-600 text-white font-bold py-3 px-6 rounded mb-8">
//                 Register Now
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//   );
// }
