import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Technologies = () => {
  // Refs for our animated elements
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const cardsRef = useRef([]);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animation for the heading and divider
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(
      dividerRef.current,
      { width: 0, opacity: 0 },
      { 
        width: "6rem", 
        opacity: 1, 
        duration: 1, 
        delay: 0.3, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: dividerRef.current,
          start: "top 80%"
        }
      }
    );

    // Staggered animation for the cards
    gsap.fromTo(
      cardsRef.current,
      { y: 80, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );

    // Hover animations for cards
    cardsRef.current.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -10, 
          scale: 1.03, 
          boxShadow: "0 10px 30px rgba(0, 128, 0, 0.1)", 
          duration: 0.3 
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1, 
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
          duration: 0.3 
        });
      });
    });

    return () => {
      // Cleanup event listeners
      cardsRef.current.forEach(card => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Function to add cards to the refs array
  const addToCardsRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="technologies" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-[#8f9962] mb-4">Our Technologies</h2>
          <div ref={dividerRef} className="h-1 bg-[#8f9962] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Technology 1 */}
          <div 
            ref={addToCardsRefs} 
            className="bg-[#8f9962] rounded-lg shadow-md p-6 transition duration-300"
          >
            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#ded9ba] mb-4">Plant Extraction Technology</h3>
            <ul className="text-white space-y-2">
              <li>• Sustainable, halal-certifiable extraction process</li>
              <li>• Lower land footprint and reduced energy consumption</li>
              <li>• Higher solvent recovery rates</li>
              <li>• Continuous operation capabilities</li>
              <li>• Demonstrated efficiency in producing high-purity extracts at one-tonne scale</li>
            </ul>
          </div>
          
          {/* Technology 2 */}
          <div 
            ref={addToCardsRefs} 
            className="bg-[#8f9962] rounded-lg shadow-md p-6 transition duration-300"
          >
            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#ded9ba] mb-4">Plant Protein Composite (PPC™) Bio-Ink</h3>
            <ul className="text-white space-y-2">
              <li>• Blends plant proteins with other polymers</li>
              <li>• Cost-effective alternative to animal protein-based biomaterials</li>
              <li>• Reproducible formulation for 3D scaffold printing</li>
              <li>• Sustainable source materials</li>
              <li>• Customizable for various applications</li>
            </ul>
          </div>
          
          {/* Technology 3 */}
          <div 
            ref={addToCardsRefs} 
            className="bg-[#8f9962] rounded-lg shadow-md p-6 transition duration-300"
          >
            <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#ded9ba] mb-4">3D Scaffold Printing Methodology</h3>
            <ul className="text-white space-y-2">
              <li>• Precise and controllable printing at sub-micron scale</li>
              <li>• Accommodates diverse structures, shapes, and patterns</li>
              <li>• Customizable scaffold properties</li>
              <li>• Optimized growth environments for various cell types</li>
              <li>• Adjustable bio-ink compositions and printing parameters</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;