"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";
import photoNames from "../../../public/gallery/photoData";
import AOS from "aos";
import { useEffect } from "react";

const imgLoader = (src:string) => {
    return `/gallery/photos/${src}`
}

export default function Gallery() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  
  return (
    <div>
      <Header />
      <section className="m-10 md:mx-28 md:my-20">
        <h1 className="text-4xl mb-12">Gallery</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 500: 2, 900: 3, 1200: 4 }} className="md:mx-10">
          <Masonry gutter="7px">
            {photoNames.map((image, i) => (
              <Image
                key={i}
                src={`/gallery/photos/${image}`}
                loader={() => imgLoader(image)}
                style={{ width: "100%", display: "block" }}
                alt=""
                width={300}
                height={300}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
      <Footer />
    </div>
  );
}
