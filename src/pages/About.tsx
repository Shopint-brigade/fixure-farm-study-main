import React from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import CallToAction from '../components/home/CallToAction';
import { Users, Award, Clock, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About SAB
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to streamline e-commerce operations by creating seamless integrations between Shopify stores and vendors.
            </p>
          </div>
        </Container>
      </div>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SAB was founded in 2021 by a team of e-commerce experts who were frustrated with the disconnected experience between online stores and their suppliers. They experienced firsthand the challenges of managing inventory, product listings, and orders across multiple vendors.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as an internal tool for their own online businesses quickly grew into a comprehensive solution that now helps thousands of e-commerce businesses streamline their operations.
              </p>
              <p className="text-lg text-gray-600">
                Today, SAB is trusted by businesses of all sizes to automate their inventory management, reduce errors, and save valuable time that can be better spent growing their business.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team working together" 
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-blue-700 rounded-lg -z-0"></div>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that drive everything we do."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering the highest quality solutions that exceed our customers' expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our customers to understand their needs and create solutions that address their specific challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Efficiency</h3>
              <p className="text-gray-600">
                We're obsessed with creating tools that save time and eliminate manual processes so our customers can focus on growth.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-blue-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and approaches to solve complex e-commerce challenges.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Team
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SAB is powered by a diverse team of e-commerce experts, developers, and customer success specialists who are passionate about helping businesses thrive online.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team combines decades of experience in e-commerce operations, software development, and customer support to create solutions that address real-world challenges.
              </p>
              <p className="text-lg text-gray-600">
                We're proud to have built a company culture focused on innovation, collaboration, and customer success. Every team member is dedicated to our mission of streamlining e-commerce operations.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle 
            title="Our Impact" 
            subtitle="We measure our success by the results our customers achieve."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">5,000+</div>
              <p className="text-xl text-gray-700">Businesses Using SAB</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">10M+</div>
              <p className="text-xl text-gray-700">Products Managed</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">500K+</div>
              <p className="text-xl text-gray-700">Hours Saved Monthly</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Our mission is simple: to create technology that eliminates the tedious manual work of e-commerce operations so businesses can focus on what matters—creating amazing products and delighting their customers."
            </p>
            <p className="mt-4 text-lg font-semibold text-gray-900">
              — Sarah Johnson, CEO & Co-founder
            </p>
          </div>
        </Container>
      </section>
      
      <CallToAction />
    </>
  );
};

export default About;