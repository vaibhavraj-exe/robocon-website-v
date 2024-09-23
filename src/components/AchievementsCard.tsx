import Image from "next/image";

export default function Achievements(achievement: {
    imageSrc: string;
    altText: string;
    description: string;
}) {
    return (
        <div className="flex items-center justify-center md:w-1/3 h-24 md:h-44 border-r-2 border-red pr-2 md:pr-5">
            <Image
                src={achievement.imageSrc}
                alt={achievement.altText}
                width={500}
                height={500}
                className="w-auto h-full"
                unoptimized
            ></Image>
            <div className="text-white text-right text-sm md:text-base pl-1">
                {achievement.description}
            </div>
        </div>
    )
}