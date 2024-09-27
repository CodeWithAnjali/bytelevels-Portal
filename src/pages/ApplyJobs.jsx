import { useEffect } from 'react';
import featureIcon2 from '../assets/logo (1).png'; // Update with the actual path to your icon
import { FaRegLightbulb, FaUserCheck, FaPaperPlane } from 'react-icons/fa';

const ApplyNowPage = () => {
  // Scroll to top when the component is loaded
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-100 flex flex-col items-center justify-center py-10 relative overflow-hidden">
      {/* Background Design */}
      {/* <div className="absolute inset-0 bg-opacity-30" style={{ backgroundImage: 'url()', backgroundSize: 'cover', zIndex: -1 }} /> */}
      
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center justify-center text-center px-4">
        <section className="bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full transform hover:scale-105 transition-transform duration-500">
          {/* Page Title */}
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wide">
            Effortless Job Application
          </h2>
          <p className="text-lg text-gray-700 mb-8">
             Experience the future of job hunting with our pre-filled profile feature.
          </p>

          {/* Improved Easy Application Process Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg flex items-start border-t-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 p-2 flex items-center justify-center shadow-lg">
                <img
                  src={featureIcon2}
                  alt="Feature 2"
                  className="w-20 h-20 object-contain rounded-full transition-transform duration-300 hover:scale-125"
                />
              </div>
            </div>
            <div className="ml-6 text-left">
              <h3 className="text-3xl font-bold mb-3 text-gray-900">
                Seamless Application Experience
              </h3>
              <p className="text-gray-600 text-lg mb-4">
                Forget the hassle of filling out forms repeatedly! Our one-click application process leverages your pre-filled profile so you can focus on landing the job that’s right for you.
              </p>

              {/* Unique Features with Icons */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md">
                  <FaRegLightbulb className="text-blue-500 mr-2" />
                  <p className="text-gray-700">Get job recommendations based on your profile!</p>
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md">
                  <FaUserCheck className="text-blue-500 mr-2" />
                  <p className="text-gray-700">Your profile showcases your skills and experiences.</p>
                </div>
                <div className="flex items-center bg-blue-50 p-4 rounded-lg shadow-md">
                  <FaPaperPlane className="text-blue-500 mr-2" />
                  <p className="text-gray-700">Apply to multiple jobs instantly!</p>
                </div>
              </div>

              {/* Inspirational Quote Section */}
              <div className="mt-6 p-4 border-l-4 border-blue-500 bg-blue-50 text-blue-800 italic">
                "Success is where preparation and opportunity meet." - Bobby Unser
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ApplyNowPage;
