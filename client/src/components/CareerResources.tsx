import React from 'react';
import { BookOpen, FileText, Video, Users2 } from 'lucide-react';

export function CareerResources() {
  return (
    <section className="container mx-auto px-4 py-12 bg-purple-900/20 rounded-xl my-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Career Resources</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ResourceCard
          icon={<BookOpen className="w-6 h-6" />}
          title="Career Guides"
          description="Comprehensive guides for various career paths"
        />
        <ResourceCard
          icon={<FileText className="w-6 h-6" />}
          title="Resume Templates"
          description="Professional templates for your job applications"
        />
        <ResourceCard
          icon={<Video className="w-6 h-6" />}
          title="Video Tutorials"
          description="Learn from industry professionals"
        />
        <ResourceCard
          icon={<Users2 className="w-6 h-6" />}
          title="Mentorship"
          description="Connect with experienced professionals"
        />
      </div>
    </section>
  );
}

function ResourceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-purple-900/30 p-6 rounded-xl text-center hover:bg-purple-800/40 transition cursor-pointer">
      <div className="text-purple-300 mb-4 flex justify-center">{icon}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-purple-200">{description}</p>
    </div>
  );
}