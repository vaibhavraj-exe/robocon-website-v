import { Event } from "@/constants/types";
import Image from "next/image";

export default function DialogBox({ name, description, coverImage }: Event) {
  console.log(name, description, coverImage);
  return (
    <div className="dialog-box text-white bg-black border">
      <div className="dialog-header text-center">
        <h2>{name}</h2>
      </div>
      <div className="grid place-items-center">
        <Image src={coverImage} alt={name} width={300} height={200} />
      </div>
      <div className="text-sm">
        <p>{description}</p>
      </div>
      <div className="dialog-footer py-4">
        <button className="close-button bg-red p-2 rounded-lg w-1/4">Close</button>
      </div>
    </div>
  );
}
