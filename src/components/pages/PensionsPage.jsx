import { useState } from 'react';
import { FaChartLine, FaHandHoldingUsd, FaUserTie, FaPiggyBank, FaBalanceScale, FaShieldAlt } from 'react-icons/fa';

// Reusable Button component
const Button = ({ children, onClick, className, href }) => {
  return href ? (
    <a href={href} className={`py-3 px-8 rounded-lg font-bold transition-colors ${className}`}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={`py-3 px-8 rounded-lg font-bold transition-colors ${className}`}>
      {children}
    </button>
  );
};

// BenefitCard Component
const BenefitCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/80 rounded-2xl p-8 border border-gray-500/20 flex-1 min-w-[300px]">
    <div className="text-4xl mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3 text-center">{title}</h3>
    <p className="text-gray-300 text-center">{description}</p>
  </div>
);

// StepCard Component
const StepCard = ({ step, title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
    <div className="h-full bg-gray-800/80 rounded-2xl p-6 border border-gray-500/20">
      <div className="flex items-center mb-4">
        <div className="bg-orange-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
          {step}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 pl-14">{description}</p>
    </div>
  </div>
);

// PensionPlan Component
const PensionPlan = ({ plan, activePlan, setActivePlan }) => (
  <button
    onClick={() => setActivePlan(plan.id)}
    className={`px-6 py-3 rounded-full font-semibold transition-colors ${
      activePlan === plan.id ? 'bg-orange-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
    }`}
  >
    {plan.title}
  </button>
);

// HeroSection Component
const HeroSection = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')",
      }}
    ></div>
    <div className="relative z-20 py-24 flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Pension Planning</h1>
          <p className="text-xl text-orange-400 mb-8 max-w-xl">
            Secure your financial future with our retirement solutions
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#plans" className="bg-orange-600 hover:bg-orange-700 text-white">
              View Plans
            </Button>
            <Button
              href="#contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main PensionPage Component
const PensionPage = () => {
  const [activePlan, setActivePlan] = useState('personal');

  const pensionPlans = [
    {
      id: 'personal',
      title: 'Personal Pension',
      icon: <FaUserTie />,
      description: 'Individual retirement savings plan',
      features: [
        'Flexible contribution amounts',
        'Tax advantages on contributions',
        'Choice of investment funds',
        'Regular income at retirement',
        'Portability between employers',
      ],
    },
    {
      id: 'employer',
      title: 'Employer-Sponsored',
      icon: <FaHandHoldingUsd />,
      description: 'Workplace retirement benefits',
      features: [
        'Employer contributions matching',
        'Group pension schemes',
        'Automatic enrollment',
        'Professional fund management',
        'Employee financial education',
      ],
    },
  ];

  const benefits = [
    {
      icon: <FaChartLine className="text-orange-600" />,
      title: 'Long-Term Growth',
      description: 'Compound growth potential over decades',
    },
    {
      icon: <FaShieldAlt className="text-orange-600" />,
      title: 'Financial Security',
      description: 'Guaranteed income during retirement',
    },
    {
      icon: <FaBalanceScale className="text-orange-600" />,
      title: 'Tax Efficiency',
      description: 'Tax benefits on contributions and growth',
    },
  ];

  const steps = [
    { step: 1, title: 'Consultation', description: 'Discuss your retirement goals and financial situation' },
    { step: 2, title: 'Plan Selection', description: 'Choose the right pension plan for your needs' },
    { step: 3, title: 'Contribution Setup', description: 'Establish regular contributions that fit your budget' },
    { step: 4, title: 'Portfolio Management', description: 'Professional management of your retirement funds' },
    { step: 5, title: 'Regular Reviews', description: 'Annual check-ins to adjust your plan as needed' },
    { step: 6, title: 'Retirement Income', description: 'Receive regular payments during your retirement' },
  ];

  return (
    <div className="min-h-screen bg-[#141438]">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Pension Planning */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">Secure Your Retirement Future</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Start planning today to ensure financial independence during your golden years
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} {...benefit} />
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <FaPiggyBank className="text-white text-6xl" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-white mb-4">The Power of Early Planning</h3>
                <p className="text-white mb-6">
                  Starting your pension plan early can significantly increase your retirement savings through compound growth.
                  Even small, regular contributions can grow into substantial retirement funds when given time to mature.
                </p>
                <Button href="#plans" className="inline-block bg-white text-orange-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                  Start Planning Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pension Plans */}
      <div id="plans" className="py-16 bg-gradient-to-r from-gray-800 to-gray-700">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">Our Pension Solutions</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Flexible retirement plans tailored to your needs</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {pensionPlans.map((plan) => (
              <PensionPlan
                key={plan.id}
                plan={plan}
                activePlan={activePlan}
                setActivePlan={setActivePlan}
              />
            ))}
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/20">
            {pensionPlans.map(
              (plan) =>
                activePlan === plan.id && (
                  <div key={plan.id}>
                    <div className="flex items-center mb-6">
                      <div className="text-orange-600 text-3xl mr-4">{plan.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
                        <p className="text-orange-500">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start mb-3">
                          <div className="text-orange-500 mt-1 mr-3">•</div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <Button href="#contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white">
                        Explore {plan.title} Options
                      </Button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">Simple Pension Planning Process</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">From planning to retirement in six straightforward steps</p>
          </div>

          <div className="flex flex-wrap justify-center">
            {steps.map((step) => (
              <StepCard key={step.step} {...step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PensionPage;
