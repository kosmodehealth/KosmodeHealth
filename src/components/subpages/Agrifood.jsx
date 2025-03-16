import { useEffect, useState } from 'react';
import Footer from '../Footer';
import { Recycle, Beaker, BarChart, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Agrifood = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      title: "Soba",
      image: "./images/soba.JPG"
    },
    {
      id: 2,
      title: "Angel Hair",
      image: "./images/angelhair.jpg"
    },
    {
      id: 3,
      title: "Premix Powder",
      image: "./images/premix.jpeg"
    },
    {
      id: 4,
      title: "Dry Noodles",
      image: "./images/drynoodles.jpeg"
    },
    {
      id: 5,
      title: "Rice",
      image: "./images/rice.jpg"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + products.length) % products.length);
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

  return (
    <div className="w-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-green-700 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="font-bold text-xl">KosmodeHealth</h2>
          <Link to="/" className="flex items-center gap-2 bg-white text-green-700 py-2 px-4 rounded hover:bg-green-100 transition-colors">
            <Home size={18} />
            Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Addressing Functional Food Security Challenge</h1>
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
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
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

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">Services Offered</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                  <Recycle size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Extraction and Valorisation Services</h3>
              <p className="text-gray-700 text-center">
                We help agrifood companies unlock the value of their food processing waste by extracting valuable components and transforming them into functional food ingredients.
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
                We partner with food manufacturers to develop and formulate new functional food products using repurposed ingredients, expanding their product portfolios and promoting sustainability.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                  <BarChart size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Consulting and Training</h3>
              <p className="text-gray-700 text-center">
                We offer expertise and guidance on food waste valorisation, functional food formulation, and sustainable practices in the food industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">Our Sustainable Products</h2>
          
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
          <div className="text-center py-4 px-4 bg-green-50 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-green-700">{products[activeIndex].title}</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agrifood;