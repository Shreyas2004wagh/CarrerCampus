import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Results() {
  const [careerMatches, setCareerMatches] = useState([]);

  useEffect(() => {
    const matches = JSON.parse(localStorage.getItem('careerMatches') || '[]');
    setCareerMatches(matches);
  }, []);

  if (careerMatches.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No Assessment Data Found</h2>
          <p className="text-purple-200 mb-6">Please complete the assessment first.</p>
          <Link
            to="/assessment"
            className="inline-block px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white font-medium"
          >
            Take Assessment
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Career Matches</h2>
            <p className="text-purple-200">Based on your assessment, here are your recommended career paths</p>
          </div>

          <div className="space-y-6">
            {careerMatches.map((career, index) => (
              <div key={index} className="bg-purple-900/30 p-6 rounded-xl backdrop-blur-sm">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{career.title}</h3>
                  <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">
                    {career.matchScore}% Match
                  </span>
                </div>
                <p className="text-purple-200">{career.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              to="/assessment"
              className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white font-medium"
            >
              Retake Assessment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}