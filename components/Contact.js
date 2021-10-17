import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 p-2 relative hover:bg-gray-200 cursor-pointer rounded-xl">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        height={50}
        width={50}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-8 bg-green-400 h-3 w-3 rounded-full" />
    </div>
  );
}

export default Contact;
