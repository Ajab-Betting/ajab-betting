const resource = process.env.IMAGE_SOURCE || "public";

type Images = { src: string; alt: string };
type Video = { src: string; videoType: string };

type Resources = {
  bettingMan: Images;
  board: Video;
};

let resources: Resources;

if (resource == "public") {
  resources = {
    bettingMan: { src: "/betting-man-square.png", alt: "betting-man" },
    board: { src: "/5920617-hd_1366_720_25fps.mp4", videoType: "video/mp4" },
  };
} else {
  resources = {} as Resources;
}

export default resources;
