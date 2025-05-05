import React from 'react';

const featuredCareers = [
  {
    title: 'Software Developer',
    salary: '$95,000 - $150,000',
    growth: 'High',
    description: 'Design and develop software applications',
  },
  {
    title: 'Data Scientist',
    salary: '$90,000 - $140,000',
    growth: 'Very High',
    description: 'Analyze complex data sets to drive business decisions',
  },
  {
    title: 'UX Designer',
    salary: '$75,000 - $120,000',
    growth: 'High',
    description: 'Create user-friendly digital experiences',
  },
];

export function FeaturedCareers() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Featured Careers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredCareers.map((career) => (
          <div key={career.title} className="bg-purple-900/30 p-6 rounded-xl hover:bg-purple-800/40 transition">
            <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
            <div className="space-y-2 text-purple-200">
              <p className="text-sm">Salary Range: {career.salary}</p>
              <p className="text-sm">Growth Outlook: {career.growth}</p>
              <p className="text-sm">{career.description}</p>
            </div>
            <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg transition text-sm">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}