import  winfred from '../../assets/winnie.png';
import {
  FaShieldAlt,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaLightbulb,
  FaAward,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';

const coreValues = [
  { id: 1, icon: <FaShieldAlt className="text-amber-500" />, title: 'Integrity', description: 'Honest and ethical in all our dealings' },
  { id: 2, icon: <FaUsers className="text-amber-500" />, title: 'Client Focus', description: 'Tailored solutions for individual needs' },
  { id: 3, icon: <FaHandshake className="text-amber-500" />, title: 'Reliability', description: 'Consistent service you can depend on' },
  { id: 4, icon: <FaChartLine className="text-amber-500" />, title: 'Innovation', description: 'Embracing technology for better solutions' }
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '1,000+', label: 'Clients Served' },
  { value: '98%', label: 'Claim Approval Rate' },
  { value: '24/7', label: 'Support Available' }
];

const whyChooseUs = [
  'Expert Insurance Guidance',
  'Personalized Customer Service',
  'Swift Claim Process',
  'Prompt Response',
  '24/7 Availability',
  'Convenient Premium Payment Plan',
  'Strong, Trusted Insurer Partnerships'
];

const AboutPage = () => (
  <div className="bg-[#141438] min-h-screen w-full">
    {/* HERO */}
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="w-full h-[38vw] max-h-[320px] object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/85 sm:bg-gradient-to-r sm:from-black/80 sm:to-black/30" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[38vw] max-h-[320px] px-4 py-6">
        <h1 className="text-white text-xl xs:text-2xl sm:text-4xl md:text-5xl font-bold leading-tight drop-shadow mb-2">About Golden Point Insurance</h1>
        <p className="text-amber-400 text-base xs:text-lg sm:text-xl max-w-md mx-auto font-medium">Your trusted partner in protection and peace of mind for ove 10 years</p>
      </div>
    </div>

{/* STORY */}
<section className="container mx-auto px-4 py-16">
  <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
    <div className="max-w-4xl mx-auto">
      <div className="text-gray-900 text-base lg:text-lg leading-relaxed space-y-6">
        <p>
          Founded by <span className="font-semibold text-blue-600">Winfred Kinyua</span>, Golden Point Insurance Agency began with a clear mission: to ensure our clients enjoy total peace of mind and security by covering what matters most with the best insurers.
        </p>
        
        <p>
          With extensive industry experience, Winfred built Golden Point on principles of <span className="font-semibold text-orange-600">integrity, transparency, and personalized service</span>. His vision has guided the company through both economic challenges and technological innovations in the insurance sector.
        </p>
        
        <p>
          Today, we're proud to offer a comprehensive range of insurance products while staying true to our core values of <span className="font-semibold text-blue-600">putting clients first</span> and delivering exceptional service.
        </p>
      </div>
    </div>
  </div>
</section>

    {/* STATS */}
    <section className="w-full py-7 bg-gradient-to-r from-amber-500 to-amber-600">
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-xs sm:text-base text-white">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* MISSION / VISION */}
    <section className="container mx-auto px-2 sm:px-4 py-7 sm:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
        <div className="bg-white/95 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center">
          <div className="text-amber-500 text-3xl sm:text-4xl mb-2">
            <FaLightbulb />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-700 text-sm sm:text-base">Our Mission at golden point insurance Agency is to ensure that our clients enjoy total peace of mind and security by ensuring that things that most important are covered by the best insurers.</p>
        </div>
        <div className="bg-white/95 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center text-center">
          <div className="text-amber-500 text-3xl sm:text-4xl mb-2">
            <FaAward />
          </div>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-700 text-sm sm:text-base">To be Kenya's most trusted insurance partner, recognized for our integrity, innovation, and exceptional client service. We aim to transform how Kenyans perceive and experience insurance, making it a valued asset rather than a necessary expense.</p>
        </div>
      </div>
    </section>

    {/* CORE VALUES */}
    <section className="container mx-auto px-2 sm:px-4 py-7">
      <div className="text-center mb-7">
        <h2 className="text-lg sm:text-2xl font-bold text-white mb-1">Our Core Values</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-3"></div>
        <p className="text-xs sm:text-base text-gray-300">The principles that guide everything we do at Golden Point</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
        {coreValues.map((value) => (
          <div key={value.id} className="bg-white/95 rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:-translate-y-1 transition">
            <div className="text-2xl mb-1">{value.icon}</div>
            <h3 className="text-base font-bold text-gray-800 mb-1">{value.title}</h3>
            <p className="text-gray-600 text-xs">{value.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="container mx-auto px-2 sm:px-4 py-7">
      <div className="text-center mb-7">
        <h2 className="text-lg sm:text-2xl font-bold text-white mb-1">Why Choose Us</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-3"></div>
        <p className="text-xs sm:text-base text-gray-300">What sets Golden Point Insurance Agency apart from the rest?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl mx-auto">
        {whyChooseUs.map((reason, idx) => (
          <div
            key={idx}
            className="bg-white/90 rounded-xl shadow p-3 flex items-center gap-2 border border-amber-100 text-xs sm:text-base"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="text-blue-950 font-semibold">{reason}</span>
          </div>
        ))}
      </div>
    </section>

    {/* LEADERSHIP */}
    <section className="container mx-auto px-2 sm:px-4 py-7">
      <div className="text-center mb-7">
        <h2 className="text-lg sm:text-2xl font-bold text-white mb-1">Our Leadership</h2>
        <div className="w-16 h-1 bg-amber-500 mx-auto mb-3"></div>
        <p className="text-xs sm:text-base text-gray-300">Guided by visionary leadership with deep industry expertise</p>
      </div>
      <div className="bg-white/95 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col md:flex-row items-center gap-5 max-w-2xl mx-auto">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <div className="relative w-40 h-40 bg-gradient-to-br from-amber-400/90 to-amber-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
            <img src={winfred} alt="Winfred Kinyua" className="w-36 h-36 object-cover rounded-full" />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-gray-700 text-xs sm:text-base space-y-2">
          <h3 className="text-base sm:text-xl font-bold text-gray-800">Winfred Kinyua</h3>
          <p className="text-amber-600 font-bold text-xs sm:text-base mb-1">CEO & Founder • 10+ Years Experience</p>
          <p>With over a decade of experience in the insurance industry, Winfred Kinyua founded Golden Point Insurance Agency with a vision to create a client-centric insurance agency that prioritizes transparency and personalized service.</p>
          <p>Under his leadership, Golden Point has grown to become a respected insurance agency, serving thousands of clients nationwide. Winfred's expertise spans all areas of insurance, with special focus on developing customized solutions for Kenyan businesses and families.</p>
          <div className="flex gap-3 mt-2">
            <a href="mailto:goldenpoint.ia@gmail.com" className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/254727964113" className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* CONTACT CTA */}
    <section className="py-8 px-2">
      <div
        className="rounded-xl p-4 sm:p-7 text-center max-w-xl mx-auto bg-[#141438] border border-amber-400/30 shadow relative"
      >
        <h2 className="text-base sm:text-xl font-bold text-amber-400 mb-2">Ready to Secure Your Future?</h2>
        <p className="text-xs sm:text-base text-white mb-4">Contact us today for a personalized insurance consultation. Our experts are ready to help you find the perfect coverage.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-2">
          <a
            href="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-lg transition-colors text-xs sm:text-base"
          >
            Get a Quote
          </a>
          <a
            href="tel:+254727964113"
            className="bg-transparent border-2 border-amber-500 text-amber-500 font-bold py-2 px-4 rounded-lg hover:bg-amber-500/10 transition-colors text-xs sm:text-base"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
