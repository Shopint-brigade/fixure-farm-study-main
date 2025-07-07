import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="primary" href="/">
            Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;