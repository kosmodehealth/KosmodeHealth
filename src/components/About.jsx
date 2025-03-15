import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-screen py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About KosmodeHealth</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              KosmodeHealth is a deep-tech startup originating from the National University of Singapore's Food Science and Technology Department. We are committed to expanding access to health from nature, focusing on sustainability in both human health and environmental well-being.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Operating as a B2B enabler, KosmodeHealth leverages a Triple Technology Platform to repurpose food processing waste into functional ingredients for human nutrition in the agrifood industry and functional materials for human health in the biomedical industry.
            </p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Our Mission and Beliefs</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-green-700 mb-2">Sustainable Use of Resources</h4>
              <p className="text-gray-700">
                We advocate for the utilization of spent grains, which would otherwise be discarded, to produce affordable, high-quality ingredients and materials. Our process gives a second life to food processing wastes by extracting proteins and fibers, serving as sustainable and economical sources for human nutrition and health.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold text-green-700 mb-2">Functional Staple Foods</h4>
              <p className="text-gray-700">
                We believe in transforming staple foods into therapeutic options to address health management compliance issues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;