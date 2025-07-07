import React from 'react';
import { BarChart3, RefreshCw, CreditCard, Tag, Package, ShoppingCart, Clock, Zap } from 'lucide-react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const featureItems = [
  {
    icon: RefreshCw,
    title: 'Real-time Stock Updates',
    description: 'Automatically sync inventory across all channels to prevent overselling and stockouts.',
  },
  {
    icon: Package,
    title: 'Product Listing Automation',
    description: 'Effortlessly publish new products from vendors to your Shopify store with automated enrichment.',
  },
  {
    icon: Tag,
    title: 'Price Synchronization',
    description: 'Keep pricing consistent with automated updates based on vendor changes or your own rules.',
  },
  {
    icon: ShoppingCart,
    title: 'Order Management',
    description: 'Route orders to the right vendors instantly and track fulfillment in real-time.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights into performance with detailed reports on sales, inventory, and vendor metrics.',
  },
  {
    icon: Clock,
    title: 'Time-saving Workflows',
    description: 'Eliminate manual data entry and reduce errors with automated business processes.',
  },
  {
    icon: CreditCard,
    title: 'Multi-channel Selling',
    description: 'Manage inventory across multiple sales channels while maintaining accurate stock levels.',
  },
  {
    icon: Zap,
    title: 'API Integration',
    description: 'Connect with other tools and services through our robust API for a tailored experience.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          title="Powerful Features for Seamless Integration"
          subtitle="SAB simplifies complex inventory and order workflows to save you time and reduce errors."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureItems.map((feature, index) => (
            <Card key={index} hover className="h-full">
              <div className="p-6 flex flex-col h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;