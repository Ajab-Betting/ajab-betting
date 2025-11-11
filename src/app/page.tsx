import Navbar from "@/components/homepage/navbar";
import resources from "@/resources";
import GitHubReadme from "@/components/homepage/readme";

export default function Home() {
  return (
    <div className="fixed w-full h-full top-0 left-0 overflow-auto">
      <video
        autoPlay
        muted
        loop
        className="object-fill fixed top-0 z-[-100] w-full h-full"
      >
        <source src={resources.board.src} type={resources.board.videoType} />
      </video>
      <Navbar />
      <div className="w-full max-w-[50rem] mx-auto">
        <GitHubReadme />
      </div>
      <div className="py-10"></div>
    </div>
  );
}
