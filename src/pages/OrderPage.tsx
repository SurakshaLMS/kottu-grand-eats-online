
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OrderPage = () => {
  const deliveryPartners = [
    {
      name: "UberEats",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Uber-Eats-Symbol.png",
      description: "Order from Mr. Kottu Grand through UberEats for quick delivery to your doorstep.",
      link: "https://ubereats.com"
    },
    {
      name: "PickMe",
      logo: "https://play-lh.googleusercontent.com/hMHDRsiVgYLCEk-Qh4TrQJJr4qgAz4IUzuP3lmyM0FJNLGfmn0BEtrxNqrAxmUJzHg",
      description: "Our partnership with PickMe Food ensures prompt delivery across Sri Lanka.",
      link: "https://pickme.lk"
    },
    {
      name: "MrKottuGrand.com",
      logo: "https://via.placeholder.com/300x150?text=Mr.+Kottu+Grand",
      description: "Order directly from our website for exclusive deals and promotions.",
      link: "#"
    }
  ];

  const specialDeals = [
    {
      title: "Family Bundle",
      description: "4 Kottu dishes of your choice, 2 sides, and 4 drinks",
      price: "Rs. 3,990",
      discount: "Save Rs. 800"
    },
    {
      title: "Lunch Special",
      description: "1 Kottu dish, 1 side, and a drink",
      price: "Rs. 990",
      discount: "Save Rs. 200"
    },
    {
      title: "Group Combo",
      description: "3 Kottu dishes, 3 sides, and 3 drinks",
      price: "Rs. 2,990",
      discount: "Save Rs. 500"
    }
  ];

  return (
    <div className="pt-20">
      {/* Order Hero */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-bold mb-4">Order <span className="text-brand-red">Online</span></h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Enjoy your favorite Mr. Kottu Grand dishes delivered straight to your doorstep.
            Order through our delivery partners or directly from our website.
          </p>
        </div>
      </div>
      
      {/* Delivery Partners */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Choose Your <span className="text-brand-red">Delivery</span> Partner</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryPartners.map((partner, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-white flex items-center justify-center p-4 border-b">
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} Logo`} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                    <a 
                      href={partner.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order with {partner.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Special Deals */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Special Deals & Combos</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Enjoy great savings with our special combo deals, available for delivery or pickup.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {specialDeals.map((deal, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="bg-brand-red text-white p-4">
                  <h3 className="text-xl font-bold">{deal.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{deal.description}</p>
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span className="text-brand-dark">{deal.price}</span>
                    <span className="text-brand-green">{deal.discount}</span>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <Button className="w-full bg-brand-yellow text-brand-dark hover:bg-amber-400">
                    Order This Deal
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Delivery Info */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Delivery Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-4">Delivery Areas</h3>
                <p className="text-gray-600 mb-4">
                  We deliver to most areas in Colombo and its suburbs. 
                  Delivery radius varies by outlet location.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Rajagiriya - 5km radius</li>
                  <li>• Maharagama - 6km radius</li>
                  <li>• Nugegoda - 5km radius</li>
                  <li>• Piliyandala - 5km radius</li>
                  <li>• Negombo - 7km radius</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-4">Delivery Times & Fees</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><span className="font-bold">Delivery Hours:</span> 11:00 AM - 9:30 PM daily</li>
                  <li><span className="font-bold">Average Delivery Time:</span> 30-45 minutes</li>
                  <li><span className="font-bold">Standard Delivery Fee:</span> Rs. 150 - 250 (based on distance)</li>
                  <li><span className="font-bold">Free Delivery:</span> On orders above Rs. 2500</li>
                  <li><span className="font-bold">Minimum Order:</span> Rs. 750</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-brand-yellow/20 p-6 rounded-lg border border-brand-yellow/30">
              <h3 className="font-bold text-xl mb-4">Important Notes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Delivery times may vary during peak hours and adverse weather conditions</li>
                <li>• For large orders, please call us in advance for better preparation</li>
                <li>• Special dietary requirements can be accommodated - please mention in order notes</li>
                <li>• Payment can be made via cash or card on delivery, or online payment through our partners</li>
                <li>• For bulk orders or catering services, please contact us directly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-brand-red text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enjoy Sri Lanka's Best Kottu?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Choose your preferred delivery partner or call us directly to place your order.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="bg-white text-brand-red hover:bg-gray-100">
              <a href="tel:+94112345678">
                Call to Order: +94 11 234 5678
              </a>
            </Button>
            <Button asChild size="lg" variant="default" className="bg-brand-yellow text-brand-dark hover:bg-amber-400">
              <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">
                WhatsApp Order
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
