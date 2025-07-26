'use client';

import { useState, KeyboardEvent } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a city name (e.g., Dubai, Tokyo)"
          className="w-full px-6 py-4 pr-14 text-lg text-gray-900 bg-white/90 backdrop-blur-sm rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          disabled={isLoading}
        />
        <button
          onClick={handleSearch}
          disabled={isLoading || !query.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-gray-600 hover:text-blue-600 disabled:opacity-50 transition-colors duration-200"
        >
          {isLoading ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Search className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}