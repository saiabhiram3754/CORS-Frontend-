import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <div className='flex space-x-2'>
              <GraduationCap className="h-8 w-8 text-white" />
              <h3 className="text-xl font-bold mb-4">CORS</h3>
            </div> 
            <p className="text-gray-400">
              Your smart assistant for discovering career opportunities that match your skills and goals.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                {/* <Link to="#career" className="text-gray-400 hover:text-white">
                  Job Recommendations
                </Link> */}
                <a href="#career" className="text-gray-400 hover:text-white font-medium">Carrer Recommendations</a>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                {/* <Link to="#career" className="text-gray-400 hover:text-white">
                  Career Tips
                </Link> */}
                <a href="#courses" className="text-gray-400 hover:text-white font-medium">Courses</a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Get personalized job alerts and career advice straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l text-gray-800 w-full"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CORS Your path to Sucesss. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
