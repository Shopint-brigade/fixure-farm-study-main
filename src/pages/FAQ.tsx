import React, { useState } from 'react';
import Container from '../components/ui/Container';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from '../components/ui/Button';

// FAQ categories and questions
const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is SAB?",
        answer: "SAB is a comprehensive integration service that connects Shopify stores with vendors to automate inventory management, product listings, pricing updates, and order processing. Our platform helps e-commerce businesses save time, reduce errors, and scale their operations efficiently."
      },
      {
        question: "How does SAB work?",
        answer: "SAB connects to your Shopify store and vendor systems through secure APIs. It continuously syncs data between these platforms to ensure accurate inventory levels, up-to-date product information, and streamlined order processing. You can configure rules and automation workflows through our intuitive dashboard to match your specific business needs."
      },
      {
        question: "Is SAB suitable for my business size?",
        answer: "SAB is designed to serve businesses of all sizes. Our Basic plan works well for small businesses with limited products and vendors, while our Plus and Premium plans cater to growing and established businesses with more complex needs. We scale with your business as it grows."
      },
      {
        question: "Do I need technical knowledge to use SAB?",
        answer: "No technical knowledge is required to use SAB. Our platform is designed with a user-friendly interface that makes it easy to set up and manage your integrations. Our onboarding team will guide you through the initial setup, and our documentation provides clear instructions for ongoing management."
      }
    ]
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        question: "What inventory management features does SAB offer?",
        answer: "SAB provides real-time inventory synchronization between your Shopify store and vendors, automated stock level updates, low stock alerts, inventory forecasting based on historical data, multi-location inventory management, and detailed inventory reports."
      },
      {
        question: "How does product listing automation work?",
        answer: "SAB can automatically create and update product listings in your Shopify store based on vendor data. It handles product information, images, variants, categories, and pricing. You can set rules to standardize product data and ensure consistency across your store."
      },
      {
        question: "Can SAB handle multiple currencies and international vendors?",
        answer: "Yes, SAB supports multiple currencies and can work with international vendors. You can configure currency conversion rules and regional settings to ensure accurate pricing and seamless international operations."
      },
      {
        question: "Does SAB integrate with other platforms besides Shopify?",
        answer: "While we specialize in Shopify integration, SAB also works with other major e-commerce platforms such as WooCommerce, BigCommerce, Magento, and marketplaces like Amazon and eBay. Contact us to discuss your specific integration needs."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "How much does SAB cost?",
        answer: "SAB offers three main pricing tiers: Basic ($49/month), Plus ($99/month), and Premium ($199/month). We also offer annual plans at a 20% discount. Each plan includes different features and limits based on your business needs. Check our pricing page for detailed information."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial on all our plans with no credit card required. This allows you to fully explore the features and benefits of SAB before making a commitment."
      },
      {
        question: "Can I upgrade or downgrade my plan later?",
        answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, new features will be available immediately, and we'll prorate your billing. When downgrading, changes will take effect at the start of your next billing cycle."
      },
      {
        question: "Do you offer custom enterprise solutions?",
        answer: "Yes, for businesses with specific requirements beyond our standard plans, we offer custom enterprise solutions. These can include dedicated support, custom integrations, white-labeling options, and tailored workflows. Contact our sales team to discuss your needs."
      }
    ]
  },
  {
    category: "Security & Data",
    questions: [
      {
        question: "How secure is my data with SAB?",
        answer: "Security is our top priority. SAB uses industry-standard encryption for all data transfers and storage. We maintain SOC 2 compliance, conduct regular security audits, and implement comprehensive access controls to protect your information."
      },
      {
        question: "Where is my data stored?",
        answer: "Your data is stored in secure cloud servers located in the United States and Europe. We use redundant storage systems to ensure data reliability and implement strict data protection measures to comply with relevant regulations including GDPR."
      },
      {
        question: "Do you have access to my Shopify store credentials?",
        answer: "SAB connects to your Shopify store using OAuth, which means we don't store your Shopify credentials. Instead, we receive a secure token that grants only the specific permissions needed for our service to function."
      },
      {
        question: "What happens to my data if I cancel my subscription?",
        answer: "If you cancel your subscription, we retain your data for 30 days to allow for reactivation if needed. After this period, your data is permanently deleted from our active systems and included in our regular backup purge cycle."
      }
    ]
  },
  {
    category: "Support & Resources",
    questions: [
      {
        question: "What kind of support does SAB offer?",
        answer: "Support options depend on your plan. Basic includes standard email support, Plus adds priority email and chat support, and Premium includes 24/7 dedicated support with a dedicated account manager. All customers have access to our knowledge base, video tutorials, and documentation."
      },
      {
        question: "Is there training available for new users?",
        answer: "Yes, all new customers receive onboarding assistance and access to training resources. We offer live webinars, video tutorials, and comprehensive documentation. Premium plan customers also receive personalized training sessions for their team."
      },
      {
        question: "How quickly will I receive support if I have an issue?",
        answer: "Response times vary by plan: Basic plan queries are typically addressed within 24 hours, Plus plan within 8 business hours, and Premium plan within 2 hours. Critical issues are prioritized regardless of plan level."
      },
      {
        question: "Do you have a community forum for users?",
        answer: "Yes, we maintain an active community forum where users can share tips, ask questions, and discuss best practices. Our team actively participates in the forum to provide guidance and collect feedback for future improvements."
      }
    ]
  }
];

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(faqData[0].category);
  const [openQuestions, setOpenQuestions] = useState<{[key: string]: boolean}>({});
  
  const toggleQuestion = (question: string) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [question]: !prev[question],
    }));
  };
  
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about SAB's integration services.
            </p>
          </div>
        </Container>
      </div>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-gray-50 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Categories</h2>
                <nav className="space-y-2">
                  {faqData.map((category) => (
                    <button
                      key={category.category}
                      className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                        activeCategory === category.category
                          ? 'bg-blue-700 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveCategory(category.category)}
                    >
                      {category.category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {activeCategory}
                </h2>
                
                <div className="space-y-4">
                  {faqData
                    .find((category) => category.category === activeCategory)
                    ?.questions.map((item, index) => (
                      <div 
                        key={index} 
                        className={`border rounded-lg transition-all duration-200 ${
                          openQuestions[item.question] ? 'border-blue-500 shadow-md' : 'border-gray-200'
                        }`}
                      >
                        <button
                          className="flex justify-between items-center w-full p-4 text-left"
                          onClick={() => toggleQuestion(item.question)}
                          aria-expanded={openQuestions[item.question]}
                        >
                          <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                          {openQuestions[item.question] ? (
                            <ChevronUp className="text-blue-600 ml-4 flex-shrink-0" size={20} />
                          ) : (
                            <ChevronDown className="text-gray-400 ml-4 flex-shrink-0" size={20} />
                          )}
                        </button>
                        
                        {openQuestions[item.question] && (
                          <div className="p-4 pt-0 border-t border-gray-100">
                            <p className="text-gray-600">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our team is here to help. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="primary" href="/contact">
                    Contact Support
                  </Button>
                  <Button variant="outline" href="/documentation">
                    View Documentation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;