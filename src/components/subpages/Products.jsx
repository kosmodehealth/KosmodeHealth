import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Products = () => {
  // Refs for our animated elements
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const dividerRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const tagsRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initial animation for section appearance
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8, 
        ease: "power1.out" 
      }
    );
    
    // Title and divider animation
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none"
      }
    });
    
    titleTl.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "back.out(1.2)" }
    ).fromTo(
      dividerRef.current,
      { width: 0 },
      { width: 96, duration: 0.5, ease: "power1.out" },
      "-=0.3"
    );
    
    // Card reveal animation
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none none"
      }
    });
    
    cardTl.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    
    // Image animation
    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      { 
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "elastic.out(1, 0.75)"
      }
    );
    
    // Content stagger animation
    gsap.fromTo(
      contentRef.current.children,
      { y: 20, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        delay: 0.5,
        ease: "power1.out"
      }
    );
    
    // Tags animation
    gsap.fromTo(
      tagsRef.current.children,
      { scale: 0, opacity: 0 },
      { 
        scale: 1,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.8,
        ease: "back.out(1.7)"
      }
    );

    // Hover animations for the card
    const card = cardRef.current;
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
      gsap.to(imageRef.current, { scale: 1.05, duration: 0.4 });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { y: 0, duration: 0.5, ease: "power2.out" });
      gsap.to(imageRef.current, { scale: 1, duration: 0.4 });
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      const cardCleanup = cardRef.current;
      if (cardCleanup) {
        cardCleanup.removeEventListener('mouseenter', () => {});
        cardCleanup.removeEventListener('mouseleave', () => {});
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold text-[#8f9962] mb-4">Our Products</h2>
          <div ref={dividerRef} className="w-24 h-1 bg-[#8f9962] mx-auto"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div ref={cardRef} className="bg-[#8f9962] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-64 bg-[#ded9ba] flex items-center justify-center overflow-hidden">
              <img 
                ref={imageRef} 
                src="/KosmodeHealth/images/noodles.png" 
                alt="W0W Noodles" 
                className="max-h-full transition-transform duration-300"
              />
            </div>
            <div ref={contentRef} className="p-6">
              <h3 className="text-2xl font-bold text-[#ded9ba] mb-4">W0W® Noodles</h3>
              <div ref={tagsRef} className="mb-4">
                <span className="inline-block bg-[#ded9ba] text-[#8f9962] px-3 py-1 rounded-full text-sm font-semibold mr-2">Zero Glycemic Response</span>
                <span className="inline-block bg-[#ded9ba] text-[#8f9962] px-3 py-1 rounded-full text-sm font-semibold mr-2">High Protein</span>
                <span className="inline-block bg-[#ded9ba] text-[#8f9962] px-3 py-1 rounded-full text-sm font-semibold mr-2">High Fiber</span>
                <span className="inline-block bg-[#ded9ba] text-[#8f9962] px-3 py-1 rounded-full text-sm font-semibold">Low Carbs</span>
              </div>
              <p className="text-white mb-6">
                Starchless protein-fiber noodles made from valorized spent barley grains. Clinically validated to have zero glycemic response, catering to the nutritional needs of aging and diabetic populations.
              </p>
              <div className="flex justify-center">
                <button
                  className="button-85"
                  onClick={() => window.location.href = 'https://www.w0wnoodle.com/'}
                >
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