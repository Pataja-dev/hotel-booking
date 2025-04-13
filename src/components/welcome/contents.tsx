import { Header } from "@/components/welcome/header";
import Welcome from "@/components/welcome/welcome";
import Background from "./background";

export default function Content() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <Background/>
        {/* Content */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          <Header />

          {/* Welcome Content */}
          <Welcome />
        </div>
      </div>
    </>
  );
}
