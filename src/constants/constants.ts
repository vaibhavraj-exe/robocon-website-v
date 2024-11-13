import { Event, Project, Achievement } from "./types";



export const noOfTeamMembers = 75;
export const noOfRobots = 25;
export const noOfParticipations = 20;
export const noOfAlumni = 200;

export const achievements = [
  {
    imageSrc: "/achievements/robo.jpg",
    altText: "Project data image",
    description:
      "SRM Team Robocon finished 11th in DD Robocon 2023, out of 100+ teams that participated in the event.",
  },
  {
    imageSrc: "/achievements/fusion.png",
    altText: "Project data image",
    description:
      "Our team was awarded the Fusion 360 Best User Experience Award with a cash prize of Rs 10,000.",
  },
  {
    imageSrc: "/achievements/SIH.png",
    altText: "Project data image",
    description:
      "3 Teams from SRM Team Robocon led by members of the club qualified from the internal SIH 2023.",
  },
  {
    imageSrc: "/achievements/SRM.png",
    altText: "Project data image",
    description:
      "Our team secured the NewGen IEDC SRM Grant of rupees 1 lakh at the IDEX hackathon 2022.",
  },
  {
    imageSrc: "/achievements/BITS.png",
    altText: "Project data image",
    description:
      "Our members participated in the BITS Quark Line Follower Competition 2022 and secured the 1st position winning a cash prize of Rs 30000.",
  },
  {
    imageSrc: "/achievements/robo.jpg",
    altText: "Project data image",
    description:
      "Team Robocon’s Bot for the problem statement of 2014 was awarded the 'Most Economical Bot' by DD Robocon.",
  },
  {
    imageSrc: "/achievements/Advaya.png",
    altText: "Advaya Hacks image",
    description:
      "Secured victory in the Advaya Hacks Event that was organized by IGDTU ACM Student Chapter 2022.",
  },
  {
    imageSrc: "/achievements/IIITD.png",
    altText: "IIITD image",
    description:
      "Recognized among the top ten finalists in the IIITD Innovation Contest.",
  },
  {
    imageSrc: "/achievements/IIMU.png",
    altText: "IIM image",
    description:
      "We reflected in the top ten teams during the Tide 2.0 Innovation Contest by IIM Udaipur 2022.",
  },
];

export const events: Event[] = [
  {
    coverImage: "/events/ARC.JPG",
    name: "Automation and Robotics Challenge(ARC) '24",
    description: `The National Level Automation & Robotics Challenge 2024, co-hosted by SRM Team Robocon and the Automation Club, gave students a platform to explore automation and robotics through exciting themes. The event concluded with an impressive final showdown on September 20th, highlighting innovative student projects.`,
    abstract: `The National Level Automation & Robotics Challenge 2024 was a remarkable initiative collaboratively organized by SRM Team Robocon and the Automation Club under the Department of Electronics & Instrumentation Engineering at SRM Institute of Science and Technology. This event, held from August 31st to September 20th, 2024, aimed to introduce school students to the dynamic fields of automation and robotics, promoting innovation in themes such as Automation in Daily Life, Industrial Automation, Environmental Robotics, and Robotics in Healthcare. Through two rigorous rounds — Prelims and the Showdown Round — the challenge fostered curiosity, technical skill development, and creative problem-solving, setting the stage for future advancements in robotics and automation among young minds.`,
    gallery: [
      "/events/gallery/ARC/IMG_5364.JPG",
      "/events/gallery/ARC/IMG_5380.JPG",
      "/events/gallery/ARC/IMG_5834.jpg",
      "/events/gallery/ARC/IMG_5932.jpg",
      "/events/gallery/ARC/IMG_5941.jpg",
      "/events/gallery/ARC/IMG_6135.JPG",
      "/events/gallery/ARC/IMG_6484.JPG",
      "/events/gallery/ARC/IMG_6579.jpg",
      "/events/gallery/ARC/IMG_5575.jpg",
    ],
  },
  {
    coverImage: "/events/sw2.png",
    name: "SolidWorks Bootcamps 2.0",
    description: `SolidWorks Bootcamp 2.0, organized by SRM Team Robocon, focused on enhancing CAD modeling skills over three days. Participants engaged in hands-on sessions and a competitive 3D modeling challenge. The workshop provided practical experience with SolidWorks, culminating in the grand prize—a Full-Year Subscription License for the best modeler.`,
    abstract: `SRM Team Robocon successfully organized SolidWorks Bootcamp 2.0, a 3-day intensive workshop held from February 26-28, 2024. Designed to equip participants with essential CAD modeling skills, the workshop featured expert-led, hands-on training sessions focused on SolidWorks, one of the most widely used CAD software in engineering and product design. The event culminated in a 3D modeling competition, allowing participants to apply their newly acquired skills in a real-world scenario. The top-performing participant was awarded a prestigious Full-Year Subscription License of SolidWorks. The workshop not only enhanced technical proficiency but also fostered collaboration and innovation, providing participants with an invaluable learning experience and a platform to showcase their creativity in CAD design.`,
    gallery: [
      "/events/gallery/sw2/IMG_0658.jpg",
      "/events/gallery/sw2/IMG_0672.jpg",
      "/events/gallery/sw2/IMG_0719.jpg",
      "/events/gallery/sw2/IMG_0721.jpg",
      "/events/gallery/sw2/IMG_0754.jpg",
      "/events/gallery/sw2/PXL_20240226_060420417.jpg",
      "/events/gallery/sw2/PXL_20240226_073410947.jpg",
      "/events/gallery/sw2/PXL_20240226_091814266.jpg",
      "/events/gallery/sw2/PXL_20240226_092040330.PORTRAIT.ORIGINAL.jpg",
      "/events/gallery/sw2/PXL_20240226_103224247.jpg",
      "/events/gallery/sw2/PXL_20240227_083032522.jpg",
      "/events/gallery/sw2/PXL_20240227_095017989.jpg",
      "/events/gallery/sw2/PXL_20240228_112637971 (1).jpg",
    ],
  },
  {
    coverImage: "/events/sw1.jpeg",
    name: "SolidWorks Bootcamps 1.0",
    description: `The SolidWorks Bootcamp 2023 was a 3-day intensive workshop organized by SRM Team Robocon, designed to help students master the basics of CAD using SolidWorks. Through expert guidance from the team’s skilled designers, participants learned how to create precise 3D models and simulate designs. Limited seats ensured an interactive experience, culminating in a 3D modeling competition to celebrate exceptional work and creativity.`,
    abstract: `The SolidWorks Bootcamp 2023 marked the beginning of SRM Team Robocon's efforts to bring CAD design and simulation to students across various disciplines. This immersive 3-day workshop provided participants with the tools and knowledge to dive into SolidWorks, a powerful CAD software used by professionals worldwide. Through step-by-step guidance, students learned how to design with precision, bringing their ideas to life in 3D. The bootcamp concluded with an exciting competition, where participants showcased their new skills in 3D modelling, pushing the boundaries of creativity and precision. This workshop laid the foundation for students to explore the vast possibilities of CAD in the world of engineering and design.`,
    gallery: [
      "/events/gallery/sw1/IMG-20230419-WA0029.jpg",
      "/events/gallery/sw1/IMG-20230419-WA0036.jpg",
      "/events/gallery/sw1/IMG-20230419-WA0038.jpg",
      "/events/gallery/sw1/IMG-20230424-WA0006.jpg",
      "/events/gallery/sw1/IMG-20241022-WA0027.jpg",
      "/events/gallery/sw1/IMG-20241022-WA0028.jpg",
      "/events/gallery/sw1/IMG_20230424_191956_474.jpg",
      "/events/gallery/sw1/IMG_20230424_191956_267.jpg",
      "/events/gallery/sw1/IMG-20230424-WA0018.jpg",
    ],
  },
  {
    coverImage: "/events/gallery/Altium/GKVK9246.JPG",
    name: "Interview with Altium Team",
    description: `Rae Callender, VP of Altium Designer Education, visited SRMIST on September 4, 2024, to interact with student teams using Altium software in their robotics, electronics, and circuit design projects. Among the teams was SRM Team Robocon, represented by Mohammed Sadriwala, who discussed the importance of Altium in streamlining their design processes. The visit emphasized the software's impact on student projects and explored future collaborations between Altium and SRMIST.`,
    abstract: `On September 4, 2024, SRM Institute of Science and Technology hosted Rae Callender, Vice President of Altium Designer Education, for an engaging visit focused on student teams utilizing Altium Designer in their projects. Accompanied by Mr. Vikram Poojary and Mr. Madhesh Perumal, Rae interacted with four prominent student engineering teams, including SRM Team Robocon. The teams demonstrated how Altium Designer has been instrumental in improving their design precision and workflow efficiency. The visit highlighted the significant role Altium plays in shaping students’ engineering careers and laid the foundation for future collaborations between SRMIST and Altium.`,
    gallery: [
      "/events/gallery/Altium/20240904_095151.jpg",
      "/events/gallery/Altium/20240904_095210.jpg",
      "/events/gallery/Altium/20240904_110106.jpg",
      "/events/gallery/Altium/20240904_110135.jpg",
      "/events/gallery/Altium/GKVK9199.JPG",
      "/events/gallery/Altium/GKVK9201.JPG",
      "/events/gallery/Altium/GKVK9202.JPG",
      "/events/gallery/Altium/GKVK9203.JPG",
      "/events/gallery/Altium/GKVK9246.JPG",
      "/events/gallery/Altium/GKVK9248.JPG",
      "/events/gallery/Altium/GKVK9249.JPG",
      "/events/gallery/Altium/GKVK9250.JPG",
      "/events/gallery/Altium/IMG-20240906-WA0013.jpg",
      "/events/gallery/Altium/IMG-20240906-WA0014.jpg",
      "/events/gallery/Altium/IMG-20240906-WA0021.jpg",
    ],
  },
];

export const achievements1: Achievement[] = [
  {
    'name': 'Air 11 in DD Robocon 2023',
    'description': '',
    'coverImage': "/achievements/Robocon2023/Robocon2023.jpeg",
    "abstract": 'Doordarshan Robocon India 2023 ( DD Robocon) was a national National Competition organized by IIT Delhi for Asian-Oceanin college Robot competition, organized internationally by Asia-Pacific Broadcasting Union. In the competition robots compete to complete a task within a set period of time. The contest aims to create friendship among young people with similar interests who will lead their countries in the 21st century as well as help advance engineering and broadcasting technologies in the region. SRM Team Robocon added yet another testament to their mettle by being  achieving AIR 11 out of over 100+ teams that had participated all over India. We were proudly presented the Fusion 360 Best User Experience Award with a cash prize of Rs10,000 as well.',
    'gallery': ["/achievements/Robocon2023/Robocon1.jpeg", "/achievements/Robocon2023/Robocon2.jpeg", "/achievements/Robocon2023/Robocon3.jpeg", "/achievements/Robocon2023/Robocon4.jpeg", "/achievements/Robocon2023/Robocon5.jpeg", "/achievements/Robocon2023/Robocon6.jpeg"],
    dimensions1: {
      'height': 725,
      'width': 800
    }
  },
  {
    "name": 'Air 9 in DD Robocon 2024',
    "description": '',
    "coverImage": "/achievements/Robocon2024/robocon2024image.jpeg",
    "abstract": 'In 2024, SRM Team Robocon achieved AIR 9 out of over 110 teams from all over India.',
    "gallery": ["/achievements/Robocon2024/robocon1.jpeg", "/achievements/Robocon2024/robocon2.jpeg", "/achievements/Robocon2024/robocon3.jpeg", "/achievements/Robocon2024/robocon4.jpeg"],
    dimensions1: {
      'height': 184, 'width': 274
    }


  },
  {
    "name": 'AutoDesk Fusion Digital Design award',
    "description": '',
    "coverImage": "/achievements/Fusion2.png",
    "abstract": 'The team was granted the AutoDesk Fusion Digital Design Award in the Best Fabricator Award category in 2024, which included a cash prize of Rs. 25,000, respectively.Autodesk Design & Make Awards (formerly known as Autodesk Excellence Awards) is an annual event honoring an inspiring collection of innovators exploring bold opportunities with technology to transform their industries and make a lasting impact on the world. The team was granted the AutoDesk Fusion Digital Design Award in the Best Fabricator Award category in 2024, which included a cash prize of Rs. 25,000, respectively.',
    "gallery": ["/achievements/Autodeskfusion/Autodesk1.jpeg", "/achievements/Autodeskfusion/Autodesk2.jpeg", "/achievements/Autodeskfusion/Autodesk3.jpeg"],
    dimensions1: {
      'height': 706, 'width': 926
    }


  },
  {
    "name": 'Winners at Healthathon SRMIST 2024',
    "description": '',
    "coverImage": "/achievements/Healthathon.jpg",
    "abstract": "The SRM Team Robocon was honored to be the winners of Round 1, the runner-up of Round 2, and the winners of Round 3 in the inaugural edition of the 'Healthathon', which was organized by the Department of Biomedical Engineering at SRMIST, Chennai. The team received a total cash prize of Rs 11,500. ",
    "gallery": ["/achievements/Healthathon/Healthathon1.jpeg","/achievements/Healthathon/Healthathon2.jpeg","/achievements/Healthathon/Healthathon3.jpeg","/achievements/Healthathon/Healthathon4.jpeg","/achievements/Healthathon/Healthathon5.jpeg"],
    dimensions1: {
      'height': 2252, 'width': 4000
    }


  },
  {
    "name": 'Fusion 360 best user experience award 2023',
    "description": '',
    "coverImage": "/achievements/Fusion360/fusion7.jpeg",
    "abstract": 'With a cash prize of Rs 10,000, our team was granted the Fusion 360 Best User Experience Award in 2023.With a cash prize of Rs 10,000, our team was granted the Fusion 360 Best User Experience Award in 2023.These awards honor individuals and organizations that use Autodesk technology to push the boundaries of innovation and create a positive impact on the world.',
    "gallery": ["/achievements/Fusion360/fusion1.jpeg", "/achievements/Fusion360/fusion2.jpeg", "/achievements/Fusion360/fusion3.jpeg", "/achievements/Fusion360/fusion1.jpeg", "/achievements/Fusion360/fusion4.jpeg", "/achievements/Fusion360/fusion5.jpeg", "/achievements/Fusion360/fusion6.jpeg", "/achievements/Fusion360/fusion7.jpeg","/achievements/Fusion360/fusion8.jpg"],
    dimensions1: {
      'height': 256, 'width': 256
    }


  },
  {
    "name": 'Qualification for SIH 2023',
    "description": '',
    "coverImage": "/achievements/SIH.png",
    "abstract": 'The internal SIH (Smart India Hackathon) 2023 saw the qualification of three teams from SRM Team Robocon, which were led by our club members.',
    "gallery": [],
    dimensions1: {
      'height': 309, 'width': 299
    }


  },
  {
    "name": 'NewGen IEDC SRM Grant at IDEX hackathon 2022',
    "description": '',
    "coverImage": "/projects/IDEX.png",
    "abstract": 'The NewGen IEDC SRM Grant of Rs 1 lakh was awarded to our team at the IDEX hackathon in 2022.',
    "gallery": [],
    dimensions1: {
      'height': 720, 'width': 720
    }


  },
  {
    "name": 'Winners of BITS quarkline 2022',
    "description": 'New Generation Innovation and Entrepreneurship Development Centre (NewGen IEDC) is the programme launched by National Science and Technology Entrepreneurship Development Board (NSTEDB), Department of Science & Technology (DST), Government of India and implemented by EDII, Ahmedabad. It is a financial assistance to the selected institutions for establishment of NewGen IEDC, towards its non-recurring (as one time establishment cost) of upto Rs. 25 Lakhs and recurring expenditure (Project Development Cost, Travel, Training and Contingencies, etc.) of up to Rs. 10 lakhs for five full operational years would be provided. SRM TEAM Robocon was privileged to be presented with this prestigious grant by our SRMIST and Govt. Of India.SRM TEAM Robocon was graced by the auspicious presence the Vice president of Altium Education Global and the  Manager of University  relations Alitum Lab, our  teams proud sponsor for this session',
    "coverImage": "/achievements/BITS.png",
    "abstract": 'In 2022, our members took part in the BITS Quark Line Follower Competition and achieved first place, earning a cash prize of Rs 30,000.',
    "gallery": [],
    dimensions1: {
      'height': 571, 'width': 571
    }

  },
  {
    "name": 'Winners of Advaya Hacks 2022',
    "description": '',
    "coverImage": "/achievements/Advaya.png",
    "abstract": 'Gained victory in the 2022 Advaya Hacks Event, which was organized by the IGDTU ACM Student Chapter',
    "gallery": [],
    dimensions1: {
      'height': 200, 'width': 200
    }


  },
  {
    "name": 'IIITD innovation contest 2022',
    "description": '',
    "coverImage": "/achievements/IIITD.png",
    "abstract": 'SRM Team Robocon was honored as one of the top ten finalists in the IIIT-Delhi Innovation Contest., 2022.',
    "gallery": ["/achievements/IIITD/iiitd2.png","/achievements/IIITD/iiitd.png"],
    dimensions1: {
      'height': 225, 'width': 225
    }


  },
  {
    "name": 'Tide 2.0 Innovation contest IIMU',
    "description": '',
    "coverImage": "/achievements/IIMU.png",
    "abstract": 'The Tide 2.0 Innovation Contest, which was conducted by IIM Udaipur, recognized us as one of the top ten teams in the year 2022.',
    "gallery": ["/achievements/IIMU/tide.jpg","/achievements/IIMU/tide2.0.jpg"],
    dimensions1: {
      'height': 225, 'width': 225
    }


  },
  {
    "name": 'DD robocon 2014',
    "description": '',
    "coverImage": "/achievements/Robocon2014.jpeg",
    "abstract": "DD Robocon designated the Most Economical Bot to SRM Team Robocon's bot for the 2014 problem statement.",
    "gallery": [],
    dimensions1: {
      'height': 140, 'width': 400
    }


  }








]
export const projects: Project[] = [{ 'name': 'Cheepa Robot', 'description': 'The Cheepa Robot is a truly innovative device that was developed by Ayushman Das, Agamjot Kaur Choudhary, and Asutosh Kumar Chouhan for the Smart Agro Event organized by the IEI Department. It is intended to be both efficient and portable, with the ability to measure a variety of air quality parameters, as it is inspired by birds. The sensors of Cheepa are capable of measuring pressure, humidity, particulate matter (PM 2.5), carbon monoxide (CO), and volatile organic compounds (VOCs). This renders it a comprehensive instrument for the monitoring of air quality. It also has additional sensors that are essential for the early detection of fires and the protection of individuals. They detect the presence of smoke. The pulse oximeter feature is crucial for health and safety, as it measures the levels of carbon monoxide in the air, which can be harmful at high levels. The robot is equipped with an integrated airflow system that facilitates the precise measurement of air samples by drawing them into the sensors. The OLED screen is capable of displaying all the measured data in real-time, thereby facilitating the comprehension and reading of the air quality levels. Its design is influenced by birds, which makes it lightweight and convenient to transport, making it ideal for on-the-go air quality monitoring. The Cheepa Robot is a prime illustration of how technology can be employed to develop portable and effective environmental monitoring devices.', 'coverImage': '/projects/cheepa.png', 'abstract': 'Inspired by birds, the ‘Cheepa’ Robot is a unique portable air quality measuring device that uses BME680 sensors to measure rising VOCs, PM 2.5, CO, pressure, and humidity. It also incorporates smoke sensors and has an installed pulse oximeter to measure the levels of carbon monoxide. It features an airflow system as well as an OLED screen that displays all of these details.', 'gallery': ["/projects/cheepa/cheepa1.jpeg", "/projects/cheepa/cheepa2.jpeg", "/projects/cheepa/cheepa3.jpeg", "/projects/cheepa/cheepa4.jpeg"], dimensions: { 'height': 500, 'width': 789 } },
{ 'name': 'Customized Refrigerator', 'description': '', 'coverImage': '/projects/Refrigirator-CAD.png', 'abstract': "This project was developed by Aarush Bhandari, Aditya Rahul Pradhan, and Shohan Saha from the SAMBED Domain of SRM Team Robocon in order to take part in the Smart Agro Event organized by the IEI Department. The problem statement was to create a model that was energy efficient and used a solar panel as it's battery source. The WiFi module installed in the project was ESP8266 . For the purpose of keeping fruits and vegetables fresh, a humidifier was additionally installed in the refrigerator. The PWM (pulse width modulation) technique is used for Peltier to control the mobile app that was developed by Nagesh and used for camera feedback. The body of the refrigerator was made of balsa wood. In real-world scenarios, solar panels should be used to make the refrigerator more energy efficient; however, they were unable to be used, and hence AC current was used as the source supply for it. The refrigerator is also fitted with an OLED display screen.", 'gallery': [], dimensions: { 'height': 662, 'width': 817 } }, { 'name': 'PYRO', 'description': "This independent four-wheel-drive vehicle boasts an omnidirectional mobility system that enables fine control and maneuverability, as well as a square chassis that provides stability and agility for seamless travel in a range of conditions. It makes use of UV-C tubes are positioned with care for disinfection and sterilization. Pyro employs UV-C radiation, which is the UV light spectrum's most potent component, to damage dangerous microorganisms on items and surfaces that fall within a specific range. To improve concentration and accuracy, it also has a concave metal foil in the front. This design optimizes the UV lights' exposure to a specific area procedure for disinfection. This cutting-edge automobile is useful in a number of environments where sanitization is crucial, such as medical facilities, research labs, and residential and business complexes. With a remarkable level of sanitization effectiveness, with about 98.5%, Pyro is a state-of-the-art method for preserving sanitary surroundings.", 'coverImage': '/projects/gallery/PYRO/pyro.png', 'abstract': "The Pyro is a self-sufficient four-wheel-drive vehicle with a square chassis for stability and agility and omnidirectional mobility for precise control. It uses UV-C tubes for sterilization and disinfection, using the most powerful part of the UV radiation spectrum to destroy harmful bacteria on surfaces and objects. The vehicle's design maximizes the disinfection process by focusing UV lamps on specific regions. With an impressive sanitization efficiency of around 98.5%, Pyro is a cutting-edge solution for maintaining hygienic environments in settings like hospitals, research labs, commercial complexes, and residences.", 'gallery': ['/projects/gallery/PYRO/PYRO.jpeg', '/projects/gallery/PYRO/pyro.png'], dimensions: { 'height': 1032, 'width': 774 } }, { 'name': 'ROV', 'description': 'The SRM Team, comprising Roel Pais, Nikit Mathur, Adheesh Mathur, Pranav Malakar, Tamanna Grover, and Danush Ramakrishnan, recently participated in the Smart India Hackathon, addressing a significant challenge in hydroelectric projects (HEPs). The task involved creating a solution for the uninterrupted monitoring of Head Race Tunnels (HRTs), a critical component in hydropower operations. The team proposed deploying remotely operated vehicles (ROVs) equipped with advanced sensors and high-resolution cameras for submerged inspections. These ROVs enable early detection of structural issues, ensuring operational safety, reducing downtime, and lowering maintenance costs. The autonomous nature of ROVs eliminates the need for manual inspections, thus preventing interruptions in hydropower production. Additionally, the ROVs play a role in environmental monitoring by collecting real-time data on water quality and biodiversity, which supports sustainable hydropower practices. This comprehensive solution addresses both operational and ecological aspects, aligning hydropower projects with efficiency and environmental stewardship.', 'coverImage': '/projects/ROV.jpeg', 'abstract': 'SRM Team Robocon participated in the Smart India Hackathon to address challenges related to hydroelectric projects. They proposed using remotely operated vehicles (ROVs) for submerged inspections, preventing operational disruptions and enabling early detection of issues. These ROVs also contribute to environmental monitoring by collecting real-time data on water quality and biodiversity, supporting sustainable hydropower operations.', 'gallery': ['/projects/ROV.jpeg', '/projects/ROV2.jpeg'], dimensions: { 'height': 264, 'width': 352 } }, { 'name': 'Line Follower', 'description': "The Margdarsak Line Follower, developed by Smit Prajapati for the Fluxus Techfest organized by IIT Indore, is an innovative robot designed to navigate and follow a line with unparalleled precision. This advanced project utilizes N20 12V gear motors, a 3S battery, a 7-channel IR sensor array, an Arduino Nano, and an L298N motor driver to achieve its exceptional line-following capabilities. The inclusion of a Castrol wheel allows for multidirectional movement, greatly enhancing its maneuverability on the track. The seamless integration of these high-tech components ensures that the Margdarsak Line Follower can efficiently follow complex paths, showcasing its reliability and performance. This achievement was reflected in its top 3 finish at the competition, highlighting the project's success and innovation. Demonstrating a profound understanding of robotics and sensor integration, this project pushes the boundaries of autonomous robotic navigation, making it a noteworthy contribution to the field. Through meticulous design and engineering, Smit Prajapati's creation stands as a testament to the potential of advanced robotics in tackling intricate navigation challenges.", 'coverImage': '/projects/Line-follower.jpeg', 'abstract': 'The Margdarsak Line Follower, developed by Smit Prajapati for the Fluxus Techfest by IIT Indore, uses N20 12V gear motors, a 3S battery, a 7-channel IR sensor array, an Arduino Nano, and an L298N motor driver for precise line-following. The Castor wheel enhances its maneuverability, resulting in a top 3 finish at the competition. This project showcases robotics and sensor integration, pushing the limits of autonomous robotic navigation.', 'gallery': ['/projects/gallery/line-follow/line1.jpeg', '/projects/gallery/line-follow/line2.jpeg', '/projects/gallery/line-follow/line3.jpeg', '/projects/gallery/line-follow/line4.jpeg', '/projects/gallery/line-follow/line5.jpeg'], dimensions: { 'height': 1344, 'width': 756 } }, { 'name': 'Elephant Robot', 'description': 'The Elephant Robot (ER) is a cutting-edge robotic system designed for precise and efficient ring throwing in gaming scenarios. Mounted on a rectangular board, its throwing mechanism uses high-tension springs attached to an iron plate via electromagnets controlled by a lead screw, ensuring accurate and forceful throws. L-shaped brackets with pneumatic pistons scoop and lift stacks of rings using a pulley mechanism, optimizing the feeding process. This streamlined operation enhances speed and accuracy, making the ER valuable for automation and manufacturing tasks requiring precise object handling and efficient energy transfer. Its robust design and versatile capabilities make it a valuable asset across various industries. In manufacturing, logistics, and education, the ER excels in tasks and operations requiring reliable and efficient robotic solutions. It revolutionizes processes by delivering consistent performance, and its adaptability ensures it can handle complex tasks with ease. Whether for intricate manufacturing processes or educational demonstrations, the ER stands out as a pioneering tool in the realm of robotic innovation.', 'coverImage': '/projects/Elephant.jpeg', 'abstract': 'The Elephant Robot (ER) is a advanced robotic system designed for precise ring throwing in gaming scenarios. It uses high-tension springs and pneumatic pistons to optimize the feeding process, ensuring forceful throws. This system is useful for automation, manufacturing, logistics, and education, where precise object handling and efficient energy transfer are required. Its robust design and versatile capabilities make it a valuable asset in various industries.', 'gallery': ['/projects/gallery/Elephant-Bot/Elephantbot1.jpeg', '/projects/gallery/Elephant-Bot/Elephantbot2.jpeg', '/projects/gallery/Elephant-Bot/Elephantbot3.jpeg'], dimensions: { 'height': 480, 'width': 329 } }, { 'name': 'EVA', 'description': 'EVA is our ambitious endeavor to craft a cutting-edge humanoid robot, designed to excel both as an autonomous professor and a visitor assistant. This vision merges sophisticated AI technology with automated control systems to deliver extraordinary experiences. EVA stands for Enhanced Visitor Assistant and boasts features such as advanced path planning and navigation, interactive presentation reading, AI-generated conversation, and speech recognition. Additionally, EVA is equipped with object detection and face detection capabilities, ensuring seamless interactions with its environment. It is designed with a long-lasting battery life, an interactive screen, and a lightweight construction, making it both practical and user-friendly. EVA embodies our commitment to pushing the boundaries of robotics, combining functional prowess with intelligent design to revolutionize how we think about autonomous assistance. Through this project, we aim to create a versatile and engaging companion capable of transforming educational and visitor experiences.', 'coverImage': '/projects/gallery/EVA/EVA.jpeg', 'abstract': 'The EVA project is our vision to manufacture a sophisticated humanoid robot capable of serving both as an autonomous professor and a visitor assistant. Providing experiences through a combination of advanced AI technology and automated control systems. EVA, standing for Enhanced Visitor Assistant contains features such as path planning and navigation, interactive presentation reading, AI-generated conversation, speech recognition, object detection, face detection, long-lasting battery life, an interactive screen, and lightweight construction.', 'gallery': ['/projects/gallery/EVA/EVA.jpeg', '/projects/gallery/EVA/EVA.png', '/projects/gallery/EVA/eva2.jpg', '/projects/gallery/EVA/eva3.jpg', '/projects/gallery/EVA/eva4.jpg', '/projects/gallery/EVA/eva5.jpg', '/projects/gallery/EVA/eva6.jpg'], dimensions: { 'height': 701, 'width': 526 } }, { 'name': 'Spider Bot', 'description': 'The Spider Bot, primarily designed for search and rescue missions, excels in navigating diverse terrains and reaching otherwise inaccessible areas. Its ability to effortlessly scale walls and structures makes it invaluable for infrastructure inspection and maintenance. Inspired by nature, the Spider Bot boasts a biomimetic design, mimicking the agility of spiders with its versatile movement. This robotic marvel incorporates advanced control algorithms and a lightweight yet sturdy build, enabling seamless adaptation to challenging environments. Additionally, the Spider Bot proves indispensable in exploring hazardous environments, overcoming challenges that traditional robots struggle with. With its biomimetic structure and multifunctional capabilities, the Spider Bot emerges as a groundbreaking solution for tasks requiring agility, adaptability, and resilience in complex scenarios. This pioneering innovation pushes the boundaries of robotics by combining nature-inspired design with cutting-edge technology, tackling the most demanding and hazardous tasks with efficiency and precision, ensuring unparalleled performance in critical missions.', 'coverImage': '/projects/gallery/spider-bot/SPIDER.png', 'abstract': ' The Spider Bot is a robotic robot designed for search and rescue missions and reaching inaccessible areas. Its biomimetic design mimics spider agility, making it ideal for infrastructure inspection and maintenance. With advanced control algorithms, it adapts seamlessly to challenging environments. The Spider Bot is indispensable in exploring hazardous environments and overcoming challenges traditional robots struggle with.', 'gallery': ['/projects/gallery/spider-bot/SPIDER.png', '/projects/gallery/spider-bot/Spiderbot2.jpg', '/projects/gallery/spider-bot/spiderbot3.jpg', '/projects/gallery/spider-bot/spiderbot4.jpg', '/projects/gallery/spider-bot/spiderbot5.jpg'], dimensions: { 'height': 555, 'width': 555 } }, { 'name': 'IDEX', 'description': 'Pranav Malakar, Harikrishnan M, Yakub Mathew, and Prithiv Raj, members of SRM Team Robocon, have developed a 3D-printed helmet for welders that addresses the prevalent issue of obscured visibility during welding, which frequently relies on muscle memory. The helmet is designed to be integrated into the Oculus VR headset and features software. This helmet facilitates the simultaneous observation of the welding task and the welding arc through the use of high-definition cameras. It indicates the welding parameters in real time, including the electrode stickout, transverse speed, voltage, and current. It integrates sophisticated technology, such as a cognitive neural network model that is predicated on images and an infrared camera and dot projector for 3D mapping. It provides the welder with feedback that is color-coded. It was awarded the NewGen IEDC SRM Grant of Rs. 1 lakh for the implementation of an innovative approach to resolving daily tasks in the industry through the use of advanced technology.', 'coverImage': '/projects/IDEX.png', 'abstract': 'SRM Team Robocon has developed a 3D-printed helmet for welders to address obscured visibility during welding. The helmet uses HDR cameras to display real-time welding parameters and incorporates advanced technology like infrared cameras and dot projectors.', 'gallery': ["/projects/IDEX/idex.jpeg"], dimensions: { 'height': 720, 'width': 720 } }, { 'name': 'Rabbit Robot', 'description': "The RR is exceptional in competitive environments when it comes to collection, handling, and deployment. The T-shaped drive configuration on a U-shaped chassis enables omnidirectional movement with three omni wheels and two swivel caster wheels, thereby ensuring stability and maneuverability. The optimal torque and RPM are achieved by the RR, which is powered by DC planetary geared motors. The robot reduces the time required for picking and feeding by simultaneously scooping and lifting a stack of 10 rings using a metal plate and pulley mechanism. Rings are supplied to a C-shaped plastic mold via a roller system that is connected to a pneumatic piston, enabling the production of precise and forceful throws. RR's actuators consist of offset geared DC motors for pulley and roller operations, linear actuators for picking, and pneumatic pistons for throwing. Accurate operation is guaranteed by sensors such as encoders for drive odometry, a limit switch for ring detection, and an IMU sensor for orientation. In addition to competitive robotics, RR's capabilities are applicable to automated manufacturing, warehouse logistics, and medical settings, rendering it a versatile solution for the high-speed, precise handling of small components.", 'coverImage': '/projects/Rabbit-bot.png', 'abstract': 'The RR robot is a versatile solution for high-speed, precise handling of small components, offering omnidirectional movement and optimal torque, including automated manufacturing, warehouse logistics, and medical settings.', 'gallery': ['/projects/Rabbit-bot.png', '/projects/gallery/Rabbit-bot/Rabbit-Bot2.png', '/projects/gallery/Rabbit-bot/Rabbit-Bot4.jpeg', '/projects/gallery/Rabbit-bot/Rabbit-Bot5.png', '/projects/gallery/Rabbit-bot/Rabbit-Bot6.jpeg', '/projects/gallery/Rabbit-bot/Rabbit-Bot3.jpeg'], dimensions: { 'height': 1600, 'width': 1199 } }, { 'name': 'Pentagonal SCARA Plotter', 'description': "The Pentagonal SCARA Plotter project, developed by Akhil Anil and Aditya Rahul Pradhan, is a cutting-edge initiative aimed at designing and implementing a versatile robotic arm capable of functioning as a plotter on a Cartesian plane. This innovative robotic arm, based on a unique five-link pentagonal configuration, provides enhanced maneuverability and flexibility, allowing it to navigate complex trajectories with precision. The project integrates mechanical design, kinematic modeling, and advanced control systems, utilizing a Raspberry Pi Pico microcontroller to operate the arm's actuators and achieve precise plotting on an A4-sized sheet of paper. The plotter’s lightweight and portable design, combined with its modular nature, makes it suitable for various applications, including educational tools and research platforms. Akhil and Aditya successfully realized this innovative system, pushing the boundaries of robotic manipulation and plotting capabilities. By combining meticulous design, advanced technology, and practical applications, the Pentagonal SCARA Plotter stands as a testament to the potential of robotics in achieving complex tasks with accuracy and efficiency, significantly contributing to the field of robotic arm design.", 'coverImage': '/projects/gallery/Line-plot/SCARA.png', 'abstract': 'The Pentagonal SCARA Plotter project, developed by Akhil Anil and Aditya Rahul Pradhan, is a revolutionary robotic arm designed to function as a plotter on a Cartesian plane. The arm, based on a unique five-link pentagonal configuration, offers enhanced maneuverability and precision. It integrates mechanical design, kinematic modeling, and advanced control systems using a Raspberry Pi Pico microcontroller. The lightweight, portable, and modular design makes it suitable for various applications, including educational tools and research platforms.', 'gallery': ['/projects/gallery/Line-plot/Scara2.jpeg', '/projects/gallery/Line-plot/Scara3.jpeg', '/projects/gallery/Line-plot/Scara4.jpeg', '/projects/gallery/Line-plot/SCARA.png'], dimensions: { 'height': 586, 'width': 504 } }, { 'name': '2-DOF Robotic Arm', 'description': "Aarush Bhandari and Nagesh Yenigalla's 2-DOF Robotic Arm project is a sophisticated creation that is intended for the precise manipulation of objects in both industrial and educational environments. This robotic arm is equipped with a control system that is powered by advanced algorithms such as PID, which guarantees accurate and responsive movement. It has two degrees of freedom. The arm's electromagnet end-effector enables it to efficiently lift and position metallic objects within its operational workspace, with the assistance of detailed kinematic modeling.  The arm is both portable and robust, making it suitable for a variety of applications, as it is constructed from lightweight materials like PLA. The objective was to incorporate mechanical, electrical, and computational technologies into this project, thereby establishing a valuable educational platform and a foundation for future research and development.", 'coverImage': '/projects/Robotic-Arm.jpeg', 'abstract': 'The 2-DOF Robotic Arm is a precision object manipulator for industrial and educational settings. It features advanced algorithms, an electromagnetic end-effector, and is made from lightweight materials like PLA (Polylactic Acid)', 'gallery': ["/projects/gallery/Robotic-arm/roboarm1.jpeg", "/projects/gallery/Robotic-arm/roboarm2.jpeg", "/projects/gallery/Robotic-arm/roboarm1.jpeg", "/projects/gallery/Robotic-arm/roboarm3.jpeg", "/projects/gallery/Robotic-arm/roboarm4.jpeg", "/projects/gallery/Robotic-arm/roboarm5.jpeg", "/projects/gallery/Robotic-arm/Robotic-Arm.jpeg"], dimensions: { 'height': 480, 'width': 354 } }]
