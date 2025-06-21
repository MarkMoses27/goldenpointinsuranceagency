import React from 'react';
import { FaHome, FaShieldAlt, FaCog, FaHandshake, FaTools } from 'react-icons/fa';

const DomesticPackagePage = () => {
  return (
    <div className="min-h-screen bg-[#141438] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531232261302-6e8d54c12a99?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGhvbWV8ZW58MHx8fHwxNjc2MTc5MzMw&ixlib=rb-1.2.1&q=80&w=1080')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Domestic Package Insurance</h1>
          <p className="text-xl text-amber-400 mb-6 max-w-xl mx-auto">
            Secure your home, belongings, and peace of mind with our comprehensive domestic insurance package.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#coverage" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">View Coverage</a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">Get a Quote</a>
          </div>
        </div>
      </div>

      {/* Coverage Details Section */}
      <div id="coverage" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">Coverage Details</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our Domestic Package provides comprehensive coverage for your home and personal belongings, offering security against unforeseen circumstances.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-5xl mb-6">
                <FaHome />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Home Insurance</h3>
              <p className="text-gray-300">Protection against damage to your home, including fire, flooding, and burglary.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-5xl mb-6">
                <FaShieldAlt />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Liability Coverage</h3>
              <p className="text-gray-300">Coverage for personal liability and accidents that may occur within your home or on your property.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-5xl mb-6">
                <FaCog />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Personal Property</h3>
              <p className="text-gray-300">Insurance for your personal belongings, including furniture, electronics, and appliances.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">Benefits of Domestic Package Insurance</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            With our Domestic Package, you not only protect your home but also your peace of mind, knowing that you’re covered in case of emergencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-4xl mb-6">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Peace of Mind</h3>
              <p className="text-gray-300">Enjoy peace of mind knowing that your home and belongings are covered from unexpected events.</p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-4xl mb-6">
                <FaTools />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive Protection</h3>
              <p className="text-gray-300">Protection for your home, personal property, and liability — all under one package.</p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-4xl mb-6">
                <FaHome />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Affordable Rates</h3>
              <p className="text-gray-300">Affordable coverage options to fit every budget, ensuring you get the best value for your investment.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">How Our Domestic Package Works</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            It’s simple to get started with our domestic insurance package — here’s how it works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Step 1: Get a Quote</h3>
              <p className="text-gray-300">Fill out a quick form to receive a customized quote for your home and belongings.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Step 2: Choose Your Coverage</h3>
              <p className="text-gray-300">Select the coverage options that best fit your needs and budget.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Step 3: Get Covered</h3>
              <p className="text-gray-300">Start your policy and enjoy the peace of mind that comes with knowing your home is protected.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Protect Your Home?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Get started with our comprehensive domestic package today and secure your home, your property, and your peace of mind.
        </p>
        <a href="#contact" className="bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Get a Quote</a>
      </div>

     
    </div>
  );
};

export default DomesticPackagePage;
