import { Link } from 'react-router-dom';

const Industries = () => {
  return (
    <section id="industries" className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Industries & Services</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Agrifood Industry */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="h-16 bg-green-600 flex items-center">
              <h3 className="text-2xl font-bold text-white px-6">Agrifood Industry</h3>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Extraction and Valorisation Services</h4>
                <p className="text-gray-700">
                  We assist agrifood companies in extracting valuable components from food processing waste, transforming them into functional food ingredients.
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Functional Food Formulation Services</h4>
                <p className="text-gray-700">
                  We collaborate with food manufacturers to develop new functional food products using repurposed ingredients, promoting sustainability.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">Consulting and Training</h4>
                <p className="text-gray-700">
                  We offer expertise on food waste valorisation, functional food formulation, and sustainable practices in the food industry.
                </p>
              </div>
            </div>
            <div className="flex justify-center -mt-2 mb-6"> 
              <Link to="/Agrifood">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          
          {/* Biomedical Industry */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="h-16 bg-green-600 flex items-center">
              <h3 className="text-2xl font-bold text-white px-6">Biomedical Industry</h3>
            </div>
            <div className="p-6 flex-1">
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-green-700 mb-2">Custom Bio-Ink, Scaffold Design & Fabrication</h4>
                <p className="text-gray-700">
                  We tailor bio-inks and scaffolds to meet specific research or clinical needs, providing customized solutions for tissue engineering applications.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-green-700 mb-2">Consulting Services</h4>
                <p className="text-gray-700">
                  We provide guidance on tissue engineering and regenerative medicine projects, sharing our expertise to help advance biomedical research and applications.
                </p>
              </div>
            </div>
            <div className="flex justify-center -mt-2 mb-6">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
