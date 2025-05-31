import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Info */}
        <div className="p-8 space-y-6 border-r">
          <h2 className="text-2xl font-bold text-gray-800">New to CORS?</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✓ One click apply using your CORS profile.</li>
            <li>✓ Get relevant job, internship recommendations.</li>
            <li>✓ Showcase your profile to companies.</li>
            <li>✓ Track application status in real-time.</li>
          </ul>
          <Link
            to="/register"
            className="mt-4 inline-block px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Register Now
          </Link>
          <div className="mt-6">
            <img
              src="/illustration.svg" // Replace with your actual illustration path
              alt="Career illustration"
              className="w-full"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email ID / Username</label>
              <input
                type="email"
                placeholder="Enter Email ID / Username"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="text-right mt-1">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
            {/* <div className="text-center">
              <Link to="/otp-login" className="text-sm text-blue-600 hover:underline">
                Use OTP to Login
              </Link>
            </div> */}
          </form>

          {/* Or Divider */}
          <div className="flex items-center gap-4 my-2">
            <hr className="flex-grow border-gray-300" />
            {/* <span className="text-sm text-gray-500">or</span> */}
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Google Login */}
          {/* <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded hover:bg-gray-100 transition">
            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
