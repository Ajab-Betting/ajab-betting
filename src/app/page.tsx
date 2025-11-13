import Navbar from "@/components/homepage/navbar";
import resources from "@/resources";

export default function Home() {
  return (
    <div className="fixed w-full h-full top-0 left-0 overflow-auto">
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover z-[-100]"
      >
        <source src={resources.board.src} type={resources.board.videoType} />
      </video>
      <Navbar />
      <div className="fixed bottom-10 w-full text-center font-light text-white text-4xl max-md:text-2xl">
        The spirit of old banyan betting
      </div>
    </div>
  );
}
