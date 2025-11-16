
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

  if (isMobile) {
    return (
      <div className="overflow-x-auto pb-4 mb-4 whitespace-nowrap bg-background border-b border-border sticky top-[60px] z-30">
        <ul className="flex space-x-4 px-4">
          {items.map(item => (
            <li key={item.to}>
              <a
                href={`#${item.to}`}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  activeId === item.to
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted/50'
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

  return (
    <nav className="p-4 rounded-lg bg-surface border border-border w-full">
      <h3 className="font-semibold text-lg mb-4 text-foreground">On this page</h3>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item.to}>
            <a
              href={`#${item.to}`}
              className={`block text-sm py-1.5 px-2.5 rounded-md transition-all duration-200 border-l-2 ${
                activeId === item.to
                  ? 'border-primary text-primary font-semibold bg-primary/10'
                  : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
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
