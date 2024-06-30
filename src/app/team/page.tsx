"use client";
import Header from "@/components/Header";
// import data from "@/../public/team/data.json";
import MemberCard from "@/components/MemberCard";
import Footer from "@/components/Footer";
import { MemberCardPropsType } from "@/components/MemberCard";
import { useEffect, useState } from "react";

const fetchDataUrl =
  "https://script.google.com/macros/s/AKfycbw0-jKH8mDWGtU3O5np1EZT-Fo3zzUyGaYQeT07kDmUTowhK-CCACpaZBlsrFxwcKn6/exec";
interface TeamData {
  [key: string]: MemberCardPropsType[];
}

export default function Team() {
  const [data, setData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(fetchDataUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className=" overflow-x-hidden ">
      <Header />
      <section className="mx-28 mt-20">
        <h1 className="mb-10 text-4xl text-white text-center md:text-left w-full  whitespace-nowrap">
          Our Team
        </h1>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div>
            {Object.keys(data!).map((key) => (
              <div key={key} className="text-gray-50 mb-20">
                <h2 className="text-4xl ml-10 md:ml-5">{key}</h2>
                <div className="flex gap-10 m-5 flex-wrap justify-center md:justify-start">
                  {(data as TeamData)[key].map((obj, i) => (
                    <MemberCard
                      key={i}
                      Name={obj["Name"]}
                      Designation={obj["Designation"]}
                      Facebook={obj["Facebook"]}
                      Linkedin={obj["Linkedin"]}
                      Instagram={obj["Instagram"]}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
