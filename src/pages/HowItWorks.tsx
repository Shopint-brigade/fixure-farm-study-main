import React from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import CallToAction from '../components/home/CallToAction';
import Button from '../components/ui/Button';
import { Play } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Store",
      description: "Link your Shopify store to SAB using our secure OAuth integration. This takes less than 5 minutes and doesn't require any technical knowledge.",
      image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      number: "02",
      title: "Add Your Vendors",
      description: "Connect your vendors through our intuitive interface. SAB supports various connection methods including API, CSV uploads, or direct vendor portal access.",
      image: "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      number: "03",
      title: "Configure Your Rules",
      description: "Set up your automation rules for inventory management, product listings, pricing, and order processing based on your specific business needs.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      number: "04",
      title: "Automate & Monitor",
      description: "SAB takes over the repetitive tasks while you monitor performance through our comprehensive dashboard. Real-time alerts keep you informed of important events.",
      image: "https://images.pexels.com/photos/8853464/pexels-photo-8853464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How SAB Works
            </h1>
            <p className="text-xl text-gray-600">
              Discover how our integration service seamlessly connects your Shopify store with vendors to automate your operations.
            </p>
          </div>
        </Container>
      </div>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="relative overflow-hidden rounded-xl bg-blue-700 text-white p-8 md:p-12 mb-20">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  See SAB in Action
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Watch our quick demo video to see how SAB can transform your e-commerce operations in minutes.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-blue-700 hover:bg-blue-50"
                >
                  <Play size={18} className="mr-2" />
                  Watch Demo (2 min)
                </Button>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-64 h-48 bg-black rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://images.pexels.com/photos/8964015/pexels-photo-8964015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Video thumbnail" 
                    className="w-full h-full object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                      <Play size={24} className="text-blue-700 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-blue-800 opacity-20 transform rotate-12 translate-x-1/4 -translate-y-1/4 rounded-full"></div>
          </div>
          
          <SectionTitle
            title="Our Simple 4-Step Process"
            subtitle="Getting started with SAB is easy. Follow these steps to automate your e-commerce operations."
            centered
          />
          
          <div className="space-y-24 mt-16">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-4">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {step.description}
                  </p>
                  
                  {index === 0 && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Quick Integration</h4>
                      <p className="text-gray-600">
                        Most customers complete this step in under 5 minutes. SAB securely connects to your Shopify store without requiring any code or development work.
                      </p>
                    </div>
                  )}
                  
                  {index === 1 && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Supported Vendor Types</h4>
                      <ul className="text-gray-600 list-disc list-inside space-y-1">
                        <li>Direct API connections</li>
                        <li>CSV/Excel file uploads</li>
                        <li>Vendor portals</li>
                        <li>Dropshipping platforms</li>
                      </ul>
                    </div>
                  )}
                  
                  {index === 2 && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Customizable Rules</h4>
                      <ul className="text-gray-600 list-disc list-inside space-y-1">
                        <li>Inventory thresholds</li>
                        <li>Pricing formulas</li>
                        <li>Product categorization</li>
                        <li>Order routing logic</li>
                      </ul>
                    </div>
                  )}
                  
                  {index === 3 && (
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-medium text-gray-900 mb-2">Real-time Monitoring</h4>
                      <ul className="text-gray-600 list-disc list-inside space-y-1">
                        <li>Inventory level alerts</li>
                        <li>Order status notifications</li>
                        <li>Sync error alerts</li>
                        <li>Performance metrics</li>
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="relative rounded-lg shadow-lg z-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            title="Integration Benefits"
            subtitle="Discover the advantages of automating your e-commerce operations with SAB."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-700 mb-2">85%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Reduction in Manual Data Entry
              </h3>
              <p className="text-gray-600">
                Eliminate tedious manual updates and data entry tasks by automating your inventory and product management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-700 mb-2">92%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fewer Inventory Discrepancies
              </h3>
              <p className="text-gray-600">
                Maintain accurate inventory levels across all channels and reduce overselling incidents.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-700 mb-2">20+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hours Saved Per Week
              </h3>
              <p className="text-gray-600">
                Free up valuable time for your team to focus on growth strategies instead of administrative tasks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-700 mb-2">3x</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Faster Product Listings
              </h3>
              <p className="text-gray-600">
                Get new products online and available for sale significantly faster with automated listing creation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-700 mb-2">45%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Increase in Order Processing Speed
              </h3>
              <p className="text-gray-600">
                Process orders more efficiently with automated routing and fulfillment management.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl font-bold text-blue-700 mb-2">99%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Order Accuracy Rate
              </h3>
              <p className="text-gray-600">
                Minimize errors in order processing and improve customer satisfaction with accurate fulfillment.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to streamline your operations?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Start your 14-day free trial today and experience the benefits of automated e-commerce operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="primary" href="/pricing">
                Start Free Trial
              </Button>
              <Button variant="outline" href="/contact">
                Schedule Demo
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      <CallToAction />
    </>
  );
};

export default HowItWorks;