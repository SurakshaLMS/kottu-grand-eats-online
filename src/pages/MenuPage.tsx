
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  veg?: boolean;
  spicy?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("classic");
  
  const menuCategories: MenuCategory[] = [
    {
      id: "classic",
      name: "Classic Kottu",
      items: [
        {
          name: "Chicken Kottu",
          description: "Chopped roti stir-fried with chicken, vegetables, and our signature spice blend.",
          price: "Rs. 790",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          popular: true
        },
        {
          name: "Beef Kottu",
          description: "Chopped roti stir-fried with tender beef, vegetables, and our signature spice blend.",
          price: "Rs. 850",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        },
        {
          name: "Plain Kottu",
          description: "Our vegetarian-friendly classic kottu with mixed vegetables and spices.",
          price: "Rs. 600",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          veg: true
        }
      ]
    },
    {
      id: "specialty",
      name: "Specialty Kottu",
      items: [
        {
          name: "Dolphin Kottu",
          description: "Our special recipe with unique kottu sauce and choice of meat.",
          price: "Rs. 890",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          popular: true
        },
        {
          name: "Mexican Kottu",
          description: "Fusion kottu with Mexican spices, beans, and choice of meat.",
          price: "Rs. 950",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          spicy: true
        },
        {
          name: "Schezwan Kottu",
          description: "Indo-Chinese fusion kottu with Schezwan sauce and choice of meat.",
          price: "Rs. 920",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          spicy: true
        }
      ]
    },
    {
      id: "cheese",
      name: "Cheese Kottu",
      items: [
        {
          name: "Cheese Chicken Kottu",
          description: "Our signature dish with chopped roti, chicken, and plenty of cheese.",
          price: "Rs. 890",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          popular: true
        },
        {
          name: "Cheese Beef Kottu",
          description: "Chopped roti stir-fried with beef and loaded with cheese.",
          price: "Rs. 950",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        },
        {
          name: "Cheese Veg Kottu",
          description: "A vegetarian delight with mixed vegetables and our special cheese blend.",
          price: "Rs. 750",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          veg: true
        }
      ]
    },
    {
      id: "vegetarian",
      name: "Vegetarian",
      items: [
        {
          name: "Veg Kottu",
          description: "Classic vegetarian kottu with mixed vegetables and our signature spice blend.",
          price: "Rs. 650",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          veg: true
        },
        {
          name: "Paneer Kottu",
          description: "Kottu with Indian cottage cheese, vegetables, and spices.",
          price: "Rs. 750",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          veg: true
        },
        {
          name: "Mushroom Kottu",
          description: "Flavorful kottu with mushrooms and our signature spice blend.",
          price: "Rs. 700",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          veg: true
        }
      ]
    },
    {
      id: "seafood",
      name: "Seafood Kottu",
      items: [
        {
          name: "Prawn Kottu",
          description: "Chopped roti stir-fried with fresh prawns, vegetables, and our signature spices.",
          price: "Rs. 950",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          popular: true
        },
        {
          name: "Fish Kottu",
          description: "Kottu with pieces of fish fillet, vegetables, and our signature spice blend.",
          price: "Rs. 850",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        },
        {
          name: "Seafood Mix Kottu",
          description: "The ultimate seafood lover's kottu with prawns, cuttlefish, and fish.",
          price: "Rs. 1090",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        }
      ]
    },
    {
      id: "other",
      name: "Other Sri Lankan Dishes",
      items: [
        {
          name: "Rice & Curry",
          description: "Traditional Sri Lankan rice with chicken or fish curry and 3 vegetables.",
          price: "Rs. 650",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        },
        {
          name: "String Hoppers",
          description: "Traditional Sri Lankan string hoppers with curry and sambol.",
          price: "Rs. 550",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          veg: true
        },
        {
          name: "Fried Rice",
          description: "Sri Lankan style fried rice with choice of chicken, beef, or vegetables.",
          price: "Rs. 690",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
        }
      ]
    }
  ];
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };
  
  return (
    <div className="pt-20">
      {/* Menu Hero */}
      <div className="bg-brand-dark text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="font-bold mb-4">Our <span className="text-brand-red">Menu</span></h1>
          <p className="text-lg max-w-2xl mx-auto opacity-90">
            Discover our wide range of authentic Sri Lankan kottu dishes and other specialties, 
            all made with fresh ingredients and our signature spice blends.
          </p>
        </div>
      </div>
      
      {/* Menu Navigation */}
      <div className="bg-white sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto py-4 overflow-x-auto">
          <Tabs defaultValue="classic" value={activeCategory} onValueChange={handleCategoryChange}>
            <TabsList className="bg-gray-100 p-1">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-brand-red data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      {/* Menu Content */}
      <div className="container mx-auto py-12">
        {menuCategories.map((category) => (
          <div 
            key={category.id}
            className={category.id === activeCategory ? "block" : "hidden"}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold">{category.name}</h2>
              <div className="h-1 w-24 bg-brand-red my-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {category.items.map((item, index) => (
                <Card key={index} className="overflow-hidden menu-item">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="h-48 w-full object-cover"
                    />
                    <div className="absolute top-0 right-0 flex flex-col gap-2 p-2">
                      {item.popular && (
                        <span className="bg-brand-red text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                      {item.veg && (
                        <span className="bg-brand-green text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Vegetarian
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          Spicy
                        </span>
                      )}
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
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Menu Notes */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-bold text-xl mb-4">Menu Notes</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• All prices are inclusive of taxes</li>
              <li>• We can adjust spice levels according to your preference</li>
              <li>• Please inform our staff about any allergies or dietary restrictions</li>
              <li>• Menu items may contain nuts, dairy, and gluten</li>
              <li>• Vegetarian and vegan options are available upon request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
