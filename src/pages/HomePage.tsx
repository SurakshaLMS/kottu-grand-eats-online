
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const OrderCTA = () => {
  return (
  <section className="relative overflow-hidden bg-black py-16">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-pattern-food bg-cover bg-center opacity-10 z-0"></div>

    {/* Content */}
    <div className="container mx-auto relative z-10">
      <div className="max-w-xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order?</h2>
        <p className="text-lg opacity-90 mb-8">
          Whether you're craving our signature Cheese Kottu or want to try something new, ordering is quick and easy.
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
          <Button asChild className="w-full bg-white text-black hover:bg-gray-100">
            <a href="https://ubereats.com" target="_blank" rel="noopener noreferrer">
              UberEats
            </a>
          </Button>
          <Button asChild className="w-full bg-white text-black hover:bg-gray-100">
            <a href="https://pickme.lk" target="_blank" rel="noopener noreferrer">
              PickMe
            </a>
          </Button>
          <Button asChild className="w-full bg-brand-yellow text-black hover:bg-yellow-500">
            <Link to="/order">Our Website</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm opacity-75">
          Free delivery for orders above Rs. 2500 • Average delivery time: 30-45 minutes
        </p>
      </div>
    </div>
  </section>
);
}

// Define the HomePage component
const HomePage = () => {
  return (
    <div className="bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="min-h-screen justify-center text-center relative  overflow-hidden order-2 md:order-1">
        {/* Hero Section */}
  <section className="flex flex-col items-center justify-center bg-black text-white relative overflow-hidden py-10 md:h-screen">
          <div className="absolute inset-0 bg-pattern-food opacity-10 z-0"></div>
          {/* Content will go here */}
          <div className="container mx-auto relative z-10 px-2">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-brand-yellow">
                Sri Lanka's <span className="text-white">Favorite</span> Kottu Experience
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl justify-content-center mx-auto ">
                Authentic flavors, traditional techniques, and the finest ingredients come together in our signature kottu dishes.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-brand-yellow text-black hover:bg-yellow-400"
                >
                  <Link to="/order">Order Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-brand-yellow bg-brand-yellow/20 hover:bg-brand-yellow hover:text-black"
                >
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* You can add more sections here */}

        {/* Include the OrderCTA component at the bottom of HomePage */}

      </div>
        <div className="bg-black flex items-center justify-center h-screen order-1 md:order-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Chicken_Kottu.jpg/800px-Chicken_Kottu.jpg"
            alt="Mr. Kottu Grand Logo"
            className="w-72 md:w-96 h-72 md:h-96 object-contain rounded-full shadow-lg "
          />
        </div>
      </div>
      <div className="pt-10 pb-20 bg-black">
  <OrderCTA />
</div>
</div>
    
  );
};

export default HomePage;
