import { FC, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    { title: 'Home', href: '/', value: 'home' },
    { title: 'Solutions', href: '/solutions', dropdown: solutionsItems, value: 'solutions' },
    { title: 'Features', href: '/features', dropdown: featuresItems, value: 'features' },
    { title: 'Support', href: '/support', value: 'support' },
    { title: 'About', href: '/about', value: 'about' },
  ];

const allSearchableItems = [
    ...navItems.filter(item => !item.dropdown).map(item => ({...item, type: 'page'})),
    ...solutionsItems.map(item => ({...item, type: 'solution'})),
    ...featuresItems.map(item => ({...item, type: 'feature'}))
  ];

interface SearchComponentProps {
    onResultClick?: () => void;
}

const SearchComponent: FC<SearchComponentProps> = ({ onResultClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const searchContainerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (searchQuery.trim().length > 2) {
          const lowercasedQuery = searchQuery.toLowerCase();
          const results = allSearchableItems.filter(item =>
            item.title.toLowerCase().includes(lowercasedQuery) ||
            (item.description && item.description.toLowerCase().includes(lowercasedQuery))
          ).slice(0, 5); // Limit search results
          setSearchResults(results);
        } else {
          setSearchResults([]);
        }
    }, [searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
                setSearchQuery('');
                setSearchResults([]);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchContainerRef]);

    useEffect(() => {
        if (isExpanded) {
            inputRef.current?.focus();
        }
    }, [isExpanded]);
    
    const handleSuggestionClick = (href: string) => {
        setSearchQuery('');
        setSearchResults([]);
        setIsExpanded(false);
        navigate(href);
        if (onResultClick) {
            onResultClick();
        }
    };
    
    const handleReset = () => {
        setSearchQuery('');
        setSearchResults([]);
        inputRef.current?.focus();
    };
    
    const showResultsPanel = isExpanded && searchQuery.trim().length > 0;
    const canShowResults = searchQuery.trim().length > 2;

    return (
        <div className="relative" ref={searchContainerRef}>
            <div className={`flex items-center transition-all duration-300 ease-in-out ${isExpanded ? 'w-full md:w-96' : 'w-10'}`}>
                {isExpanded ? (
                    <div className="relative w-full">
                        <div className="flex items-center border border-input rounded-md px-3 w-full bg-background">
                            <Search className="h-5 w-5 text-muted-foreground" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 border-0 bg-transparent text-foreground focus:outline-none focus:ring-0"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button
                                onClick={handleReset}
                                className={`p-1 rounded-full text-muted-foreground hover:bg-muted transition-all duration-300 ease-in-out transform ${searchQuery ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                                aria-label="Reset search"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                        <div 
                          className={`
                            absolute left-0 right-0 mt-2 w-full bg-background border border-border rounded-md shadow-lg z-50 p-2 
                            transition-all duration-300 ease-in-out transform
                            ${showResultsPanel ? 'scale-100 opacity-100 visible' : 'scale-95 opacity-0 invisible'}
                          `}
                        >
                          {canShowResults && (
                            <>
                              {searchResults.length > 0 ? (
                                  <ul className="mt-2 border-t border-border pt-2 max-h-60 overflow-y-auto">
                                      {searchResults.map((result, index) => (
                                      <li key={index}>
                                          <button
                                              onClick={() => handleSuggestionClick(result.href)}
                                              className="block w-full text-left p-2 text-sm text-foreground hover:bg-accent/50 rounded-md"
                                          >
                                          <span className="font-medium">{result.title}</span>
                                          {result.description && (
                                              <p className="line-clamp-1 text-xs text-muted-foreground">{result.description}</p>
                                          )}
                                          </button>
                                      </li>
                                      ))}
                                  </ul>
                              ) : (
                                  <p className="mt-2 text-sm text-muted-foreground p-2">No results found for "{searchQuery}".</p>
                              )}
                            </>
                          )}
                        </div>
                    </div>
                ) : (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsExpanded(true)}
                        aria-label="Open Search"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default SearchComponent;