import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@/styles/globals.css";

import { cn } from "@/lib/utils";
import Providers from "@/app/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Discuss",
  description: "a simple Reddit clone Next.js 14 + Prisma + NextAuth + Zod",
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
  ],
  authors: [
    {
      name: "Yaswanth",
      url: "https://yg-dev.com",
    },
  ],
  creator: "Yaswanth",
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
