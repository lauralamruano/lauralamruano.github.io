import Image, { StaticImageData } from "next/image";

interface CarouselItemProps {
    image: StaticImageData;
    title: string;
    description: string;
    bg: string;
    bgButton: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ image, title, description, bg, bgButton }) => {
    const backgroundColorStyle = {
        backgroundColor: bg,
    };
    const backgroundColorButton = {
        backgroundColor: bgButton,
    };

    //   const handleClick = () => {
    //     window.open('', '');
    //   };


    return (
        <div style={backgroundColorStyle} className=" card m-auto w-full h-48 shadow-xl flex items-center justify-center flex-wrap gap-4 ">
            <h2>{title}</h2>
            <Image src={image} alt="Company" className="w-20" />
            <p>{description}</p>
            <button style={backgroundColorButton} className="p-3 rounded-full">Learn More!</button>
        </div>
    );
}