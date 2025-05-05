import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface AssessmentData {
  subjects: string[];
  skills: {
    teamwork: number;
    problemSolving: number;
    creativity: number;
    technicalSkills: number;
    communication: number;
  };
}

export default function Results() {
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('assessmentData');
    if (data) {
      setAssessmentData(JSON.parse(data));
    }
  }, []);

  if (!assessmentData) {
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
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Career Assessment Results</h2>
            <p className="text-purple-200">Based on your responses, here are your personalized insights</p>
          </div>

          <div className="space-y-6">
            {/* Academic Interests */}
            <section className="bg-purple-900/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Academic Interests</h3>
              <div className="flex flex-wrap gap-2">
                {assessmentData.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="inline-block bg-purple-600/50 rounded-lg px-3 py-1 text-sm"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </section>

            {/* Skills Assessment */}
            <section className="bg-purple-900/30 p-6 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-4">Skills Assessment</h3>
              <div className="grid gap-4">
                {Object.entries(assessmentData.skills).map(([skill, value]) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-purple-200">
                      {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}
                    </span>
                    <div className="flex items-center">
                      <div className="w-32 h-2 bg-purple-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-purple-600"
                          style={{ width: `${(value / 5) * 100}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm">{value}/5</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex justify-center">
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
    </div>
  );
}