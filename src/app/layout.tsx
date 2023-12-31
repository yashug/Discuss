import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import Providers from "@/app/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Server Actions",
    "Shadcn UI",
    "Radix UI",
    "Prisma ORM",
    "Zod",
    "NextAuth",
    "PlanetScale",
  ],
  authors: [
    {
      name: "Yaswanth",
      url: "https://yg-dev.com",
    },
  ],
  creator: "Yaswanth",
  openGraph: {
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@urstrulyyashu5",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
