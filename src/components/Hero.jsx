const Hero = () => {
  return (
    <div className="w-screen pt-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
            Expanding Access to Health from Nature
          </h1>
          <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-3xl mx-auto">
            Sustainable solutions for human nutrition and health through innovative technology
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Learn More
            </button>
            <a href="mailto:info@kosmodehealth.com?subject=Inquiry&body=Hello%2C%20I%20would%20like%20more%20information%20about%20your%20services." className="bg-white hover:bg-green-100 text-green-600 font-bold py-3 px-6 rounded-lg border border-green-600 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
