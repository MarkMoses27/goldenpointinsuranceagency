import React from 'react';
import { FaChartBar, FaBriefcase, FaHandshake, FaMoneyBillWave, FaUserShield } from 'react-icons/fa';

const AssetManagementPage = () => {
  return (
    <div className="min-h-screen bg-[#141438] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500336624988-6196189a3d56?ixid=MXwyMDg0MjF8MHx8c2VhcmNofDJ8fGFzc2V0fGVufDB8fHx8&ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&crop=faces')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Asset Management</h1>
          <p className="text-xl text-amber-400 mb-6 max-w-xl mx-auto">
            Grow your wealth with personalized asset management solutions tailored to your financial goals.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#services" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">Our Services</a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">Get Started</a>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div id="services" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            At [Your Company], we offer a range of asset management services to help you maximize your wealth while managing risk.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-5xl mb-6">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Portfolio Management</h3>
              <p className="text-gray-300">We build and manage a diversified portfolio to maximize returns based on your risk tolerance and financial goals.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-5xl mb-6">
                <FaBriefcase />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Investment Strategies</h3>
              <p className="text-gray-300">We create strategies that align with your financial objectives, whether you're focused on growth, income, or preservation.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-5xl mb-6">
                <FaHandshake />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Retirement Planning</h3>
              <p className="text-gray-300">Our experts help you prepare for retirement with investment options that offer steady growth and security.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">Benefits of Asset Management</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Asset management helps you navigate the complexities of investing and financial planning, providing security and peace of mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-4xl mb-6">
                <FaMoneyBillWave />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Financial Growth</h3>
              <p className="text-gray-300">Our strategies are designed to help your wealth grow over time with minimal risk.</p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-4xl mb-6">
                <FaUserShield />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-gray-300">We prioritize risk management to safeguard your investments and reduce the potential for loss.</p>
            </div>

            <div className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
              <div className="text-amber-500 text-4xl mb-6">
                <FaChartBar />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive Reporting</h3>
              <p className="text-gray-300">We provide regular reports and updates to keep you informed about your portfolio’s performance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">How Asset Management Works</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Our process is straightforward and transparent, designed to provide you with the best outcomes for your assets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Step 1: Consultation</h3>
              <p className="text-gray-300">We meet with you to understand your financial goals and risk tolerance.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Step 2: Strategy Development</h3>
              <p className="text-gray-300">We create a customized investment strategy based on your goals and preferences.</p>
            </div>

            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Step 3: Execution & Monitoring</h3>
              <p className="text-gray-300">We execute the strategy and continuously monitor its performance to ensure it stays aligned with your goals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-amber-500 to-amber-600 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Growing Your Wealth?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
          Let us help you achieve your financial goals with personalized asset management solutions.
        </p>
        <a href="#contact" className="bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">Get Started Today</a>
      </div>

    </div>
  );
};

export default AssetManagementPage;
