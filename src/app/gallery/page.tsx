"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

const images = [
  "col1 (1).png",
  "col1 (2).png",
  "col1 (3).png",
  "col1 (4).png",
  "col1 (5).png",
  "col2 (1).png",
  "col2 (2).png",
  "col2 (3).png",
  "col2 (4).png",
  "col2 (5).png",
  "col2 (6).png",
  "col3 (1).png",
  "col3 (2).png",
  "col3 (3).png",
  "col3 (4).png",
  "col3 (5).png",
  "col3 (7).png",
  "col4 (1).png",
  "col4 (2).png",
  "col4 (3).png",
  "col4 (4).png",
  "col4 (5).png",
];
// const images = [
//   "https://picsum.photos/2000/3000",
//   "https://picsum.photos/3000/3000",
//   "https://picsum.photos/1000/2000",
//   "https://picsum.photos/2000/3000",
//   "https://picsum.photos/3000/3000",
//   "https://picsum.photos/2000/3000",
//   "https://picsum.photos/3000/3000",
//   "https://picsum.photos/2000/3000",
//   "https://picsum.photos/3000/7000",
//   "https://picsum.photos/2000/3000",
//   "https://picsum.photos/6000/3000",
//   "https://picsum.photos/2000/3000",
// ];

const imgLoader = (src:string) => {
    return `/gallery/${src}`
}

export default function Gallery() {
  return (
    <div>
      <Header isMenuOpen={false} setIsMenuOpen={() => {}} />
      <section className="m-10 md:m-20">
        <h1 className="text-4xl m-5">Gallery</h1>
        <ResponsiveMasonry columnsCountBreakPoints={{ 0:1, 400: 2, 750: 2, 900: 4, 1200: 5 }}>
          <Masonry gutter="10px">
            {images.map((image, i) => (
              <Image
                key={i}
                src={`/gallery/${image}`}
                loader={() => imgLoader(image)}
                style={{ width: "100%", display: "block" }}
                // placeholder="blur"
                alt=""
                width={300}
                height={300}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
      <Footer />
    </div>
  );
}
