import React from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { ArrowLeft, ArrowRight, BarChart3, Clock, Users, TrendingUp } from 'lucide-react';

const CaseStudyFixtureFarm: React.FC = () => {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-blue-700 mb-4">
              <a href="/case-studies" className="hover:underline">Case Studies</a>
              <ArrowRight size={16} />
              <span>FixtureFarm</span>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-96">
                <img 
                  src="https://fixturefarm.com/cdn/shop/files/MOTO_CH97358-BK_LIFESTYLE_646e17d5-7555-405e-84a7-d6e31798c902.jpg?v=1743271572&width=1780"
                  alt="FixtureFarm warehouse operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                      How FixtureFarm Streamlined Inventory Across 15 Vendors
                    </h1>
                    <p className="text-xl text-gray-200">
                      A journey from manual updates to automated inventory and price management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-700 mb-2">
                  <TrendingUp size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                <p className="text-gray-600">Reduction in stockouts</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-700 mb-2">
                  <Clock size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">60+</div>
                <p className="text-gray-600">Hours saved monthly on inventory management</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-blue-700 mb-2">
                  <BarChart3 size={24} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">28%</div>
                <p className="text-gray-600">Increase in sales</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>About FixtureFarm</h2>
              <p>
                FixtureFarm is a leading online retailer offering the most extensive selection of designer fixtures for every space and budget. Founded in 2018, FixtureFarm has grown from a small boutique to a major player in the lighting and fixture industry, serving customers across North America through its curated catalog of over 3 million products. Their FixtureFarm TRADE program allows B2B buyers to purchase at wholesale pricing, reflecting their commitment to treating customers and employees like family while pursuing excellence.
              </p>

              <div className="bg-gray-50 border-l-4 border-blue-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Profile</h3>
                <ul className="space-y-2">
                  <li><strong>Industry:</strong> Lighting & Fixtures</li>
                  <li><strong>Size:</strong> 50+ employees</li>
                  <li><strong>Location:</strong> Toronto, Canada</li>
                  <li><strong>Platform:</strong> Shopify Plus</li>
                </ul>
              </div>

              <h2>The Challenge</h2>
              <p>
                As FixtureFarm expanded their vendor network to 15 soon-to-be-finalized vendors, with plans to scale up to 100 vendors within the next two quarters, they faced significant challenges in managing their inventory effectively:
              </p>
              <ul>
                <li>Manual inventory updates taking 60+ hours per month</li>
                <li>Frequent stockouts and overselling issues</li>
                <li>Inconsistent product data across channels</li>
                <li>Challenges maintaining MAP (Minimum Advertised Price) compliance</li>
                <li>Growing customer complaints about order cancellations</li>
              </ul>

              <div className="my-8">
                <blockquote className="border-l-4 border-blue-500 pl-4 italic">
                  "Before SAB, our team was spending over 60 hours a month manually updating inventory and pricing across our vendors. Despite our efforts, we struggled with stockouts and maintaining MAP compliance."
                  <footer className="mt-2 text-gray-600">
                    — Mills Hawkins, CEO at FixtureFarm
                  </footer>
                </blockquote>
              </div>

              <h2>The Solution</h2>
              <p>
                FixtureFarm implemented SAB's inventory management solution with the following key components, syncing over 30,000 products:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Real-time Sync</h4>
                  <p className="text-gray-600">
                    Automated inventory updates across all vendors with real-time synchronization
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Price Syncing</h4>
                  <p className="text-gray-600">
                    Automated price updates to ensure consistency across all channels
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">MAP Compliance</h4>
                  <p className="text-gray-600">
                    Tools to monitor and maintain Minimum Advertised Price compliance
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Analytics Dashboard</h4>
                  <p className="text-gray-600">
                    Comprehensive reporting and insights for inventory optimization
                  </p>
                </div>
              </div>

              <h2>Implementation Process</h2>
              <p>
                The implementation was completed in phases over a 4-week period:
              </p>
              <ol>
                <li>Initial setup and Shopify integration (Week 1)</li>
                <li>Vendor onboarding and API connections (Week 2)</li>
                <li>Testing and optimization (Week 3)</li>
                <li>Staff training and full deployment (Week 4)</li>
              </ol>

              <h2>The Results</h2>
              <p>
                After implementing SAB, FixtureFarm saw significant improvements across their operations:
              </p>

              <div className="bg-blue-50 p-8 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Key Achievements</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-4 flex-shrink-0">
                      95%
                    </div>
                    <div>
                      <h4 className="font-semibold">Reduction in Stockouts</h4>
                      <p className="text-gray-600">
                        Real-time inventory updates virtually eliminated stockout issues
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-4 flex-shrink-0">
                      60+
                    </div>
                    <div>
                      <h4 className="font-semibold">Hours Saved Monthly</h4>
                      <p className="text-gray-600">
                        Dramatic reduction in time spent on inventory and price management
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mr-4 flex-shrink-0">
                      28%
                    </div>
                    <div>
                      <h4 className="font-semibold">Sales Increase</h4>
                      <p className="text-gray-600">
                        Better inventory and pricing accuracy led to increased customer satisfaction and sales
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2>Looking Forward</h2>
              <p>
                With their inventory and pricing management now automated, FixtureFarm is focusing on expansion:
              </p>
              <ul>
                <li>Finalizing partnerships with 15 vendors and planning to add up to 100 vendors within the next two quarters</li>
                <li>Expanding into international markets</li>
                <li>Implementing advanced analytics for better forecasting</li>
              </ul>

              <div className="bg-gray-50 p-8 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-4">Final Thoughts</h3>
                <blockquote className="text-gray-700 italic">
                  "SAB has transformed how we manage our multi-vendor operations. What used to take our team 60+ hours per month now happens automatically, with greater accuracy and MAP compliance. This has allowed us to focus on growth and delivering exceptional customer experiences."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <img 
                    src="https://ca.slack-edge.com/T073EQD5ZNE-U07307YQVQF-ac5b6d3390e7-512"
                    alt="Mills Hawkins"
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">Mills Hawkins</div>
                    <div className="text-gray-600">CEO, FixtureFarm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-200">
              <Button variant="outline" href="/case-studies">
                <ArrowLeft size={16} className="mr-2" />
                Back to Case Studies
              </Button>
              <Button variant="primary" href="/contact">
                Schedule a Demo
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CaseStudyFixtureFarm;