
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-brand-dark via-black to-brand-dark">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center pt-20">
        <div className="text-white z-10">
          <h1 className="font-bold mb-4">
            <span className="text-brand-yellow">Sri Lanka's</span> Favorite <br/>
            <span className="text-brand-red">Kottu</span> Restaurant
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Experience the authentic taste of Sri Lankan street food with our signature kottu dishes. Made fresh to order with the finest ingredients.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="btn-primary animate-sizzle">
              <Link to="/order">Order Online Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/20 hover:text-white">
              <Link to="/menu" className="flex items-center">
                View Our Menu <ChevronRight className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Delicious Kottu Dish" 
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-yellow text-brand-dark p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-1">
                <Star className="fill-brand-dark" size={20} />
                <Star className="fill-brand-dark" size={20} />
                <Star className="fill-brand-dark" size={20} />
                <Star className="fill-brand-dark" size={20} />
                <Star className="fill-brand-dark" size={20} />
              </div>
              <p className="font-semibold mt-2">Rated #1 Kottu in Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

const FeaturedDishes = () => {
  const featuredItems = [
    {
      name: "Cheese Chicken Kottu",
      description: "Our signature dish! Chopped roti stir-fried with chicken, cheese, vegetables and special spices.",
      price: "Rs. 890",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      tag: "Best Seller"
    },
    {
      name: "Mutton Devil Kottu",
      description: "Spicy kottu with tender mutton pieces, devil sauce and our secret spice blend.",
      price: "Rs. 990",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      tag: "Spicy"
    },
    {
      name: "Seafood Special Kottu",
      description: "Fresh seafood mix of prawns and cuttlefish in a flavorful kottu blend.",
      price: "Rs. 1090",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      tag: "Popular"
    },
    {
      name: "Veg Cheese Kottu",
      description: "A vegetarian delight with mixed vegetables, cheese and special kottu sauce.",
      price: "Rs. 750",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      tag: "Vegetarian"
    }
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Signature <span className="text-brand-red">Dishes</span></h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience the authentic flavors of Sri Lanka with our most popular kottu dishes that keep our customers coming back for more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item, index) => (
            <div key={index} className="menu-item card-hover group">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-red text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-brand-dark">{item.price}</span>
                  <Button variant="outline" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild size="lg" variant="default" className="bg-brand-red hover:bg-red-700">
            <Link to="/menu" className="flex items-center">
              View Full Menu <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Amila Fernando",
      position: "Food Blogger",
      quote: "Mr. Kottu Grand has the best cheese kottu I've ever tasted. The flavors are authentic and the portion size is generous!",
      avatar: "https://i.pravatar.cc/100?img=1",
      rating: 5
    },
    {
      name: "Sarah Williams",
      position: "Tourist",
      quote: "I visited Sri Lanka for the first time and Mr. Kottu Grand was recommended by locals. The kottu was amazing and staff were super friendly!",
      avatar: "https://i.pravatar.cc/100?img=5",
      rating: 5
    },
    {
      name: "Ravi Perera",
      position: "Regular Customer",
      quote: "I've been ordering from Mr. Kottu Grand for years. Their consistency in quality and taste keeps me coming back for more.",
      avatar: "https://i.pravatar.cc/100?img=3",
      rating: 5
    },
    {
      name: "Priya Sharma",
      position: "Food Critic",
      quote: "The vegetarian options at Mr. Kottu Grand are exceptional. It's rare to find veg kottu with such depth of flavor.",
      avatar: "https://i.pravatar.cc/100?img=2",
      rating: 5
    }
  ];
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-brand-red">Customers</span> Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers have to say about their Mr. Kottu Grand experience.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="bg-white border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 mb-6">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const OrderCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-brand-dark opacity-90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-15 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-lg opacity-90 mb-8">
            Whether you're craving our signature Cheese Kottu or want to try something new, ordering is quick and easy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
            <Button asChild className="w-full bg-white text-brand-dark hover:bg-gray-100">
              <a href="https://ubereats.com" target="_blank" rel="noopener noreferrer">
                UberEats
              </a>
            </Button>
            <Button asChild className="w-full bg-white text-brand-dark hover:bg-gray-100">
              <a href="https://pickme.lk" target="_blank" rel="noopener noreferrer">
                PickMe
              </a>
            </Button>
            <Button asChild className="w-full bg-brand-yellow text-brand-dark hover:bg-amber-400">
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
};

const FindLocationSection = () => {
  const locations = [
    "Rajagiriya", "Maharagama", "Nugegoda", "Piliyandala", "Negombo"
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Nearest <span className="text-brand-red">Mr. Kottu Grand</span></h2>
            <p className="text-lg text-gray-600 mb-6">
              With 5 locations across Sri Lanka, your favorite kottu is never too far away. 
              Each branch offers the same great taste with dine-in, takeaway, and delivery options.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {locations.map((location, index) => (
                <div key={index} className="bg-gray-100 text-brand-dark px-4 py-2 rounded-full font-medium">
                  {location}
                </div>
              ))}
            </div>
            
            <Button asChild size="lg" className="bg-brand-red hover:bg-red-700">
              <Link to="/locations">
                Find Your Nearest Outlet
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585658262!2d79.8031765!3d6.9218374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1621234567891!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '0.5rem' }}
              allowFullScreen={false}
              loading="lazy"
              title="Mr. Kottu Grand Locations"
              className="shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDishes />
      <TestimonialSection />
      <OrderCTA />
      <FindLocationSection />
    </div>
  );
};

export default HomePage;
