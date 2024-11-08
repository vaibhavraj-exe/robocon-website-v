import Image from "next/image";

export default  function Achievement(achievement: {
    imageSrc: string;
    altText: string;
    description: string;
}) {
    return (
        <div className="flex items-center w-full justify-center md:w-full lg:w-1/3 h-24 md:h-44 border-r-2 border-red pr-2 md:pr-5">
            <Image
                src={achievement.imageSrc}
                alt={achievement.altText}
                width={100}
                height={100}
                className="w-auto h-full"
                
            ></Image>
            <div className="text-white text-right text-sm md:text-base pl-1 text-ellipsis">
                {achievement.description}
            </div>
        </div>
    )
}

