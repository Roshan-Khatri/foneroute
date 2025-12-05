
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Solutions from '@/pages/Solutions';
import Solution from '@/pages/solutions/Solution';
import Header from '@/components/layout/NewNavbar';
import Footer from '@/components/layout/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/:slug" element={<Solution />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
