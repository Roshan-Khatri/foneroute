"use client";

import { useIsMobile } from '@/hooks/use-mobile';

interface ScrollSpyItem {
  to: string;
  label: string;
}

interface ScrollSpySidebarProps {
  items: ScrollSpyItem[];
  activeId: string;
}

export default function ScrollSpySidebar({ items, activeId }: ScrollSpySidebarProps) {
  const isMobile = useIsMobile();

  if (!items || items.length === 0) {
    return null;
  }

  // ✅ MOBILE VERSION
  if (isMobile) {
    return (
      <div className="overflow-x-auto pb-4 mb-4 whitespace-nowrap 
        bg-white dark:bg-zinc-900 
        border-b border-gray-200 dark:border-zinc-800 
        sticky top-[60px] z-30"
      >
        <ul className="flex space-x-4 px-4">
          {items.map(item => (
            <li key={item.to}>
              <a
                href={`#${item.to}`}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeId === item.to
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // ✅ DESKTOP VERSION
  return (
    <nav className="
      p-4 rounded-lg w-full
      bg-white dark:bg-zinc-900
      border border-gray-200 dark:border-zinc-800
      shadow-sm
    ">

      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">
        On this page
      </h3>

      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.to}>
            <a
              href={`#${item.to}`}
              className={`block text-sm py-1.5 px-2.5 rounded-md transition-all border-l-2 ${
                activeId === item.to
                  ? 'border-black text-black font-semibold bg-gray-100 dark:border-white dark:text-white dark:bg-zinc-800'
                  : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-zinc-800'
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  );
}