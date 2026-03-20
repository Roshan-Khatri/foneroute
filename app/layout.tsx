import "./globals.css";
import Header from "../src/components/layout/Header";

export const metadata = {
  title: "Next.js with Sanity",
  description: "A simple Next.js app with Sanity CMS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}