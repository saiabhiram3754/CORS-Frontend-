import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        className="bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-2 w-full max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Left Illustration */}
        <div className="hidden md:flex items-center justify-center bg-blue-100 p-6">
          <img
            src="/assets/illustrations/career-login.svg" // Change path if needed
            alt="Register illustration"
            className="max-w-sm"
          />
        </div>

        {/* Right Form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-2">Create your account</h2>
          <p className="text-gray-600 text-sm mb-6">Join CORS and get personalized career opportunities.</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button> */}

          <p className="text-sm text-gray-600 mt-4 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
