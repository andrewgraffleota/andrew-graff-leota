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
    id: "slide-1",
    paper: {
      title: "Selected paper title (replace me)",
      authors: "Authors (optional)",
      year: "YYYY (optional)",
      venue: "Venue/Conference (optional)",
    },
    images: [
      {
        src: "/file.svg",
        alt: "Ākonga slide 1",
      },
    ],
    takeaway: "What you learned / what you implemented (optional).",
  },
];

