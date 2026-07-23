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
      title: "Design (paper details optional)",
      authors: "",
      year: "",
      venue: "",
    },
    images: [
      {
        src: "/akonga/design/1.png",
        alt: "Ākonga design slide 1",
      },
      {
        src: "/akonga/design/2.png",
        alt: "Ākonga design slide 2",
      },
      {
        src: "/akonga/design/3.png",
        alt: "Ākonga design slide 3",
      },
      {
        src: "/akonga/design/4.png",
        alt: "Ākonga design slide 4",
      },
      {
        src: "/akonga/design/5.png",
        alt: "Ākonga design slide 5",
      },
      {
        src: "/akonga/design/6.png",
        alt: "Ākonga design slide 6",
      },
      {
        src: "/akonga/design/7.png",
        alt: "Ākonga design slide 7",
      },
      {
        src: "/akonga/design/8.png",
        alt: "Ākonga design slide 8",
      },
      {
        src: "/akonga/design/S16.png",
        alt: "Ākonga design slide S16",
      },
    ],
    takeaway: "Key ideas and implementation notes for the design course (update as needed).",
  },
  {
    id: "networking",
    paper: {
      title: "Networking (paper details optional)",
    },
    images: [
      { src: "/akonga/networking/1.png", alt: "Ākonga networking slide 1" },
      { src: "/akonga/networking/2.png", alt: "Ākonga networking slide 2" },
      { src: "/akonga/networking/3.png", alt: "Ākonga networking slide 3" },
      { src: "/akonga/networking/4.png", alt: "Ākonga networking slide 4" },
      { src: "/akonga/networking/5.png", alt: "Ākonga networking slide 5" },
    ],
    takeaway:
      "Key ideas and implementation notes for the networking course (update as needed).",
  },
  {
    id: "programming",
    paper: {
      title: "Programming (paper details optional)",
    },
    images: [
      { src: "/akonga/programming/1.png", alt: "Ākonga programming slide 1" },
      { src: "/akonga/programming/2.png", alt: "Ākonga programming slide 2" },
      { src: "/akonga/programming/3.png", alt: "Ākonga programming slide 3" },
      { src: "/akonga/programming/4.png", alt: "Ākonga programming slide 4" },
      { src: "/akonga/programming/5.png", alt: "Ākonga programming slide 5" },
    ],
    takeaway:
      "Key ideas and implementation notes for the programming course (update as needed).",
  },
  {
    id: "security",
    paper: {
      title: "Security (paper details optional)",
    },
    images: [
      { src: "/akonga/security/1.png", alt: "Ākonga security slide 1" },
      { src: "/akonga/security/2.png", alt: "Ākonga security slide 2" },
      { src: "/akonga/security/3.png", alt: "Ākonga security slide 3" },
      { src: "/akonga/security/4.png", alt: "Ākonga security slide 4" },
    ],
    takeaway:
      "Key ideas and implementation notes for the security course (update as needed).",
  },
];

