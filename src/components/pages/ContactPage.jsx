import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaUser, FaComments, FaChevronDown } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const services = [
    'Motor Insurance',
    'Medical Insurance', 
    'Life Insurance',
    'Pensions',
    'Asset Management',
    'Workers\' Injury Benefit (WIBA)',
    'Domestic Package',
    'General Inquiry'
  ];

  return (
    <div className="min-h-screen" style={{backgroundColor: '#141438'}}>
      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-amber-500 text-white p-3 rounded-full shadow-lg"
        >
          <FaChevronDown className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/70 backdrop-blur-sm">
          <div className="absolute top-16 right-4 bg-white rounded-xl shadow-2xl w-64 p-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="tel:+254727964113"
                className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 text-amber-700 font-medium"
              >
                <FaPhone className="text-amber-500" />
                <span>Call Now</span>
              </a>
              <a 
                href="https://wa.me/254727964113"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-green-50 text-green-700 font-medium"
              >
                <FaWhatsapp className="text-green-500" />
                <span>WhatsApp</span>
              </a>
              <a 
                href="mailto:goldenpoint.ia@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-700 font-medium"
              >
                <FaEnvelope className="text-blue-500" />
                <span>Email Us</span>
              </a>
              <a 
                href="tel:+254727964113"
                className="flex items-center gap-3 p-3 rounded-lg bg-red-50 text-red-700 font-medium"
              >
                <FaPhone className="text-red-500" />
                <span>Emergency Call</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section with Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        <div 
          className="h-64 md:h-96 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80')`
          }}
        >
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
                Need Help?
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl mb-4 md:mb-6 text-amber-500 font-semibold">
                We Are Here For You
              </p>
              <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Golden Point Insurance Agency - Your trusted partner in protection and peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-amber-500 text-center">
                Get In Touch
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                {/* Phone */}
                <div className="flex flex-wrap items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-[200px]">
                    <div className="bg-amber-500 group-hover:bg-amber-600 p-3 sm:p-4 rounded-full transition-colors">
                      <FaPhone className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-800">Call Us</h3>
                      <p className="text-amber-600 font-semibold text-base sm:text-lg">+254-727-964-113</p>
                      <p className="text-xs sm:text-sm text-gray-500">Mon - Fri, 8AM - 6PM</p>
                    </div>
                  </div>
                  <a 
                    href="tel:+254727964113"
                    className="mt-3 sm:mt-0 sm:ml-auto bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap"
                  >
                    Call Now
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-wrap items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-[200px]">
                    <div className="bg-green-500 group-hover:bg-green-600 p-3 sm:p-4 rounded-full transition-colors">
                      <FaWhatsapp className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-800">WhatsApp</h3>
                      <p className="text-green-600 font-semibold text-base sm:text-lg">+254-727-964-113</p>
                      <p className="text-xs sm:text-sm text-gray-500">Quick response guaranteed</p>
                    </div>
                  </div>
                  <a 
                    href="https://wa.me/254727964113"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 sm:mt-0 sm:ml-auto bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap"
                  >
                    Chat
                  </a>
                </div>

                {/* Email */}
                <div className="flex flex-wrap items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-[200px]">
                    <div className="bg-blue-500 group-hover:bg-blue-600 p-3 sm:p-4 rounded-full transition-colors">
                      <FaEnvelope className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-800">Email Us</h3>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">goldenpoint.ia@gmail.com</p>
                      <p className="text-xs sm:text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:goldenpoint.ia@gmail.com"
                    className="mt-3 sm:mt-0 sm:ml-auto bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-lg transition-colors whitespace-nowrap"
                  >
                    Email
                  </a>
                </div>

                {/* Location */}
                <div className="flex items-center p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                  <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                    <div className="bg-red-500 group-hover:bg-red-600 p-3 sm:p-4 rounded-full transition-colors">
                      <FaMapMarkerAlt className="text-white text-lg sm:text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-gray-800">Visit Us</h3>
                      <p className="text-red-600 font-semibold text-base sm:text-lg">Nairobi, Kenya</p>
                      <p className="text-xs sm:text-sm text-gray-500">Serving clients nationwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 md:mt-8 pt-5 border-t border-gray-200">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-800 text-base md:text-lg mb-2">Emergency Claims Support</h4>
                  <p className="text-red-700 text-xs sm:text-sm mb-3">
                    Need immediate assistance? We're available 24/7 for emergencies
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href="tel:+254727964113"
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-center transition-colors text-xs sm:text-sm font-medium"
                    >
                      Emergency Call
                    </a>
                    <a 
                      href="https://wa.me/254727964113?text=Emergency%20Insurance%20Claim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-center transition-colors text-xs sm:text-sm font-medium"
                    >
                      Emergency WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-amber-500 text-center">
              Send Us A Message
            </h2>
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+254-xxx-xxx-xxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <FaComments className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-400 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="text-center text-xs sm:text-sm text-gray-500 mt-4">
                Or contact us directly via WhatsApp for faster response
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/254727964113"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp className="text-xl" />
      </a>
    </div>
  );
};

export default ContactPage;