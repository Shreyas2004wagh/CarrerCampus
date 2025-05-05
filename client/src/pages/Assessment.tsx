import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Assessment() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<string[]>([]);
  const [newSubject, setNewSubject] = useState('');
  const [skills, setSkills] = useState({
    teamwork: 3,
    problemSolving: 3,
    creativity: 3,
    technicalSkills: 3,
    communication: 3,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data and navigate to results
    const formData = {
      subjects,
      skills,
      // Add other form data here
    };
    
    localStorage.setItem('assessmentData', JSON.stringify(formData));
    navigate('/results');
  };

  const addSubject = () => {
    if (newSubject.trim()) {
      setSubjects([...subjects, newSubject.trim()]);
      setNewSubject('');
    }
  };

  const removeSubject = (index: number) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Career Assessment</h2>
            <p className="text-purple-200">Help us understand your interests and preferences</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-purple-900/30 p-6 md:p-8 rounded-xl backdrop-blur-sm">
            {/* Academic Interests */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-200">Academic Interests</h3>
              <div>
                <label className="block text-sm font-medium mb-2">Subjects/Fields You Enjoy Most</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSubject}
                      onChange={(e) => setNewSubject(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
                      placeholder="Enter a subject (e.g., biology, coding)"
                    />
                    <button
                      type="button"
                      onClick={addSubject}
                      className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center bg-purple-600 rounded-lg px-3 py-1 text-sm"
                      >
                        {subject}
                        <button
                          type="button"
                          onClick={() => removeSubject(index)}
                          className="ml-2 text-purple-200 hover:text-white"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Assessment */}
            <section className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-200">Skills Assessment</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(skills).map(([skill, value]) => (
                  <div key={skill} className="space-y-2">
                    <label className="block text-sm font-medium">
                      {skill.charAt(0).toUpperCase() + skill.slice(1).replace(/([A-Z])/g, ' $1')}
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="5"
                      value={value}
                      onChange={(e) => setSkills({ ...skills, [skill]: parseInt(e.target.value) })}
                      className="w-full"
                    />
                    <div className="text-right text-sm">{value}/5</div>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex justify-end pt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white font-medium"
              >
                Submit Assessment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}