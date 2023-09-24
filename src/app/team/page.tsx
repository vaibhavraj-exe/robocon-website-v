"use client";
import Header from "@/components/Header";
import data from "@/../public/team/data.js";

export default function Team() {
    console.log(data)
  return (
    <div>
      <Header isMenuOpen={false} setIsMenuOpen={() => {}} />
      <section>
        <h1 className="m-20 text-4xl">Our Team</h1>
            <div>{
                Object.keys(data).map((key) => 
                    <div key={key}>
                        {/* <h2>{data?[key]}</h2> */}
                        {/* {data[key].map()} */}
                    </div>)
            }</div>
      </section>
    </div>
  );
}
