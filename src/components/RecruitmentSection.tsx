/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { BiDownload } from "react-icons/bi";

const RecruitmentSection = () => {
    const router = useRouter();
    return (
        <section className="relative flex flex-col-reverse md:flex-row items-center justify-between w-full h-auto min-h-screen bg-gray-900">
            <button
                onClick={() => router.push("/registration")}
                rel="noopener noreferrer"
                className="mt-8 mb-8 z-10 bg-[#ff5405] md:hidden hover:bg-slate-900 hover:text-white text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center"
            >
                Register
                {/* <span className="ml-1">Register</span> */}
                {/* <BiDownload className="w-5 h-5" /> */}
            </button>

            <div className="w-full md:w-1/2 z-10 flex justify-center ">
                <img
                    src="/events/poster.png"
                    alt="Poster"
                    className="max-w-full h-[600px] rounded-md object-contain"
                />
            </div>

            <div className="w-full md:w-1/2 flex md:flex-col flex-col-reverse items-center justify-center p-8 text-center">
                <h1 className="text-[#000000] text-4xl z-10 pt-6 md:text-6xl font-bold">
                    DARE TO JOIN US
                </h1>
                <h3 className="text-[#000000] text-2xl z-10 pt-6 md:text-1xl font-bold">
                    Registrations Open!
                </h3>

                <button
                    onClick={() => router.push("/registration")}
                    rel="noopener noreferrer"
                    className="mt-8 mb-8 z-10 bg-[#ff5405] hover:bg-slate-900 hover:text-white text-black font-bold py-3 px-6 rounded-lg items-center justify-center hidden md:flex"
                >
                    <span className="ml-1">Register</span>
                    {/* <BiDownload className="w-5 h-5" /> */}
                </button>

            </div>

            <div
                className="absolute inset-0 w-full h-full bg-[#07fcb2]"
                style={{ clipPath: "polygon(0 0, 0 100%, 50% 50%, 100% 0%)" }}
            ></div>
            <div
                className="absolute inset-0 w-full h-full bg-[#deff79]"
                style={{ clipPath: "polygon(100% 100%, 100% 0%, 49.9% 49.9%, 0 100%)" }}
            ></div>
        </section>
    );
};

export default RecruitmentSection;
