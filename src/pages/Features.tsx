import React from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card, { CardContent } from '../components/ui/Card';
import { 
  BarChart3, RefreshCw, Tag, Package, ShoppingCart, 
  Settings, Smartphone, Clock, Zap, BarChart, Server, Shield 
} from 'lucide-react';
import CallToAction from '../components/home/CallToAction';

const FeatureSection: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
}> = ({ 
  title, 
  description, 
  icon: Icon, 
  children, 
  imageSrc, 
  imageAlt = "Feature illustration", 
  reversed = false 
}) => {
  return (
    <div className="py-16 border-b border-gray-200">
      <Container>
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
              <Icon size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-6">{description}</p>
            
            <div className="space-y-4">
              {children}
            </div>
          </div>
          
          <div className={`order-first lg:order-none ${reversed ? 'lg:order-first' : ''}`}>
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="bg-gray-200 w-full h-80 rounded-lg flex items-center justify-center text-gray-500">
                Feature Image Placeholder
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

const FeatureItem: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
}> = ({ title, description, icon: Icon }) => {
  return (
    <div className="flex">
      <div className="mr-4 text-blue-600">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Features Built for E-commerce Success
            </h1>
            <p className="text-xl text-gray-600">
              Discover how SAB automates your inventory management, product listings, and order processing to save time and reduce errors.
            </p>
          </div>
        </Container>
      </div>
      
      <FeatureSection
        title="Real-time Inventory Synchronization"
        description="Never oversell or run out of stock again with SAB's powerful inventory management system."
        icon={RefreshCw}
        imageSrc="https://images.pexels.com/photos/7821875/pexels-photo-7821875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Inventory management dashboard"
      >
        <FeatureItem
          title="Automated Stock Updates"
          description="Inventory levels are automatically updated across all sales channels when changes occur at the vendor level."
          icon={Clock}
        />
        <FeatureItem
          title="Low Stock Alerts"
          description="Receive notifications when products are running low so you can reorder before stockouts occur."
          icon={Smartphone}
        />
        <FeatureItem
          title="Inventory Forecasting"
          description="Predictive analytics help you anticipate future inventory needs based on historical sales data."
          icon={BarChart}
        />
      </FeatureSection>
      
      <FeatureSection
        title="Product Listing Automation"
        description="Effortlessly manage product information across all your sales channels with automated listing tools."
        icon={Package}
        imageSrc="https://images.pexels.com/photos/6956894/pexels-photo-6956894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Product listing management"
        reversed
      >
        <FeatureItem
          title="Bulk Product Creation"
          description="Import thousands of products from vendors with a single click, complete with descriptions, images, and variants."
          icon={Zap}
        />
        <FeatureItem
          title="Smart Category Mapping"
          description="Automatically assign products to the right categories based on vendor data and your store structure."
          icon={Settings}
        />
        <FeatureItem
          title="Image Optimization"
          description="Product images are automatically optimized for web performance without sacrificing quality."
          icon={Package}
        />
      </FeatureSection>
      
      <FeatureSection
        title="Price Management System"
        description="Take control of your pricing strategy with automated rules and synchronization across platforms."
        icon={Tag}
        imageSrc="https://images.pexels.com/photos/6684255/pexels-photo-6684255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Price management interface"
      >
        <FeatureItem
          title="Dynamic Pricing Rules"
          description="Set custom pricing rules based on vendor costs, competitor prices, and your desired margins."
          icon={Settings}
        />
        <FeatureItem
          title="Bulk Price Updates"
          description="Update prices across multiple products simultaneously with just a few clicks."
          icon={RefreshCw}
        />
        <FeatureItem
          title="Price History Tracking"
          description="Monitor price changes over time to optimize your pricing strategy and maintain competitiveness."
          icon={BarChart3}
        />
      </FeatureSection>
      
      <FeatureSection
        title="Order Processing Workflow"
        description="Streamline your order fulfillment process with automated routing and vendor management."
        icon={ShoppingCart}
        imageSrc="https://images.pexels.com/photos/8534188/pexels-photo-8534188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        imageAlt="Order processing dashboard"
        reversed
      >
        <FeatureItem
          title="Smart Order Routing"
          description="Orders are automatically routed to the right vendors based on product availability and fulfillment rules."
          icon={Server}
        />
        <FeatureItem
          title="Status Tracking"
          description="Monitor order status from placement to delivery with real-time updates from vendors."
          icon={RefreshCw}
        />
        <FeatureItem
          title="Automated Notifications"
          description="Keep customers informed with automated shipping and delivery updates at every stage."
          icon={Smartphone}
        />
      </FeatureSection>
      
      <div className="py-16">
        <Container>
          <SectionTitle 
            title="Additional Features" 
            subtitle="SAB is packed with tools designed to make your e-commerce operations seamless."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card hover>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
                    <p className="text-gray-600">
                      Gain insights into your business performance with detailed reports on sales, inventory, and vendor metrics.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Secure Data Handling</h3>
                    <p className="text-gray-600">
                      Your data is encrypted and securely stored with enterprise-grade security protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <Server size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">API Integration</h3>
                    <p className="text-gray-600">
                      Connect SAB with your existing systems using our robust API for a seamless workflow.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Custom Workflows</h3>
                    <p className="text-gray-600">
                      Create automated workflows tailored to your specific business processes and requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile Access</h3>
                    <p className="text-gray-600">
                      Manage your business on the go with our mobile-responsive dashboard accessible from any device.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card hover>
              <CardContent>
                <div className="flex items-start">
                  <div className="mr-4 text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Scheduled Tasks</h3>
                    <p className="text-gray-600">
                      Automate recurring tasks like inventory checks, price updates, and report generation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </div>
      
      <CallToAction />
    </>
  );
};

export default Features;