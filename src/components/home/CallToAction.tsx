import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Shopify-Vendor Operations?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of businesses that use SAB to save time, reduce errors, and scale their operations seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg" 
              href="/pricing"
              className="bg-green-600 hover:bg-green-700 border-green-500"
            >
              Start Free Trial
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              href="/contact"
              className="border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              Schedule Demo
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-blue-200">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default CallToAction;