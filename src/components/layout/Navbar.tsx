import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Layers } from 'lucide-react';
import Button from '../ui/Button';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    // { name: 'Features', path: '/features' },
    // { name: 'Pricing', path: '/pricing' },
    // { name: 'How It Works', path: '/how-it-works' },
    // { name: 'Vendor Integrations', path: '/vendor-integrations' },
    { name: 'Fixure Farm', path: '/case-studies/fixureFarm' },
    // { name: 'Documentation', path: '/documentation' },
    // { name: 'About', path: '/about' },
    // { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Layers size={28} className="text-blue-700" />
          <span className="text-xl font-bold text-gray-900">SAB</span>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `font-medium transition-colors duration-200 ${
                  isActive 
                    ? 'text-blue-700' 
                    : 'text-gray-700 hover:text-blue-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        
        <div className="hidden lg:flex items-center space-x-4">
          {/* <Button variant="outline" href="/contact">
            Contact Sales
          </Button> */}
          {/* <Button variant="primary" href="/pricing">
            Get Started
          </Button> */}
        </div>
        
        <button 
          className="lg:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => 
                  `font-medium py-2 transition-colors duration-200 ${
                    isActive 
                      ? 'text-blue-700' 
                      : 'text-gray-700 hover:text-blue-700'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
              <Button variant="outline" href="/contact" fullWidth>
                Contact Sales
              </Button>
              <Button variant="primary" href="/pricing" fullWidth>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar