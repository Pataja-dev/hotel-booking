
import { Header } from "@/components/header";
import Welcome from "@/components/welcome";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image src="/bg.jpg" alt="Beautiful hotel view" fill />
          <div className="absolute inset-0 bg-gray-700 opacity-80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          <Header/>

          {/* Welcome Content */}
          <Welcome />
        </div>
      </div>
    </>
  );
}
