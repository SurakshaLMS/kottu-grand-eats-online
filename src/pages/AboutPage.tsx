
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const milestones = [
    {
      year: "2010",
      title: "Humble Beginnings",
      description: "Started as a small kottu stall in Rajagiriya with just 4 tables."
    },
    {
      year: "2013",
      title: "First Restaurant",
      description: "Opened our first full-service restaurant in Rajagiriya with expanded menu."
    },
    {
      year: "2015",
      title: "Expansion",
      description: "Opened second branch in Nugegoda due to growing popularity."
    },
    {
      year: "2018",
      title: "Award Winning",
      description: "Won 'Best Street Food Restaurant' at the Sri Lankan Culinary Awards."
    },
    {
      year: "2020",
      title: "National Presence",
      description: "Expanded to 5 locations across Sri Lanka, including Negombo."
    },
    {
      year: "2023",
      title: "Modern Evolution",
      description: "Launched mobile app and modernized ordering systems while maintaining traditional flavors."
    }
  ];

  const team = [
    {
      name: "Kumara Perera",
      position: "Founder & Master Chef",
      image: "https://i.pravatar.cc/300?img=11",
      bio: "With 25 years of culinary experience, Kumara created the signature recipes that made Mr. Kottu Grand famous."
    },
    {
      name: "Amali Fernando",
      position: "Operations Director",
      image: "https://i.pravatar.cc/300?img=12",
      bio: "Amali ensures every branch maintains our high standards of quality and service."
    },
    {
      name: "Rohan De Silva",
      position: "Executive Chef",
      image: "https://i.pravatar.cc/300?img=13",
      bio: "Rohan continuously innovates our menu while preserving the authentic flavors of Sri Lankan street food."
    }
  ];

  return (
    <div className="pt-20">
      {/* About Hero */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-bold mb-4">About <span className="text-brand-red">Mr. Kottu Grand</span></h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Our story, our passion, and our commitment to bringing the authentic taste of Sri Lankan street food to your plate.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700">
                Mr. Kottu Grand began in 2010 as a humble street food stall in Rajagiriya, 
                with a simple mission: to serve the most delicious kottu in Sri Lanka.
              </p>
              <p className="mb-6 text-gray-700">
                Founded by Kumara Perera, a chef with a passion for traditional Sri Lankan cuisine, 
                our first stall quickly gained popularity for its unique flavors and generous portions. 
                What started as a small family business has now grown into Sri Lanka's favorite kottu restaurant chain.
              </p>
              <p className="text-gray-700">
                Today, with five locations across the country, we continue to use the same traditional recipes and cooking methods 
                that made us famous, while continuously innovating to create new and exciting flavors for our customers.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Mr. Kottu Grand restaurant interior" 
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Original Mr. Kottu Grand stall" 
                className="absolute -bottom-10 -left-10 w-2/3 rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-700">
            "To preserve and celebrate the rich culinary tradition of Sri Lankan street food, 
            while providing an exceptional dining experience that brings people together through 
            the shared love of delicious kottu."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-brand-red h-16 w-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Quality</h3>
              <p className="text-gray-600">
                We use only the freshest ingredients and traditional cooking methods to ensure authentic flavors in every dish.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-brand-yellow h-16 w-16 rounded-full flex items-center justify-center text-brand-dark mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Service</h3>
              <p className="text-gray-600">
                We strive to provide fast, friendly service that makes every customer feel like part of our family.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-brand-green h-16 w-16 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                While respecting tradition, we continuously innovate our menu to create new and exciting flavors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Journey Timeline */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-red"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-brand-red border-4 border-white"></div>
                  
                  {/* Timeline Content */}
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    <div className="md:w-1/2"></div>
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 rounded-full bg-brand-red/10 text-brand-red font-bold mb-3">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-700">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-brand-red mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="Cooking kottu at Mr. Kottu Grand" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Authenticity</h3>
                  <p className="text-gray-700">
                    We stay true to traditional Sri Lankan flavors and cooking techniques, 
                    ensuring every dish delivers an authentic experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Community</h3>
                  <p className="text-gray-700">
                    We're proud to be part of our local communities and actively contribute 
                    through employment opportunities, local sourcing, and charitable initiatives.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Sustainability</h3>
                  <p className="text-gray-700">
                    We're committed to environmentally friendly practices, from reducing food waste 
                    to using eco-friendly packaging.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Excellence</h3>
                  <p className="text-gray-700">
                    We strive for excellence in everything we do, from food quality to customer service, 
                    always aiming to exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-brand-red text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Come Experience the Mr. Kottu Grand Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            We invite you to visit any of our locations and taste the authentic flavors that have made us Sri Lanka's favorite kottu restaurant.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="bg-white text-brand-red hover:bg-gray-100">
              <Link to="/menu">
                Explore Our Menu
              </Link>
            </Button>
            <Button asChild size="lg" variant="default" className="bg-brand-yellow text-brand-dark hover:bg-amber-400">
              <Link to="/locations">
                Find Nearest Location
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
