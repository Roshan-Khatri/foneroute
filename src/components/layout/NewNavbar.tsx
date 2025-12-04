
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { ThemeToggle } from '../ThemeToggle';
import CustomSearch from '../search/CustomSearch';

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { data: siteSettings } = useSiteSettings();

  const logoImg = siteSettings?.logoImage ? urlFor(siteSettings.logoImage).url() : null;
  const siteName = siteSettings?.siteName || 'Foneroute';
  const ctaText = siteSettings?.ctaButtonText || 'Contact Sales';

  const solutionsItems = [
    { title: 'Contact Center Solution', href: '/solutions/contact-center', description: 'Omnichannel platform for customer engagement.' },
    { title: 'Auto Dialer', href: '/solutions/auto-dialer', description: 'Automated dialing for maximum productivity.' },
    { title: 'Power Dialer', href: '/solutions/power-dialer', description: 'High-speed dialing for sales teams.' },
    { title: 'Predictive Dialer', href: '/solutions/predictive-dialer', description: 'AI-powered dialing for maximum efficiency.' },
    { title: 'Cloud PBX', href: '/solutions/cloud-pbx', description: 'Flexible, scalable business phone system.' },
    { title: 'Unified Communications', href: '/solutions/unified-communications', description: 'All-in-one platform for collaboration.' },
  ];

  const featuresItems = [
    { title: 'Contact Center Features', href: '/features/contact-center', description: 'Explore our omnichannel contact center features.' },
    { title: 'Advanced Calling', href: '/features/calling', description: 'Advanced calling features for your business.' },
    { title: 'Call Management', href: '/features/call-management', description: 'Intelligent call routing, queuing, and IVR.' },
    { title: 'Call Reporting', href: '/features/call-reporting', description: 'Real-time insights into call performance.' },
  ];

  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Solutions', href: '/solutions', dropdown: solutionsItems },
    { title: 'Features', href: '/features', dropdown: featuresItems },
    { title: 'Support', href: '/support' },
    { title: 'About', href: '/about' },
  ];

  const getNavItemClasses = (path: string, isDropdown: boolean = false) => {
    const isActive = isDropdown
      ? navItems.find(item => item.title === path)?.dropdown?.some(subItem => window.location.pathname === subItem.href)
      : window.location.pathname === path;

    return cn(
      'nav-link group',
      isActive ? 'text-primary dark:text-white' : 'text-foreground/90',
    );
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="py-2">
            <div className="container-custom flex justify-end items-center text-sm">
                <span className="mr-4">🇬🇧 +44 800 123 4567</span>
                <span>🇺🇸 +1 800 987 6543</span>
            </div>
        </div>
      <div className="container-custom">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              {logoImg ? (
                <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain" />
              ) : (
                <Phone className="h-8 w-8 text-primary" />
              )}
              <span className="font-poppins font-bold text-xl text-foreground">
                {siteName}
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center ml-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href && !item.dropdown ? (
                      <a href={item.href} className={getNavItemClasses(item.href)}>
                        {item.title}
                      </a>
                    ) : (
                      <>
                        <NavigationMenuTrigger 
                          className={cn(getNavItemClasses(item.title, true), 'bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent')}
                          onMouseEnter={() => setOpenDropdown(item.title)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <a href={item.href || '#'}>{item.title}</a>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent 
                          className={cn(
                            "rounded-lg shadow-lg bg-white dark:bg-background border-none",
                            openDropdown === item.title ? 'animate-dropdown-in' : 'animate-dropdown-out'
                          )}
                        >
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.dropdown?.map((subItem, index) => (
                              <li key={subItem.href} 
                                  className="dropdown-item-staggered"
                                  style={{ animationDelay: `${index * 40}ms` }}>
                                <a
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-transparent focus:bg-transparent"
                                >
                                  <div className="text-sm font-medium leading-none text-foreground">{subItem.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </a>
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

          <div className="hidden lg:flex items-center space-x-2 ml-auto">
            <CustomSearch />
            <ThemeToggle />
            <a href="/contact-sales">
              <Button variant="hero" size="sm">
                {ctaText}
              </Button>
            </a>
          </div>

          <div className="lg:hidden ml-auto">
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
            {/* Mobile menu content remains the same */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NewNavbar;
