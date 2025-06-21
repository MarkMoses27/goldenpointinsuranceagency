import React, { useState } from 'react';
import { FaHardHat, FaUserInjured, FaHandHoldingMedical, FaChartLine, FaClipboardCheck, FaIndustry, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const WIBAInsurancePage = () => {
  const [activeSection, setActiveSection] = useState('coverage');

  const coverageDetails = [
    {
      icon: <FaUserInjured />,
      title: 'Medical Expenses',
      description: 'Full coverage for all medical treatment related to work injuries',
    },
    {
      icon: <FaHandHoldingMedical />,
      title: 'Disability Benefits',
      description: 'Compensation for temporary or permanent disability',
    },
    {
      icon: <FaChartLine />,
      title: 'Lost Wages',
      description: 'Income replacement during recovery period',
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Rehabilitation',
      description: 'Coverage for physical and vocational rehabilitation',
    },
    {
      icon: <FaIndustry />,
      title: 'Occupational Diseases',
      description: 'Protection against work-related illnesses',
    },
    {
      icon: <FaHardHat />,
      title: 'Death Benefits',
      description: 'Compensation to dependents in case of fatal accidents',
    },
  ];

  const benefits = [
    {
      title: 'Legal Compliance',
      description: 'Ensure full compliance with Kenyan labor laws and regulations',
    },
    {
      title: 'Employee Retention',
      description: 'Show employees they are valued, improving loyalty and retention',
    },
    {
      title: 'Financial Protection',
      description: 'Shield your business from unexpected compensation costs',
    },
    {
      title: 'Risk Management',
      description: 'Access to workplace safety resources and risk assessments',
    },
  ];

  const industries = [
    'Construction',
    'Manufacturing',
    'Agriculture',
    'Transportation',
    'Hospitality',
    'Healthcare',
    'Energy',
    'Mining',
  ];

  return (
    <div className="min-h-screen bg-[#141438] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[70vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 px-4 md:px-8 text-center">
          <div className="bg-amber-500 inline-block px-4 py-2 rounded-lg mb-4">
            <span className="font-bold text-white">COMPLIANCE & PROTECTION</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Injury Benefits Act (WIBA) Insurance</h1>
          <p className="text-xl text-amber-400 mb-8 max-w-xl mx-auto">Protect your employees and your business with comprehensive coverage</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#coverage" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">Coverage Details</a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">Get Compliance Report</a>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mandatory Coverage for Kenyan Employers</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-white text-lg mb-6 max-w-3xl mx-auto">
            The Work Injury Benefits Act (WIBA) requires all employers in Kenya to provide insurance coverage for employees against work-related injuries and diseases. Non-compliance can result in significant penalties and legal liabilities.
          </p>

          <div className="bg-white/20 p-6 rounded-xl max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Key Requirements:</h3>
            <ul className="space-y-4 text-white">
              <li className="flex items-start">
                <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <span>Coverage for all employees regardless of contract type</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <span>24-hour coverage for work-related injuries</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <span>Coverage for occupational diseases</span>
              </li>
              <li className="flex items-start">
                <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                </div>
                <span>Prompt reporting of workplace injuries</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coverage Details */}
      <div id="coverage" className="py-16">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Comprehensive WIBA Coverage</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our WIBA insurance provides complete protection as required by Kenyan law.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coverageDetails.map((item, index) => (
            <div key={index} className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 transform transition-transform hover:translate-y-[-10px]">
              <div className="text-amber-500 text-4xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Business Benefits of WIBA Insurance</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Ensure Compliance Today</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">Contact our WIBA specialists for a customized solution.</p>
        </div>

        <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 mx-auto max-w-4xl">
          <form className="space-y-6">
            <div>
              <label className="block text-amber-200 mb-2">Number of Employees</label>
              <select className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Select employee count</option>
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>200+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-amber-200 mb-2">Industry Sector</label>
              <select className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Select your industry</option>
                {industries.map((industry, index) => (
                  <option key={index}>{industry}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-amber-200 mb-2">Current Coverage Status</label>
              <select className="w-full bg-white/20 border border-white/30 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option>Select status</option>
                <option>Currently covered</option>
                <option>Coverage expired</option>
                <option>Never had coverage</option>
                <option>Not sure</option>
              </select>
            </div>

            <button className="w-full bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">
              Check Compliance Status
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default WIBAInsurancePage;
