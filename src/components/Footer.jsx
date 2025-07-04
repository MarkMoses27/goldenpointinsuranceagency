import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-white pt-8 sm:pt-12 pb-4 sm:pb-6" style={{backgroundColor: '#141438'}}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center">
              <span className="text-amber-500">GOLDEN POINT</span>
              <span className="sm:ml-2">INSURANCE AGENCY</span>
            </h3>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{color: '#e0e7ff'}}>
              We care about your peace of mind. Our goal is to ensure that the things that are most important to you are protected by the best insurers.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-amber-500 hover:text-amber-300 transition-colors">
                <FaFacebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-300 transition-colors">
                <FaInstagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="text-amber-500 hover:text-amber-300 transition-colors">
                <FaLinkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-amber-500">OUR SERVICES</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
              <li><Link to="/motor" className="hover:text-amber-300 transition">Motor Insurance</Link></li>
              <li><Link to="/medical" className="hover:text-amber-300 transition">Medical Insurance</Link></li>
              <li><Link to="/life" className="hover:text-amber-300 transition">Life Insurance</Link></li>
              <li><Link to="/pensions" className="hover:text-amber-300 transition">Pensions</Link></li>
              <li><Link to="/asset" className="hover:text-amber-300 transition">Asset Management</Link></li>
              <li><Link to="/wiba" className="hover:text-amber-300 transition">Workers' Injury Benefit (WIBA)</Link></li>
              <li><Link to="/domestic" className="hover:text-amber-300 transition">Domestic Package</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-amber-500">CONTACT US</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li className="flex items-start">
                <FaPhone className="mt-0.5 sm:mt-1 mr-2 sm:mr-3 text-amber-500 text-sm sm:text-base flex-shrink-0" />
                <span className="break-all sm:break-normal">+254-727-964-113</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mt-0.5 sm:mt-1 mr-2 sm:mr-3 text-amber-500 text-sm sm:text-base flex-shrink-0" />
                <span className="break-all sm:break-normal">goldenpoint.ia@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-0.5 sm:mt-1 mr-2 sm:mr-3 text-amber-500 text-sm sm:text-base flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-0 text-sm sm:text-base" style={{borderTop: '1px solid #2d2d5a'}}>
          <div className="mb-0 text-center md:text-left" style={{color: '#a3a3c2'}}>
            &copy; {new Date().getFullYear()} Golden Point Insurance Agency. All rights reserved.
          </div>
          <div className="flex items-center text-center md:text-right" style={{color: '#a3a3c2'}}>
            <FaShieldAlt className="text-amber-500 mr-1 sm:mr-2 text-sm sm:text-base flex-shrink-0" />
            <span className="text-xs sm:text-sm">Regulated by the Insurance Regulatory Authority</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;