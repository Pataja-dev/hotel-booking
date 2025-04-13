import Image from "next/image";

export default function Background() {
  return (
    <>
        <div className="absolute inset-0">
          <Image src="/bg.jpg" alt="Beautiful hotel view" fill />
          <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
        </div>
    </>
  );
}
