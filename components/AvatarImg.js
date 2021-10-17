import Image from "next/image";

function AvatarImg({ src, Icon }) {
  return (
    <div className="cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={40}
          height={40}
          objectFit="cover"
          layout="fixed"
          overflow="hidden"
        />
      )}
      {Icon && (
        <Icon className="rounded-full bg-gray-300 text-gray-500" width={40} height={40} objectFit="cover" layout="fixed" />
      )}
    </div>
  );
}

export default AvatarImg;
