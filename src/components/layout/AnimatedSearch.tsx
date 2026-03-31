
import { useState, useRef, useEffect } from 'react';
import { Search, File, ChevronsRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import allSearchableItems, { SearchItem } from '@/lib/search-data';
import { useNavigate } from 'react-router-dom';

const AnimatedSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleToggle = () => {
    setIsExpanded(prev => !prev);
    setSearchQuery('');
  };

  const handleClose = () => {
    setIsExpanded(false);
    setSearchQuery('');
  }

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = allSearchableItems.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]);
    }
    setActiveIndex(-1); // Reset active index on new query
  }, [searchQuery]);

  const handleNavigation = (href: string) => {
    navigate(href);
    handleClose();
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        e.preventDefault();
      if (activeIndex !== -1) {
        handleNavigation(filteredResults[activeIndex].href);
      } else if (filteredResults.length > 0) {
        handleNavigation(filteredResults[0].href);
      }
    }
    if (e.key === 'Escape') {
      handleClose();
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));
    }
  };

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? <strong key={i} className="font-bold text-foreground">{part}</strong> : <span key={i}>{part}</span>
        )}
      </span>
    );
  };

  return (
    <div ref={containerRef} className="relative flex items-center justify-end h-10">
      <AnimatePresence>
        {isExpanded && (
          <motion.input
            ref={inputRef}
            initial={{ width: 0, opacity: 0, x: 40 }}
            animate={{ width: "10rem", opacity: 1, x: 0 }}
            exit={{ width: 0, opacity: 0, x: 40 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="absolute right-0 top-0 h-full rounded-full border border-border bg-background pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            onKeyDown={handleKeyDown}
          />
        )}
      </AnimatePresence>
      <button
        onClick={handleToggle}
        className="absolute right-0 top-0 flex items-center justify-center h-10 w-10 rounded-full text-muted-foreground hover:text-foreground z-10"
        aria-label="Toggle Search"
      >
        <Search className="h-5 w-5" />
      </button>

      {isExpanded && filteredResults.length > 0 && (
        <div className="absolute top-full mt-2 w-80 max-h-96 overflow-y-auto rounded-lg border border-border bg-background shadow-lg z-50 py-2">
            <ul>
                {filteredResults.map((item, index) => (
                    <li key={item.href}>
                        <a 
                            href={item.href} 
                            onClick={(e) => { e.preventDefault(); handleNavigation(item.href); }}
                            className={`flex items-center p-3 text-sm hover:bg-muted ${activeIndex === index ? 'bg-muted' : ''}`}>
                            <div className="flex-shrink-0">
                                {item.type === 'Page' ? <File className="w-4 h-4 mr-3" /> : <ChevronsRight className="w-4 h-4 mr-3" />}
                            </div>
                            <div>
                                <div className="font-medium text-muted-foreground">{highlightText(item.name, searchQuery)}</div>
                                <p className="text-xs text-muted-foreground/80">{highlightText(item.description, searchQuery)}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )}
    {isExpanded && searchQuery.length > 1 && filteredResults.length === 0 && (
        <div className="absolute top-full mt-2 w-80 rounded-lg border border-border bg-background shadow-lg z-50 p-4 text-sm text-muted-foreground">
            No results found.
        </div>
    )}
    </div>
  );
};

export default AnimatedSearch;
