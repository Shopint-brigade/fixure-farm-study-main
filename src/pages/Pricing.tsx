import React from 'react';
import Container from '../components/ui/Container';
import PricingPlans from '../components/pricing/PricingPlans';
import FAQSection from '../components/home/FAQSection';

const Pricing: React.FC = () => {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
        </Container>
      </div>
      
      <PricingPlans />
      
      <div className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions About Pricing</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be available immediately, and we'll prorate your billing. When downgrading, the changes will take effect at the start of your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee based on the plan you choose.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need to enter credit card details for the free trial?</h3>
                <p className="text-gray-600">
                  No, you can start your 14-day free trial without entering any payment information. We'll only ask for your payment details when you decide to continue with a paid plan after the trial ends.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">What happens if I exceed my plan limits?</h3>
                <p className="text-gray-600">
                  If you're approaching your plan limits (like product count or vendor connections), we'll notify you so you can upgrade to a higher plan. We won't automatically charge you for overages or shut off your service without warning.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer discounts for nonprofits or educational institutions?</h3>
                <p className="text-gray-600">
                  Yes, we offer special pricing for qualified nonprofits, educational institutions, and startups. Please contact our sales team for more information about our discount programs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      
      <FAQSection />
    </>
  );
};

export default Pricing;