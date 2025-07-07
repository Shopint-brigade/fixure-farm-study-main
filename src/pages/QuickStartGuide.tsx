import React from 'react';
import Container from '../components/ui/Container';
import { ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const QuickStartGuide: React.FC = () => {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-blue-700 mb-4">
              <a href="/documentation" className="hover:underline">Documentation</a>
              <ArrowRight size={16} />
              <span>Quick Start Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <Clock size={18} className="mr-2" />
              <span>5 min read</span>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-xl text-gray-800">
                Get started with SAB in minutes. This guide will walk you through the initial setup process 
                and help you connect your first vendor.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  1
                </div>
                <div className="pl-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Your Account</h2>
                  <div className="prose prose-lg">
                    <p className="text-gray-700">
                      First, sign up for a SAB account. You'll need to provide basic information about your business 
                      and choose a subscription plan that fits your needs.
                    </p>
                    <Button variant="primary" href="/pricing" className="mt-4">
                      Create Account
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  2
                </div>
                <div className="pl-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Shopify Store</h2>
                  <div className="prose prose-lg">
                    <p className="text-gray-700">
                      Once your account is created, you'll need to connect your Shopify store. This process is simple:
                    </p>
                    <ul className="bg-gray-50 p-6 rounded-lg space-y-3 my-4">
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Log into your SAB dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Click on "Connect Store"</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Select Shopify from the list of platforms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Follow the OAuth authentication process</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Grant the necessary permissions</span>
                      </li>
                    </ul>

                    <div className="flex items-start p-6 bg-blue-50 rounded-lg border border-blue-100">
                      <AlertCircle size={24} className="text-blue-700 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-1">Pro Tip</h4>
                        <p className="text-blue-800">
                          Make sure you're logged into your Shopify store as an admin before starting the connection process.
                          This will ensure a smooth authentication flow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  3
                </div>
                <div className="pl-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Configure Your Settings</h2>
                  <div className="prose prose-lg">
                    <p className="text-gray-700">After connecting your store, you'll need to configure your basic settings:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Inventory Sync</h4>
                        <p className="text-sm text-gray-600">Set frequency and rules for inventory updates</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Product Listings</h4>
                        <p className="text-sm text-gray-600">Configure automated product creation rules</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Order Routing</h4>
                        <p className="text-sm text-gray-600">Define how orders are processed and routed</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Pricing Rules</h4>
                        <p className="text-sm text-gray-600">Set up automated pricing calculations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  4
                </div>
                <div className="pl-16">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Your First Vendor</h2>
                  <div className="prose prose-lg">
                    <p className="text-gray-700">Now you're ready to add your first vendor:</p>
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4 my-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold mr-3 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold">Go to the Vendors section</h4>
                          <p className="text-sm text-gray-600">Navigate to the vendors management area</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold mr-3 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold">Click "Add New Vendor"</h4>
                          <p className="text-sm text-gray-600">Start the vendor connection process</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold mr-3 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold">Select your vendor</h4>
                          <p className="text-sm text-gray-600">Choose from our pre-built integrations</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold mr-3 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold">Complete setup</h4>
                          <p className="text-sm text-gray-600">Follow the vendor-specific setup instructions</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gray-50 rounded-lg p-8 mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Documentation</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Explore our detailed guides and API documentation
                    </p>
                    <Button variant="outline" href="/documentation" size="sm">
                      View Docs
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Community</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Join our community forum to connect with other users
                    </p>
                    <Button variant="outline" href="#" size="sm">
                      Join Forum
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Support</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Get help from our technical support team
                    </p>
                    <Button variant="outline" href="/contact" size="sm">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                <Button variant="outline" href="/documentation">
                  Back to Documentation
                </Button>
                <Button variant="primary" href="/documentation/connecting-shopify">
                  Next: Connecting Your Shopify Store
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default QuickStartGuide;