import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { ArrowRight, CheckCircle, MapPin, Globe, Building } from 'lucide-react';

interface VendorInfo {
  name: string;
  description: string;
  integrationMethod: string;
  setupCost: string;
  about: string;
  website: string;
  headquarters: string;
  category: string;
  productCount: string;
  specialization: string;
}

const vendors: Record<string, VendorInfo> = {
  'entrenue': {
    name: 'Entrenue',
    description: 'Connect your Shopify store with Entrenue for automated inventory and order management.',
    integrationMethod: 'API',
    setupCost: 'Free',
    about: 'Entrenue carries around 5,000 products, specializing in high-quality adult novelties, with a focus on curated, innovative brands.',
    website: 'https://entrenue.com',
    headquarters: 'Phoenix',
    category: 'Adult',
    productCount: '5,000+',
    specialization: 'High-quality adult novelties and curated brands'
  }
};

const VendorDetail: React.FC = () => {
  const { vendorSlug } = useParams();
  const vendor = vendors[vendorSlug || ''];

  if (!vendor) {
    return (
      <div className="pt-24 pb-16">
        <Container>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Vendor not found</h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {vendor.name} Integration
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {vendor.description}
            </p>
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
              <div className="flex items-center text-green-700">
                <CheckCircle size={20} className="mr-2" />
                <span>Looking to connect your shopping cart with {vendor.name}?</span>
              </div>
              <div className="flex items-center text-green-700">
                <CheckCircle size={20} className="mr-2" />
                <span>Are you finding it challenging to link {vendor.name} to your e-commerce store?</span>
              </div>
              <div className="flex items-center text-green-700">
                <CheckCircle size={20} className="mr-2" />
                <span>Is it consuming hours of your time to maintain updated product listings?</span>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Integration Information
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Integration Method</h3>
                  <p className="text-gray-600">{vendor.integrationMethod}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Setup Cost</h3>
                  <p className="text-gray-600">{vendor.setupCost}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Product Count</h3>
                  <p className="text-gray-600">{vendor.productCount}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Specialization</h3>
                  <p className="text-gray-600">{vendor.specialization}</p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
                About {vendor.name}
              </h2>
              <p className="text-gray-600 mb-6">{vendor.about}</p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="text-blue-600 mr-3" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Website</h3>
                    <a href={vendor.website} className="text-blue-600 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
                      {vendor.website}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-600 mr-3" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">{vendor.headquarters}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="text-blue-600 mr-3" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-900">Industry Category</h3>
                    <p className="text-gray-600">{vendor.category}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get Started with {vendor.name} Integration
                </h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                      Website URL
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your integration needs..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" variant="primary" fullWidth>
                    Get Started
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm text-gray-500">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default VendorDetail;