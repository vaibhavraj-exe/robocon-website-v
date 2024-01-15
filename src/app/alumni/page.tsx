"use client";
import Header from "@/components/Header";
import alumniData from "@/../public/alumni/alumniData.json";
import Footer from "@/components/Footer";
import AlumniCard from "@/components/AlumniCard";

interface Alumni {
  Name: string;
  Domain: string,
  About: string,
  Designation: string;
  Facebook?: string;
  Linkedin?: string;
  Instagram?: string;
  Description: string
  Profession: string;
}

interface AlumniData {
  [key: string]: Alumni[];
}

export default function Alumni() {
  console.log(alumniData);
  return (
    <div className=" overflow-x-hidden ">
      <Header  />
      <section className="md:mx-28 mt-20">
        <h1 className="mb-10 text-4xl text-center md:text-left text-white">Alumni</h1>
        <div>
          {Object.keys(alumniData).map((key) => (
            <div key={key} className="text-gray-50 mb-20">
              <h2 className="text-4xl ml-10 md:ml-5">{key.toString().replace(/"/g, '')}</h2>
              <div className="flex gap-10 m-5 flex-wrap justify-center md:justify-start">
                {(alumniData as AlumniData)[key].map((obj, i) => (
                  <AlumniCard
                    key={i}
                    Name={obj["Name"]}
                    Domain={obj["Domain"]}
                    Designation={obj["Designation"]}
                    About={obj["About"]}
                    Facebook={obj["Facebook"]}
                    Linkedin={obj["Linkedin"]}
                    Instagram={obj["Instagram"]}
                    Description={obj["Description"]}
                    Profession={obj["Profession"]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
}
