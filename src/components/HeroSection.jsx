import { useState, useEffect } from 'react';

export default function Homepage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white/80 backdrop-blur-md border-b border-white/20'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-105">
                <span className="text-white font-black text-xl tracking-tight">GP</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black text-gray-900 block tracking-tight">Golden Point</span>
              <span className="text-xs text-amber-600 uppercase tracking-widest font-semibold">Insurance Agency</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {['Home', 'Services', 'Partners', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                className="relative text-gray-700 hover:text-amber-700 transition-all duration-300 py-2 font-semibold group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Get A Quote Button */}
          <div className="hidden lg:flex">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center group">
              <svg className="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100/80 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl">
            <div className="px-6 py-6 space-y-4">
              {['Home', 'Services', 'Partners', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className="block py-3 text-gray-700 hover:text-amber-700 font-semibold text-lg transition-all duration-300 border-b border-gray-100 last:border-b-0 hover:translate-x-2"
                >
                  {item}
                </a>
              ))}
              <button className="w-full py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl text-center font-bold shadow-lg transform transition-all duration-300 hover:scale-105">
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
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                currentSlide === index 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-900/60 to-gray-900/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-10 w-16 h-16 bg-amber-400/15 rounded-full blur-lg animate-pulse delay-500"></div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="space-y-8 text-white">
                {/* Badge */}
                <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mr-4 animate-pulse"></div>
                  <span className="text-white/95 font-semibold text-sm tracking-wider">TRUSTED INSURANCE PARTNER</span>
                </div>
                
                {/* Title */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight bg-gradient-to-r from-white to-amber-100 bg-clip-text text-transparent">
                    {heroSlides[currentSlide].title}
                  </h1>
                  
                  {/* Subtitle */}
                  <h2 className="text-xl lg:text-2xl font-light text-amber-100/90 max-w-2xl leading-relaxed">
                    {heroSlides[currentSlide].subtitle}
                  </h2>
                </div>
                
                {/* Trust Indicators */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                  {[
                    { icon: "shield", label: "4+ Years", sublabel: "Experience", color: "amber" },
                    { icon: "users", label: "1,000+", sublabel: "Clients", color: "orange" },
                    { icon: "globe", label: "8+ Partners", sublabel: "Insurance Providers", color: "amber" },
                    { icon: "phone", label: "24/7", sublabel: "Claims Support", color: "orange" }
                  ].map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
                        <div className={`bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 rounded-2xl p-3 mr-4 shadow-lg`}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {stat.icon === 'shield' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                            {stat.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                            {stat.icon === 'globe' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />}
                            {stat.icon === 'phone' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />}
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-black text-lg">{stat.label}</div>
                          <div className="text-sm text-white/80 font-medium">{stat.sublabel}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <button className="group bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 flex items-center justify-center">
                    {heroSlides[currentSlide].cta}
                    <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                  <button className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                    Call +254-727-964-113
                    <svg className="w-6 h-6 ml-3 transition-transform group-hover:scale-110 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="flex justify-center space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 w-12 h-3 shadow-lg' 
                    : 'bg-white/40 hover:bg-white/60 w-3 h-3 hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-300 ease-out shadow-lg"
            style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
          ></div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide(prev => prev === 0 ? heroSlides.length - 1 : prev - 1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 group"
        >
          <svg className="w-8 h-8 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={() => setCurrentSlide(prev => (prev + 1) % heroSlides.length)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-110 group"
        >
          <svg className="w-8 h-8 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-white/80 animate-bounce">
          <span className="text-sm font-medium mb-3 tracking-wider">SCROLL DOWN</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
}