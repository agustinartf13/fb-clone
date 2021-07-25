import Image from "next/image";

function AvatarProfile({ Icon, src }) {
  return (
    <div className="flex item-center space-x-2 cursor-pointer">
      {src && (
        <Image className="rounded-full" src={src} width={30} height={30} />
      )}
    </div>
  );
}

export default AvatarProfile;
