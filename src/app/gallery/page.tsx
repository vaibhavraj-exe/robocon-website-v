"use client";

import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import photoNames from "../../../public/gallery/photoData";
import AOS from "aos";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import jsonData from "@/app/gallery/carousel-data.json";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

// let cards_old = [
//   {
//     id: 1,
//     content: <SkeletonOne />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 5,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 6,
//     content: <SkeletonOne />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 7,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 8,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 9,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 10,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const DummyContent = () => (
  <>
    {[...new Array(3)].map((_, index) => (
      <div
        key={`dummy-content-${index}`}
        className=" bg-gray-950 p-8 md:p-14 rounded-3xl mb-4"
      >
        <p className="text-neutral-600 hover:text-neutral-300 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-red">
            The first rule of Apple club is that you boast about Apple club.
          </span>{" "}
          Keep a journal, quickly jot down a grocery list, and take amazing
          class notes. Want to convert those notes to text? No problem. Your
          iSad is ready to capture every thought.
        </p>
      </div>
    ))}
  </>
);



let data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/gallery/photos/col1 (1).png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/gallery/photos/col5 (5).jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/gallery/photos/col3 (1).png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/gallery/photos/col4 (1).png",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/gallery/photos/col5 (1).jpg",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/gallery/photos/col4 (3).png",
    content: <DummyContent />,
  },
];

let cards = photoNames.map((photoName, index) => ({
  id: index + 1, 
  content:
    index % 4 === 0 ? (
      <SkeletonOne />
    ) : index % 4 === 1 ? (
      <SkeletonTwo />
    ) : index % 4 === 2 ? (
      <SkeletonThree />
    ) : (
      <SkeletonFour />
    ),
  className:
    index % 4 === 0 || index % 4 === 3 ? "md:col-span-1" : "col-span-2",
  thumbnail: `/gallery/photos/${photoName}`,
}));

export default function GalleryPage() {
  const [isClient, setIsClient] = useState(false);

  const [galleryHeight, setGalleryHeight] = useState<number>(500);

  useEffect(() => {
    setIsClient(true); // Ensure dynamic libraries run only on the client
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        once: false,
      });
    }
  }, []);

  useEffect(() => {
    console.log(((cards.length / 2) * 400).toFixed(0));
    setGalleryHeight(parseInt(((cards.length / 2) * 400).toFixed(0)));
  }, []);

  return (
    <div>
      <Header />

      {/* Carousel Section */}
      <div className="w-full h-full z-0 py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl z-50 md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Our Gallery
        </h2>
        <Carousel
  items={jsonData.map((item, index) => (
    <div key={index} className="relative w-full h-64 md:h-96">
      <Image
        src={item.src}
        alt={item.title}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm">{item.category}</p>
        <p className="text-xs">{item.content}</p>
      </div>
    </div>
  ))}
/>

      </div>
      <div className={`h-[2000px] py-0 w-full `}>
        <LayoutGrid cards={cards.slice(0, 12)} />
      </div>
      <div className={`h-[2000px] py-0 w-full `}>
        <LayoutGrid cards={cards.slice(14, 24)} />
      </div>
      <div className={`h-[${1000}px] py-0 w-full `}>
        <LayoutGrid cards={cards.slice(26, 32)} />
      </div>
      {/* <div className={`h-[${2000}px] py-0 w-full `}>
        <LayoutGrid cards={cards.slice(0, 12)} />
      </div>
      <div className={`h-[${2000}px] py-0 w-full `}>
        <LayoutGrid cards={cards.slice(14, 24)} />
      </div>
      <div className={`h-[${1000}px] py-0 w-full `}>
        <LayoutGrid cards={cards.slice(26, 32)} />
      </div> */}

      <Footer />
    </div>
  );
}
