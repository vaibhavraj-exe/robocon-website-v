import React from 'react'

const Project = () => {
  return (
    <div><div className="w-full">
    <div className="mt-20">
      <h1 className="text-3xl md:text-4xl pl-10 md:pl-44 mt-44 text-white mb-7">Our Projects</h1>
      <div className="flex overflow-x-auto">
        {data.slice(0, 3).map((d, index) => (
          <div key={index} className="group flex-shrink-0 h-[300px] w-[477px] relative">
            <div className="group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer w-full h-full">
              <img
                src={d.img}
                alt=""
                className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-2 group-hover:scale-125 w-full h-full"
              />
              <div className="absolute bg-red w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80 flex items-center justify-center">
                <h2 className="text-white text-5xl font-kurat">
                  {index === 0
                    ? 'Home Automation'
                    : index === 1
                    ? 'Dave'
                    : index === 2
                    ? 'Pyro'
                    : index === 3
                    ? 'Jerry'
                    : 'Water Management'}
                </h2>
              </div>
              {index === 2 && (
                <div className="h-[350px] w-[135px] absolute right-0 bottom-0 bg-red text-white p-2 opacity-60 group-hover:opacity-80 transition-opacity duration-500 cursor-pointer flex items-center justify-center font-kurat text-4xl">
                <div>{'>>'}  More</div>
              </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div></div>
  )
}

const data = [
  { img: `/photo/first.png` },
  { img: `/photo/second.png` },
  { img: `/photo/third.png` },
];


export default Project