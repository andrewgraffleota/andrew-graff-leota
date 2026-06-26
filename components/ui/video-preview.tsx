'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type VideoPreviewProps = {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
};

export default function VideoPreview({
  src,
  poster,
  className,
  label = 'Video preview',
}: VideoPreviewProps) {
  const [shouldPlay, setShouldPlay] = useState(true);

  useEffect(() => {
    // Respect reduced-motion preferences so we don't autoplay unnecessarily.
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    if (!mq) return;
    const update = () => setShouldPlay(!mq.matches);
    update();
    // Safari compatibility.
    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', update);
      return () => mq.removeEventListener('change', update);
    }
    mq.addListener(update);
    return () => mq.removeListener(update);
  }, []);

  return (
    <div
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden bg-zinc-800 text-zinc-500',
        className,
      )}
    >
      <video
        className="h-full w-full object-cover"
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        autoPlay={shouldPlay}
        preload="metadata"
        // Keep the UI clean; previews should feel “background-y”.
        controls={false}
        aria-label={label}
      />

      {/* Keeps the card readable even before the first frame loads */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
    </div>
  );
}

