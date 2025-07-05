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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* HERO */}
      <div className="relative bg-blue-950 z-10">
        <div className="max-w-5xl mx-auto py-16 px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-amber-400 mb-3 drop-shadow-lg">
            Motor Private Cover
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-6 max-w-2xl mx-auto">
            Protection for you, your car, and your peace of mind. Choose the best motor insurance in Kenya — comprehensive, flexible, and always here when you need us.
          </p>
        </div>
        {/* subtle bg shapes */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div className="absolute -top-20 left-10 w-60 h-60 bg-amber-200 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-700 rounded-full filter blur-xl"></div>
        </div>
      </div>

      {/* TABS */}
      <div className="max-w-4xl mx-auto mt-[-36px] mb-8 px-4 relative z-20">
        <div
          className="flex justify-center gap-1 shadow rounded-xl bg-gradient-to-b from-gray-300 via-white to-blue-100 py-2"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              type="button"
              className={`
                px-6 py-2 rounded-lg font-bold transition
                focus:outline-none cursor-pointer
                ${
                  activeTab === tab.id
                    ? "bg-orange-500 text-white shadow"
                    : "bg-transparent text-[#1a2763] hover:text-orange-600 hover:underline"
                }
              `}
              style={{ fontFamily: "serif", userSelect: "none" }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAB CONTENT */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 mt-4">
        {activeTab === "overview" && (
          <>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
              MOTOR PRIVATE COVER
            </h2>
            <p className="text-gray-800 mb-8 text-center">
              Motor Private insurance protects you against loss if your car is involved in an accident, fire, theft, or causes third-party liability while on the road.
            </p>
            <h3 className="text-xl font-semibold text-amber-500 mb-6">
              The main cover options include:
            </h3>

            <div className="space-y-10">
              {coverOptions.map((option, idx) => (
                <div key={option.title} className="bg-blue-50/70 rounded-xl p-6 border border-amber-100">
                  <h4 className="font-extrabold text-blue-900 text-lg mb-1">{option.title}</h4>
                  <p className="text-gray-700 mb-2">{option.description}</p>
                  <ol className="list-decimal list-inside ml-2 text-blue-900 mb-2">
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
            <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Our Main Products Include:</h3>
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {mainProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-blue-100 text-blue-900 font-bold px-5 py-2 rounded-full border border-blue-200 text-sm"
                >
                  {product}
                </div>
              ))}
            </div>
            <h4 className="text-lg font-semibold text-amber-500 mb-3 text-center">
              The cover provides the following benefits:
            </h4>
            <ol className="list-decimal list-inside text-gray-800 ml-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {allBenefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ol>
          </>
        )}

        {activeTab === "benefits" && (
          <>
            <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
              Why Choose Our Motor Private Insurance?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-amber-50 px-5 py-4 rounded-xl shadow-sm border border-amber-200"
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
            <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">
              How Do I Start?
            </h3>
            <p className="text-gray-800 mb-4 text-center">
              Want to know your insurance cost or get covered? Click <b>Get Cover</b> to get a quick quote and start your cover online.
            </p>
            <p className="text-gray-800 mb-6 text-center">
              Need more info or help? Click <b>I Need Assistance</b> and our team will support you!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <a
                href="/get-cover"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Get Cover
              </a>
              <a
                href="/contact"
                className="bg-white border-2 border-amber-500 text-amber-500 font-bold py-3 px-8 rounded-lg hover:bg-amber-50 transition-colors"
              >
                I Need Assistance
              </a>
            </div>
          </>
        )}
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="rounded-2xl bg-amber-400/90 p-8 text-center shadow-xl mt-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-2">
            Get Covered in Minutes
          </h2>
          <p className="text-blue-900 mb-6">
            Protect your car and your peace of mind—get a custom quote or talk to our friendly insurance experts today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-cover"
              className="bg-blue-950 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/contact"
              className="bg-white border-2 border-blue-950 text-blue-950 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
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
