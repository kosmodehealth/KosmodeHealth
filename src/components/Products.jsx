const Products = () => {
  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-green-50 rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-green-200 flex items-center justify-center">
              <img src="/images/noodles.png" alt="W0W Noodles" className="max-h-full" />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-green-800 mb-4">W0W® Noodles</h3>
              <div className="mb-4">
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">Zero Glycemic Response</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mr-2">High Protein</span>
                <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Starchless</span>
              </div>
              <p className="text-gray-700 mb-6">
                Starchless protein-fiber noodles made from valorized spent barley grains. Clinically validated to have zero glycemic response, catering to the nutritional needs of aging and diabetic populations.
              </p>
              <div className="flex justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;