import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const leftSliceRef = useRef(null);
  const rightSliceRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Step 1: Burst of green energy (overlay animation)
    tl.fromTo(
      overlayRef.current,
      { scale: 0, opacity: 1, backgroundColor: "#ded9ba" },
      {
        scale: 15,
        opacity: 0,
        duration: 1.8,
        ease: "expo.out",
      }
    );
    
    // Step 2: Make image container visible
    tl.set(imageContainerRef.current, { autoAlpha: 1 }, "-=1.5");
    
    // Step 3: Diagonal split animation - left slice comes from top-left
    tl.fromTo(
      leftSliceRef.current,
      { 
        opacity: 0,
        x: -50,
        y: -50,
      },
      { 
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power2.inOut"
      },
      "-=1.3"
    );
    
    // Step 4: Diagonal split animation - right slice comes from bottom-right
    tl.fromTo(
      rightSliceRef.current,
      { 
        opacity: 0,
        x: 50,
        y: 50,
      },
      { 
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "power2.inOut"
      },
      "-=1.2"
    );
    
    // Step 5: Subtle scale animation for the whole image
    tl.fromTo(
      imageRef.current,
      { scale: 1.1 },
      {
        scale: 1.05,
        duration: 1.5,
        ease: "power1.out"
      },
      "-=0.8"
    );
    
    // Step 6: Animate the heading
    tl.fromTo(
      headingRef.current,
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8 },
      "-=0.9"
    );
    
    // Step 7: Animate the paragraph
    tl.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );
    
    // Add subtle floating animation to the image after reveal
    tl.to(
      imageRef.current,
      {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      }
    );
  }, []);
  
  return (
    <div
      ref={heroRef}
      className="w-screen pt-24 bg-gradient-to-b from-green-50 to-white relative overflow-hidden"
    >
      {/* Green burst overlay */}
      <div
        ref={overlayRef}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-green-600 opacity-0"
        style={{ willChange: "transform" }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Image with diagonal split reveal effect */}
        <div
          ref={imageContainerRef}
          className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-3xl -my-8 invisible"
          style={{ willChange: "transform" }}
        >
          {/* Main image - only used for reference, not directly visible */}
          <div
            ref={imageRef}
            className="w-full h-full"
            style={{ willChange: "transform" }}
          >
            {/* Left diagonal slice */}
            <div 
              ref={leftSliceRef}
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              style={{ 
                clipPath: "polygon(0 0, 0% 100%, 100% 0)",
                willChange: "transform, opacity"
              }}
            >
              <img
                src="./images/hero.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right diagonal slice */}
            <div 
              ref={rightSliceRef}
              className="absolute top-0 left-0 w-full h-full overflow-hidden"
              style={{ 
                clipPath: "polygon(100% 100%, 0% 100%, 100% 0)",
                willChange: "transform, opacity"
              }}
            >
              <img
                src="./images/hero.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text overlay on the image */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:bg-gradient-to-t md:from-black/70 md:to-transparent z-20">
            <p
              ref={headingRef}
              className="-mb-20 text-2xl md:text-5xl font-bold text-white md:mb-4"
            >
              Kosmode Health
            </p>

            <p
              ref={paragraphRef}
              className="invisible md:visible md:text-xl text-white/90 max-w-2xl"
            >
              Sustainable solutions for human nutrition and health through innovative technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;