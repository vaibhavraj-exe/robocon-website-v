import { Event } from "@/constants/types";
import Image from "next/image";

export default function DialogBox({
  name,
  description,
  coverImage,
  abstract,
  gallery,
}: Event) {
  return (
    <div className="dialog-box text-white bg-black overflow-y-auto w-full h-full lg:w-3/4 border-y-0 border-x-0 lg:border-x-1 no-scrollbar grid gap-2">
      <div className="text-center">
        <h2 className="text-2xl p-2 font-bold underline">{name}</h2>
      </div>
      <div className="grid place-items-center gap-2 lg:flex">
        <div className="grid place-items-center h-96">
          <Image
            src={coverImage}
            alt={name}
            width={400}
            height={400}
            className="rounded-xl h-96"
          />
        </div>
        <div className="bg-red rounded-lg p-4 w-fit h-96 overflow-y-auto grid place-items-center"><p>{abstract}</p></div>
      </div>
      <div>
        <p className="p-2">{description}</p>
      </div>
      <div className="grid place-items-center ">
        <div className="grid place-items-center grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          {gallery.map((image, index) => (
            <div key={index} className="bg-cover bg-center w-full h-72 lg:h-[500px] rounded-xl" style={{ backgroundImage: `url(${image})` }}>

            </div>
          ))}
        </div>
      </div>
      <div className="py-4">
        <button className="close-button bg-red p-2 rounded-lg w-1/4">
          Close
        </button>
      </div>
    </div>
  );
}
