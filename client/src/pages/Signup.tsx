import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', { ...formData });
    
    // After successful signup, navigate to home
    navigate('/');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Create Account</h1>
          <p className="text-purple-200">Start your career journey with us</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-purple-200 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-purple-200 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-purple-200 mb-1">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
              required
            />
          </div>

          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="terms" 
              className="form-checkbox bg-purple-800/50 border-purple-600 text-purple-600 rounded" 
              required 
            />
            <label htmlFor="terms" className="ml-2 text-sm text-purple-200">
              I agree to the <Link to="/terms" className="text-purple-300 hover:text-white transition">Terms of Service</Link> and
              <Link to="/privacy" className="text-purple-300 hover:text-white transition ml-1">Privacy Policy</Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg transition text-white font-medium"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-purple-200">Already have an account?</span>
          <Link to="/login" className="text-purple-300 hover:text-white transition ml-1">Sign in</Link>
        </div>
      </div>
    </div>
  );
}