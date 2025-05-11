
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  directions: string;
}

const LocationsPage = () => {
  const [activeLocation, setActiveLocation] = useState("rajagiriya");
  
  const locations: Location[] = [
    {
      id: "rajagiriya",
      name: "Rajagiriya",
      address: "123 Kotte Road, Rajagiriya, Sri Lanka",
      phone: "+94 11 2345678",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.60576566674!2d79.88917543476562!3d6.909703700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259f82c7006b9%3A0x4164b4f4576f0a!2sRajagiriya!5e0!3m2!1sen!2sus!4v1621234567890!5m2!1sen!2sus",
      directions: "Located on the main Kotte Road, opposite Bank of Ceylon"
    },
    {
      id: "maharagama",
      name: "Maharagama",
      address: "456 High Level Road, Maharagama, Sri Lanka",
      phone: "+94 11 2345679",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.975904868236!2d79.92131187788086!3d6.848469899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2510f7a6852f1%3A0x2b0ae2eeee33b69d!2sMaharagama!5e0!3m2!1sen!2sus!4v1621234567891!5m2!1sen!2sus",
      directions: "At the High Level Road junction, near Maharagama Central Bus Stand"
    },
    {
      id: "nugegoda",
      name: "Nugegoda",
      address: "789 Stanley Thilakaratne Mawatha, Nugegoda, Sri Lanka",
      phone: "+94 11 2345680",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.839775418438!2d79.88764437788087!3d6.8712649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a346d944b85%3A0x6a72bdf0c2c7caf6!2sNugegoda!5e0!3m2!1sen!2sus!4v1621234567892!5m2!1sen!2sus",
      directions: "Near Nugegoda Junction, opposite People's Bank"
    },
    {
      id: "piliyandala",
      name: "Piliyandala",
      address: "101 Colombo Road, Piliyandala, Sri Lanka",
      phone: "+94 11 2345681",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.400207528143!2d79.92082435!3d6.823072599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2453931eb2063%3A0xb0b4204ea4fe28b3!2sPiliyandala!5e0!3m2!1sen!2sus!4v1621234567893!5m2!1sen!2sus",
      directions: "At Piliyandala junction, next to Commercial Bank"
    },
    {
      id: "negombo",
      name: "Negombo",
      address: "234 Colombo Road, Negombo, Sri Lanka",
      phone: "+94 31 2245678",
      hours: "11:00 AM - 10:00 PM (Daily)",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31677.613184236433!2d79.83272603476564!3d7.207833000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c0bb39733%3A0x9c54d15f2114dfee!2sNegombo!5e0!3m2!1sen!2sus!4v1621234567894!5m2!1sen!2sus",
      directions: "Near Negombo Beach Road, opposite St. Mary's Church"
    }
  ];
  
  const activeLocationData = locations.find(loc => loc.id === activeLocation) || locations[0];
  
  return (
    <div className="pt-20">
      {/* Locations Hero */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-bold mb-4">Our <span className="text-brand-red">Locations</span></h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Find your nearest Mr. Kottu Grand outlet and visit us today for the authentic Sri Lankan kottu experience.
          </p>
        </div>
      </div>
      
      {/* Locations Tabs */}
      <div className="bg-white sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto py-4 overflow-x-auto">
          <Tabs defaultValue="rajagiriya" value={activeLocation} onValueChange={setActiveLocation}>
            <TabsList className="bg-gray-100 p-1">
              {locations.map(location => (
                <TabsTrigger 
                  key={location.id} 
                  value={location.id}
                  className="data-[state=active]:bg-brand-red data-[state=active]:text-white"
                >
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {/* Location Map and Details */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
                <iframe
                  src={activeLocationData.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title={`Mr. Kottu Grand ${activeLocationData.name} Location`}
                ></iframe>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{activeLocationData.name} Branch</h2>
                  <p className="text-brand-green mb-6">Now Open</p>
                  
                  <div className="space-y-4">
                    <div className="flex">
                      <MapPin className="mr-3 text-brand-red shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold">Address</h4>
                        <p className="text-gray-600">{activeLocationData.address}</p>
                        <p className="text-gray-500 text-sm mt-1">{activeLocationData.directions}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="mr-3 text-brand-red shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-gray-600">{activeLocationData.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="mr-3 text-brand-red shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold">Opening Hours</h4>
                        <p className="text-gray-600">{activeLocationData.hours}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <Button asChild className="w-full bg-brand-red hover:bg-red-700">
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activeLocationData.address)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Get Directions <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                    
                    <Button asChild variant="outline" className="w-full border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                      <a href={`tel:${activeLocationData.phone.replace(/\s/g, '')}`}>
                        Call This Location
                      </a>
                    </Button>
                    
                    <Button asChild className="w-full bg-brand-yellow text-brand-dark hover:bg-amber-400">
                      <Link to="/order">
                        Order from This Location
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* All Locations */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Mr. Kottu Grand Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map(location => (
              <Card 
                key={location.id} 
                className={`overflow-hidden cursor-pointer hover:shadow-lg transition-shadow ${
                  activeLocation === location.id ? 'border-2 border-brand-red' : ''
                }`}
                onClick={() => setActiveLocation(location.id)}
              >
                <div className="h-40 relative">
                  <iframe
                    src={location.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    title={`Mr. Kottu Grand ${location.name} Location Thumbnail`}
                  ></iframe>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{location.address}</p>
                  <p className="text-gray-500 text-sm">{location.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Franchise Information */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in Franchising?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Join the Mr. Kottu Grand family and open your own successful franchise.
            We're expanding across Sri Lanka and internationally.
          </p>
          <Button asChild size="lg" className="bg-brand-yellow text-brand-dark hover:bg-amber-400">
            <Link to="/contact">
              Contact Us for Franchise Information
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;
