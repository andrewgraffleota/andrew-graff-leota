export type AkongaSlide = {
  id: string;
  paper: {
    title: string;
    authors?: string;
    year?: string;
    venue?: string;
    note?: string;
  };
  images: Array<{
    src: string; // Path under `public/` (e.g. "/akonga/slide-1.png")
    alt: string;
  }>;
  takeaway?: string;
};

/**
 * Fill in these images with the slide PNG/JPGs you want to publish.
 * Suggested filenames:
 *   public/akonga/slide-1.png
 *   public/akonga/slide-2.png
 * etc.
 */
export const akongaSlides: AkongaSlide[] = [
  {
    id: "design",
    paper: {
      title: "Design",
    },
    images: [
      {
        src: "/akonga/design/1.png",
        alt: "ākonga design slide 1",
      },
      {
        src: "/akonga/design/2.png",
        alt: "ākonga design slide 2",
      },
      {
        src: "/akonga/design/3.png",
        alt: "ākonga design slide 3",
      },
      {
        src: "/akonga/design/4.png",
        alt: "ākonga design slide 4",
      },
      {
        src: "/akonga/design/5.png",
        alt: "ākonga design slide 5",
      },
      {
        src: "/akonga/design/6.png",
        alt: "ākonga design slide 6",
      },
      {
        src: "/akonga/design/7.png",
        alt: "ākonga design slide 7",
      },
      {
        src: "/akonga/design/8.png",
        alt: "ākonga design slide 8",
      },
      {
        src: "/akonga/design/S16.png",
        alt: "ākonga design slide S16",
      },
    ],
    takeaway:
      "A slide series summarizing key concepts from the selected design study area, refined into practical technical notes.",
  },
  {
    id: "networking",
    paper: {
      title: "Networking",
    },
    images: [
      { src: "/akonga/networking/1.png", alt: "ākonga networking slide 1" },
      { src: "/akonga/networking/2.png", alt: "ākonga networking slide 2" },
      { src: "/akonga/networking/3.png", alt: "ākonga networking slide 3" },
      { src: "/akonga/networking/4.png", alt: "ākonga networking slide 4" },
      { src: "/akonga/networking/5.png", alt: "ākonga networking slide 5" },
    ],
    takeaway:
      "A slide series turning core networking ideas into practical notes and design considerations.",
  },
  {
    id: "programming",
    paper: {
      title: "Programming",
    },
    images: [
      { src: "/akonga/programming/1.png", alt: "ākonga programming slide 1" },
      { src: "/akonga/programming/2.png", alt: "ākonga programming slide 2" },
      { src: "/akonga/programming/3.png", alt: "ākonga programming slide 3" },
      { src: "/akonga/programming/4.png", alt: "ākonga programming slide 4" },
      { src: "/akonga/programming/5.png", alt: "ākonga programming slide 5" },
    ],
    takeaway:
      "A slide series summarizing programming concepts and the practical improvements they inspired.",
  },
  {
    id: "security",
    paper: {
      title: "Security",
    },
    images: [
      { src: "/akonga/security/1.png", alt: "ākonga security slide 1" },
      { src: "/akonga/security/2.png", alt: "ākonga security slide 2" },
      { src: "/akonga/security/3.png", alt: "ākonga security slide 3" },
      { src: "/akonga/security/4.png", alt: "ākonga security slide 4" },
    ],
    takeaway:
      "A slide series summarizing security concepts and the practical takeaways applied to real-world thinking.",
  },
];

