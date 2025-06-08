// import React, { useEffect, useState } from 'react';
// import CareerCategories from '../components/CareerCategories';
// import CourseSection from '../components/CourseSection';
// import CompetitiveExamsPage from '../components/CompetitiveExams';
// import Footer from '../components/footer';
// import { GraduationCap } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function HomePage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [initials, setInitials] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userInitials = localStorage.getItem('initials');
//     setIsLoggedIn(!!token);
//     if (userInitials) setInitials(userInitials);
//   }, []);

//   const handleRecommendationClick = () => {
//     if (isLoggedIn) {
//       navigate('/recommend');
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f7fb] scroll-smooth text-gray-800">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo and Title */}
//             <div className="flex items-center space-x-2">
//               <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
//                 <GraduationCap className="h-8 w-8 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                   CORS
//                 </h1>
//                 <p className="text-sm text-gray-600">Your Path to Success</p>
//               </div>
//             </div>

//             {/* Nav Links */}
//             <div className="space-x-10 hidden md:flex items-center">
//               <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
//               <a href="#career" className="text-gray-700 hover:text-blue-600 font-medium">Career Options</a>
//               <a href="#exams" className="text-gray-700 hover:text-blue-600 font-medium">Competitive Exams</a>

//               {isLoggedIn ? (
//                 <div className="relative group">
//                   <button className="flex items-center space-x-2 focus:outline-none">
//                     <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
//                       {initials}
//                     </div>
//                     <span className="text-gray-700 font-medium">My Account</span>
//                   </button>
//                   <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
//                     <button
//   onClick={() => {
//     const recommended = localStorage.getItem('recommended') === 'true';
//     if (recommended) {
//       navigate('/dashboard');
//     } else {
//       navigate('/recommend');
//     }
//   }}
//   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
// >
//   Dashboard
// </button>

//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <a href="/login" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-lg">
//                   Login
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="text-center py-20 px-6 bg-[#f0f4ff]">
//         <h2 className="text-5xl sm:text-6xl font-bold mb-6">
//           <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Discover Your
//           </span>
//           <br />
//           <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//             Dream Career
//           </span>
//         </h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
//           Let our CORS platform analyze your strengths, interests, and goals to recommend the perfect career path tailored just for you.
//         </p>
//         <button
//           onClick={handleRecommendationClick}
//           className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:shadow-xl transition"
//         >
//           Get Career Recommendations
//         </button>
//       </header>

//       {/* Content Sections */}
//       <section id="career">
//         <CareerCategories />
//       </section>

//       <section id="courses">
//         <CourseSection />
//       </section>

//       <section id="exams">
//         <CompetitiveExamsPage />
//       </section>

//       <Footer />
//     </div>
//   );
// }


// import React, { useEffect, useState } from 'react';
// import CareerCategories from '../components/CareerCategories';
// import CourseSection from '../components/CourseSection';
// import CompetitiveExamsPage from '../components/CompetitiveExams';
// import Footer from '../components/footer';
// import { GraduationCap } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// export default function HomePage() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [initials, setInitials] = useState('');
//   const [fullName, setFullName] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token);

//     const userProfile = JSON.parse(localStorage.getItem('userProfile'));
//     if (userProfile?.fullName) {
//       const nameParts = userProfile.fullName.trim().split(' ');
//       const userInitials = nameParts.map(n => n[0].toUpperCase()).join('').slice(0, 2);
//       setInitials(userInitials);
//       setFullName(userProfile.fullName);
//     }
//   }, []);

//   const handleRecommendationClick = () => {
//     if (isLoggedIn) {
//       const recommended = localStorage.getItem('recommendations');
//       if (recommended) {
//         navigate('/dashboard');
//       } else {
//         navigate('/recommend');
//       }
//     } else {
//       navigate('/login');
//     }
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     setIsLoggedIn(false);
//     navigate('/');
//   };

//   return (
//     <div className="min-h-screen bg-[#f5f7fb] scroll-smooth text-gray-800">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo and Title */}
//             <div className="flex items-center space-x-2">
//               <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
//                 <GraduationCap className="h-8 w-8 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                   CORS
//                 </h1>
//                 <p className="text-sm text-gray-600">Your Path to Success</p>
//               </div>
//             </div>

//             {/* Nav Links */}
//             <div className="space-x-10 hidden md:flex items-center">
//               <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
//               <a href="#career" className="text-gray-700 hover:text-blue-600 font-medium">Career Options</a>
//               <a href="#exams" className="text-gray-700 hover:text-blue-600 font-medium">Competitive Exams</a>

//               {isLoggedIn ? (
//                 <div className="relative group">
//                   <button className="flex items-center space-x-2 focus:outline-none">
//                     <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
//                       {initials}
//                     </div>
//                     <div className="flex flex-col items-start leading-tight">
//                       <span className="text-gray-700 font-medium">{fullName}</span>
//                       <span className="text-xs text-gray-500">My Account</span>
//                     </div>
//                   </button>
//                   <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
//                     <button
//                       onClick={() => {
//                         const recommended = localStorage.getItem('recommendations');
//                         if (recommended) {
//                           navigate('/dashboard');
//                         } else {
//                           navigate('/recommend');
//                         }
//                       }}
//                       className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                     >
//                       Dashboard
//                     </button>
//                     <button
//                       onClick={handleLogout}
//                       className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//                     >
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <a href="/login" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-lg">
//                   Login
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <header className="text-center py-20 px-6 bg-[#f0f4ff]">
//         <h2 className="text-5xl sm:text-6xl font-bold mb-6">
//           <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
//             Discover Your
//           </span>
//           <br />
//           <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//             Dream Career
//           </span>
//         </h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
//           Let our CORS platform analyze your strengths, interests, and goals to recommend the perfect career path tailored just for you.
//         </p>
//         <button
//           onClick={handleRecommendationClick}
//           className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:shadow-xl transition"
//         >
//           Get Career Recommendations
//         </button>
//       </header>

//       {/* Content Sections */}
//       <section id="career">
//         <CareerCategories />
//       </section>

//       <section id="courses">
//         <CourseSection />
//       </section>

//       <section id="exams">
//         <CompetitiveExamsPage />
//       </section>

//       <Footer />
//     </div>
//   );
// }


import React, { useEffect, useState, useRef } from 'react';
import CareerCategories from '../components/CareerCategories';
import CourseSection from '../components/CourseSection';
import CompetitiveExamsPage from '../components/CompetitiveExams';
import CarrerAnalysis from '../components/CarrerAnalysis';
import Footer from '../components/footer';
import { GraduationCap, Menu, X, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [initials, setInitials] = useState('');
  const [fullName, setFullName] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);

    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (userProfile?.fullName) {
      const nameParts = userProfile.fullName.trim().split(' ');
      const userInitials = nameParts.map(n => n[0].toUpperCase()).join('').slice(0, 2);
      setInitials(userInitials);
      setFullName(userProfile.fullName);
    } else {
      setInitials('');
      setFullName('');
    }
  }, [location]);

  const handleRecommendationClick = () => {
    if (isLoggedIn) {
      const recommended = localStorage.getItem('recommendations');
      if (recommended) {
        navigate('/dashboard');
      } else {
        navigate('/recommend');
      }
    } else {
      navigate('/login');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setInitials('');
    setFullName('');
    navigate('/');
  };

  const handleNavClick = (section) => {
    // Example placeholder function for mobile nav clicks
    setMobileMenuOpen(false);
    if (section === 'careers') {
      window.location.href = '#career';
    } else if (section === 'courses') {
      window.location.href = '#courses';
    } else if (section === 'user') {
      if (isLoggedIn) {
        navigate('/dashboard');
      } else {
        navigate('/login');
      }
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb] scroll-smooth text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-xl">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  CORS
                </h1>
                <p className="text-sm text-gray-600">Your Path to Success</p>
              </div>
            </div>

            {/* Nav Links */}
            <div className="space-x-10 hidden md:flex items-center">
              <a href="#career" className="text-gray-700 hover:text-blue-600 font-medium">Career Options</a>
              <a href="#courses" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
              <a href="#exams" className="text-gray-700 hover:text-blue-600 font-medium">Competitive Exams</a>

              {isLoggedIn ? (
                <div className="relative group">
                  <button className="flex items-center space-x-2 focus:outline-none">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {initials}
                    </div>
                    <div className="flex flex-col items-start leading-tight">
                      <span className="text-gray-700 font-medium">{fullName}</span>
                      <span className="text-xs text-gray-500">My Account</span>
                    </div>
                  </button>
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button
                      onClick={() => {
                        const recommended = localStorage.getItem('recommendations');
                        if (recommended) {
                          navigate('/dashboard');
                        } else {
                          navigate('/recommend');
                        }
                      }}
                      className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <a href="/login" className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-lg">
                  Login
                </a>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden bg-white shadow-lg border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-1 px-4 py-3">
              <button
                onClick={() => handleNavClick(null)}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("careers")}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                Careers
              </button>
              <button
                onClick={() => handleNavClick("courses")}
                className="text-left text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                Courses
              </button>
              <button
                onClick={() => handleNavClick("user")}
                className="text-left flex items-center gap-2 text-gray-700 hover:text-blue-600 py-2 font-medium"
              >
                <User className="h-5 w-5" />
                User
              </button>
              <a
                href="/logout"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-2 rounded font-medium mt-1"
              >
                Logout
              </a>
            </nav>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-6 bg-[#f0f4ff]">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Discover Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Dream Career
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
          Let our CORS platform analyze your strengths, interests, and goals to recommend the perfect career path tailored just for you.
        </p>
        <button
          onClick={handleRecommendationClick}
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-xl text-lg shadow-lg hover:shadow-xl transition"
        >
          Get Career Recommendations
        </button>
      </header>

      {/* Content Sections */}
      <section id="career">
        <CareerCategories />
      </section>

      <section id="courses">
        <CourseSection />
      </section>

      <section id="exams">
        <CompetitiveExamsPage />
      </section>

      <section id="analysis">
        <CarrerAnalysis />
      </section>

      <Footer />
    </div>
  );
}
