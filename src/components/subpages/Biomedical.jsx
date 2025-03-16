import { useEffect, useState } from 'react';
import Footer from '../Footer';
import { Printer, Beaker, Microscope, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Biomedical = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      title: "PCL Zein Scaffold",
      image: "./images/pclzein.jpeg"
    },
    {
      id: 2,
      title: "Bioink Samples",
      image: "./images/bioink.jpg"
    },
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
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Scaffold Based 3D Cell Cultures</h1>
          <p className="text-lg md:text-xl max-w-3xl mb-8">
            Transforming food processing waste into sustainable bio-ink and customized 3D scaffolds for optimal cell growth.
          </p>
        </div>
      </div>

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800">3D Cell Cultures</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Current Limitations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Animal protein scaffolds are extremely expensive and lack reproducibility</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Standard off-the-shelf scaffolds often use synthetic materials less conducive for cell growth</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Available scaffold options are too limited for the millions of different cell types</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Industry Needs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>3D bioprinting is a dominant and growing platform for cell culture</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Different cells require specific micro-environments for optimal growth</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 text-green-600 flex-shrink-0">•</div>
                  <p>Cost-effective and reproducible alternatives to animal-derived materials are urgently needed</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Our Solution</h3>
            <p className="text-gray-700 mb-4">
              KosmodeHealth addresses these challenges through innovative approaches to scaffold and bio-ink development. We formulate bio-inks using plant proteins isolated from food processing wastes, providing a sustainable and cost-effective alternative to animal-derived materials.
            </p>
            <p className="text-gray-700">
              We customize 3D printed scaffolds into different shapes, sizes, and gradients to create optimal growth environments for different cell types. Our PPC® technology enables the creation of tailored microenvironments that support diverse cell growth requirements, enhancing research capabilities and advancing regenerative medicine applications.
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
                  <Printer size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Extraction and Valorisation Services</h3>
              <p className="text-gray-700 text-center">
                We tailor bio-inks and scaffolds to meet specific research or clinical needs, providing customized solutions for tissue engineering applications.
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
                We provide expertise and guidance on tissue engineering and regenerative medicine projects, helping researchers and clinicians achieve optimal results.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md transition-transform hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="bg-green-100 text-green-600 p-4 rounded-full">
                  <Microscope size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Consulting and Training</h3>
              <p className="text-gray-700 text-center">
                We offer a range of customized micron-size synthetic scaffolds and PPC® Scaffolds. Contact us for more information on our available products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">Our Products</h2>
          
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

export default Biomedical;