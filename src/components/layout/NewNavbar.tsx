import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { motion, AnimatePresence } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { data: siteSettings } = useSiteSettings();
  const [activePath, setActivePath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    const originalPushState = history.pushState;
    history.pushState = function(...args) {
      originalPushState.apply(this, args);
      handleLocationChange();
    };
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      history.pushState = originalPushState;
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  const getNavItemClasses = (href: string) => {
    const isActive = href === '/' ? activePath === href : activePath.startsWith(href);
    return cn(
      'nav-link group transition-colors',
      isActive
        ? 'font-bold text-foreground hover:text-foreground'
        : 'text-foreground/90 hover:text-foreground'
    );
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="py-2 xxs:hidden sm:block">
            <div className="container-custom flex justify-end items-center text-sm">
                <span className="mr-4">🇬🇧 +44 800 123 4567</span>
                <span>🇺🇸 +1 800 987 6543</span>
            </div>
        </div>
      <div className="container-custom">
        <div className="flex items-center h-16">
          <div className="flex items-center">
            <Link to="/" reloadDocument className="flex items-center space-x-2">
              {logoImg ? (
                <img src={logoImg} alt={siteName} className="h-8 w-8 object-contain card-hover-animation" />
              ) : (
                <Phone className="h-8 w-8 text-primary" />
              )}
              <span className="font-poppins font-bold text-xl text-foreground xxs:hidden sm:block">
                {siteName}
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center ml-6">
            <NavigationMenu>
              <NavigationMenuList className="gap-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.href && !item.dropdown ? (
                      <Link to={item.href} reloadDocument className={getNavItemClasses(item.href)}>
                        {item.title}
                      </Link>
                    ) : (
                      <>
                        <NavigationMenuTrigger 
                          onClick={() => item.href && window.location.assign(item.href)}
                          className="text-sm font-medium bg-transparent hover:bg-surface-hover focus:bg-surface-hover data-[state=open]:bg-surface-hover"
                          onMouseEnter={() => setOpenDropdown(item.title)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent 
                          className={cn(
                            "rounded-lg shadow-lg bg-background border-none",
                            openDropdown === item.title ? 'animate-dropdown-in' : 'animate-dropdown-out'
                          )}
                        >
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.dropdown?.map((subItem, index) => (
                              <li key={subItem.href} 
                                  className="dropdown-item-staggered"
                                  style={{ animationDelay: `${index * 40}ms` }}>
                                <Link
                                  to={subItem.href}
                                  reloadDocument
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
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

          <div className="hidden lg:flex items-center space-x-2 ml-auto">
            <CustomSearch />
            <ThemeToggle />
            <Link to="/contact-sales" reloadDocument>
              <Button variant="hero" size="sm">
                {ctaText}
              </Button>
            </Link>
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
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden overflow-y-auto"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: '100vh', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="container-custom py-4">
              <ul className="flex flex-col gap-y-2">
                {navItems.map((item) => (
                  <li key={item.title}>
                    {!item.dropdown ? (
                      <Link to={item.href} reloadDocument onClick={() => setIsOpen(false)} className={cn(getNavItemClasses(item.href), "block py-3 text-lg")}>
                        {item.title}
                      </Link>
                    ) : (
                      <Collapsible>
                        <CollapsibleTrigger className={cn(getNavItemClasses(item.href), "flex items-center justify-between w-full py-3 text-lg group")}>
                          <span onClick={(e) => { e.preventDefault(); if (item.href) window.location.assign(item.href); }}>{item.title}</span>
                          <ChevronDown className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="pt-2">
                          <ul className="pl-4 border-l border-border ml-2 flex flex-col gap-y-1">
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.href}>
                                <Link to={subItem.href} reloadDocument onClick={() => setIsOpen(false)} className="block py-2 text-muted-foreground hover:text-foreground transition-colors">
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border flex flex-col gap-y-4">
                  <CustomSearch />
                  <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Switch Theme</span>
                      <ThemeToggle />
                  </div>
                  <Link to="/contact-sales" reloadDocument onClick={() => setIsOpen(false)}>
                    <Button variant="hero" size="sm" className="w-full h-11">
                      {ctaText}
                    </Button>
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NewNavbar;
