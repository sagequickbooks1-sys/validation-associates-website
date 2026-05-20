import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Validation Associates - Life Science Staffing & Consulting",
    template: "%s · Validation Associates",
  },
  description:
    "Validation Associates LLC provides validation, compliance, and staffing expertise for pharmaceutical, biotech, and medical device companies.",
  metadataBase: new URL("https://validationassociates.com"),
  openGraph: {
    title: "Validation Associates",
    description:
      "Technical talent and compliance expertise for life-science organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[color:var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
