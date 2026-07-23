"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";

type SlideImage = {
  src: string;
  alt: string;
};

export default function SlideLightboxGallery({
  images,
  defaultIndex = 0,
  prioritySrc,
}: {
  images: SlideImage[];
  defaultIndex?: number;
  prioritySrc?: string;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(defaultIndex);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const activeImage = images[index];

  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const t = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % images.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, images.length]);

  const thumbnailImages = useMemo(() => images, [images]);

  return (
    <>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {thumbnailImages.map((img, imgIndex) => (
          <button
            key={img.src}
            type="button"
            onClick={() => {
              setIndex(imgIndex);
              setOpen(true);
            }}
            className="relative aspect-[16/10] overflow-hidden rounded-xl border border-zinc-800 bg-zinc-800 text-left"
            aria-label={`Open slide: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={prioritySrc ? img.src === prioritySrc : imgIndex === 0}
            />
          </button>
        ))}
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Slide viewer"
          onMouseDown={(e) => {
            // Click outside to close.
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="relative w-full max-w-5xl">
            <div className="relative mx-auto h-[80vh] w-full overflow-hidden rounded-xl border border-white/10 bg-black">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
              <button
                type="button"
                className="pointer-events-auto rounded-full bg-black/40 p-3 text-white shadow-sm hover:bg-black/60"
                onClick={() =>
                  setIndex((i) => (i - 1 + images.length) % images.length)
                }
                aria-label="Previous slide"
              >
                ←
              </button>
              <button
                type="button"
                className="pointer-events-auto rounded-full bg-black/40 p-3 text-white shadow-sm hover:bg-black/60"
                onClick={() => setIndex((i) => (i + 1) % images.length)}
                aria-label="Next slide"
              >
                →
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-4">
              <div className="text-sm text-zinc-300">
                {index + 1} / {images.length}
              </div>

              <div className="flex items-center gap-3">
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

