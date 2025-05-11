
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

interface Outlet {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  directions: string;
  imageUrl: string;
  specialties: string[];
}

const OutletPage = () => {
  const [activeOutlet, setActiveOutlet] = useState("rajagiriya");
  
  const outlets: Outlet[] = [
    {
      id: "rajagiriya",
      name: "Rajagiriya",
      address: "123 Kotte Road, Rajagiriya, Sri Lanka",
      phone: "+94 11 2345678",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.60576566674!2d79.88917543476562!3d6.909703700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f82c7006b9%3A0x4164b4f4576f0a!2sRajagiriya!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus",
      directions: "Located on the main Kotte Road, opposite Bank of Ceylon",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      specialties: ["Cheese Kottu", "Chicken Kottu", "Seafood Kottu"]
    },
    {
      id: "maharagama",
      name: "Maharagama",
      address: "456 High Level Road, Maharagama, Sri Lanka",
      phone: "+94 11 2345679",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.975904868236!2d79.92131187788086!3d6.848469899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2510f7a6852f1%3A0x2b0ae2eeee33b69d!2sMaharagama!5e0!3m2!1sen!2sus!4v1621234567891!5m2!1sen!2sus",
      directions: "At the High Level Road junction, near Maharagama Central Bus Stand",
      imageUrl: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      specialties: ["Vegetable Kottu", "Beef Kottu", "Special Kottu"]
    },
    {
      id: "nugegoda",
      name: "Nugegoda",
      address: "789 Stanley Thilakaratne Mawatha, Nugegoda, Sri Lanka",
      phone: "+94 11 2345680",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.839775418438!2d79.88764437788087!3d6.8712649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a346d944b85%3A0x6a72bdf0c2c7caf6!2sNugegoda!5e0!3m2!1sen!2sus!4v1621234567892!5m2!1sen!2sus",
      directions: "Near Nugegoda Junction, opposite People's Bank",
      imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      specialties: ["Dolphin Kottu", "Mixed Kottu", "Family Pack Kottu"]
    },
    {
      id: "piliyandala",
      name: "Piliyandala",
      address: "101 Colombo Road, Piliyandala, Sri Lanka",
      phone: "+94 11 2345681",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.400207528143!2d79.92082435!3d6.823072599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2453931eb2063%3A0xb0b4204ea4fe28b3!2sPiliyandala!5e0!3m2!1sen!2sus!4v1621234567893!5m2!1sen!2sus",
      directions: "At Piliyandala junction, next to Commercial Bank",
      imageUrl: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      specialties: ["Prawn Kottu", "Veggie Kottu", "Egg Kottu"]
    }
  ];
  
  const activeOutletData = outlets.find(loc => loc.id === activeOutlet) || outlets[0];
  
  return (
    <div className="pt-20">
      {/* Outlets Hero */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-bold mb-4">Our <span className="text-brand-yellow">Outlets</span></h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Visit one of our Mr. Kottu Grand outlets today and experience the authentic taste of Sri Lankan kottu.
          </p>
        </div>
      </div>
      
      {/* Outlets Tabs */}
      <div className="bg-white sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto py-4 overflow-x-auto">
          <Tabs defaultValue="rajagiriya" value={activeOutlet} onValueChange={setActiveOutlet}>
            <TabsList className="bg-gray-100 p-1">
              {outlets.map(outlet => (
                <TabsTrigger 
                  key={outlet.id} 
                  value={outlet.id}
                  className="data-[state=active]:bg-brand-red data-[state=active]:text-white"
                >
                  {outlet.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {/* Outlet Details Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <img 
                  src={activeOutletData.imageUrl} 
                  alt={`Mr. Kottu Grand ${activeOutletData.name} Outlet`} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Our Specialties at {activeOutletData.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {activeOutletData.specialties.map((specialty, index) => (
                    <span 
                      key={index} 
                      className="bg-brand-yellow text-black px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <Card className="h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{activeOutletData.name} Outlet</h2>
                  <p className="text-brand-green mb-6">Now Open</p>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin className="mr-3 text-brand-red shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">{activeOutletData.address}</p>
                        <p className="text-gray-500 text-sm mt-1">{activeOutletData.directions}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="mr-3 text-brand-red shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">{activeOutletData.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="mr-3 text-brand-red shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold">Opening Hours</h4>
                        <p className="text-gray-600">{activeOutletData.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeOutletData.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Open in Google Maps <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                      <a href={`tel:${activeOutletData.phone.replace(/\s/g, '')}`}>
                        Call This Outlet
                      </a>
                    </Button>
                    
                    <div className="grid grid-cols-3 gap-2">
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
                        <Link to="/order">Order</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Location Map</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
            <iframe
              src={activeOutletData.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title={`Mr. Kottu Grand ${activeOutletData.name} Location`}
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* All Outlets */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Mr. Kottu Grand Outlets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outlets.map(outlet => (
              <Card 
                key={outlet.id} 
                className={`overflow-hidden cursor-pointer hover:shadow-lg transition-shadow ${
                  activeOutlet === outlet.id ? 'border-2 border-brand-red' : ''
                }`}
                onClick={() => setActiveOutlet(outlet.id)}
              >
                <div className="h-48 relative">
                  <img 
                    src={outlet.imageUrl} 
                    alt={`Mr. Kottu Grand ${outlet.name} Outlet`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <h3 className="font-bold text-lg text-white">{outlet.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center text-sm mb-2">
                    <MapPin size={16} className="mr-1 text-brand-red" />
                    <span className="text-gray-600 truncate">{outlet.address}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone size={16} className="mr-1 text-brand-red" />
                    <span className="text-gray-600">{outlet.phone}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutletPage;
