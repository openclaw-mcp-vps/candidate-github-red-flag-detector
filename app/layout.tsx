import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Red Flag Detector – Spot Hiring Risks Fast",
  description: "Analyze GitHub profiles for red flags: fake commits, copied code, suspicious contribution graphs, and plagiarized projects. Built for technical recruiters and engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="47b57f4b-5776-4fc7-aa83-d9753c9a5416"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
