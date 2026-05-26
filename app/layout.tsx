import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://plataformaativa.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Plataforma Ativa — Educação, Tecnologia e IA",
    template: "%s · Plataforma Ativa",
  },
  description:
    "Consultoria, desenvolvimento de plataformas e mentoria em IA para instituições e profissionais da educação. Transformamos a forma como você ensina e aprende com tecnologia.",
  keywords: [
    "educação",
    "tecnologia educacional",
    "inteligência artificial na educação",
    "consultoria em IA",
    "automação educacional",
    "mentoria em IA",
    "EdTech Brasil",
    "Plataforma Ativa",
  ],
  authors: [{ name: "Plataforma Ativa" }],
  creator: "Plataforma Ativa",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Plataforma Ativa",
    title: "Plataforma Ativa — Educação, Tecnologia e IA",
    description:
      "Consultoria, desenvolvimento de plataformas e mentoria em IA para instituições e profissionais da educação.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plataforma Ativa — Educação, Tecnologia e IA",
    description:
      "Consultoria, desenvolvimento de plataformas e mentoria em IA para a educação.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: siteUrl },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#013180",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
