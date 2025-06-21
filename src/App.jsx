import { BrowserRouter, Routes, Route } from 'react-router-dom'
  


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
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home Page */}
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

        
        {/* Add more routes as needed */}
      </Routes>
      
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  )
}