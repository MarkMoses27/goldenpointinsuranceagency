import React from 'react';
import { FaShieldAlt, FaUsers, FaHandshake, FaChartLine, FaLightbulb, FaAward, FaHeartbeat, FaCar, FaHome, FaUserTie, FaGlobeAfrica, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const AboutPage = () => {
  // Core values
  const coreValues = [
    { id: 1, icon: <FaShieldAlt className="text-amber-500" />, title: 'Integrity', description: 'Honest and ethical in all our dealings' },
    { id: 2, icon: <FaUsers className="text-amber-500" />, title: 'Client Focus', description: 'Tailored solutions for individual needs' },
    { id: 3, icon: <FaHandshake className="text-amber-500" />, title: 'Reliability', description: 'Consistent service you can depend on' },
    { id: 4, icon: <FaChartLine className="text-amber-500" />, title: 'Innovation', description: 'Embracing technology for better solutions' }
  ];

  // Services
  const services = [
    { id: 1, icon: <FaHeartbeat className="text-red-500" />, title: 'Medical Insurance', description: 'Comprehensive health coverage for individuals and families' },
    { id: 2, icon: <FaCar className="text-blue-500" />, title: 'Motor Insurance', description: 'Protection for all types of vehicles on Kenyan roads' },
    { id: 3, icon: <FaHome className="text-amber-500" />, title: 'Domestic Package', description: 'Home and property insurance solutions' },
    { id: 4, icon: <FaUserTie className="text-green-500" />, title: 'Life Insurance', description: 'Financial security for your loved ones' },
    { id: 5, icon: <FaGlobeAfrica className="text-purple-500" />, title: 'WIBA', description: 'Workers Injury Benefits Act coverage' },
    { id: 6, icon: <FaAward className="text-cyan-500" />, title: 'Pensions', description: 'Retirement planning and wealth management' }
  ];

  // Stats
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '1,000+', label: 'Clients Served' },
    { value: '98%', label: 'Claim Approval Rate' },
    { value: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141438' }}>
      {/* Hero Section with Background Image */}
      <div className="relative overflow-hidden h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}
        ></div>
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Golden Point Insurance
            </h1>
            <p className="text-xl md:text-2xl text-amber-400 max-w-3xl mx-auto">
              Your trusted partner in protection and peace of mind since 2021
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="bg-gray-800 rounded-xl w-64 h-64 flex items-center justify-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-white py-2 px-6 rounded-lg font-bold">
                  Winfred Kinyua
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2021 by Winfred Kinyua, Golden Point Insurance Agency began with a clear mission: to provide Kenyans with reliable, affordable insurance solutions. In just a few years, we've grown into a trusted insurance agency serving thousands of clients nationwide.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With extensive industry experience, Winfred built Golden Point on principles of integrity, transparency, and personalized service. His vision has guided the company through economic challenges and technological innovations in the insurance sector.
              </p>
              <p className="text-lg text-gray-700">
                Today, we're proud to offer a comprehensive range of insurance products while staying true to our core values of putting clients first and delivering exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-lg text-white mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="text-amber-500 text-5xl mb-6">
                <FaLightbulb />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To empower individuals and businesses across Kenya with comprehensive insurance solutions that provide financial security and peace of mind. We strive to make insurance accessible, understandable, and responsive to our clients' evolving needs.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="text-amber-500 text-5xl mb-6">
                <FaAward />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                To be Kenya's most trusted insurance partner, recognized for our integrity, innovation, and exceptional client service. We aim to transform how Kenyans perceive and experience insurance, making it a valued asset rather than a necessary expense.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              The principles that guide everything we do at Golden Point
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value) => (
              <div key={value.id} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-center hover:translate-y-[-5px] transition-transform">
                <div className="text-4xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Leadership
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Guided by visionary leadership with deep industry expertise
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/3 flex justify-center">
                  <div 
                    className="bg-cover bg-center rounded-xl w-64 h-64 border-4 border-amber-500"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80')" }}
                  ></div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Winfred Kinyua</h3>
                  <p className="text-amber-600 font-bold text-lg mb-4">CEO & Founder</p>
                  <p className="text-gray-700 mb-4">
                    With extensive experience in the insurance industry, Winfred Kinyua founded Golden Point Insurance in 2021 with a vision to create a client-centric insurance agency that prioritizes transparency and personalized service.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Under his leadership, Golden Point has quickly grown to become a respected insurance agency, serving thousands of clients nationwide. Winfred's expertise spans all areas of insurance, with special focus on developing customized solutions for Kenyan businesses and families.
                  </p>
                  <div className="flex space-x-4 mt-6">
                    <a href="mailto:goldenpoint.ia@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full">
                      <FaEnvelope />
                    </a>
                    <a href="https://wa.me/254727964113" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full">
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Comprehensive insurance solutions tailored for Kenyan individuals and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-amber-500/20 hover:border-amber-500/30 border border-white/50 transition-all">
                <div className="text-3xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA - Updated with Brand Colors */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div 
            className="rounded-2xl p-8 md:p-12 text-center max-w-6xl mx-auto relative overflow-hidden"
            style={{ backgroundColor: '#141438', border: '1px solid rgba(255, 193, 7, 0.3)' }}
          >
            <div className="absolute inset-0 bg-grid-amber-500/10 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">
                Ready to Secure Your Future?
              </h2>
              <p className="text-lg text-white max-w-2xl mx-auto mb-8">
                Contact us today for a personalized insurance consultation. Our experts are ready to help you find the perfect coverage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contact" 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Get a Quote
                </a>
                <a 
                  href="tel:+254727964113" 
                  className="bg-transparent border-2 border-amber-500 text-amber-500 font-bold py-3 px-8 rounded-lg hover:bg-amber-500/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-white">
                  <FaPhone className="text-amber-400" />
                  <span>+254-727-964-113</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <FaEnvelope className="text-amber-400" />
                  <span>goldenpoint.ia@gmail.com</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-white">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;