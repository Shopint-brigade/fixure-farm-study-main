import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import { Search, FileText, Code, Book, Zap, Settings, HelpCircle, Clock } from 'lucide-react';
import { calculateReadTime } from '../utils/readTime';

interface Article {
  title: string;
  description: string;
  content: string;
  link?: string;
}

interface CategoryArticles {
  [key: string]: Article[];
}

const articles: CategoryArticles = {
  'getting-started': [
    {
      title: 'Quick Start Guide',
      description: 'Learn how to set up SAB for your Shopify store in under 30 minutes',
      link: '/documentation/quick-start-guide',
      content: `
        Getting started with SAB is straightforward. This guide will walk you through the initial setup process and help you connect your first vendor.

        1. Create Your Account
        First, sign up for a SAB account. You'll need to provide basic information about your business and choose a subscription plan that fits your needs.

        2. Connect Your Shopify Store
        Once your account is created, you'll need to connect your Shopify store. This process is simple:
        - Log into your SAB dashboard
        - Click on "Connect Store"
        - Select Shopify from the list of platforms
        - Follow the OAuth authentication process
        - Grant the necessary permissions

        3. Configure Your Settings
        After connecting your store, you'll need to configure your basic settings:
        - Set your inventory sync preferences
        - Configure product listing rules
        - Set up order routing preferences
        - Define your pricing rules

        4. Add Your First Vendor
        Now you're ready to add your first vendor:
        - Go to the Vendors section
        - Click "Add New Vendor"
        - Select your vendor from our pre-built integrations
        - Follow the vendor-specific setup instructions

        5. Test Your Integration
        Before going live, it's important to test your integration:
        - Verify inventory syncs correctly
        - Test product listing automation
        - Confirm order routing works as expected
        - Check price updates are accurate

        6. Go Live
        Once testing is complete:
        - Enable real-time sync
        - Monitor your dashboard for any issues
        - Contact support if you need assistance

        Best Practices:
        - Start with a small product subset for testing
        - Gradually increase sync frequency
        - Monitor error logs regularly
        - Keep vendor credentials secure
        - Set up alerts for critical events

        Need Help?
        Our support team is available to assist you with setup. Contact us through:
        - Live chat
        - Email support
        - Schedule a call

        Next Steps:
        - Read our detailed vendor integration guides
        - Explore advanced features
        - Join our community forum
        - Subscribe to our newsletter for updates
      `
    },
    {
      title: 'Connecting Your Shopify Store',
      description: 'Step-by-step guide for connecting your Shopify store to SAB',
      content: `
        This guide provides detailed instructions for connecting your Shopify store to SAB.

        Prerequisites:
        - Active Shopify store
        - SAB account
        - Admin access to your Shopify store

        Connection Steps:
        1. Log into your SAB dashboard
        2. Navigate to Store Settings
        3. Click "Connect Shopify Store"
        4. Follow OAuth authentication
        5. Configure sync settings

        Detailed instructions and troubleshooting tips follow...
      `
    },
    {
      title: 'Adding Your First Vendor',
      description: 'Learn how to connect your first vendor to start syncing inventory',
      content: `
        Complete guide to adding your first vendor connection in SAB.

        Steps covered:
        - Vendor selection
        - Authentication setup
        - Initial sync configuration
        - Testing procedures
        - Going live checklist
      `
    },
    {
      title: 'Setting Up Inventory Sync',
      description: 'Configure automated inventory synchronization between Shopify and vendors',
      content: `
        Comprehensive guide to configuring inventory synchronization.

        Topics covered:
        - Sync frequency options
        - Buffer stock settings
        - Multi-location setup
        - Alert configuration
        - Error handling
      `
    },
    {
      title: 'Product Listing Configuration',
      description: 'Learn how to set up automatic product listing from your vendors',
      content: `
        Detailed walkthrough of product listing automation.

        Areas covered:
        - Template setup
        - Field mapping
        - Image handling
        - Variant configuration
        - Price rules
      `
    },
  ],
  'user-guide': [
    {
      title: 'Dashboard Overview',
      description: 'Understanding the SAB dashboard and key metrics',
      content: `
        Complete overview of the SAB dashboard and its features.

        Sections:
        - Key metrics explained
        - Navigation guide
        - Custom views
        - Report generation
        - Alert management
      `
    },
    {
      title: 'Inventory Management',
      description: 'Comprehensive guide to managing inventory across multiple vendors',
      content: `
        In-depth guide to inventory management features.

        Topics:
        - Real-time tracking
        - Buffer management
        - Reorder points
        - Vendor allocation
        - Stock forecasting
      `
    },
  ],
};

const Documentation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('getting-started');
  
  const categories = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: Zap,
    },
    {
      id: 'user-guide',
      name: 'User Guide',
      icon: Book,
    },
    {
      id: 'api-reference',
      name: 'API Reference',
      icon: Code,
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: Settings,
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: HelpCircle,
    },
  ];

  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Everything you need to know about using SAB effectively.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search documentation..."
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </Container>
      </div>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-24 bg-gray-50 rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Documentation</h2>
                <nav className="space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-700 text-white'
                          : 'text-gray-700 hover:bg-gray-200'
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <category.icon size={18} className="mr-2" />
                      {category.name}
                    </button>
                  ))}
                </nav>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-medium text-gray-900 mb-3">Need Help?</h3>
                  <div className="space-y-2">
                    <Link 
                      to="/contact" 
                      className="block text-blue-700 hover:text-blue-800 font-medium"
                    >
                      Contact Support
                    </Link>
                    <Link 
                      to="/faq" 
                      className="block text-blue-700 hover:text-blue-800 font-medium"
                    >
                      FAQ
                    </Link>
                    <Link 
                      to="#" 
                      className="block text-blue-700 hover:text-blue-800 font-medium"
                    >
                      Community Forum
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {articles[activeCategory]?.map((article, index) => (
                    <Link 
                      key={index} 
                      to={article.link || '#'} 
                      className="block p-6 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start">
                        <div className="mr-4 text-blue-700 mt-1">
                          <FileText size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{article.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{article.description}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <Clock size={12} className="mr-1" />
                            <span>{calculateReadTime(article.content)}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {activeCategory === 'api-reference' && (
                <div className="mt-8 bg-gray-800 text-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-gray-900 flex items-center">
                    <Code size={18} className="mr-2" />
                    <h3 className="font-mono text-sm">Example API Request</h3>
                  </div>
                  <div className="p-6 overflow-x-auto">
                    <pre className="font-mono text-sm text-gray-300">
{`// Get inventory levels for a specific product
const response = await fetch('https://api.sabintegration.com/v1/inventory/products/123456', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`}
                    </pre>
                  </div>
                </div>
              )}
              
              <div className="mt-12 bg-blue-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Technical Assistance?</h3>
                <p className="text-gray-600 mb-6">
                  Our support team is available to help you with any technical questions or implementation challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                  >
                    Contact Support
                  </Link>
                  <Link 
                    to="#" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Join Developer Community
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Documentation;