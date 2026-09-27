import Image from "next/image";

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image
        src={imgSrc}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 500px"
        className="object-contain object-bottom"
        alt="Rizky Noor Ichwanudin - Developer"
      />
    </div>
  );
};

export default DevImg;
