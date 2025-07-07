import React from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import CallToAction from '../components/home/CallToAction';

const caseStudies = [
  {
    title: "How FashionPlus Streamlined Inventory Across 50+ Vendors",
    company: "FashionPlus",
    industry: "Fashion & Apparel",
    challenge: "Managing inventory from over 50 vendors while preventing stockouts and overselling.",
    solution: "Implemented SAB's real-time inventory sync with custom alerts and automated reordering.",
    results: [
      "95% reduction in stockouts",
      "80% less time spent on inventory management",
      "28% increase in sales due to improved product availability"
    ],
    image: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://via.placeholder.com/150x50.png?text=FashionPlus",
    link: "/case-studies/fashionplus"
  },
  {
    title: "TechGadgets Accelerates Order Processing with SAB",
    company: "TechGadgets",
    industry: "Consumer Electronics",
    challenge: "Slow manual order processing was causing fulfillment delays and customer complaints.",
    solution: "Deployed SAB's automated order routing and processing system with vendor integration.",
    results: [
      "Reduced order processing time from 2 days to 2 hours",
      "99.8% order accuracy rate",
      "32% improvement in customer satisfaction scores"
    ],
    image: "https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://via.placeholder.com/150x50.png?text=TechGadgets"
  },
  {
    title: "HomeGoods Co. Scales Product Listings with Automated Integration",
    company: "HomeGoods Co.",
    industry: "Home & Decor",
    challenge: "Manual product listing was limiting growth and creating data inconsistencies.",
    solution: "Implemented SAB's product listing automation with standardized data enrichment.",
    results: [
      "Expanded from 200 to 2,000 products in 3 months",
      "90% reduction in product listing errors",
      "45% increase in conversion rate from improved product data"
    ],
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    logo: "https://via.placeholder.com/150x50.png?text=HomeGoods"
  },
];

const CaseStudies: React.FC = () => {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Customer Success Stories
            </h1>
            <p className="text-xl text-gray-600">
              Discover how businesses like yours are transforming their operations with SAB.
            </p>
          </div>
        </Container>
      </div>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'order-1 lg:order-2' : ''}>
                  <div className="bg-gray-100 text-xs inline-block px-3 py-1 rounded-full text-gray-600 mb-4">
                    {study.industry}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-2">The Challenge:</h3>
                    <p className="text-gray-600 mb-4">{study.challenge}</p>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">The Solution:</h3>
                    <p className="text-gray-600 mb-4">{study.solution}</p>
                    
                    <h3 className="font-semibold text-gray-900 mb-2">The Results:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                      {study.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="primary" href={study.link || "#"}>
                    Read Full Case Study
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-lg transform rotate-3"></div>
                    <img 
                      src={study.image} 
                      alt={study.company} 
                      className="relative rounded-lg shadow-lg z-10"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 rounded-b-lg z-20">
                      <div className="flex items-center">
                        <div className="bg-white p-2 rounded">
                          <img 
                            src={study.logo} 
                            alt={`${study.company} logo`} 
                            className="h-8"
                          />
                        </div>
                        <div className="ml-3 text-white">
                          <div className="font-semibold">{study.company}</div>
                          <div className="text-sm text-gray-300">{study.industry}</div>
                        </div>
                      </div>
                    </div>
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
            title="Results Our Customers Achieve"
            subtitle="Here's what businesses typically experience after implementing SAB."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-blue-700 mb-4">85%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Reduction in Manual Work
              </h3>
              <p className="text-gray-600">
                Businesses automate the majority of their inventory and order management tasks.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-blue-700 mb-4">3x</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Faster Scaling
              </h3>
              <p className="text-gray-600">
                Grow your product catalog and vendor relationships without proportional team growth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-5xl font-bold text-blue-700 mb-4">99%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Data Accuracy
              </h3>
              <p className="text-gray-600">
                Near-perfect inventory and product data accuracy across all channels.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="bg-blue-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                "SAB has transformed how we manage our multi-vendor operations. What used to take our team 30+ hours per week now happens automatically, and with greater accuracy than we ever achieved manually."
              </h2>
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150" 
                  alt="Sarah Johnson" 
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                />
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">E-commerce Director, FashionPlus</p>
              </div>
              <Button variant="outline" href="/case-studies/fashionplus">
                Read Their Story
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      <CallToAction />
    </>
  );
};

export default CaseStudies;