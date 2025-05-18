import { useNavigate } from "react-router-dom";

export default function CareerLandingPage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/assessment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Computer Engineer
          </h1>
          <p className="text-purple-200 text-lg md:text-xl mb-8">
            A tech-savvy problem solver responsible for designing, developing,
            and maintaining computer systems and software.
          </p>
          <div className="space-y-8 bg-purple-900/30 p-6 md:p-8 rounded-xl backdrop-blur-sm">
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-200">
                Average Salary
              </h3>
              <p className="text-lg text-purple-300">
                $80,000 - $120,000 per year
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-200">
                Required Skills
              </h3>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li>Programming (C++, Python, Java)</li>
                <li>Problem-Solving</li>
                <li>System Design</li>
                <li>Hardware and Software Integration</li>
                <li>Analytical Thinking</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold text-purple-200">
                Career Brief
              </h3>
              <p className="text-lg text-purple-300">
                Computer engineers blend electrical engineering and computer
                science to develop computer hardware and software, driving
                innovation in technology.
              </p>
            </section>

            <button
              onClick={handleExploreClick}
              className="w-full mt-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition text-white font-medium"
            >
              Explore More Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
