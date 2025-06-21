import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

const services = [
  { name: 'Motor Insurance',   path: '/motor' },
  { name: 'Health Insurance', path: '/health' },
  { name: 'Life Insurance',    path: '/life' },
  { name: 'WIBA',              path: '/wiba' },
  { name: 'Asset Management',  path: '/asset' },
  { name: 'Domestic Package',  path: '/domestic' },
  { name: 'Travel Insurance',  path: '/travel' },
  { name: 'Pensions',          path: '/pensions' },
]

const partners = [
  { name: 'Jubilee Insurance',      path: '/partners/jubilee' },
  { name: 'AAR Insurance',          path: '/partners/aar' },
  { name: 'Resolution Insurance',   path: '/partners/resolution' },
  { name: 'Madison Insurance',      path: '/partners/madison' },
  { name: 'Britam Insurance',       path: '/partners/britam' },
  { name: 'CIC Insurance',          path: '/partners/cic' },
  { name: 'ICEA LION',              path: '/partners/icea' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="relative">
            <img src={Logo} alt="Golden Point Insurance" className="w-16 h-16 object-contain" />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Golden Point<span className="text-amber-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-12">
          <Link to="/" className="text-gray-600 hover:text-gray-900 transition">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 transition">
              Services
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
                {services.map(s => (
                  <Link
                    key={s.path}
                    to={s.path}
                    className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition"
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

          {/* Partners Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 transition">
              Partners
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
                <h3 className="px-4 py-2 text-xs font-semibold text-amber-700 uppercase tracking-wide border-b border-gray-100">
                  Insurance Partners
                </h3>
                {partners.map(p => (
                  <Link
                    key={p.path}
                    to={p.path}
                    className="flex justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition"
                  >
                    <span className="text-gray-700 font-medium">{p.name}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/about" className="text-gray-600 hover:text-gray-900 transition">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition">
            Contact
          </Link>
        </nav>

        {/* Get A Quote */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/quote"
            className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition transform hover:scale-[1.02]"
          >
            GET A QUOTE
          </Link>
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
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <Link to="/" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-900" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link to="/quote" className="block py-3 bg-amber-500 text-white rounded-lg text-center" onClick={() => setMobileOpen(false)}>
              GET A QUOTE
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
