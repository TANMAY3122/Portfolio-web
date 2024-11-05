import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Section } from "@/components/ui/section";
import Footer from "@/components/layout/footer";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tanmaysportfolio.vercel.app/"),
  keywords: [
    "Tanmay Kashyap",
    "Tanmay Kashyap Freelance",
    "Tanmay Kashyap Full Stack Developer",
    "Tanmay Kashyap India",
    "Tanmay Kashyap Portfolio",
    "Tanmay Kashyap Web Developer",
    "Tanmay Kashyap Web Development",
    "Tanmay Kashyap Web Developer India",
    "Tanmay Kashyap Web Development",
    "Tanmay Kashyap Web Development India",
    "Tanmay Kashyap Web Development Portfolio",
    "Tanmay Kashyap Web Development Portfolio India",
    "Tanmay Kashyap Web Development Portfolio Freelance",
    "Tanmay Kashyap Web Development Portfolio Freelance India",
    "Freelance Web Developer",
    "Freelance Web Developer India",
    "Freelance Web Developer Portfolio",
    "Freelance Web Developer Portfolio India",
    "Freelance Web Developer Portfolio Freelance",
    "Web Developer",
    "Web Developer India",
    "Web Developer Portfolio",
    "Web Developer Portfolio India",
    "Web Developer Portfolio Freelance",
    "Web Developer Portfolio Freelance India",
    "Web Development",
    "Web Development India",
    "Web Development Portfolio",
    "Web Development Portfolio India",
    "Web Development Portfolio Freelance",
  ],
  title: {
    default: "Tanmay Kashyap - Project Manager / Developer",
    template: "%s | Tanmay Kashyap - Full Stack Developer",
  },
  openGraph: {
    description:
      "Full Stack Developer based in India. I build web applications using modern technologies.",
    type: "website",
    url: "https://tanmaysportfolio.vercel.app/",
    images: [
      {
        url: "https://tanmaysportfolio.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Profile picture of Tanmay Kashyap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@TANMAYK73082364",
    title: "Tanmay Kashyap - Full Stack Developer",
    description:
      "Full Stack Developer based in India. I build web applications using modern technologies.",
    images: [
      {
        url: "https://www.nikks.tech/nik-profile.jpeghttps://x.com/TANMAYK73082364/photo",
        width: 1200,
        height: 630,
        alt: "Profile picture of Tanmay Kashyap",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9J9PPXHY1F"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9J9PPXHY1F');
            `}
        </Script>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="9fdf6eb7-06c7-482c-bdee-d200b55f2591"
        ></Script>
      </head>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <Section className="mt-28">{children}</Section>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
