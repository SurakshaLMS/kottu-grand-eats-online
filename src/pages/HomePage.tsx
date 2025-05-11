
const OrderCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-pattern-food opacity-15 z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-xl mx-auto text-center text-white">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/44991f6f-eebf-4c6f-8206-c36615762b2b.png" 
              alt="Mr. Kottu Grand Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-lg opacity-90 mb-8">
            Whether you're craving our signature Cheese Kottu or want to try something new, ordering is quick and easy.
          </p>
          
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
};
