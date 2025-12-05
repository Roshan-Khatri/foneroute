
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NewNavbar from '@/components/layout/NewNavbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import NotFound from '@/pages/NotFound';
import MainLayout from '@/components/layout/MainLayout';

const App = () => {
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <NewNavbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<MainLayout><Home /></MainLayout>} />
            <Route path="/solutions" element={<MainLayout><Solutions /></MainLayout>} />
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default App;
