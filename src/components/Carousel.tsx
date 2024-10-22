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
    gallery: [],
  },
  {
    coverImage: "/events/sw1.jpeg",
    name: "SolidWorks Bootcamps 1.0",
    description: `The SolidWorks Bootcamp 2023 was a 3-day intensive workshop organized by SRM Team Robocon, designed to help students master the basics of CAD using SolidWorks. Through expert guidance from the team’s skilled designers, participants learned how to create precise 3D models and simulate designs. Limited seats ensured an interactive experience, culminating in a 3D modeling competition to celebrate exceptional work and creativity.`,
    abstract: `The SolidWorks Bootcamp 2023 marked the beginning of SRM Team Robocon's efforts to bring CAD design and simulation to students across various disciplines. This immersive 3-day workshop provided participants with the tools and knowledge to dive into SolidWorks, a powerful CAD software used by professionals worldwide. Through step-by-step guidance, students learned how to design with precision, bringing their ideas to life in 3D. The bootcamp concluded with an exciting competition, where participants showcased their new skills in 3D modelling, pushing the boundaries of creativity and precision. This workshop laid the foundation for students to explore the vast possibilities of CAD in the world of engineering and design.`,
    gallery: ['/events/gallery/sw1/IMG-20230419-WA0029.jpg', '/events/gallery/sw1/IMG-20230419-WA0036.jpg', '/events/gallery/sw1/IMG-20230419-WA0038.jpg', '/events/gallery/sw1/IMG-20230424-WA0006.jpg', '/events/gallery/sw1/IMG-20230424-WA0018.jpg', '/events/gallery/sw1/IMG-20241022-WA0027.jpg', '/events/gallery/sw1/IMG-20241022-WA0028.jpg', '/events/gallery/sw1/IMG_20230424_191956_267.jpg', '/events/gallery/sw1/IMG_20230424_191956_474.jpg'],
  },
  {
    coverImage: "/events/gallery/sw1/IMG-20230421-WA0034.jpg",
    name: "Altium Event",
    description: `On September 4, 2024, SRM Institute of Science and Technology welcomed Rae Callender, Vice President of Altium Designer Education, alongside Mr. Vikram Poojary, Manager of University Relations, and Mr. Madhesh Perumal, a certified trainer and content developer for Altium. This visit aimed to engage with student teams actively using Altium software in their engineering projects, particularly in the fields of robotics, electronics, and circuit design.

Among the four prominent student teams interviewed was SRM Team Robocon, represented by Mohammed Sadriwala, a third-year BTech Biomedical Engineering student. During the interview, Mohammed showcased how Altium Designer has been integral to the team's design and testing of complex circuit boards, enhancing their project efficiency and design precision. Rae Callender posed several insightful questions, probing into the software's impact on students' workflows and their future career prospects. Mohammed highlighted that Altium Designer has streamlined their design cycles, improved collaboration, and allowed for more accurate simulations, significantly preparing him for his professional journey.

The discussions provided valuable feedback and insights from Mr. Poojary and Mr. Perumal, further emphasizing the importance of mastering Altium Designer for engineering students. The interviews captured during the visit will be featured on the Altium website and YouTube channel, granting the student teams a platform to share their innovative projects and experiences with a global audience.

The visit concluded with Rae Callender commending the creativity and dedication of SRM Team Robocon and the other teams. This initiative not only showcased the vital role of Altium in shaping the engineering careers of students like Mohammed but also laid the groundwork for future collaborations between Altium and SRMIST, fostering a culture of innovation and excellence in engineering education.`,
    abstract: `On September 4, 2024, Rea Callender, Vice President of Altium Designer Education, visited the SRMIST KTR Campus, aiming to engage with student teams actively utilizing Altium software in their engineering projects. Accompanied by Mr. Vikram Poojary, Manager of University Relations, and Mr. Madhesh Perumal, a certified trainer and content developer for Altium, the visit focused on understanding the software’s impact on student innovation and skill development. Four prominent student teams, including SRM Team Robocon, were selected for interviews to showcase their use of Altium Designer in robotics, electronics, and circuit design.

During the interview, Mohammed Sadriwala, our Team Lead at SRM Team Robocon, discussed the essential role of Altium Designer in the design and testing of complex circuit boards for their robotics projects. Rea Callender posed various questions regarding the software’s influence on project efficiency, design strategies, and the relevance of these skills in students' future careers. Mohammed emphasized that mastering Altium has streamlined their design cycles, enhanced collaboration, and allowed for precise simulations, ultimately preparing him for a successful career in engineering.

The interviews conducted during the visit will be featured on Altium's website and YouTube channel, providing a platform for students to share their experiences and insights with a broader audience. Additionally, Mr. Vikram Poojary and Mr. Madhesh Perumal contributed valuable insights and technical feedback, reinforcing the importance of Altium Designer for engineering students. The visit concluded with Rea Callender commending the innovation and dedication demonstrated by SRM Team Robocon and the other participating teams. This initiative highlighted Altium's significant role in shaping the engineering careers of students like Mohammed Sadriwala and laid the groundwork for future collaboration opportunities between Altium and SRMIST.`,
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
  console.log(isOpen);
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
