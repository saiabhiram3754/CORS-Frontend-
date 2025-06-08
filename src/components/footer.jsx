// import React from 'react';
// import { Link } from 'react-router-dom';
// import { GraduationCap, Gmail, Instagram, Twitter, Linkedin } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1f2937] text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-4 gap-10">
//           {/* Branding */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
//                 <GraduationCap className="h-7 w-7 text-white" />
//               </div>
//               <h3 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
//                 CORS
//               </h3>
//             </div>
//             <p className="text-gray-400 text-sm">
//               Your smart assistant for discovering career opportunities that match your skills, interests, and goals.
//             </p>
//           </div>

//           {/* Explore Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Explore</h4>
//             <ul className="space-y-3 text-sm">
//               <li>
//                 <a href="#career" className="hover:text-blue-400 transition duration-300">Career Recommendations</a>
//               </li>
//               <li>
//                 <Link to="/blog" className="hover:text-blue-400 transition duration-300">Blog</Link>
//               </li>
//               <li>
//                 <a href="#courses" className="hover:text-blue-400 transition duration-300">Courses</a>
//               </li>
//               <li>
//                 <a href="#exams" className="hover:text-blue-400 transition duration-300">Competitive Exams</a>
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-3 text-sm">
//               <li>
//                 <Link to="/login" className="hover:text-blue-400 transition duration-300">Login</Link>
//               </li>
//               <li>
//                 <Link to="/recommend" className="hover:text-blue-400 transition duration-300">Get Recommendations</Link>
//               </li>
//               <li>
//                 <Link to="/admin" className="hover:text-blue-400 transition duration-300">Admin Panel</Link>
//               </li>
//                <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
//             <p className="text-gray-400 text-sm mb-4">
//               Get weekly career advice, job tips, and trending opportunities in your inbox.
//             </p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
//               />
//               <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md font-medium text-white transition">
//                 Subscribe
//               </button>
//             </div>
//             <div className="flex gap-4 mt-5">
//               <a href="#" aria-label="Gmail" className="hover:text-red-400"><Gmail size={20} /></a>
//               <a href="#" aria-label="Instagram" className="hover:text-pink-400"><Instagram size={20} /></a>
//               <a href="#" aria-label="Twitter" className="hover:text-sky-400"><Twitter size={20} /></a>
//               <a href="#" aria-label="LinkedIn" className="hover:text-blue-300"><Linkedin size={20} /></a>
              
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
//           &copy; {new Date().getFullYear()} CORS — Your Path to Success. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#1f2937] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Branding */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                CORS
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your smart assistant for discovering career opportunities that match your skills, interests, and goals.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#career" className="hover:text-blue-400 transition duration-300">Career Recommendations</a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition duration-300">Blog</Link>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition duration-300">Courses</a>
              </li>
              <li>
                <a href="#exams" className="hover:text-blue-400 transition duration-300">Competitive Exams</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/login" className="hover:text-blue-400 transition duration-300">Login</Link>
              </li>
              <li>
                <Link to="/recommend" className="hover:text-blue-400 transition duration-300">Get Recommendations</Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-blue-400 transition duration-300">Admin Panel</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition duration-300">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get weekly career advice, job tips, and trending opportunities in your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md font-medium text-white transition">
                Subscribe
              </button>
            </div>
            <div className="flex gap-4 mt-5">
              <a href="mailto:your-email@example.com" aria-label="Email" className="hover:text-red-400 transition">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} CORS — Your Path to Success. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
