import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email });
    
    // After successful login, navigate to home
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-purple-900/30 rounded-xl backdrop-blur-sm">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">Welcome Back</h1>
          <p className="text-purple-200">Sign in to continue your career journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-purple-200 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-purple-800/50 border border-purple-600 focus:outline-none focus:border-purple-400 text-white"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox bg-purple-800/50 border-purple-600 text-purple-600 rounded" />
              <span className="ml-2 text-purple-200">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-purple-300 hover:text-white transition">Forgot password?</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded-lg transition text-white font-medium"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-purple-200">Don't have an account?</span>
          <Link to="/signup" className="text-purple-300 hover:text-white transition ml-1">Sign up</Link>
        </div>
      </div>
    </div>
  );
}