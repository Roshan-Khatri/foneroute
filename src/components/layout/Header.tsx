
import { useState, useEffect } from 'react';
import { PhoneCall, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/layout/ThemeProvider';
import { ShiftingDropDown } from "@/components/ui/animated-shifting-tab-component";
import AnimatedSearch from '@/components/layout/AnimatedSearch';

const NavLink = ({ to, children, className = '' }) => {
  const isActive = window.location.pathname === to;
  return (
    <a
      href={to}
      className={`text-sm font-medium transition-colors hover:text-foreground ${isActive ? 'font-bold text-foreground' : 'text-muted-foreground'} ${className}`}>
      {children}
    </a>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerContainerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'shadow-lg bg-background/80 backdrop-blur-lg' : 'bg-transparent'}`;
  const mobileNavClasses = theme === 'dark' ? 'bg-header' : 'bg-background';

  return (
    <header className={headerContainerClasses}>
      <div className="text-xs text-muted-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-8">
          <div className="flex items-center space-x-4">
            <a href="tel:+448001234567" className="flex items-center hover:text-foreground">
              <img src="/gb.svg" alt="UK Flag" className="h-4 w-4 mr-2" />
              <span>+44 800 123 4567</span>
            </a>
            <a href="tel:+18009876543" className="flex items-center hover:text-foreground">
              <img src="/us.svg" alt="US Flag" className="h-4 w-4 mr-2" />
              <span>+1 800 987 6543</span>
            </a>
          </div>
        </div>
      </div>
      <nav className={`border-b ${isSticky ? 'border-border/80' : 'border-transparent'} transition-colors duration-300`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex-shrink-0 flex items-center space-x-2">
                <PhoneCall className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">FoneRoute</span>
              </a>
              <div className="hidden lg:flex items-center space-x-4 ml-10">
                <NavLink to="/">Home</NavLink>
                <ShiftingDropDown />
                <NavLink to="/support">Support</NavLink>
                <NavLink to="/about">About</NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* Desktop Icons */}
              <div className="hidden lg:flex items-center space-x-2">
                <AnimatedSearch />
                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="hover:bg-transparent">
                  {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                </Button>
                <Button asChild>
                  <a href="/contact">Contact Sales</a>
                </Button>
              </div>
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`lg:hidden ${mobileNavClasses} border-t border-border`}>
            <div className="px-4 pt-3 pb-4 flex flex-col space-y-2">
              <NavLink to="/" className="block text-base py-2">Home</NavLink>
              <ShiftingDropDown />
              <NavLink to="/support" className="block text-base py-2">Support</NavLink>
              <NavLink to="/about" className="block text-base py-2">About</NavLink>

              <div className="border-t border-border flex items-center justify-center space-x-2 pt-4 mt-2">
                  <AnimatedSearch />
                  <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                      {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                  </Button>
              </div>

              <div className="pt-2">
                <Button asChild className="w-full">
                  <a href="/contact">Contact Sales</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
