"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import MemberCard from "@/components/MemberCard";
import Footer from "@/components/Footer";
import { MemberCardPropsType } from "@/components/MemberCard";

interface TeamData {
  [key: string]: MemberCardPropsType[];
}

const fetchDataUrl = "https://script.googleusercontent.com/macros/echo?user_content_key=DAKZwFozhfVd-GHSNBpfcEFhhEvICOyLwZPCtoO4_B1dF0XStnx8QVqlMkMtna6i6sEaKivMPpTDgEQwrc4gEerOZTXFeTiHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDtv0XigkrEpf6LLp_q_ZbEKG0ESWja4hm1dhbuBEZrvKHI9TK24bezfXFZRqrQt4SBr1KqJI2NQ0nzYc6TZaFqE4QaK5k4i3tz9Jw9Md8uu&lib=Mp81_bFD9EenYUPxJhN_znXTcZN5XahZ-";

export default function Team() {
  const [data, setData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(fetchDataUrl)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
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
    <div className="overflow-x-hidden">
      <Header />
      <section className="mx-28 mt-20">
        <h1 className="mb-10 text-4xl text-center md:text-left w-full whitespace-nowrap">Our Team</h1>
        <div>
          {data && Object.keys(data).map((key) => (
            <div key={key} className="text-gray-50 mb-20">
              <h2 className="text-4xl ml-10 md:ml-5">{key}</h2>
              <div className="flex gap-10 m-5 flex-wrap justify-center md:justify-start">
                {data[key].map((obj, i) => (
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
      </section>
      <Footer />
    </div>
  );
}
