import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get('q');

  useEffect(() => {
    if (query) {
      // Here you would typically fetch search results from an API
      // For this example, we'll just simulate a delay and some dummy data
      setLoading(true);
      setTimeout(() => {
        const dummyResults = [
          { id: 1, title: `Search result for "${query}" 1`, url: '#' },
          { id: 2, title: `Search result for "${query}" 2`, url: '#' },
          { id: 3, title: `Search result for "${query}" 3`, url: '#' },
        ];
        setResults(dummyResults as any);
        setLoading(false);
      }, 1000);
    }
  }, [query]);

  return (
    <div className="container-custom py-24">
      <h1 className="text-3xl font-bold mb-8">Search Results for "{query}"</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {results.map((result: any) => (
            <li key={result.id} className="mb-4">
              <a href={result.url} className="text-xl text-primary hover:underline">{result.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPage;
