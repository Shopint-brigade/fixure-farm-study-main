import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const partners = [
  { name: 'Shopify', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg' },
  { name: 'WooCommerce', logo: 'https://cdn.worldvectorlogo.com/logos/woocommerce.svg' },
  { name: 'BigCommerce', logo: 'https://cdn.worldvectorlogo.com/logos/bigcommerce.svg' },
  { name: 'Magento', logo: 'https://cdn.worldvectorlogo.com/logos/magento.svg' },
  { name: 'Amazon', logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon.svg' },
  { name: 'eBay', logo: 'https://cdn.worldvectorlogo.com/logos/ebay.svg' },
];

const IntegrationPartners: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Integration Partners"
          subtitle="SAB seamlessly connects with the platforms you already use."
          centered
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="flex justify-center items-center p-6 rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={`${partner.name} logo`} 
                className="max-h-16 max-w-full" 
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Don't see your platform? We're constantly adding new integrations. 
            <br />Contact us to request your specific integration needs.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
          >
            Request an Integration
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default IntegrationPartners;