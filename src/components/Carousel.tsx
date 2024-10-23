"use client";
import { Event } from "@/constants/types";
import DialogBox from "./DialogBox";
import { useEffect, useState } from "react";

const events: Event[] = [
  {
    coverImage: "/events/ARC.JPG",
    name: "ARC",
    description: `The National Level Automation & Robotics Challenge 2024, co-hosted by SRM Team Robocon and the Automation Club, gave students a platform to explore automation and robotics through exciting themes. The event concluded with an impressive final showdown on September 20th, highlighting innovative student projects.`,
    abstract: `The National Level Automation & Robotics Challenge 2024 was a remarkable initiative collaboratively organized by SRM Team Robocon and the Automation Club under the Department of Electronics & Instrumentation Engineering at SRM Institute of Science and Technology. This event, held from August 31st to September 20th, 2024, aimed to introduce school students to the dynamic fields of automation and robotics, promoting innovation in themes such as Automation in Daily Life, Industrial Automation, Environmental Robotics, and Robotics in Healthcare. Through two rigorous rounds — Prelims and the Showdown Round — the challenge fostered curiosity, technical skill development, and creative problem-solving, setting the stage for future advancements in robotics and automation among young minds.`,
    gallery: [
      '/events/gallery/ARC/IMG_5364.JPG',
      '/events/gallery/ARC/IMG_5380.JPG',
      '/events/gallery/ARC/IMG_5834.jpg',
      '/events/gallery/ARC/IMG_5932.jpg',
      '/events/gallery/ARC/IMG_5941.jpg',
      '/events/gallery/ARC/IMG_6135.JPG',
      '/events/gallery/ARC/IMG_6484.JPG',
      '/events/gallery/ARC/IMG_6579.jpg',
      '/events/gallery/ARC/IMG_5575.jpg',
    ],
  },
  {
    coverImage: "/events/sw2.png",
    name: "SolidWorks Bootcamps 2.0",
    description: `SolidWorks Bootcamp 2.0, organized by SRM Team Robocon, focused on enhancing CAD modeling skills over three days. Participants engaged in hands-on sessions and a competitive 3D modeling challenge. The workshop provided practical experience with SolidWorks, culminating in the grand prize—a Full-Year Subscription License for the best modeler.`,
    abstract: `SRM Team Robocon successfully organized SolidWorks Bootcamp 2.0, a 3-day intensive workshop held from February 26-28, 2024. Designed to equip participants with essential CAD modeling skills, the workshop featured expert-led, hands-on training sessions focused on SolidWorks, one of the most widely used CAD software in engineering and product design. The event culminated in a 3D modeling competition, allowing participants to apply their newly acquired skills in a real-world scenario. The top-performing participant was awarded a prestigious Full-Year Subscription License of SolidWorks. The workshop not only enhanced technical proficiency but also fostered collaboration and innovation, providing participants with an invaluable learning experience and a platform to showcase their creativity in CAD design.`,
    gallery: [
      '/events/gallery/sw2/PXL_20240226_060420417.jpg', 
      '/events/gallery/sw2/PXL_20240226_073410947.jpg', 
      '/events/gallery/sw2/PXL_20240226_091814266.jpg', 
      '/events/gallery/sw2/PXL_20240226_092040330.PORTRAIT.ORIGINAL.jpg', 
      '/events/gallery/sw2/PXL_20240226_103224247.jpg', 
      '/events/gallery/sw2/PXL_20240227_083032522.jpg', 
      '/events/gallery/sw2/PXL_20240227_095017989.jpg', 
      '/events/gallery/sw2/PXL_20240228_112637971 (1).jpg'
    ],
  },
  {
    coverImage: "/events/sw1.jpeg",
    name: "SolidWorks Bootcamps 1.0",
    description: `The SolidWorks Bootcamp 2023 was a 3-day intensive workshop organized by SRM Team Robocon, designed to help students master the basics of CAD using SolidWorks. Through expert guidance from the team’s skilled designers, participants learned how to create precise 3D models and simulate designs. Limited seats ensured an interactive experience, culminating in a 3D modeling competition to celebrate exceptional work and creativity.`,
    abstract: `The SolidWorks Bootcamp 2023 marked the beginning of SRM Team Robocon's efforts to bring CAD design and simulation to students across various disciplines. This immersive 3-day workshop provided participants with the tools and knowledge to dive into SolidWorks, a powerful CAD software used by professionals worldwide. Through step-by-step guidance, students learned how to design with precision, bringing their ideas to life in 3D. The bootcamp concluded with an exciting competition, where participants showcased their new skills in 3D modelling, pushing the boundaries of creativity and precision. This workshop laid the foundation for students to explore the vast possibilities of CAD in the world of engineering and design.`,
    gallery: [
      '/events/gallery/sw1/IMG-20230419-WA0029.jpg', 
      '/events/gallery/sw1/IMG-20230419-WA0036.jpg', 
      '/events/gallery/sw1/IMG-20230419-WA0038.jpg', 
      '/events/gallery/sw1/IMG-20230424-WA0006.jpg', 
      '/events/gallery/sw1/IMG-20230424-WA0018.jpg', 
      '/events/gallery/sw1/IMG-20241022-WA0027.jpg', 
      '/events/gallery/sw1/IMG-20241022-WA0028.jpg', 
      '/events/gallery/sw1/IMG_20230424_191956_267.jpg', 
      '/events/gallery/sw1/IMG_20230424_191956_474.jpg'],
  },
  {
    coverImage: "/events/gallery/Altium/GKVK9246.JPG",
    name: "Altium Event",
    description: `Rae Callender, VP of Altium Designer Education, visited SRMIST on September 4, 2024, to interact with student teams using Altium software in their robotics, electronics, and circuit design projects. Among the teams was SRM Team Robocon, represented by Mohammed Sadriwala, who discussed the importance of Altium in streamlining their design processes. The visit emphasized the software's impact on student projects and explored future collaborations between Altium and SRMIST.`,
    abstract: `On September 4, 2024, SRM Institute of Science and Technology hosted Rae Callender, Vice President of Altium Designer Education, for an engaging visit focused on student teams utilizing Altium Designer in their projects. Accompanied by Mr. Vikram Poojary and Mr. Madhesh Perumal, Rae interacted with four prominent student engineering teams, including SRM Team Robocon. The teams demonstrated how Altium Designer has been instrumental in improving their design precision and workflow efficiency. The visit highlighted the significant role Altium plays in shaping students’ engineering careers and laid the foundation for future collaborations between SRMIST and Altium.`,
    gallery: [
      '/events/gallery/Altium/20240904_095151.jpg',
      '/events/gallery/Altium/20240904_095210.jpg',
      '/events/gallery/Altium/20240904_110106.jpg',
      '/events/gallery/Altium/20240904_110135.jpg',
      '/events/gallery/Altium/GKVK9199.JPG',
      '/events/gallery/Altium/GKVK9201.JPG',
      '/events/gallery/Altium/GKVK9202.JPG',
      '/events/gallery/Altium/GKVK9203.JPG',
      '/events/gallery/Altium/GKVK9246.JPG',
      '/events/gallery/Altium/GKVK9248.JPG',
      '/events/gallery/Altium/GKVK9249.JPG',
      '/events/gallery/Altium/GKVK9250.JPG',
      '/events/gallery/Altium/IMG-20240906-WA0013.jpg',
      '/events/gallery/Altium/IMG-20240906-WA0014.jpg',
      '/events/gallery/Altium/IMG-20240906-WA0021.jpg'
    ]

  }
];

export default function Carousel() {
  const [isOpen, open] = useState<Event | null>(null);
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <div className=" w-3/4 h-full flex gap-2 overflow-y-scroll no-scrollbar">
      {events.map((event: Event, index: number) => {
        return (
          <button
            key={index}
            className="h-full"
            onClick={() => {
              open(isOpen ? null : event);
            }}
          >
            <div
              className="w-[350px] h-[500px] bg-cover bg-center rounded-lg hover:w-[450px] duration-500"
              style={{ backgroundImage: `url(${event.coverImage})` }}
            >
              <div className="bg-black opacity-0 hover:opacity-70 w-full h-full flex items-center justify-center rounded-lg duration-500">
                <div>
                  <h2 className="text-white text-xl">{event.name}</h2>
                  {/* <p className="text-white text-sm">{event.abstract}</p> */}
                </div>
              </div>
            </div>
            {isOpen && (
              <DialogBox
                name={isOpen.name}
                coverImage={isOpen.coverImage}
                description={isOpen.description}
                abstract={isOpen.abstract}
                gallery={isOpen.gallery}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
