import React from 'react';

export default function AboutUs() {
  const services = [
    { 
      title: "MOTOR INSURANCE", 
      description: "Private & Commercial",
      image: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Comprehensive Coverage", "Third Party Insurance", "Commercial Fleet"]
    },
    { 
      title: "MEDICAL INSURANCE", 
      description: "Individual, SME & Corporates",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Family Plans", "Corporate Schemes", "Outpatient Cover"]
    },
    { 
      title: "LIFE INSURANCE", 
      description: "Secure your family's future",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Term Life", "Whole Life", "Education Plans"]
    },
    { 
      title: "PENSIONS", 
      description: "Plan for retirement",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Individual Pension", "Group Schemes", "Retirement Planning"]
    },
    { 
      title: "ASSET MANAGEMENT", 
      description: "Protect your investments",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Property Insurance", "Business Assets", "Investment Protection"]
    },
    { 
      title: "WIBA", 
      description: "Workers' Injury Benefit Act",
      image: "https://images.unsplash.com/photo-1581093458797-660c5a1e50e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Workplace Coverage", "Injury Benefits", "Compliance Support"]
    },
    { 
      title: "DOMESTIC PACKAGE", 
      description: "Residential & Commercial",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Home Insurance", "Contents Cover", "Commercial Property"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Agency Header */}
        <div className="text-center mb-20">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full border border-amber-200/50 mb-6">
              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-amber-700 font-semibold text-sm tracking-wider uppercase">About Our Agency</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              <span className="block bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">GOLDEN POINT</span>
              <span className="block bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">INSURANCE AGENCY</span>
            </h1>
            
            <div className="flex items-center justify-center mt-8">
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full mx-4"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
            </div>
          </div>
          
          <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            <span className="italic text-amber-700 font-medium">"We care about your peace of mind"</span>
            <br />
            Protecting what matters most to you with expert insurance solutions
          </p>
        </div>

        {/* Our Goal Section */}
        <div className="mb-24">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                  OUR <span className="text-amber-600">MISSION</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our goal at Golden Point Insurance Agency is to ensure that the things that are most important to you are protected by the best insurers. With years of expertise and a dedication to quality, we provide customized insurance solutions to safeguard your family, investments and future to enhance your peace of mind.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our client focused methodology guarantees individualized attention and all inclusive assistance at every stage. With Golden Point Insurance Agency, all your insurance needs are taken care of.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    {['Expert Guidance', 'Personalized Service', 'Trusted Partners', '24/7 Support'].map((feature, index) => (
                      <div key={index} className="flex items-center bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-200/50">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        <span className="text-amber-800 font-semibold text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl p-8 shadow-lg border border-amber-100/50">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    Get in Touch
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center group hover:bg-white/80 p-3 rounded-xl transition-all duration-300">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-3 mr-4 shadow-md group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-gray-900 font-semibold">+254-727-964-113</div>
                        <div className="text-gray-600 text-sm">Available 24/7</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center group hover:bg-white/80 p-3 rounded-xl transition-all duration-300">
                      <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl p-3 mr-4 shadow-md group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-gray-900 font-semibold">goldenpoint.ia@gmail.com</div>
                        <div className="text-gray-600 text-sm">Quick response guaranteed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200/50 mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-blue-700 font-semibold text-sm tracking-wider uppercase">Our Services</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
              COMPREHENSIVE <span className="text-blue-600">INSURANCE SOLUTIONS</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From motor to medical, life to business - we've got you covered with tailored insurance solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-amber-200 transform hover:-translate-y-2"
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-black text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 font-medium">{service.description}</p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-5 h-5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center group">
                      Get Cover
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    
                    <button className="px-4 py-3 border-2 border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center group">
                      <svg className="w-4 h-4 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div className="relative">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent rounded-3xl"></div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
          
          <div className="relative z-10 p-8 md:p-16 text-white">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-6">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white/95 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                  Your Trusted Insurance Partner
                </h2>
                
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  Experience the difference with Golden Point Insurance - where your peace of mind is our priority
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: "shield",
                    title: "Expert Guidance",
                    description: "15+ years of insurance expertise to help you make informed decisions",
                    gradient: "from-blue-400 to-blue-600"
                  },
                  {
                    icon: "users",
                    title: "Personalized Service", 
                    description: "Solutions tailored to your specific needs and circumstances",
                    gradient: "from-emerald-400 to-emerald-600"
                  },
                  {
                    icon: "phone",
                    title: "24/7 Support",
                    description: "Always available to assist with claims and inquiries",
                    gradient: "from-purple-400 to-purple-600"
                  },
                  {
                    icon: "chart",
                    title: "Trusted Partners",
                    description: "Access to Kenya's leading insurance providers",
                    gradient: "from-pink-400 to-pink-600"
                  }
                ].map((benefit, idx) => (
                  <div key={idx} className="group">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-start">
                        <div className={`bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-4 mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {benefit.icon === 'shield' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                            {benefit.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />}
                            {benefit.icon === 'phone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                            {benefit.icon === 'chart' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                          <p className="text-white/90 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="mt-16 text-center">
                <button className="group inline-flex items-center bg-white text-orange-600 hover:bg-gray-50 px-10 py-4 rounded-2xl font-black text-lg transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1">
                  Get Your Free Quote Today
                  <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}