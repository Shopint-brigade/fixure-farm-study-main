import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight, BarChart3, ShoppingCart, Clock, RefreshCw } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 mb-5 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">
              Seamless E-commerce Integration
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Automate Your Shopify-Vendor Operations
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              SAB connects your Shopify store with vendors to automate inventory, product listings, pricing, and order management in real-time.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="primary" size="lg" href="/pricing">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" href="/how-it-works">
                See How It Works
              </Button>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <RefreshCw size={20} className="text-blue-700" />
                <span className="text-gray-700">Real-time Sync</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShoppingCart size={20} className="text-blue-700" />
                <span className="text-gray-700">Order Automation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} className="text-blue-700" />
                <span className="text-gray-700">Save 20+ Hours Weekly</span>
              </div>
              <div className="flex items-center space-x-2">
                <BarChart3 size={20} className="text-blue-700" />
                <span className="text-gray-700">Detailed Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block">
            <div className="relative w-full h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg opacity-20 blur-3xl transform -rotate-6"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-xl border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg">Dashboard Preview</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium">Inventory Status</div>
                      <div className="text-green-600 text-sm font-medium">Synced</div>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-md">
                      <div className="text-sm text-gray-600 mb-1">Products</div>
                      <div className="text-2xl font-bold">1,342</div>
                      <div className="text-xs text-green-600 mt-1">+24 today</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-md">
                      <div className="text-sm text-gray-600 mb-1">Orders</div>
                      <div className="text-2xl font-bold">287</div>
                      <div className="text-xs text-green-600 mt-1">+12 today</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-medium">Recent Updates</div>
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <span>Price updated for 24 products</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <span>12 new orders processed</span>
                      </div>
                      <div className="flex items-center text-xs">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                        <span>Inventory synced with 3 vendors</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;