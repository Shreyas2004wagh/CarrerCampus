import React from 'react';

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function QuickLink({ icon, title, description }: QuickLinkProps) {
  return (
    <div className="bg-purple-900/30 p-4 md:p-6 rounded-xl hover:bg-purple-800/40 transition cursor-pointer">
      <div className="text-purple-300 mb-2 md:mb-3">{icon}</div>
      <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{title}</h3>
      <p className="text-xs md:text-sm text-purple-200">{description}</p>
    </div>
  );
}