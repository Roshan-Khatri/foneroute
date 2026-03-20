'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getSanityClient } from '@/sanity/client';

interface NavItem {
  title: string;
  description?: string;
  slug?: string;
}

interface NavColumn {
  title: string;
  items?: NavItem[];
}

interface NavDropdown {
  title: string;
  columns?: NavColumn[];
}

interface NavigationData {
  items?: NavDropdown[];
}

const Navbar = () => {
  const [navigation, setNavigation] = useState<NavigationData | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavigation = async () => {
      const query = `*[_type == "navigation"][0]{
        items[]{
          title,
          columns[]{
            title,
            items[]{
              title,
              description,
              "slug": slug.current
            }
          }
        }
      }`;

      const data = await getSanityClient().fetch(query);
      setNavigation(data);
    };

    fetchNavigation();
  }, []);

  return (
    <nav className="bg-gray-50 border-b shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl text-black">
          FoneRoute
        </Link>

        {/* Menu */}
        <div className="flex gap-4 items-center">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>

          {navigation?.items?.map((item) => (
            <div
              key={item.title}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.title ?? '')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {/* Menu Title */}
              <div
                role="button"
                className={`font-medium px-3 py-2 rounded-md ${activeMenu === item.title ? 'text-black' : 'text-gray-700'} cursor-pointer nav-item-override`}
              >
                {item.title}
              </div>

              {/* Dropdown */}
              {activeMenu === item.title && item.columns && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 bg-white border shadow-xl rounded-lg p-8 grid grid-cols-3 gap-4 w-[880px] text-gray-800">
                  {item.columns.map((column) => (
                    <div key={column.title}>
                      <h3 className="font-semibold mb-4 text-black">{column.title}</h3>
                      <ul className="space-y-3">
                        {column.items?.map((navItem, index) => {
                          let path = '#';
                          if (item.title?.toLowerCase() === 'solutions') {
                            path = `/solutions/${navItem.slug}`;
                          }
                          if (item.title?.toLowerCase() === 'features') {
                            path = `/features/${navItem.slug}`;
                          }
                          return (
                            <li key={navItem.slug ?? index}>
                              <Link
                                href={path}
                                className="block p-2 rounded-md hover:bg-gray-100"
                              >
                                <p className="font-medium">{navItem.title}</p>
                                {navItem.description && (
                                  <p className="text-sm text-gray-500">
                                    {navItem.description}
                                  </p>
                                )}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/support" className="text-gray-700 hover:text-black">
            Support
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-black">
            About
          </Link>
        </div>

        {/* Studio */}
        <Link href="/studio" className="text-sm text-gray-500 hover:text-black">
          Studio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
