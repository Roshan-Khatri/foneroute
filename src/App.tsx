
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NewNavbar from '@/components/layout/NewNavbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import NotFound from '@/pages/NotFound';

const App = () => {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <NewNavbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
