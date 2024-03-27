import Image from "next/image";

interface DevImgProps {
  containerStyles: string;
  imgSrc: string;
}

const DevImg: React.FC<DevImgProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`relative rounded-full overflow-hidden ${containerStyles}`}>
      <Image
        src={imgSrc}
        width={500}
        height={500}
        className="rounded-full"
        alt=""
      />
    </div>
  );
};

export default DevImg;
