import type { Metadata } from "next";
import { Inter, Work_Sans } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import "lite-youtube-embed/src/lite-yt-embed.css";
import { Analytics } from '@vercel/analytics/next';
import ScrollAnimator from "@/components/ScrollAnimator";
import JsonLd from "@/components/content/JsonLd";
import { sitewideSchema } from "@/lib/structuredData";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
  weight: ["400"]
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
  adjustFontFallback: true,
  weight: ["600"],
  preload: false,
});




export const metadata: Metadata = {
  metadataBase: new URL("https://bhartiyanikoohomes8.com"),

  title: "Bhartiya Nikoo Homes 8 | Studio to 4 BHK, Thanisandra",
  description:
    "Nikoo Homes 8 by Bhartiya Urban — studio to 4 BHK homes and courtyard villas at Bellahalli, off Thanisandra Main Road, North Bangalore. Rs 67 L onwards. RERA approved.",

  keywords: [
    "Bhartiya Nikoo Homes 8",
    "Nikoo Homes 8 price",
    "Nikoo Homes 8 Bellahalli",
    "Bhartiya Urban Thanisandra",
    "Nikoo Homes 8 floor plan",
    "apartments in Thanisandra",
    "3 BHK Thanisandra Main Road",
    "Bhartiya City Bangalore",
    "Nikoo Homes 8 RERA",
    "flats near Manyata Tech Park",
    "Nikoo Homes 8 possession",
  ],

  alternates: {
    canonical: "https://bhartiyanikoohomes8.com/",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Bhartiya Nikoo Homes 8 | 1,010 Homes at Bellahalli, North Bangalore",
    description:
      "Eleven acres. Six towers. A car-free central spine and a 40,000 sq ft Black Swan Club. Studios to 4 BHK from Rs 67 lakh, seven minutes from Bhartiya City.",
    url: "https://bhartiyanikoohomes8.com/",
    siteName: "Bhartiya Nikoo Homes 8",
    images: [
      {
        url: "https://bhartiyanikoohomes8.com/nikoo-homes-8-og.webp",
        width: 1200,
        height: 630,
        alt: "Aerial view of Bhartiya Nikoo Homes 8 towers, the Central Spine and the Black Swan Club at dusk",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhartiya Nikoo Homes 8 | 1,010 Homes at Bellahalli, North Bangalore",
    description:
      "Eleven acres. Six towers. A car-free central spine and a 40,000 sq ft Black Swan Club. Studios to 4 BHK from Rs 67 lakh, seven minutes from Bhartiya City.",
    images: ["https://bhartiyanikoohomes8.com/nikoo-homes-8-og.webp"],
  },
};

import { ModalProvider } from "@/components/ModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}  h-full antialiased light `}
      data-scroll-behavior="smooth"
    >
      <Analytics />
      <Script
        id="google-ads-gtag-src"
        src="https://www.googletagmanager.com/gtag/js?id=AW-18344445987"
        strategy="beforeInteractive"
      />
      <Script id="google-ads-gtag" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-18344445987');`}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PGFWQ73S');`}
      </Script>
      <Script id="clarity-script" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "wj5sfhnj3d");`}
      </Script>

      <body className="min-h-full flex flex-col overflow-x-hidden">
        <JsonLd data={sitewideSchema} />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PGFWQ73S"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <ModalProvider>
          {children}
        </ModalProvider>
        <ScrollAnimator />
      </body>
    </html>
  );
}
