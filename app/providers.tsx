'use client';

import { ThemeProvider } from 'next-themes';
import React from 'react';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { Component as SpotlightCursor } from '@/components/ui/spotlight-cursor';

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <DottedSurface className="opacity-80" />
      <SpotlightCursor
        className="z-0 opacity-60"
        config={{ radius: 240, brightness: 0.16, color: '#ffffff' }}
      />
      {children}
    </ThemeProvider>
  );
}

