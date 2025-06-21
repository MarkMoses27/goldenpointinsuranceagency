import React, { useState } from 'react';
import { FaCar, FaShieldAlt, FaCheck, FaPhone, FaWhatsapp, FaEnvelope, FaChartLine, FaTools, FaHandHoldingUsd } from 'react-icons/fa';

const MotorInsurancePage = () => {
  const [activeTab, setActiveTab] = useState('comprehensive');

  const coverageTypes = [
    {
      id: 'comprehensive',
      title: 'Comprehensive Coverage',
      icon: <FaShieldAlt />,
      description: 'Complete protection for your vehicle against accidents, theft, fire, and third-party liability',
      features: [
        'Accident damage repair',
        'Theft protection',
        'Fire damage coverage',
        'Third-party liability',
        'Windscreen replacement',
        '24/7 roadside assistance'
      ]
    },
    {
      id: 'thirdParty',
      title: 'Third Party Coverage',
      icon: <FaChartLine />,
      description: 'Essential coverage for damage caused to others, required by Kenyan law',
      features: [
        'Third-party bodily injury',
        'Third-party property damage',
        'Legal liability coverage',
        'Affordable premiums',
        'Easy renewal process',
        'Nationwide coverage'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaTools />,
      title: 'Nationwide Repair Network',
      description: 'Access to 200+ trusted garages across Kenya'
    },
    {
      icon: <FaHandHoldingUsd />,
      title: 'Competitive Premiums',
      description: 'Affordable rates tailored to your vehicle'
    },
    {
      icon: <FaCheck />,
      title: 'Fast Claims Processing',
      description: 'Average claim settlement within 48 hours'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141438' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}
        ></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Motor Vehicle Insurance
              </h1>
              <p className="text-xl text-amber-400 mb-8 max-w-xl">
                Comprehensive protection for your vehicle on Kenyan roads
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get Quote
                </a>
                <a 
                  href="#coverage" 
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Coverage
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Coverage Types */}
      <div id="coverage" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              Comprehensive Coverage Options
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the protection that fits your needs and budget
            </p>
          </div>
          
          {/* Tabs */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {coverageTypes.map((type) => (
                <button
                  key={type.id}
                  className={`px-6 py-3 rounded-full font-bold transition-colors ${
                    activeTab === type.id
                      ? 'bg-amber-500 text-white'
                      : 'bg-blue-800/50 text-gray-300 hover:bg-blue-700'
                  }`}
                  onClick={() => setActiveTab(type.id)}
                >
                  {type.title}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              {coverageTypes.map((type) => (
                activeTab === type.id && (
                  <div key={type.id} className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="text-amber-500 text-3xl mr-4">
                        {type.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{type.title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-8">{type.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {type.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <a 
                        href="#contact" 
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                      >
                        Get {type.title} Quote
                      </a>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                Why Choose Our Motor Insurance?
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-500/20">
                  <div className="text-amber-500 text-4xl mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div className="text-amber-500 text-6xl">
                    <FaCar />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Claims Process</h3>
                  <p className="text-gray-300 mb-6">
                    Our dedicated motor claims team ensures quick assessment and settlement. With our 24/7 claims helpline, 
                    assistance is just a phone call away, anytime, anywhere in Kenya.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#contact" 
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      Report a Claim
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                Get Your Motor Insurance Quote
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
                Contact our specialists for a personalized quote today
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-500/20">
                <div className="text-amber-500 text-4xl mb-4">
                  <FaPhone />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                <p className="text-gray-300 mb-4">+254-727-964-113</p>
                <a 
                  href="tel:+254727964113" 
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Call Now
                </a>
              </div>
              
              <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-500/20">
                <div className="text-amber-500 text-4xl mb-4">
                  <FaWhatsapp />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
                <p className="text-gray-300 mb-4">+254-727-964-113</p>
                <a 
                  href="https://wa.me/254727964113" 
                  className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Chat Now
                </a>
              </div>
              
              <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-amber-500/20">
                <div className="text-amber-500 text-4xl mb-4">
                  <FaEnvelope />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-300 mb-4">goldenpoint.ia@gmail.com</p>
                <a 
                  href="mailto:goldenpoint.ia@gmail.com" 
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default MotorInsurancePage;