import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Next.js with Sanity',
  description: 'A simple Next.js app with Sanity CMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
