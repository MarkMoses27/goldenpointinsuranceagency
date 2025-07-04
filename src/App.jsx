import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

import Header from './components/Header'
import Footer from './components/Footer'

// Pages
import MotorInsurancePage from './components/pages/MotorInsurancePage'
import HealthInsurancePage from './components/pages/HealthInsurancePage'
import LifeInsurancePage from './components/pages/LifeInsurancePage'
import WIBAInsurancePage from './components/pages/WIBAInsurancePage'
import AssetManagementPage from './components/pages/AssetManagementPage'
import DomesticPackagePage from './components/pages/DomesticPackagePage'
import TravelInsurancePage from './components/pages/TravelInsurancePage'
import PensionsPage from './components/pages/PensionsPage'
import ContactPage from './components/pages/ContactPage'
import AboutPage from './components/pages/AboutPage'
import OurClients from './components/pages/OurClients'

// Homepage sections
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import ServicesSection from './components/ServicesSection'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures every route starts at the top */}
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
            <ServicesSection />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/motor" element={<MotorInsurancePage />} />
        <Route path="/health" element={<HealthInsurancePage />} />
        <Route path="/life" element={<LifeInsurancePage />} />
        <Route path="/wiba" element={<WIBAInsurancePage />} />
        <Route path="/asset" element={<AssetManagementPage />} />
        <Route path="/domestic" element={<DomesticPackagePage />} />
        <Route path="/travel" element={<TravelInsurancePage />} />
        <Route path="/pensions" element={<PensionsPage />} />
        <Route path="/clients" element={<OurClients />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
