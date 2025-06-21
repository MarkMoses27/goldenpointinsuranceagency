import { useState, useEffect } from 'react';

export default function Homepage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80",
      title: "Comprehensive Motor Insurance",
      subtitle: "Drive with confidence knowing you're protected",
      cta: "Get Motor Quote"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Complete Health Insurance Solutions",
      subtitle: "Your health is your wealth",
      cta: "Explore Health Plans"
    },
    {
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Secure Your Family's Future",
      subtitle: "Life insurance that truly protects",
      cta: "Learn About Life Insurance"
    },
    {
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      title: "Protect Your Business Assets",
      subtitle: "Comprehensive business protection",
      cta: "Business Insurance"
    }
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xl">GP</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 block">Golden Point</span>
              <span className="text-xs text-amber-600 uppercase tracking-wider">Insurance Agency</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-amber-700 transition py-2 border-b-2 border-transparent hover:border-amber-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-amber-700 transition py-2 border-b-2 border-transparent hover:border-amber-600">Services</a>
            <a href="#partners" className="text-gray-600 hover:text-amber-700 transition py-2 border-b-2 border-transparent hover:border-amber-600">Partners</a>
            <a href="#about" className="text-gray-600 hover:text-amber-700 transition py-2 border-b-2 border-transparent hover:border-amber-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-amber-700 transition py-2 border-b-2 border-transparent hover:border-amber-600">Contact</a>
          </nav>

          {/* Get A Quote */}
          <div className="hidden lg:flex">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition shadow-md flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              <a href="#" className="block py-2 text-gray-600 hover:text-amber-700 font-medium">Home</a>
              <a href="#services" className="block py-2 text-gray-600 hover:text-amber-700 font-medium">Services</a>
              <a href="#partners" className="block py-2 text-gray-600 hover:text-amber-700 font-medium">Partners</a>
              <a href="#about" className="block py-2 text-gray-600 hover:text-amber-700 font-medium">About</a>
              <a href="#contact" className="block py-2 text-gray-600 hover:text-amber-700 font-medium">Contact</a>
              <button className="w-full py-3 bg-amber-600 text-white rounded-lg text-center font-semibold shadow-sm">
                GET A QUOTE
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Image Carousel */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <div className="space-y-6 text-white">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-white/90 font-medium text-sm tracking-wider">Golden Point Insurance Agency</span>
                </div>
                
                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                
                {/* Subtitle */}
                <h2 className="text-xl lg:text-2xl font-light text-amber-100 mt-4 max-w-lg">
                  {heroSlides[currentSlide].subtitle}
                </h2>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="flex items-center bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <div className="bg-amber-500 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold">4+ Years</div>
                      <div className="text-sm text-white/80">Experience</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <div className="bg-amber-500 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold">1,000+</div>
                      <div className="text-sm text-white/80">Clients</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <div className="bg-amber-500 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold">8+ Partners</div>
                      <div className="text-sm text-white/80">Insurance Providers</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                    <div className="bg-amber-500 rounded-full p-2 mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-amber-400 font-bold">24/7</div>
                      <div className="text-sm text-white/80">Claims Support</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition shadow-xl flex items-center justify-center">
                    {heroSlides[currentSlide].cta}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3.5 rounded-lg font-semibold text-base transition flex items-center justify-center group">
                    Call +254-727-964-113
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="flex justify-center space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-amber-400 w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div 
            className="h-full bg-amber-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
          ></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </section>
    </div>
  );
}