import { useEffect, useState } from 'react';
import Footer from '../Footer';
import { DollarSign, Recycle, Beaker, BarChart, Home, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import "../standards/buttons.css";
import Products from "./Products"

const Agrifood = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  
  const products = [
    {
      id: 1,
      title: "valoRICE Premix",
      image: "./images/premix.jpeg",
      description: "A next-gen blend formulated with upcycled, nutrient-dense ingredients. This premix delivers higher protein and fiber than regular rice, supporting a fuller feeling and balanced nutrition—without sacrificing taste, texture, or cooking ease."
    },
    {
      id: 2,
      title: "Soda Premix",
      image: "./images/sodapremix.png",
      description: "An innovative soda mix enhanced with functional nutrients reclaimed from food production. This premix supports digestive health and satiety, making it a unique and healthier alternative."
    },
    {
      id: 3,
      title: "Chocolate Premix",
      image: "./images/chocopremix.png",
      description: "A nutrient-rich chocolate blend made with valorized food by-products. Packed with protein and fiber, this mix provides a satisfying and wholesome base for creating indulgent yet functional chocolate-inspired meals or snacks."
    },    
    {
      id: 4,
      title: "Soba",
      image: "./images/soba.JPG",
      description: "Our soba noodles are made from valorized grains, providing a nutritious alternative that's rich in protein and fiber. These noodles maintain a traditional texture and flavor while offering enhanced nutritional benefits and a lower glycemic index, making them ideal for health-conscious consumers."
    },
    {
      id: 5,
      title: "Angel Hair",
      image: "./images/angelhair.jpg",
      description: "Delicate and versatile, our angel hair pasta is crafted using our proprietary extraction process that preserves essential nutrients from food processing waste. The result is a fine pasta that cooks quickly, has excellent texture, and provides superior nutritional value compared to conventional options."
    },
    {
      id: 6,
      title: "Dry Noodles",
      image: "./images/drynoodles.jpeg",
      description: "Our shelf-stable dry noodles are produced using our W0W® technology, clinically proven to maintain stable blood sugar levels after consumption. These noodles combine convenience with nutrition, offering a sustainable food option that doesn't compromise on taste or texture."
    },
    {
      id: 7,
      title: "valoRICE",
      image: "./images/rice.jpg",
      description: "Our functional rice products incorporate valorized ingredients from food processing waste, creating a more nutritious alternative to traditional rice. With enhanced protein content and fiber, this rice helps promote satiety while maintaining the cooking characteristics and versatility consumers expect from rice products."
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Auto-rotate carousel - stop when details are shown
  useEffect(() => {
    if (showDetails) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [products.length, showDetails]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % products.length);
    setShowDetails(false);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + products.length) % products.length);
    setShowDetails(false);
  };

  const getTransform = (index) => {
    // Calculate position based on index relative to active index
    const diff = (index - activeIndex + products.length) % products.length;
    if (diff === 0) return "translateZ(150px) scale(1)"; // Active card
    if (diff === 1 || diff === products.length - 1) return `translateX(${diff === 1 ? '150px' : '-150px'}) translateZ(0) scale(0.85) rotateY(${diff === 1 ? '-15deg' : '15deg'})`; // Adjacent cards
    return "translateZ(-150px) scale(0.7) opacity-50"; // Far cards
  };

  const getZIndex = (index) => {
    const diff = (index - activeIndex + products.length) % products.length;
    if (diff === 0) return 30; // Active card
    if (diff === 1 || diff === products.length - 1) return 20; // Adjacent cards
    return 10; // Far cards
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="w-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#8f9962] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="font-bold text-xl">KosmodeHealth</h2>
          <Link to="/" className="flex items-center gap-2 bg-white text-green-700 py-2 px-4 rounded hover:bg-green-100 transition-colors">
            <Home size={18} />
            Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#8f9962] to-[#ded9ba] text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Addressing Functional Food Security Challenges</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Transforming food processing waste into sustainable nutrition solutions for a growing world.
          </p>
        </div>
      </div>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">The Global Food Security Challenge</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Situation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Food insecurity affects nearly 1 in 10 people globally</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Global population expected to reach 10 billion by 2050</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>FAO estimates 70% increase in food production needed by 2050</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Environmental Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Global food system responsible for ⅓ of greenhouse gas emissions</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Food waste in landfills contributes to half of GHGe from food systems</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Conventional production increase would be devastating for future generations</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#ded9ba] border border-[#8f9962] rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Solution</h3>
            <p className="text-gray-700 mb-4">
              This existential threat must be addressed immediately by making better use of harvested crops. Food Processing Wastes or Spent Grains generated after the first round of food production are concentrated with Proteins & Fibres, nutrients that can be extracted for human nutrition; providing a source of nutrients without need to grow more grains.
            </p>
            <p className="text-gray-700">
              Applying our plant extraction expertise in extraction of protein & fibre from Food Processing Wastes, KosmodeHealth has demonstrated the valorisation of Spent Barley Grains, repurposing it into functional ingredients for formulation into W0W® noodle, the only functional food clinically proven to not cause post-consumption blood sugar movement; and valorization of Distilled Dried Grains into Protein isolates for formulation into Plant Protein Composite, PPC® bioink & 3D scaffolds for human health.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Products />
          
          {/* 3D Carousel Container */}
          <div className="relative h-96 mb-8 perspective-1000">
            {/* Carousel Navigation */}
            <div className="absolute z-40 flex justify-between w-full top-1/2 transform -translate-y-1/2 px-4">
              <button 
                onClick={prevSlide}
                className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 focus:outline-none"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-green-600 text-white hover:bg-green-700 focus:outline-none"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            {/* Carousel Items */}
            <div className="relative w-full h-full preserve-3d">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="absolute w-full md:w-2/3 max-w-lg inset-0 mx-auto transition-all duration-500 ease-out shadow-lg rounded-lg overflow-hidden bg-white"
                  style={{
                    transform: getTransform(index),
                    zIndex: getZIndex(index),
                    opacity: (index - activeIndex + products.length) % products.length === 0 ? 1 : 
                           ((index - activeIndex + products.length) % products.length === 1 || 
                            (index - activeIndex + products.length) % products.length === products.length - 1) ? 0.8 : 0.5,
                    transition: 'all 0.6s ease-out'
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Caption for Active Item */}
          <div className="text-center py-4 px-4 bg-[#ded9ba] rounded-lg max-w-2xl mx-auto">
            <button onClick={toggleDetails} className="button-85">
              {products[activeIndex].title} <span>(Click to Learn More)</span>
            </button>
            
            {/* Expanded Details Section */}
            {showDetails && (
              <div className="mt-4 bg-white p-6 rounded-lg border border-[#8f9962] relative transition-all duration-300 ease-in-out">
                <button 
                  className="absolute top-2 right-2 text-[#8f9962] hover:text-gray-700 focus:outline-none"
                  onClick={toggleDetails}
                >
                  <X size={20} />
                </button>
                <h4 className="text-lg font-medium text-[#8f9962] mb-2">{products[activeIndex].title}</h4>
                <p className="text-gray-700 text-left">{products[activeIndex].description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">Services Offered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                  <Recycle size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Technology Consultancy for Valorization of Food Processing Waste</h3>
              <p className="text-gray-700 text-center">
                Enabling Food Manufacturers to maximise value of their Food Processing Wastes, contributing towards ESG goals.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                  <DollarSign size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Sale of REPURPOSED Functional Ingredient</h3>
              <p className="text-gray-700 text-center">
                Enabling Food Manufacturers to produce Repurposed, Circular, functional food to address consumer demand for health & environmental stewardship.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                  <Beaker size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Functional Food Formulation Services</h3>
              <p className="text-gray-700 text-center">
                Enabling Food Manufacturers to expand functional food portfolio without significant in-house fixed investments.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                  <BarChart size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Sale of Functional Food Premix</h3>
              <p className="text-gray-700 text-center">
                Providing ready-to-make premix for manufacturing/private branding of functional food such as W0W®.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agrifood;