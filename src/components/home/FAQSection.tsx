import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to set up SAB with my Shopify store?",
    answer: "Most businesses can set up SAB with their Shopify store in less than a day. Our onboarding team will guide you through the process, and the basic integration can be completed in a few hours. More complex setups with multiple vendors may take 1-2 days."
  },
  {
    question: "Can SAB work with multiple vendors simultaneously?",
    answer: "Yes, SAB is designed to work with multiple vendors simultaneously. Our Basic plan supports up to 2 vendors, Plus plan supports up to 6 vendors, and Premium plan supports up to 12 vendors. Enterprise plans offer unlimited vendor connections."
  },
  {
    question: "How often does SAB sync inventory with my Shopify store?",
    answer: "All plans include real-time inventory synchronization to ensure accurate stock levels across all your sales channels. You can also trigger manual syncs anytime from your dashboard."
  },
  {
    question: "Is there a limit to the number of orders SAB can handle?",
    answer: "Yes, limits vary by plan. Basic supports up to 200 orders/month, Plus up to 400 orders/month, and Premium up to 1,000 orders/month. Enterprise plans offer unlimited orders. Contact our sales team if you need higher limits."
  },
  {
    question: "Does SAB integrate with platforms other than Shopify?",
    answer: "While we specialize in Shopify integrations, SAB also works with other major e-commerce platforms including WooCommerce, BigCommerce, Magento, and marketplaces like Amazon and eBay. Check our integration partners or contact us for specific platform inquiries."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial on all our plans with no credit card required. This gives you full access to the features included in your chosen plan so you can thoroughly test how SAB works with your specific setup."
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Have questions about SAB? Find answers to common questions below."
          centered
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-sm transition-all ${
                  openIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-blue-600 ml-4 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-400 ml-4 flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-6 pt-0 border-t border-gray-100">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Still have questions? We're here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center font-medium text-blue-700 hover:text-blue-800"
            >
              Contact our support team
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
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;