import React from 'react';
import { FaPlane, FaMedkit, FaSuitcase, FaExclamationCircle, FaCalendarAlt, FaShieldAlt, FaGlobe, FaHeartbeat, FaUmbrella, FaCheckCircle, FaStar } from 'react-icons/fa';

const TravelInsurancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 px-4 md:px-8 text-center max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-6 shadow-2xl">
              <FaShieldAlt className="text-3xl text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-amber-200 bg-clip-text text-transparent mb-6 leading-tight">
            Travel Insurance
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore the world with complete peace of mind. Comprehensive coverage for every journey, every adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center justify-center gap-2">
                Get Instant Quote
                <FaPlane className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 shadow-xl">
              Learn More
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
            <div className="flex items-center gap-2">
              <FaStar className="text-amber-400" />
              <span className="text-sm">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              <span className="text-sm">Trusted by Kenyans</span>
            </div>
            <div className="flex items-center gap-2">
              <FaGlobe className="text-blue-400" />
              <span className="text-sm">Kenya-Wide Coverage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Cards Section */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6">
              Complete Protection
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              From medical emergencies to trip cancellations, we've got every aspect of your journey covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaHeartbeat,
                title: "Medical Emergencies",
                description: "Comprehensive coverage for medical treatment, hospitalization, and emergency evacuation across Kenya.",
                color: "from-red-500 to-pink-600",
                bgColor: "bg-red-500/10"
              },
              {
                icon: FaPlane,
                title: "Trip Cancellation",
                description: "Full reimbursement for non-refundable trip costs due to covered reasons.",
                color: "from-blue-500 to-cyan-600",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: FaSuitcase,
                title: "Baggage Protection",
                description: "Coverage for lost, stolen, or delayed luggage during your travels.",
                color: "from-purple-500 to-indigo-600",
                bgColor: "bg-purple-500/10"
              },
              {
                icon: FaUmbrella,
                title: "Travel Delays",
                description: "Compensation for accommodation and meals during unexpected travel delays.",
                color: "from-green-500 to-emerald-600",
                bgColor: "bg-green-500/10"
              },
              {
                icon: FaExclamationCircle,
                title: "Emergency Assistance",
                description: "24/7 multilingual support and coordination of emergency services.",
                color: "from-amber-500 to-yellow-600",
                bgColor: "bg-amber-500/10"
              },
              {
                icon: FaGlobe,
                title: "Kenya Coverage",
                description: "Comprehensive protection throughout Kenya with local claim processing and support.",
                color: "from-teal-500 to-cyan-600",
                bgColor: "bg-teal-500/10"
              }
            ].map((item, index) => (
              <div key={index} className="group">
                <div className={`${item.bgColor} backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gradient-to-r from-slate-800/50 to-blue-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Protected in Minutes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Simple, fast, and secure. Get comprehensive travel insurance in just three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Enter Trip Details",
                description: "Tell us about your destination, travel dates, and the number of travelers.",
                icon: FaCalendarAlt
              },
              {
                step: "02",
                title: "Choose Coverage",
                description: "Select from our comprehensive plans or customize your coverage to fit your needs.",
                icon: FaShieldAlt
              },
              {
                step: "03",
                title: "Instant Protection",
                description: "Get your policy documents immediately and travel with complete confidence.",
                icon: FaCheckCircle
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mb-6 shadow-lg">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold text-amber-400 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "3+", label: "Years of Service" },
              { number: "Kenya", label: "Coverage Area" },
              { number: "24/7", label: "Emergency Support" },
              { number: "Fast", label: "Claims Processing" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-amber-500/20 to-orange-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
            Don't let unexpected events ruin your perfect trip. Get comprehensive travel insurance today and explore with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="flex items-center justify-center gap-2">
                Get Your Quote Now
                <FaPlane className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all duration-300 shadow-xl">
              Speak to an Expert
            </button>
          </div>
          
          <div className="mt-8 text-sm text-blue-300">
            <p>✓ No hidden fees • ✓ Instant coverage • ✓ Cancel anytime</p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default TravelInsurancePage;