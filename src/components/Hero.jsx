import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Step 1: Burst of green energy (overlay animation)
    tl.fromTo(
      overlayRef.current,
      { scale: 1, opacity: 1, backgroundColor: "#16a34a" },
      {
        scale: 1.5, // Reduced scale
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      }
    );

    // Step 2: Animate the heading (explosive entrance)
    tl.fromTo(
      headingRef.current,
      { scale: 0.5, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1 },
      "-=0.5"
    );

    // Step 3: Animate the paragraph (slide up with fade)
    tl.fromTo(
      paragraphRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.5"
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
        <div className="text-center">
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-bold text-[#8f9962] mb-6 transform scale-50 opacity-0"
          >
            Kosmode Health
          </h1>
          <p
            ref={paragraphRef}
            className="md:-mb-20 text-xl md:text-2xl text-[#8f9962] max-w-3xl mx-auto opacity-0"
          >
            Sustainable solutions for human nutrition and health through innovative technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;