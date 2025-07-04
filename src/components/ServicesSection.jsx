// components/ServicesSection.jsx

import { Link } from "react-router-dom";


//images for services

import motorImage from "../assets/motor-insurance.png"; 
import healthImage from "../assets/health-insurance.png";


const services = [
  {
    title: "Motor Insurance",
    desc: "Comprehensive cover for your vehicle—now including Private, Commercial, PSV, and Uber.",
    features: [
      "Comprehensive & Third Party",
      "Private & Commercial",
      "PSV, Uber & Ride-hailing",
      "Flexible payment options"
    ],
    image: motorImage, 
    link: "/motor"
  },
  {
    title: "Medical Insurance",
    desc: "Affordable and reliable medical cover for individuals, families, SMEs, and corporates.",
    features: [
      "Individual, Family, Corporate",
      "Inpatient & Outpatient",
      "Dental, Optical, Maternity"
    ],
    image: healthImage,
    link: "/health"
  },
  {
    title: "Life Insurance",
    desc: "Protect your loved ones and invest in their future with flexible life solutions.",
    features: [
      "Education & Endowment",
      "Investment Life Insurance",
      "Whole Life Cover"
    ],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/life"
  },
  {
    title: "Pensions",
    desc: "Prepare for a secure retirement with individual and group pension solutions.",
    features: [
      "Individual Retirement Plans",
      "Employer/Corporate Schemes",
      "Retirement Advisory"
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/pensions"
  },
  {
    title: "Asset Management",
    desc: "Grow your savings and investments with tailored financial solutions.",
    features: [
      "Money Market Funds",
      "Annuity Solutions",
      "Bulk Investments"
    ],
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/asset"
  },
  {
    title: "Property Insurance",
    desc: "Comprehensive protection for homes, buildings, and businesses—including fire cover.",
    features: [
      "Building & Contents",
      "Fire Insurance",
      "Personal & Business Premises"
    ],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/domestic"
  },
  {
    title: "WIBA (Work Injury Benefits Act)",
    desc: "Cover your staff in case of work-related accidents and illnesses and comply with Kenyan law.",
    features: [
      "Work Injury Compensation",
      "Medical Expenses",
      "Disability & Last Expense Cover"
    ],
    image: "https://images.unsplash.com/photo-1581093458797-660c5a1e50e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/cover/wiba"
  },
  {
    title: "Travel Insurance",
    desc: "Travel with confidence. Get medical, lost luggage, and trip cancellation protection worldwide.",
    features: [
      "International Medical Cover",
      "Baggage & Delay Protection",
      "Emergency Assistance"
    ],
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/travel"
  },
  {
    title: "Livestock Insurance",
    desc: "Safeguard your animals and agribusiness from unexpected risks and losses.",
    features: [
      "Cattle, Goats, Sheep Cover",
      "Drought, Disease, Theft",
      "Affordable Premiums"
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/livestock"
  },
  {
    title: "Professional Indemnity",
    desc: "Defend your career and business reputation against legal claims and liability.",
    features: [
      "Legal Costs Covered",
      "Negligence & Error Protection",
      "For Professionals & Firms"
    ],
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/indemnity"
  },
  {
    title: "Personal Accident Cover",
    desc: "Get compensation for accidents, injuries, or disability, for yourself and your loved ones.",
    features: [
      "Medical Expenses",
      "Accidental Death/Disability",
      "Family & Individual Plans"
    ],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/accident"
  },
  {
    title: "Students Personal Cover",
    desc: "Affordable accident and health cover for students—on and off campus.",
    features: [
      "Medical Expenses",
      "Accident & Disability",
      "Covers School Activities"
    ],
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    link: "/students"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      {/* Gold accent bar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-amber-500">Our Services</h2>
          <p className="text-lg md:text-xl text-blue-950 font-light max-w-2xl mx-auto">
            Comprehensive insurance solutions for your life, business, family, and future.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl shadow-xl border border-blue-900/10 flex flex-col h-full hover:shadow-2xl transition">
              {/* Image */}
              <div className="h-40 w-full rounded-t-3xl overflow-hidden">
                <img src={service.image} alt={service.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-950">{service.title}</h3>
                  <Link
                    to={service.link}
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2 rounded-xl font-bold text-sm shadow hover:shadow-lg transition whitespace-nowrap"
                  >
                    Get Cover
                  </Link>
                </div>
                <p className="text-blue-950/90 text-base mb-3 font-light">{service.desc}</p>
                <ul className="mb-4 space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-blue-950/80 text-sm">
                      <span className="w-2 h-2 mr-3 bg-amber-500 rounded-full inline-block"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
