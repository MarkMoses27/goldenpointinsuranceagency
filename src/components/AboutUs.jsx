// components/AboutUsSection.jsx

import { Link } from "react-router-dom";

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">

        {/* Welcome */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-3 text-amber-500">
            Welcome to Golden Point Insurance Agency
          </h2>
          <p className="text-lg md:text-xl text-blue-950 font-light max-w-2xl mx-auto leading-relaxed">
          

Welcome to Golden Point Insurance Agency, where your peace of mind is our priority. We are delighted to present our comprehensive insurance solutions tailored to meet the unique needs of both individuals and corporations. Our mission is to provide prompt and reliable services that ensure your most valuable assets are protected.

With years of experience and a dedication to excellence, our team of experts is committed to delivering customized insurance solutions that safeguard your family, employees, investments, and future. We understand the importance of trust and integrity in our industry, and we strive to build lasting relationships with our clients based on these core values.

Thank you for considering Golden Point Insurance Agency as your trusted partner in insurance. We look forward to serving you and meeting all your insurance needs with professionalism and care.

          </p>
        </div>
        
        {/* Who We Are (Founder Story, deep blue) */}
        <div className="mb-16 bg-blue-950 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-400/40 relative overflow-hidden">
          {/* Soft gold background shapes */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-300 rounded-full translate-y-24 -translate-x-24"></div>
          </div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            {/* Founder Photo Placeholder */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-40 h-40 bg-gradient-to-br from-amber-400/90 to-amber-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <div className="w-36 h-36 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Founder Info */}
            <div className="md:col-span-2 mt-8 md:mt-0">
              <span className="inline-block uppercase text-xs font-bold tracking-widest text-amber-400 bg-white/10 px-3 py-1 rounded-full mb-3">
                Founded in 2014
              </span>
              <h3 className="text-3xl md:text-4xl font-black mb-2 text-white">
                Meet Winfred Kinyua
              </h3>
              <div className="text-amber-300 text-lg font-medium mb-4">
                Founder & CEO • 10+ Years Experience
              </div>
              <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                Golden Point Insurance Agency began with a clear mission: to provide Kenyans with reliable and affordable insurance solutions. With extensive industry experience, Winfred built Golden Point on principles of <span className="text-amber-400 font-semibold">integrity, transparency, and personalized service</span>. Today, we're proud to serve thousands of clients nationwide.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-7">
            <h4 className="text-amber-500 text-xl font-extrabold uppercase tracking-wide mb-1">
              Our Core Values
            </h4>
            <p className="text-blue-950 mb-2 text-base font-medium">
              The principles that guide everything we do at Golden Point
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Integrity",
                desc: "Honest and ethical in all our dealings",
                icon: (
                  <svg className="w-8 h-8 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5zm0-10v10" />
                  </svg>
                )
              },
              {
                title: "Client Focus",
                desc: "Tailored solutions for individual needs",
                icon: (
                  <svg className="w-8 h-8 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                  </svg>
                )
              },
              {
                title: "Reliability",
                desc: "Consistent service you can depend on",
                icon: (
                  <svg className="w-8 h-8 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-9a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Innovation",
                desc: "Embracing technology for better solutions",
                icon: (
                  <svg className="w-8 h-8 text-amber-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-blue-950 rounded-2xl p-5 shadow flex flex-col items-center border border-blue-900/40">
                {value.icon}
                <h5 className="text-amber-400 text-lg font-bold mb-1">{value.title}</h5>
                <p className="text-white text-sm text-center">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-blue-950 rounded-3xl p-8 shadow-lg border border-blue-900/40 flex flex-col items-center">
            <h4 className="text-amber-400 text-lg font-bold mb-3 uppercase tracking-wider">Our Mission</h4>
            <p className="text-white text-base leading-relaxed text-center">
              Our Mission at golden point insurance Agency is to ensure that our clients enjoy total peace of mind and security by ensuring that things that most important are covered by the best insurers.
            </p>
          </div>
          {/* Vision */}
          <div className="bg-blue-950 rounded-3xl p-8 shadow-lg border border-blue-900/40 flex flex-col items-center">
            <h4 className="text-amber-400 text-lg font-bold mb-3 uppercase tracking-wider">Our Vision</h4>
            <p className="text-white text-base leading-relaxed text-center">
              Our vision at Golden Point Insurance Agency is to become the most trusted insurance partner in Kenya, recognized for our commitment to excellence and client satisfaction. We aim to provide peace of mind and security to every client through innovative and accessible insurance solutions.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-black mb-6 text-amber-500 uppercase tracking-wide">
            Why Choose Us
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              'Expert Insurance Guidance',
              'Personalized Customer Service',
              'Swift Claim Process',
              'Prompt Response',
              '24/7 Availability',
              'Convenient Premium Payment Plan',
              'Strong, Trusted Insurer Partnerships'
            ].map((point, idx) => (
              <div
                key={idx}
                className="flex items-center bg-amber-100 px-4 py-2 rounded-full border border-amber-200"
              >
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-blue-950 font-semibold text-xs">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl font-bold text-base transition shadow hover:shadow-lg"
          >
            Learn More About Us
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
