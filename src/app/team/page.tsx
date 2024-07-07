"use client";
import Header from "@/components/Header";
// import data from "@/../public/team/data.json";
import MemberCard from "@/components/MemberCard";
import Footer from "@/components/Footer";
import { MemberCardPropsType } from "@/components/MemberCard";
import { useEffect, useState } from "react";

const fetchDataUrl =
  "https://script.googleusercontent.com/macros/echo?user_content_key=fdwqg4IGpmP-DbSrSYJzHXbNlG1hYjK4WYKyo_TsyZvtVwcqO5wnIFGqbEDxNffE9fU9qWXA8L_T7LdSiAibPl-8NqVK7YtGm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOn9iWfYJfDiO5r4BCHibpkXPNdlWiy6BgaNe2LFfHy565nFOhYQLyCmecK8_kL9mNUSvfMyvTq2Xm7hLqLQIKx7BFxATrUam9z9Jw9Md8uu&lib=MRso1Mmi731M5Wa8eSQC31mWw0Nw8F1K5";
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

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className=" overflow-x-hidden ">
      <Header />
      <section className="md:mx-28 mt-20">
        <h1 className="mb-10 text-4xl text-white text-center md:text-left w-full  whitespace-nowrap">
          Our Team
        </h1>
        <div>
          {loading ? (
            <div className="p-5">
            <div className="h-8 md:w-1/3 bg-gray-700 mb-6 animate-pulse rounded"></div>
            <div className="flex flex-wrap gap-10 justify-around md:justify-around">
              {[...Array(20)].map((_, index) => (
                <div key={index} className="w-[300px] h-[300px] bg-gray-700 animate-pulse rounded-md p-4 flex flex-col gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-full"></div>
                  <div className="h-4 bg-gray-900 rounded"></div>
                  <div className="h-4 bg-gray-900 rounded"></div>
                </div>
              ))}
            </div>
          </div>
          ) : (
            Object.keys(data!).map((key) => (
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
            ))
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
