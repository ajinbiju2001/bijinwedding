import type { Metadata, Viewport } from "next";
import "./first-build.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Bijin & Devu — The Wedding Celebration",
  description: "Auspiciously invited to celebrate the wedding of Bijin and Devu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="scroll-smooth"><body>{children}</body></html>;
}
