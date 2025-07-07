import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "SAB has transformed our inventory management. We've reduced stockouts by 95% and saved 25 hours per week on manual updates.",
    author: "Sarah Johnson",
    position: "E-commerce Director",
    company: "FashionPlus",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    content: "The automated order routing to our vendors has been a game-changer. Our fulfillment time dropped from 3 days to same-day for most orders.",
    author: "Michael Chen",
    position: "Operations Manager",
    company: "TechGadgets",
    rating: 5,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    content: "We integrated SAB with our Shopify store in less than a day. The seamless product syncing has allowed us to scale from 200 to 2,000 SKUs.",
    author: "Jessica Miller",
    position: "Founder",
    company: "HomeGoods Co.",
    rating: 4,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      size={18}
      className={index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
    />
  ));
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Trusted by e-commerce businesses of all sizes to streamline their operations."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Results Our Customers See</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <p className="text-blue-200">Reduction in Manual Data Entry</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">92%</div>
              <p className="text-blue-200">Fewer Inventory Discrepancies</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-blue-200">Hours Saved Per Week</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;