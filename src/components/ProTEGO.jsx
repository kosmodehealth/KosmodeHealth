import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ProTEGO = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dividerRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const ctaRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );
      
      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2 }
      );
      
      // Divider animation
      gsap.fromTo(
        dividerRef.current,
        { width: 0, opacity: 0 },
        { width: "6rem", opacity: 1, duration: 1.2, delay: 0.4 }
      );
      
      // Left column content animation
      gsap.fromTo(
        leftColumnRef.current.querySelectorAll('p'),
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.3, delay: 0.6 }
      );
      
      // Right column benefits animation
      gsap.fromTo(
        rightColumnRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, delay: 0.5 }
      );
      
      // Individual benefit items animation
      gsap.fromTo(
        rightColumnRef.current.querySelectorAll('.benefit-item'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.8 }
      );
      
      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.5 }
      );
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="protego" className="w-screen py-16 bg-gradient-to-br from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-[#8f9962] mb-2">
            Introducing ProTEGO™
          </h2>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-700 mb-4">
            A Functional Staple Designed To Optimise Health for People and Earth
          </p>
          <div ref={dividerRef} className="h-1 bg-[#8f9962] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div ref={leftColumnRef}>
            <p className="text-lg text-gray-700 mb-6">
              Developed to optimise protein and fibre intake, while being <strong className="text-[#8f9962]">diabetic-friendly</strong> thanks to its <strong className="text-[#8f9962]">minimal glycaemic impact</strong> compared to traditional noodles.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Crafted with <strong className="text-[#8f9962]">repurposed peanut protein and sweet potato fibre</strong> to demonstrate the valorisation of food processing by-products into <strong className="text-[#8f9962]">functional nutrition</strong>.
            </p>
            <p className="text-lg text-gray-700">
              <strong className="text-[#8f9962]">ProTEGO™</strong> proves that quality crops can be given a second life, delivering essential nutrition without compromising on taste.
            </p>
            <div className="h-90 flex items-center justify-center overflow-hidden pt-10">
              <img 
                src="/images/protego.png" 
                alt="W0W Noodles" 
                className="max-h-full transition-transform duration-300"
              />
            </div>
          </div>
          
          <div ref={rightColumnRef} className="bg-[#8f9962] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#ded9ba] mb-6">Benefits</h3>
            
            <div className="space-y-4">
              <div className="benefit-item bg-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-[#ded9ba] mb-2">32g Protein / 100g</h4>
                <p className="text-white">Boosts your daily protein intake</p>
              </div>
              
              <div className="benefit-item bg-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-[#ded9ba] mb-2">13g Fibre / 100g</h4>
                <p className="text-white">Supports a healthy gut</p>
              </div>
              
              <div className="benefit-item bg-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-[#ded9ba] mb-2">27g Carbs / 100g</h4>
                <p className="text-white">Suitable for diabetes-friendly and low-carb diets</p>
              </div>
              
              <div className="benefit-item bg-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-[#ded9ba] mb-2">100% Plant-based</h4>
                <p className="text-white">Perfect for vegetarians</p>
              </div>
              
              <div className="benefit-item bg-white/10 p-4 rounded-lg">
                <h4 className="text-xl font-semibold text-[#ded9ba] mb-2">Repurposed Ingredients</h4>
                <p className="text-white">Better for the earth</p>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={ctaRef} className="text-center mt-12">
          <div 
            className="inline-flex items-center gap-2 bg-[#8f9962] hover:bg-[#7a8555] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-lg"
            onClick={() => window.open('https://www.w0wnoodle.com/', '_blank')}
          >
            <span>Discover ProTEGO™</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProTEGO;