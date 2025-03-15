import { useEffect } from 'react';
import Footer from '../Footer';
import { ArrowRight, Recycle, Beaker, Utensils, BarChart, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Agrifood = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="w-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-green-700 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h2 className="font-bold text-xl">KosmodeHealth</h2>
          <Link to="/KosmodeHealth/" className="flex items-center gap-2 bg-white text-green-700 py-2 px-4 rounded hover:bg-green-100 transition-colors">
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
          <button className="bg-white text-green-700 font-semibold py-3 px-6 rounded-lg flex items-center gap-2 hover:bg-green-100 transition-colors">
            Learn More <ArrowRight size={18} />
          </button>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-gray-800">Product Portfolio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-green-600 h-48 flex items-center justify-center">
                <Recycle size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Sustainably Derived Functional Ingredients</h3>
                <p className="text-gray-700 text-sm">
                  Repurposed from Food Processing Wastes for sustainable nutrition solutions.
                </p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-green-600 h-48 flex items-center justify-center">
                <Beaker size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Ready-to-manufacture Sustainable Functional Food Premixes</h3>
                <p className="text-gray-700 text-sm">
                  Including our innovative W0W® premixes for convenient functional food production.
                </p>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-green-600 h-48 flex items-center justify-center">
                <Utensils size={64} className="text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">Sustainable Functional Food</h3>
                <p className="text-gray-700 text-sm">
                  Products like W0W® noodle, clinically proven to not cause post-consumption blood sugar movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Agrifood;