
import React, { useState, useEffect } from 'react';

const allSearchableItems = [
    { title: 'Home', href: '/', description: 'Go to the homepage.' },
    { title: 'Solutions', href: '/solutions', description: 'Explore our solutions.' },
    { title: 'Contact Center Solution', href: '/solutions/contact-center', description: 'Omnichannel platform for customer engagement.' },
    { title: 'Auto Dialer', href: '/solutions/auto-dialer', description: 'Automated dialing for maximum productivity.' },
    { title: 'Power Dialer', href: '/solutions/power-dialer', description: 'High-speed dialing for sales teams.' },
    { title: 'Predictive Dialer', href: '/solutions/predictive-dialer', description: 'AI-powered dialing for maximum efficiency.' },
    { title: 'Cloud PBX', href: '/solutions/cloud-pbx', description: 'Flexible, scalable business phone system.' },
    { title: 'Unified Communications', href: '/solutions/unified-communications', description: 'All-in-one platform for collaboration.' },
    { title: 'Features', href: '/features', description: 'Discover our features.' },
    { title: 'Contact Center Features', href: '/features/contact-center', description: 'Explore our omnichannel contact center features.' },
    { title: 'Advanced Calling', href: '/features/calling', description: 'Advanced calling features for your business.' },
    { title: 'Call Management', href: '/features/call-management', description: 'Intelligent call routing, queuing, and IVR.' },
    { title: 'Call Reporting', href: '/features/call-reporting', description: 'Real-time insights into call performance.' },
    { title: 'Support', href: '/support', description: 'Get help and support.' },
    { title: 'About', href: '/about', description: 'Learn more about us.' },
    { title: 'Contact Sales', href: '/contact-sales', description: 'Talk to our sales team.' }
];

interface SearchResult {
    title: string;
    href: string;
    description?: string;
  }

const CustomSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const lowercasedQuery = searchQuery.toLowerCase();
      const results = allSearchableItems.filter(item =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        (item.description && item.description.toLowerCase().includes(lowercasedQuery))
      ).slice(0, 5);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="relative flex items-center group">
      <div className="flex items-center justify-center p-2 overflow-hidden w-10 h-10 hover:w-44 bg-transparent hover:bg-background shadow-lg rounded-full border border-transparent hover:border-border transition-all duration-300 ease-in-out">
        <div className="flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={20} height={20} className="fill-current text-muted-foreground">
            <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
          </svg>
        </div>
        <input
          type="text"
          className="outline-none text-sm bg-transparent w-full text-foreground font-normal px-2 placeholder:text-muted-foreground"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {searchResults.length > 0 && (
        <div className="absolute top-full mt-2 w-44 bg-background border border-border rounded-lg shadow-lg z-50">
          <ul className="py-1 max-h-60 overflow-y-auto">
            {searchResults.map((result, index) => (
              <li key={index}>
                <button
                  onClick={() => handleSuggestionClick(result.href)}
                  className="block w-full text-left px-3 py-2 text-sm text-foreground hover:bg-accent rounded-md"
                >
                  <span className="font-medium">{result.title}</span>
                  {result.description && (
                    <span className="block text-xs text-muted-foreground">{result.description}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CustomSearch;