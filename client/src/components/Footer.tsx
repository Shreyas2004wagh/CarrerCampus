import React from 'react';
import { Users, Citrus as Industry, Briefcase } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-purple-900/30 mt-8 md:mt-12 py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center md:text-left">
          <div>
            <h4 className="font-semibold mb-3 md:mb-4">About CareerCompass</h4>
            <p className="text-purple-200 text-sm">
              Your ultimate guide to career exploration and professional development.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 md:mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Users className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Industry className="w-5 h-5" />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 md:mt-8 text-purple-200 text-sm">
          © 2024 CareerCompass. All rights reserved.
        </div>
      </div>
    </footer>
  );
}