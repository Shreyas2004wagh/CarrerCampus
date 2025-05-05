import React from 'react';
import { Search } from 'lucide-react';

export function SearchSection() {
  return (
    <div className="bg-purple-900/50 p-4 md:p-8 rounded-xl backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <Search className="w-5 h-5 md:w-6 md:h-6 mr-3 text-purple-300" />
        <h3 className="text-xl md:text-2xl font-semibold">"I want to be a ..."</h3>
      </div>
      <div className="space-y-3 md:space-y-4">
        <input
          type="text"
          placeholder="Search careers (e.g., doctor, engineer)"
          className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-sm md:text-base"
        />
        <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 md:py-3 rounded-lg transition text-sm md:text-base">
          Search Careers
        </button>
      </div>
    </div>
  );
}