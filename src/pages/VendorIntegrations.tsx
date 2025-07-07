import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import CallToAction from '../components/home/CallToAction';

interface VendorCategory {
  name: string;
  vendors: {
    name: string;
    status: 'live' | 'beta' | 'coming-soon';
    slug?: string;
  }[];
}

const vendorCategories: VendorCategory[] = [
  {
    name: 'Medical Supplies',
    vendors: [
      { name: 'McKesson', status: 'coming-soon' },
      { name: 'Medline', status: 'beta' }
    ]
  },
  {
    name: 'Marketplaces',
    vendors: [
      { name: 'Amazon MCF', status: 'live' },
      { name: 'Shopify', status: 'live' }
    ]
  },
  {
    name: 'Adult',
    vendors: [
      { name: 'Entrenue', status: 'live', slug: 'entrenue' },
      { name: 'Holiday Products', status: 'live' },
      { name: "Honey's Place", status: 'live' },
      { name: 'Williams Trading Co', status: 'live' }
    ]
  },
  {
    name: 'Automotive',
    vendors: [
      { name: 'Parts Unlimited', status: 'beta' },
      { name: 'WheelPros', status: 'coming-soon' }
    ]
  },
  {
    name: 'Furniture',
    vendors: [
      { name: 'James+James', status: 'beta' }
    ]
  }
];

const VendorIntegrations: React.FC = () => {
  const getStatusBadge = (status: 'live' | 'beta' | 'coming-soon') => {
    switch (status) {
      case 'live':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle size={12} className="mr-1" />
            Live
          </span>
        );
      case 'beta':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Beta
          </span>
        );
      case 'coming-soon':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            <Clock size={12} className="mr-1" />
            Coming Soon
          </span>
        );
    }
  };

  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vendor Integrations
            </h1>
            <p className="text-xl text-gray-600">
              Connect your Shopify store with leading vendors across multiple industries through our pre-built integrations.
            </p>
          </div>
        </Container>
      </div>

      <section className="py-16 bg-white">
        <Container>
          <div className="space-y-16">
            {vendorCategories.map((category, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.vendors.map((vendor, vIndex) => (
                    <Card key={vIndex} hover>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {vendor.name}
                          </h3>
                          {getStatusBadge(vendor.status)}
                        </div>
                        {vendor.status === 'live' && (
                          <Button 
                            variant="outline" 
                            href={vendor.slug ? `/vendor-integrations/${vendor.slug}` : '/contact'} 
                            className="mt-4"
                          >
                            Learn More
                            <ArrowRight size={16} className="ml-2" />
                          </Button>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Don't see your vendor?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're constantly adding new integrations. Contact us to request a specific vendor or learn about our custom integration options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" href="/contact">
                Request Integration
              </Button>
              <Button variant="outline" href="/documentation">
                View Documentation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CallToAction />
    </>
  );
};

export default VendorIntegrations;