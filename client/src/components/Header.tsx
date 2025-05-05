import React from 'react';

export function Header() {
  return (
    <header className="container mx-auto px-4 py-4 md:py-8">
      <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl md:text-2xl font-bold">CareerCompass</h1>
        </div>
        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="hover:text-purple-300 transition text-sm md:text-base">Home</button>
          <button className="hover:text-purple-300 transition text-sm md:text-base">About</button>
          <button className="bg-purple-600 hover:bg-purple-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition text-sm md:text-base">
            Login/Signup
          </button>
        </div>
      </nav>
    </header>
  );
}