import "../globals.css";

export const metadata = {
  title: "ArchVision - AI-Powered Architecture Insights",
  description: "AI-driven analytics, real-time insights, and predictive modeling for architecture and construction.",
  keywords: "AI architecture, predictive modeling, construction insights, 3D visualization",
  openGraph: {
    title: "ArchVision - AI-Powered Architecture Insights",
    description: "AI-driven analytics, real-time insights, and predictive modeling for architecture and construction.",
    url: "https://archvision.vercel.app",
    type: "website",
    // images: [
    //   {
    //     url: "https://archvision.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "ArchVision Preview",
    //   },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        {/* <meta property="og:image" content={metadata.openGraph.images[0].url} /> */}
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="keywords" content={metadata.keywords} />
      </head>
      <body className="antialiased bg-background text-textPrimary">
        {children}
      </body>
    </html>
  );
}
