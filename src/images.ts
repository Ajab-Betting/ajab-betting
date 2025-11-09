const imageSource = process.env.IMAGE_SOURCE || "public";

type Image = { src: string; alt: string };

type Images = {
  board: Image;
  bettingMan: Image;
};

let images: Images;

if (imageSource == "public") {
  images = {
    board: { src: "/board.jpg", alt: "Board" },
    bettingMan: { src: "/betting-man-square.png", alt: "betting-man" },
  };
} else {
  images = {} as Images;
}

export default images;
