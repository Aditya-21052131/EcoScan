import React from 'react';
import { Search, ScanLine } from 'lucide-react';

interface SearchBarProps {
  onScan: () => void;
}

export default function SearchBar({ onScan }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full pl-10 pr-20 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <button
          onClick={onScan}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-green-600 transition-colors"
        >
          <ScanLine className="w-4 h-4" />
          <span className="hidden sm:inline">Scan</span>
        </button>
      </div>
    </div>
  );
}
