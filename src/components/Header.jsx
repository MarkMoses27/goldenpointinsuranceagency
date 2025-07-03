import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

// Services data
const services = [
  { name: 'Motor Insurance', path: '/motor' },
  { name: 'Health Insurance', path: '/health' },
  { name: 'Life Insurance', path: '/life' },
  { name: 'WIBA', path: '/wiba' },
  { name: 'Asset Management', path: '/asset' },
  { name: 'Domestic Package', path: '/domestic' },
  { name: 'Travel Insurance', path: '/travel' },
  { name: 'Pensions', path: '/pensions' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      {/* Contact Info Bar with Black Background */}
      <div className="bg-black text-white py-4 px-6 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Contact Info (Horizontal and Centered) */}
          <div className="flex space-x-8 w-full justify-center">
            <div className="text-center">
              <span className="block">Call Us: +254-727-964-113</span>
            </div>
            <div className="text-center">
              <span className="block">Email: goldenpoint.ia@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <img src={Logo} alt="Golden Point Insurance" className="w-24 h-24 object-contain" />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Golden Point<span className="text-amber-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition uppercase font-bold">
            HOME
          </Link>

          {/* About Us Link */}
          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition uppercase font-bold">
            ABOUT
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 transition uppercase font-bold">
              SERVICES
            </span>
            <svg
              className="w-4 h-4 ml-1 inline-block transition-transform duration-200 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute top-full left-0 mt-3 bg-white rounded-xl shadow-xl border border-gray-100 w-64 z-50 overflow-hidden">
              <div className="p-2">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition font-bold"
                  >
                    <span className="text-gray-700 font-medium">{s.name}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Media Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 transition uppercase font-bold">
              MEDIA
            </span>
            <svg
              className="w-4 h-4 ml-1 inline-block transition-transform duration-200 group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute top-full left-0 mt-3 bg-white rounded-xl shadow-xl border border-gray-100 w-64 z-50 overflow-hidden">
              <div className="p-2">
                <Link
                  to="/gallery"
                  className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition font-bold"
                >
                  <span className="text-gray-700 font-medium">Gallery</span>
                </Link>
                <Link
                  to="/blog"
                  className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition font-bold"
                >
                  <span className="text-gray-700 font-medium">Blog</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Our Clients Link */}
          <Link to="/clients" className="text-gray-600 hover:text-gray-900 transition uppercase font-bold">
            OUR CLIENTS
          </Link>

          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition uppercase font-bold">
            CONTACT
          </Link>
        </nav>

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
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-600 hover:text-gray-900 font-bold uppercase" onClick={() => setMobileOpen(false)}>
              HOME
            </Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-900 font-bold uppercase" onClick={() => setMobileOpen(false)}>
              ABOUT
            </Link>

            {/* Services Dropdown on Mobile */}
            <div className="relative">
              <div
                className="cursor-pointer text-gray-600 hover:text-gray-900 transition font-bold uppercase flex items-center justify-between py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                SERVICES
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {servicesOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="p-2">
                    {services.map((s) => (
                      <Link
                        key={s.path}
                        to={s.path}
                        className="block px-4 py-3 rounded-lg hover:bg-white transition font-medium text-gray-700"
                        onClick={() => {
                          setMobileOpen(false);
                          setServicesOpen(false);
                        }}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Media Dropdown on Mobile */}
            <div className="relative">
              <div
                className="cursor-pointer text-gray-600 hover:text-gray-900 transition font-bold uppercase flex items-center justify-between py-2"
                onClick={() => setMediaOpen(!mediaOpen)}
              >
                MEDIA
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${mediaOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              {mediaOpen && (
                <div className="mt-2 bg-gray-50 rounded-lg overflow-hidden">
                  <div className="p-2">
                    <Link
                      to="/gallery"
                      className="block px-4 py-3 rounded-lg hover:bg-white transition font-medium text-gray-700"
                      onClick={() => {
                        setMobileOpen(false);
                        setMediaOpen(false);
                      }}
                    >
                      Gallery
                    </Link>
                    <Link
                      to="/blog"
                      className="block px-4 py-3 rounded-lg hover:bg-white transition font-medium text-gray-700"
                      onClick={() => {
                        setMobileOpen(false);
                        setMediaOpen(false);
                      }}
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/clients" className="block py-2 text-gray-600 hover:text-gray-900 font-bold uppercase" onClick={() => setMobileOpen(false)}>
              OUR CLIENTS
            </Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-900 font-bold uppercase" onClick={() => setMobileOpen(false)}>
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}