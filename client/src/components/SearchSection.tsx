import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function SearchSection(): JSX.Element {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchClick = (): void => {
    if (searchTerm.trim() !== '') {
      navigate('/assessment');
    }
  };

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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-sm md:text-base"
        />
        <button 
          onClick={handleSearchClick}
          className="w-full bg-purple-600 hover:bg-purple-700 py-2 md:py-3 rounded-lg transition text-sm md:text-base">
          Search Careers
        </button>
      </div>
    </div>
  );
}
