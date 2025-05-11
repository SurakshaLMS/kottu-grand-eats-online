
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-brand-red mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-brand-red hover:bg-red-700">
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
            <Link to="/menu">
              View Our Menu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
