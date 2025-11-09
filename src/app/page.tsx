import Navbar from "@/components/homepage/navbar";
import GitHubReadme from "@/components/homepage/readme";
import images from "@/images";

export default function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${images.board.src})` }}
      className="bg-cover fixed w-full h-full top-0 left-0 overflow-auto"
    >
      <Navbar />
      <div className="w-full max-w-[50rem] mx-auto">
        <GitHubReadme />
      </div>
    </div>
  );
}
