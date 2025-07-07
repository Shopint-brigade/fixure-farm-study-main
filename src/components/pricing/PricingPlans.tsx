import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const PricingPlans: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Basic',
      description: 'Essential features for small businesses',
      monthlyPrice: 99,
      annualPrice: 89,
      features: [
        'One Shopify store',
        'Up to 2 vendor connections',
        'Up to 200 orders/month',
        'Up to 1,000 products',
        'Basic product listing automation',
        'Simple order routing',
        'Email support',
        'Standard reports',
        'Free pre-built vendor integration',
      ],
      notIncluded: [
        'Multiple store management',
        'Bulk operations',
        'Custom API access',
        'Advanced analytics',
      ],
      ctaText: 'Start Basic Plan',
      highlight: false,
    },
    {
      name: 'Plus',
      description: 'Advanced features for growing businesses',
      monthlyPrice: 199,
      annualPrice: 179,
      features: [
        'Up to 3 Shopify stores',
        'Up to 6 vendor connections',
        'Up to 400 orders/month',
        'Up to 5,000 products',
        'Advanced product listing automation',
        'Smart order routing & processing',
        'Priority email & chat support',
        'Advanced reports & analytics',
        'Custom price rules',
        'Free pre-built vendor integration',
      ],
      notIncluded: [
        'Bulk operations',
        'Custom API access',
        '24/7 dedicated support',
      ],
      ctaText: 'Start Plus Plan',
      highlight: true,
    },
    {
      name: 'Premium',
      description: 'Enterprise-grade solutions',
      monthlyPrice: 299,
      annualPrice: 269,
      features: [
        'Up to 5 Shopify stores',
        'Up to 12 vendor connections',
        'Up to 1,000 orders/month',
        'Up to 25,000 products',
        'Full product listing automation',
        'Advanced order management',
        'Bulk operations',
        'Custom reports & analytics',
        'Custom API access',
        'Priority 24/7 support',
        'Dedicated account manager',
        'Free pre-built vendor integration',
      ],
      notIncluded: [],
      ctaText: 'Start Premium Plan',
      highlight: false,
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for large-scale operations',
      features: [
        'Unlimited Shopify stores',
        'Unlimited vendor connections',
        'Unlimited orders',
        'Unlimited products',
        'Custom integrations',
        'Custom feature development',
        'White-label options',
        'Dedicated support team',
        'Custom SLA',
        'On-demand training',
        'Migration assistance',
        'Free pre-built vendor integration',
      ],
      notIncluded: [],
      ctaText: 'Contact Sales',
      highlight: false,
      isEnterprise: true,
    },
  ];
  
  return (
    <section id="pricing" className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Choose the Right Plan for Your Business"
          subtitle="Simple, transparent pricing for businesses of all sizes."
          centered
        />
        
        <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-green-600 font-medium">Save 10%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-white rounded-xl overflow-hidden border transition-all ${
                plan.highlight 
                  ? 'border-blue-500 shadow-lg relative scale-105 md:mt-0 mt-8' 
                  : 'border-gray-200 shadow hover:shadow-md'
              }`}
            >
              {plan.highlight && (
                <div className="bg-blue-500 text-white text-center py-2 font-medium text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-gray-600 mt-2">{plan.description}</p>
                
                {!plan.isEnterprise && (
                  <div className="mt-6 mb-8">
                    <div className="flex items-end">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-green-600 text-sm mt-1">
                        Billed annually (${plan.annualPrice * 12}/year)
                      </p>
                    )}
                  </div>
                )}
                
                {plan.isEnterprise && (
                  <div className="mt-6 mb-8">
                    <div className="text-2xl font-bold text-gray-900">Custom Pricing</div>
                    <p className="text-gray-600 text-sm mt-1">
                      Tailored to your specific needs
                    </p>
                  </div>
                )}
                
                <Button 
                  variant={plan.highlight ? 'primary' : 'outline'} 
                  fullWidth
                  href="/contact"
                >
                  {plan.ctaText}
                </Button>
                
                <div className="mt-8">
                  <p className="font-medium text-gray-900 mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <div className="mt-6">
                      <p className="font-medium text-gray-900 mb-4">Not included:</p>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <X size={18} className="text-gray-400 mr-2 mt-0.5 shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <SectionTitle
            title="Integration Setup Fees"
            subtitle="One-time setup fees for connecting your vendors"
            centered
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Check className="text-green-600" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pre-built Integration</h3>
                    <p className="text-green-600 font-medium">Free</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Connect with any of our pre-built vendor integrations at no additional cost.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Quick setup</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Standard features</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Regular updates</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900">Custom API Integration</h3>
                  <div className="text-3xl font-bold text-gray-900 mt-2">$500</div>
                  <p className="text-sm text-gray-600">Per vendor (Required)</p>
                </div>
                <p className="text-sm text-gray-600">
                  Custom API integration development and implementation for your specific vendor.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Custom development</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Advanced features</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Technical support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900">CSV, XML, FTP Integration</h3>
                  <div className="text-3xl font-bold text-gray-900 mt-2">$300</div>
                  <p className="text-sm text-gray-600">Per vendor (Required)</p>
                </div>
                <p className="text-sm text-gray-600">
                  Setup and configuration for file-based integrations with your vendor.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>File processing</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Automated imports</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Data mapping</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
          <p className="text-gray-600 mb-6">
            We offer tailored enterprise solutions for businesses with specific requirements.
            Contact our sales team to discuss your needs.
          </p>
          <Button variant="outline" href="/contact">
            Contact Sales
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;