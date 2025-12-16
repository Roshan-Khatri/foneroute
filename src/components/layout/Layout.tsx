import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-24"> {/* Adjust pt value to match header height */}
          {children}
        </main>
        <Footer />
        <Toaster />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
