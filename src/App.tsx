import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Documentation from './pages/Documentation';
import QuickStartGuide from './pages/QuickStartGuide';
import CaseStudies from './pages/CaseStudies';
import CaseStudyFashionPlus from './pages/CaseStudyFashionPlus';
import VendorIntegrations from './pages/VendorIntegrations';
import VendorDetail from './pages/VendorDetail';
import NotFound from './pages/NotFound';
import CaseStudyFixureFarm from './pages/CaseStudyFixureFarm';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/documentation/quick-start-guide" element={<QuickStartGuide />} />
          <Route path="/case-studies" element={<CaseStudies />} />  */}
          <Route path="/case-studies/fixurefarm" element={<CaseStudyFixureFarm />} />
          {/* <Route path="/vendor-integrations" element={<VendorIntegrations />} />
          <Route path="/vendor-integrations/:vendorSlug" element={<VendorDetail />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;