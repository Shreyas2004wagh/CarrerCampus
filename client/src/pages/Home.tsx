import { Link, useNavigate } from 'react-router-dom';
import { Search, Briefcase, GraduationCap, Sun, Layers } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/assessment');
  };

  const handleBrowseClick = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      <header className="container mx-auto px-4 py-4 md:py-8">
        <nav className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl md:text-2xl font-bold">CareerCompass</h1>
          </div>
          <div className="flex items-center space-x-3 md:space-x-6">
            <Link to="/" className="hover:text-purple-300 transition text-sm md:text-base">Home</Link>
            <Link to="/about" className="hover:text-purple-300 transition text-sm md:text-base">About</Link>
            <Link 
              to="/login" 
              className="bg-purple-600 hover:bg-purple-700 px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition text-sm md:text-base"
              onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}
            >
              Login/Signup
            </Link>
          </div>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-8 md:py-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white leading-tight">
          Guiding You to Success, One Step at a Time
        </h2>
        <p className="text-base md:text-lg text-purple-200 mb-8 md:mb-12 max-w-2xl mx-auto">
          Your ultimate guide to exploring, planning, and achieving career success
        </p>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
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
              <button 
                onClick={handleSearchClick}
                className="w-full bg-purple-600 hover:bg-purple-700 py-2 md:py-3 rounded-lg transition text-sm md:text-base">
                Search Careers
              </button>
            </div>
          </div>

          <div className="bg-purple-900/50 p-4 md:p-8 rounded-xl backdrop-blur-sm">
            <div className="flex items-center mb-4">
              <Briefcase className="w-5 h-5 md:w-6 md:h-6 mr-3 text-purple-300" />
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
              <button 
                onClick={handleBrowseClick}
                className="w-full bg-purple-600 hover:bg-purple-700 py-2 md:py-3 rounded-lg transition text-sm md:text-base">
                Browse Industries
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-purple-900/30 mt-8 md:mt-12 py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-purple-200 text-sm">
            © 2024 CareerCompass. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuickLink({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-purple-900/30 p-4 md:p-6 rounded-xl hover:bg-purple-800/40 transition cursor-pointer">
      <div className="text-purple-300 mb-2 md:mb-3">{icon}</div>
      <h3 className="font-semibold mb-1 md:mb-2 text-sm md:text-base">{title}</h3>
      <p className="text-xs md:text-sm text-purple-200">{description}</p>
    </div>
  );
}