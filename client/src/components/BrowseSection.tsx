import React from 'react';
import { Citrus as Industry } from 'lucide-react';

export function BrowseSection() {
  return (
    <div className="bg-purple-900/50 p-4 md:p-8 rounded-xl backdrop-blur-sm">
      <div className="flex items-center mb-4">
        <Industry className="w-5 h-5 md:w-6 md:h-6 mr-3 text-purple-300" />
        <h3 className="text-xl md:text-2xl font-semibold">"I'll know it when I see it."</h3>
      </div>
      <div className="space-y-3 md:space-y-4">
        <select className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-sm md:text-base">
          <option value="">Select an Industry</option>
          <option value="tech">Technology</option>
          <option value="health">Healthcare</option>
          <option value="finance">Finance</option>
          <option value="education">Education</option>
        </select>
        <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 md:py-3 rounded-lg transition text-sm md:text-base">
          Browse Industries
        </button>
      </div>
    </div>
  );
}