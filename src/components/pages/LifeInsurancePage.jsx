import React, { useState } from 'react';
import { FaShieldAlt, FaChartLine, FaUsers, FaHandHoldingHeart, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const LifeInsurancePage = () => {
  const [activePlan, setActivePlan] = useState('term');

  const plans = [
    {
      id: 'term',
      title: 'Term Life Insurance',
      icon: <FaShieldAlt />,
      description: 'Affordable coverage for a specific period',
      features: [
        'Fixed premiums for the term duration',
        'Coverage from 5 to 30 years',
        'Death benefit to beneficiaries',
        'Convertible to permanent policy',
        'No cash value accumulation'
      ]
    },
    {
      id: 'whole',
      title: 'Whole Life Insurance',
      icon: <FaChartLine />,
      description: 'Lifetime protection with cash value',
      features: [
        'Coverage for your entire life',
        'Fixed premiums that never increase',
        'Cash value accumulation',
        'Tax-deferred growth on cash value',
        'Policy loans available'
      ]
    },
    {
      id: 'family',
      title: 'Family Protection',
      icon: <FaUsers />,
      description: 'Comprehensive coverage for your loved ones',
      features: [
        'Joint policies for couples',
        'Children protection riders',
        'Spousal coverage options',
        'Education fund protection',
        'Family income benefit'
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaHandHoldingHeart />,
      title: 'Financial Security',
      description: 'Ensure your family\'s financial stability'
    },
    {
      icon: <FaChartLine />,
      title: 'Debt Protection',
      description: 'Cover mortgages and outstanding loans'
    },
    {
      icon: <FaUsers />,
      title: 'Legacy Planning',
      description: 'Leave a meaningful legacy for future generations'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#141438' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')" }}
        ></div>
        
        <div className="relative z-20 h-full flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Life Insurance
              </h1>
              <p className="text-xl text-amber-400 mb-8 max-w-xl">
                Protect your family's future with confidence
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#plans" 
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  View Plans
                </a>
                <a 
                  href="#contact" 
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              Peace of Mind for Your Loved Ones
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Life insurance ensures your family's financial security, no matter what life brings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
                <div className="text-amber-500 text-5xl mb-6 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coverage Plans */}
      <div id="plans" className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              Simple, Affordable Plans
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the coverage that fits your family's needs
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <button
                key={plan.id}
                className={`px-6 py-3 rounded-full font-bold transition-colors ${
                  activePlan === plan.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-blue-800/50 text-gray-300 hover:bg-blue-700'
                }`}
                onClick={() => setActivePlan(plan.id)}
              >
                {plan.title}
              </button>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20">
              {plans.map((plan) => (
                activePlan === plan.id && (
                  <div key={plan.id} className="animate-fadeIn">
                    <div className="flex items-center mb-6">
                      <div className="text-amber-500 text-3xl mr-4">
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                        <p className="text-amber-500">{plan.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="text-amber-500 mt-1 mr-3 flex-shrink-0">•</div>
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
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
                Simple Process, Lasting Protection
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Get Quote</h3>
                <p className="text-gray-300">Contact us for a personalized quote</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Apply</h3>
                <p className="text-gray-300">Complete simple application</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Review</h3>
                <p className="text-gray-300">We assess and approve your policy</p>
              </div>
              
              <div className="text-center">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Protect</h3>
                <p className="text-gray-300">Your coverage begins immediately</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LifeInsurancePage;