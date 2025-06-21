import React, { useState } from 'react';
import { FaUserMd, FaHeartbeat, FaHospital, FaPills, FaAmbulance, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const HealthInsurancePage = () => {
  const [activePlan, setActivePlan] = useState('individual');

  const plans = [
    {
      id: 'individual',
      title: 'Individual Plan',
      icon: <FaUserMd />,
      description: 'Comprehensive coverage for individuals',
      features: [
        'Inpatient hospitalization',
        'Outpatient consultations',
        'Diagnostic tests',
        'Prescription drugs',
        'Dental and optical',
        'Maternity coverage'
      ]
    },
    {
      id: 'family',
      title: 'Family Plan',
      icon: <FaHeartbeat />,
      description: 'Complete protection for your entire family',
      features: [
        'Coverage for spouse and children',
        'Child wellness benefits',
        'Chronic disease management',
        'Preventive care',
        'Vaccinations',
        '24/7 telemedicine'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaPills />,
      title: 'Comprehensive Drug Coverage',
      description: 'Access to over 5,000 prescription medications'
    },
    {
      icon: <FaAmbulance />,
      title: 'Emergency Services',
      description: '24/7 emergency care and ambulance services'
    }
  ];

  return (
    <div className="min-h-screen bg-[#141438] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[60vh] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health Insurance</h1>
          <p className="text-xl text-amber-400 mb-6">Quality healthcare coverage for you and your family</p>
          <div className="flex justify-center gap-4">
            <a href="#plans" className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">View Plans</a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors">Get Quote</a>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Your Health, Our Priority</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">Access quality healthcare with our comprehensive medical insurance plans</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-amber-500/20">
                <div className="text-amber-500 text-5xl mb-6 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Plans */}
      <section id="plans" className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">Simple, Affordable Plans</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">Choose the health coverage that fits your needs</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={`px-6 py-3 rounded-full font-bold transition-colors ${
                  activePlan === plan.id ? 'bg-amber-500 text-white' : 'bg-blue-800/50 text-gray-300 hover:bg-blue-700'
                }`}
                onClick={() => setActivePlan(plan.id)}
              >
                {plan.title}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            {plans.map((plan) => (
              activePlan === plan.id && (
                <div key={plan.id} className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
                  <div className="flex items-center mb-6">
                    <div className="text-amber-500 text-3xl mr-4">{plan.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8">{plan.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <FaPills className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 text-center">
                    <a
                      href="#contact"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                    >
                      Get {plan.title} Quote
                    </a>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Why Health Insurance Matters */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Why Health Insurance Matters</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            With Golden Point Health Insurance, you can rest assured knowing that you and your family are protected against unexpected medical expenses. Our plans provide comprehensive coverage so you can focus on what matters most - your health and wellbeing.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="text-amber-500 text-6xl">
                <FaAmbulance />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-4">Peace of Mind</h3>
              <p className="text-gray-300 mb-6">
                Our insurance coverage provides the support and protection you need, so you can focus on living a healthy, happy life.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Get Covered Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HealthInsurancePage;
