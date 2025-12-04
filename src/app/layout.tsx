import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "AgentArena - AI Agent Evaluation Benchmarks",
  description: "A collection of reproducible benchmarks for evaluating AI agents on UI grounding, web navigation, and task automation. Static environments for consistent model evaluation.",
  keywords: ["ai-agents", "benchmark", "ui-grounding", "web-automation", "llm-evaluation", "computer-use", "vision-language-models", "web-agents"],
  authors: [{ name: "AgentArena" }],
  openGraph: {
    title: "AgentArena - AI Agent Evaluation Benchmarks",
    description: "Reproducible benchmarks for evaluating AI agents on real-world UI tasks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentArena - AI Agent Evaluation Benchmarks",
    description: "Reproducible benchmarks for evaluating AI agents on real-world UI tasks.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
