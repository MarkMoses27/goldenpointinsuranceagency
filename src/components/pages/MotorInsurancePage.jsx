import React, { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "benefits", label: "Benefits" },
  { id: "how", label: "How Do I Start" }
];

const coverOptions = [
  {
    title: "Comprehensive Insurance Cover",
    description: "This cover takes care of a wide range of risks that a motorist may suffer in the process of using their vehicle. The main cover features are as follows:",
    features: [
      "Accidental impact damage including overturning and collision.",
      "Accidental fire damage.",
      "Theft/partial theft cover.",
      "Third-party liability cover for bodily injury & property damage.",
      "Windscreen cover.",
      "Entertainment system cover.",
      "Emergency medical expense cover.",
      "Courtesy car / loss of use cover.",
      "Excess protector.",
      "Political violence & terrorism cover."
    ]
  },
  {
    title: "Third-Party, Fire and Theft",
    description: "This policy covers the insured against three main risks:",
    features: [
      "Third-party liability covers bodily injury or property damage as a result of your vehicle being involved in an accident.",
      "Accidental fire damage in the event your vehicle catches fire and is destroyed.",
      "Theft cover as a result of your vehicle being stolen."
    ]
  },
  {
    title: "Third-Party Insurance Cover",
    description: "It is the minimum legally required cover that every car owner must have to be on the road. The cover protects a vehicle owner from liabilities that may arise from third parties in the event of an accident. Third-party liability relates to:",
    features: [
      "Bodily injury.",
      "Property damage."
    ],
    note: "This cover does not protect the car owner from personal liabilities – any repair costs are met by the insured himself."
  }
];

const mainProducts = [
  "COMPREHENSIVE",
  "3RD PARTY ONLY",
  "3RD PARTY & THEFT",
  "NAMED DRIVER",
  "BIMA BAMBA"
];

const allBenefits = [
  "Accidental impact damage including overturning and collision.",
  "Accidental fire damage.",
  "Theft/partial theft cover.",
  "Third-party liability cover for bodily injury & property damage.",
  "Windscreen cover.",
  "Entertainment system cover.",
  "Emergency medical expense cover.",
  "Courtesy car/ loss of use cover.",
  "Excess protector.",
  "Political violence & terrorism cover.",
  "Third-party liability cover for bodily injury or property damage as a result of your vehicle being involved in an accident.",
  "Accidental fire damage in the event your vehicle catches fire and is destroyed.",
  "Theft cover as a result of your vehicle being stolen.",
  "Bodily injury.",
  "Property damage."
];

const whyChooseUs = [
  "Expert Insurance Guidance",
  "Personalized Customer Service",
  "Swift Claim Process",
  "Prompt Response",
  "24/7 Availability",
  "Convenient Premium Payment Plan",
  "Strong, Trusted Insurer Partnerships"
];

const MotorPrivateCoverPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 w-full">
      <style jsx>{`
        /* Mobile First - Base styles for 320px+ */
        .hero-container {
          padding: 2rem 1rem;
        }
        
        .hero-title {
          font-size: 1.5rem;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        
        .hero-subtitle {
          font-size: 0.875rem;
          line-height: 1.4;
          margin-bottom: 1rem;
        }
        
        .tab-container {
          margin-top: -1.5rem;
          margin-bottom: 1rem;
          padding: 0 0.5rem;
        }
        
        .tab-button {
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
          min-width: 80px;
        }
        
        .main-content {
          padding: 1rem;
          margin-bottom: 2rem;
        }
        
        .content-title {
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
        }
        
        .content-text {
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        .cover-option {
          padding: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .cover-title {
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        .cover-list {
          font-size: 0.75rem;
          line-height: 1.4;
        }
        
        .product-badge {
          padding: 0.375rem 0.75rem;
          font-size: 0.625rem;
          margin: 0.25rem;
        }
        
        .benefit-item {
          padding: 0.75rem;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }
        
        .cta-section {
          padding: 1rem;
          margin-bottom: 2rem;
        }
        
        .cta-title {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        
        .cta-text {
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .cta-button {
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          margin: 0.25rem;
          display: block;
          text-align: center;
          width: 100%;
        }
        
        .bg-shapes {
          display: none;
        }

        /* Small Mobile - 375px+ */
        @media (min-width: 375px) {
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .tab-button {
            padding: 0.625rem 1rem;
            font-size: 0.875rem;
            min-width: 90px;
          }
          
          .content-title {
            font-size: 1.25rem;
          }
          
          .cover-title {
            font-size: 1rem;
          }
          
          .cover-list {
            font-size: 0.875rem;
          }
          
          .product-badge {
            font-size: 0.75rem;
          }
          
          .benefit-item {
            font-size: 0.875rem;
          }
          
          .bg-shapes {
            display: block;
          }
        }

        /* Large Mobile - 425px+ */
        @media (min-width: 425px) {
          .hero-container {
            padding: 2.5rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
          }
          
          .tab-container {
            margin-top: -2rem;
            margin-bottom: 1.5rem;
            padding: 0 1rem;
          }
          
          .tab-button {
            padding: 0.75rem 1.25rem;
            font-size: 0.875rem;
            min-width: 100px;
          }
          
          .main-content {
            padding: 1.5rem;
          }
          
          .content-title {
            font-size: 1.375rem;
          }
          
          .content-text {
            font-size: 1rem;
          }
          
          .cover-option {
            padding: 1.25rem;
          }
          
          .cover-title {
            font-size: 1.125rem;
          }
          
          .product-badge {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
          
          .benefit-item {
            padding: 1rem;
            font-size: 0.875rem;
          }
          
          .cta-section {
            padding: 1.5rem;
          }
          
          .cta-title {
            font-size: 1.25rem;
          }
          
          .cta-text {
            font-size: 0.875rem;
          }
          
          .cta-button {
            padding: 0.875rem 1.25rem;
            font-size: 0.875rem;
            width: auto;
            display: inline-block;
          }
        }

        /* Tablet - 768px+ */
        @media (min-width: 768px) {
          .hero-container {
            padding: 3rem 2rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 1.25rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }
          
          .tab-container {
            margin-top: -2.5rem;
            margin-bottom: 2rem;
            padding: 0 2rem;
          }
          
          .tab-button {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            min-width: 120px;
          }
          
          .main-content {
            padding: 2rem 2.5rem;
          }
          
          .content-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .content-text {
            font-size: 1rem;
          }
          
          .cover-option {
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .cover-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }
          
          .cover-list {
            font-size: 1rem;
          }
          
          .product-badge {
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
            margin: 0.375rem;
          }
          
          .benefit-item {
            padding: 1.25rem;
            font-size: 1rem;
          }
          
          .benefit-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .benefits-list {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem 2rem;
          }
          
          .cta-section {
            padding: 2rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          .cta-text {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .cta-button {
            padding: 1rem 2rem;
            font-size: 1rem;
            margin: 0 0.5rem;
          }
          
          .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
          
          .how-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
        }

        /* Large Tablet - 1024px+ */
        @media (min-width: 1024px) {
          .hero-container {
            padding: 4rem 2rem;
          }
          
          .hero-title {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.375rem;
            margin-bottom: 2rem;
          }
          
          .tab-container {
            margin-top: -3rem;
            margin-bottom: 2.5rem;
          }
          
          .tab-button {
            padding: 1rem 2rem;
            font-size: 1.125rem;
            min-width: 140px;
          }
          
          .main-content {
            padding: 3rem 4rem;
          }
          
          .content-title {
            font-size: 1.75rem;
            margin-bottom: 1.25rem;
          }
          
          .content-text {
            font-size: 1.125rem;
          }
          
          .cover-option {
            padding: 2rem;
            margin-bottom: 2.5rem;
          }
          
          .cover-title {
            font-size: 1.375rem;
            margin-bottom: 1rem;
          }
          
          .cover-list {
            font-size: 1.125rem;
          }
          
          .product-badge {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            margin: 0.5rem;
          }
          
          .benefit-item {
            padding: 1.5rem;
            font-size: 1.125rem;
          }
          
          .cta-section {
            padding: 2.5rem;
          }
          
          .cta-title {
            font-size: 1.875rem;
            margin-bottom: 1rem;
          }
          
          .cta-text {
            font-size: 1.125rem;
            margin-bottom: 2rem;
          }
          
          .cta-button {
            padding: 1.125rem 2.5rem;
            font-size: 1.125rem;
          }
        }

        /* Desktop - 1280px+ */
        @media (min-width: 1280px) {
          .hero-container {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          
          .hero-title {
            font-size: 3.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.5rem;
          }
          
          .tab-container {
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .main-content {
            max-width: 1000px;
            margin: 0 auto;
            padding: 3rem 4rem;
          }
          
          .content-title {
            font-size: 2rem;
          }
          
          .cover-title {
            font-size: 1.5rem;
          }
          
          .cta-section {
            max-width: 1000px;
            margin: 0 auto;
            padding: 3rem;
          }
          
          .cta-title {
            font-size: 2rem;
          }
        }

        /* Large Desktop - 1440px+ */
        @media (min-width: 1440px) {
          .hero-container {
            padding: 5rem 2rem;
            max-width: 1400px;
          }
          
          .hero-title {
            font-size: 4rem;
          }
          
          .hero-subtitle {
            font-size: 1.625rem;
          }
          
          .tab-container {
            max-width: 1200px;
          }
          
          .main-content {
            max-width: 1200px;
            padding: 4rem 5rem;
          }
          
          .cta-section {
            max-width: 1200px;
            padding: 4rem;
          }
        }

        /* Ultra Wide - 1920px+ */
        @media (min-width: 1920px) {
          .hero-container {
            max-width: 1600px;
            padding: 6rem 2rem;
          }
          
          .hero-title {
            font-size: 4.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.75rem;
          }
          
          .tab-container {
            max-width: 1400px;
          }
          
          .main-content {
            max-width: 1400px;
            padding: 5rem 6rem;
          }
          
          .cta-section {
            max-width: 1400px;
            padding: 5rem;
          }
        }

        /* Landscape Mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-container {
            padding: 1rem;
          }
          
          .hero-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
          }
          
          .hero-subtitle {
            font-size: 0.875rem;
            margin-bottom: 0.75rem;
          }
          
          .tab-container {
            margin-top: -1rem;
            margin-bottom: 1rem;
          }
          
          .main-content {
            padding: 1rem;
          }
        }

        /* High DPI Displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .hero-title {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        }

        /* Print Styles */
        @media print {
          .bg-gradient-to-br {
            background: white !important;
          }
          
          .hero-container {
            background: white !important;
            color: black !important;
          }
          
          .tab-container {
            display: none;
          }
          
          .cta-section {
            display: none;
          }
        }
      `}</style>

      {/* HERO */}
      <div className="relative bg-blue-950">
        <div className="hero-container relative z-10">
          <h1 className="hero-title text-amber-400 font-black text-center drop-shadow-lg">
            Motor Private Cover
          </h1>
          <p className="hero-subtitle text-white/90 font-light text-center max-w-2xl mx-auto">
            Protection for you, your car, and your peace of mind. Choose the best motor insurance in Kenya — comprehensive, flexible, and always here when you need us.
          </p>
        </div>
        {/* subtle bg shapes */}
        <div className="bg-shapes absolute inset-0 opacity-10 pointer-events-none z-0">
          <div className="absolute -top-16 left-10 w-32 h-32 sm:w-60 sm:h-60 bg-amber-200 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-blue-700 rounded-full filter blur-xl"></div>
        </div>
      </div>

      {/* TABS */}
      <div className="tab-container relative z-20">
        <div
          className="flex overflow-x-auto no-scrollbar whitespace-nowrap justify-start sm:justify-center gap-1 shadow rounded-xl bg-gradient-to-b from-gray-200 via-white to-blue-100 py-1.5 sm:py-2 px-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`
                tab-button rounded-lg font-bold transition
                focus:outline-none cursor-pointer
                ${activeTab === tab.id
                  ? "bg-orange-500 text-white shadow"
                  : "bg-transparent text-[#1a2763] hover:text-orange-600 hover:underline"}
              `}
              style={{ fontFamily: "serif" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="main-content bg-white rounded-2xl sm:rounded-3xl shadow-2xl mt-4">
        {activeTab === "overview" && (
          <>
            <h2 className="content-title font-bold text-blue-900 text-center">
              MOTOR PRIVATE COVER
            </h2>
            <p className="content-text text-gray-800 mb-6 text-center">
              Motor Private insurance protects you against loss if your car is involved in an accident, fire, theft, or causes third-party liability while on the road.
            </p>
            <h3 className="content-title font-semibold text-amber-500 text-center">
              The main cover options include:
            </h3>

            <div className="space-y-7 sm:space-y-10">
              {coverOptions.map((option, idx) => (
                <div key={option.title} className="cover-option bg-blue-50/70 rounded-lg sm:rounded-xl border border-amber-100">
                  <h4 className="cover-title font-extrabold text-blue-900">{option.title}</h4>
                  <p className="content-text text-gray-700 mb-2">{option.description}</p>
                  <ol className="cover-list list-decimal list-inside ml-2 text-blue-900 mb-2">
                    {option.features.map((f, i) => (
                      <li key={i} className="pl-1">{f}</li>
                    ))}
                  </ol>
                  {option.note && (
                    <p className="text-xs italic text-blue-700 mt-1">{option.note}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "features" && (
          <>
            <h3 className="content-title font-bold text-blue-900 text-center">Our Main Products Include:</h3>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {mainProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="product-badge bg-blue-100 text-blue-900 font-bold rounded-full border border-blue-200"
                >
                  {product}
                </div>
              ))}
            </div>
            <h4 className="content-title font-semibold text-amber-500 text-center">
              The cover provides the following benefits:
            </h4>
            <ol className="benefits-list list-decimal list-inside text-gray-800 ml-2 grid grid-cols-1 gap-x-5 gap-y-1">
              {allBenefits.map((benefit, idx) => (
                <li key={idx} className="content-text">{benefit}</li>
              ))}
            </ol>
          </>
        )}

        {activeTab === "benefits" && (
          <>
            <h3 className="content-title font-bold text-blue-900 text-center">
              Why Choose Our Motor Private Insurance?
            </h3>
            <div className="benefit-grid grid grid-cols-1 gap-2 sm:gap-4 max-w-lg mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="benefit-item flex items-center gap-2 sm:gap-3 bg-amber-50 rounded-lg sm:rounded-xl shadow-sm border border-amber-200"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <div className="text-blue-950 font-semibold">{item}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "how" && (
          <>
            <h3 className="content-title font-bold text-blue-900 text-center">
              How Do I Start?
            </h3>
            <p className="content-text text-gray-800 mb-2 text-center">
              Want to know your insurance cost or get covered? Click <b>Get Cover</b> to get a quick quote and start your cover online.
            </p>
            <p className="content-text text-gray-800 mb-5 text-center">
              Need more info or help? Click <b>I Need Assistance</b> and our team will support you!
            </p>
            <div className="how-buttons flex flex-col md:flex-row gap-3 sm:gap-4 justify-center mt-5">
              <a
                href="/get-cover"
                className="cta-button bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors"
              >
                Get Cover
              </a>
              <a
                href="/contact"
                className="cta-button bg-white border-2 border-amber-500 text-amber-500 font-bold rounded-lg hover:bg-amber-50 transition-colors"
              >
                I Need Assistance
              </a>
            </div>
          </>
        )}
      </div>

      {/* CTA */}
      <div className="max-w-full sm:max-w-2xl md:max-w-4xl mx-auto px-2 sm:px-4">
        <div className="cta-section rounded-xl sm:rounded-2xl bg-amber-400/90 text-center shadow-xl mt-7 sm:mt-10">
          <h2 className="cta-title font-extrabold text-blue-950">
            Get Covered in Minutes
          </h2>
          <p className="cta-text text-blue-900">
            Protect your car and your peace of mind—get a custom quote or talk to our friendly insurance experts today!
          </p>
          <div className="cta-buttons flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="/get-cover"
              className="cta-button bg-blue-950 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/contact"
              className="cta-button bg-white border-2 border-blue-950 text-blue-950 font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorPrivateCoverPage;