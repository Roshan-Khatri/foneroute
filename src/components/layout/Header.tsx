"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { PhoneCall, Moon, Sun, Menu, X, ChevronDown } from "lucide-react";
import AnimatedSearch from "@/components/layout/AnimatedSearch";
import { useTheme } from "@/components/layout/ThemeProvider";
import { useSiteSettings } from "@/context/SiteSettingsContext";
import { getSanityClient } from "@/sanity/client";
import { NAVIGATION_QUERY } from "@/sanity/queries";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [navigation, setNavigation] = useState<any>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const menuTimeoutRef = useRef<any>(null);

  const { theme, setTheme } = useTheme();
  const { siteSettings } = useSiteSettings();

  const handleEnter = (title: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(title);
  };

  const handleLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 120);
  };

  useEffect(() => {
    const fetchNavigation = async () => {
      const data = await getSanityClient().fetch(NAVIGATION_QUERY);
      setNavigation(data);
    };
    fetchNavigation();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800">

      {/* TOP BAR */}
      <div className="text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-zinc-800">
        <div className="container mx-auto px-6 flex items-center h-8 gap-6">
          <div className="flex items-center gap-2">
            <img src="/gb.svg" className="h-4 w-4" />
            <span>{siteSettings?.ukPhoneNumber || "+44 800 123 4567"}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/us.svg" className="h-4 w-4" />
            <span>{siteSettings?.usPhoneNumber || "+1 800 987 6543"}</span>
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LEFT */}
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2">
              <PhoneCall className="h-6 w-6 text-gray-800 dark:text-white" />
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {siteSettings?.siteName || "FoneRoute"}
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8 text-sm text-gray-600 dark:text-gray-300">

              <Link href="/">Home</Link>

              {navigation?.items?.map((item: any) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleEnter(item.title)}
                  onMouseLeave={handleLeave}
                >
                  <Link
                    href={item.title.toLowerCase() === "features" ? "/features" : "/solutions"}
                    className="flex items-center gap-1 hover:text-black dark:hover:text-white"
                  >
                    {item.title}
                    <span className="text-xs">⌄</span>
                  </Link>

                  {activeMenu === item.title && item.columns && (
                    <div className="absolute left-0 top-full mt-2 p-5 flex gap-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-xl rounded-xl min-w-[620px]">

                      {item.columns.map((col: any) => (
                        <div key={col.title} className="w-48">
                          <h3 className="font-semibold mb-2">{col.title}</h3>

                          {col.items?.map((i: any) => {
                            const slug = i.slug?.current || i.slug;

                            return (
                              <Link
                                key={slug}
                                href={
                                  item.title.toLowerCase() === "features"
                                    ? `/features/${slug}`
                                    : `/solutions/${slug}`
                                }
                                className="block text-sm py-1"
                              >
                                {i.title}
                              </Link>
                            );
                          })}
                        </div>
                      ))}

                    </div>
                  )}
                </div>
              ))}

              <Link href="/support">Support</Link>
              <Link href="/about">About</Link>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">

            <div className="hidden lg:flex items-center gap-5">
              <AnimatedSearch />

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun /> : <Moon />}
              </button>

              {/* ✅ FIXED DARK MODE BUTTON */}
              <Link
                href="/contact"
                className="px-4 py-2 rounded-md bg-gray-100 dark:bg-zinc-800 hover:bg-gray-200 dark:hover:bg-[#27272a] text-gray-800 dark:text-white text-sm font-medium"
              >
                Contact Sales
              </Link>

            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">

          <div className="px-6 py-4 space-y-4">

            <Link href="/" className="block py-2 text-sm">Home</Link>

            {navigation?.items?.map((item: any) => (
              <div key={item.title} className="border-t pt-3">

                <button
                  onClick={() =>
                    setOpenSection(openSection === item.title ? null : item.title)
                  }
                  className="flex justify-between w-full py-2 text-sm font-semibold"
                >
                  {item.title}
                  <ChevronDown />
                </button>

                {openSection === item.title && (
                  <div className="mt-2 space-y-2">
                    {item.columns?.map((col: any) =>
                      col.items?.map((i: any) => {
                        const slug = i.slug?.current || i.slug;

                        return (
                          <Link
                            key={slug}
                            href={
                              item.title.toLowerCase() === "features"
                                ? `/features/${slug}`
                                : `/solutions/${slug}`
                            }
                            className="block pl-3 text-sm"
                          >
                            {i.title}
                          </Link>
                        );
                      })
                    )}
                  </div>
                )}

              </div>
            ))}

            {/* ✅ FIXED SUPPORT & ABOUT */}
            <div className="border-t pt-3">
              <Link href="/support" className="block py-2 text-sm">Support</Link>
            </div>

            <div className="border-t pt-3">
              <Link href="/about" className="block py-2 text-sm">About</Link>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t px-6 py-4 space-y-4">

            <div className="flex justify-center gap-6">
              <AnimatedSearch />

              <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <Sun /> : <Moon />}
              </button>
            </div>

            <Link
              href="/contact"
              className="block text-center py-2 rounded-md bg-gray-100 dark:bg-zinc-800 dark:hover:bg-[#27272a] text-sm font-medium"
            >
              Contact Sales
            </Link>

          </div>

        </div>
      )}
    </header>
  );
};

export default Header;