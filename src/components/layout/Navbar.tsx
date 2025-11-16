
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { useSiteSettings } from '@/hooks/useSanityContent';
import { urlFor } from '@/sanity/image';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/layout/ThemeProvider';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { data: siteSettings } = useSiteSettings();
  const { setTheme } = useTheme();

  const logoImg = siteSettings?.logoImage ? urlFor(siteSettings.logoImage).url() : null;
  const siteName = siteSettings?.siteName || 'FoneRoute';

  const ctaText = siteSettings?.ctaButtonText || 'Contact Sales';
  const ctaLink = siteSettings?.ctaButtonLink || '/solutions/contact-center';

  const solutionsItems = [
    { title: 'Contact Center Solution', href: '/solutions/contact-center', description: 'Omnichannel platform for customer engagement.' },
    { title: 'Auto Dialer', href: '/solutions/auto-dialer', description: 'Automated dialing for maximum productivity.' },
    { title: 'Power Dialer', href: '/solutions/power-dialer', description: 'High-speed dialing for sales teams.' },
    { title: 'Predictive Dialer', href: '/solutions/predictive-dialer', description: 'AI-powered dialing for maximum efficiency.' },
    { title: 'Cloud PBX', href: '/solutions/cloud-pbx', description: 'Flexible, scalable business phone system.' },
    { title: 'Unified Communications', href: '/solutions/unified-communications', description: 'All-in-one platform for collaboration.' },
  ];

  const featuresItems = [
    {
      title: 'Contact Center Features',
      href: '/features/contact-center',
      description: 'Explore the powerful features of our omnichannel contact center solution.',
    },
    {
      title: 'Advanced Calling Features',
      href: '/features/calling',
      description: 'Discover a wide range of advanced calling features for your business phone system.',
    },
    {
      title: 'Intelligent Call Management',
      href: '/features/call-management',
      description: 'Manage your calls efficiently with intelligent routing, queuing, and IVR.',
    },
    {
      title: 'Real-Time Call Reporting',
      href: '/features/call-reporting',
      description: 'Get detailed, real-time insights into your call performance and agent productivity.',
    },
  ];

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Solutions', href: '/solutions', dropdown: solutionsItems },
    { title: 'Features', href: '/features', dropdown: featuresItems },
    { title: 'Industries', href: '/industries' },
    { title: 'About', href: '/about' },
  ];

  const getNavItemClasses = (path: string, isDropdown: boolean = false) => {
    const isActive = isDropdown
      ? navItems.find(item => item.title === path)?.dropdown?.some(subItem => location.pathname === subItem.href)
      : location.pathname === path;

    const baseClasses =
      'group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50';

    const activeClasses = 'bg-accent-light text-accent';

    const inactiveClasses = 'hover:!bg-accent/10 hover:!text-foreground data-[state=open]:!bg-accent/10';

    return cn(baseClasses, isActive ? activeClasses : inactiveClasses);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass animate-fade-in-down">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {logoImg ? (
                <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain" />
              ) : (
                <Phone className="h-8 w-8 text-primary" />
              )}
              <span className="font-poppins font-bold text-xl text-foreground">
                {siteName}
              </span>
            </Link>

            <div className="hidden lg:flex items-center ml-8">
              <NavigationMenu>
                <NavigationMenuList className="gap-x-1">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={item.title}>
                      {item.href && !item.dropdown ? (
                        <Link to={item.href} className={getNavItemClasses(item.href)}>
                          {item.title}
                        </Link>
                      ) : (
                        <>
                          <NavigationMenuTrigger className={getNavItemClasses(item.title, true)}>
                            <Link to={item.href || '#'}>{item.title}</Link>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {item.dropdown?.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    to={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/50 focus:bg-accent/50"
                                  >
                                    <div className="text-sm font-medium leading-none text-foreground">{subItem.title}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <Link to="/contact-sales">
              <Button variant="hero" size="sm">
                Contact Sales
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-surface-hover"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {navItems.map((item) => {
                if (item.href && !item.dropdown) {
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="block py-2 text-foreground hover:text-primary font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                }

                const isMobileDropdownOpen = openMobileDropdown === item.title;

                const toggleMobileDropdown = () => {
                  setOpenMobileDropdown(isMobileDropdownOpen ? null : item.title);
                };

                return (
                  <div key={item.title} className="py-2">
                    <button
                      onClick={toggleMobileDropdown}
                      className="w-full flex justify-between items-center py-2 text-foreground hover:text-primary font-medium"
                    >
                      {item.title}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileDropdownOpen && (
                      <div className="pl-4 pt-2 space-y-2">
                        {item.dropdown?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            to={subItem.href}
                            className="block py-2 text-foreground hover:text-primary font-medium"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/contact-sales"
                className="block py-2"
                onClick={() => setIsOpen(false)}
              >
                <Button variant="hero" className="w-full">
                  Contact Sales
                </Button>
              </Link>
              <div className="pt-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      <span>Theme</span>
                      <div>
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      </div>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
