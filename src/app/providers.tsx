"use client";

import { ThemeProvider } from "next-themes";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <ReactLenis
        root
        options={{
          duration: 1.8,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1.2,
        }}
      >
        {children}
      </ReactLenis>
    </ThemeProvider>
  );
}
