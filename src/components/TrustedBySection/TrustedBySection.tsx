import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { logos } from "./logos";

export default function TrustedBySection() {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          x: {
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          },
        },
      });
    }
  }, [controls, isInView]);

  return (
    <section className="relative max-w-6xl mx-auto mt-20 md:mt-28 lg:mt-32 overflow-hidden">
      <div className="text-center px-4">
        <motion.p
          className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by teams at over 1,000 of the world's leading organizations
        </motion.p>
      </div>

      <div className="relative h-28 md:h-36 w-full" ref={containerRef}>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0B081C] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0B081C] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="absolute top-0 left-0 h-full flex items-center space-x-12 md:space-x-16 lg:space-x-20"
          animate={controls}
        >
          {[...logos, ...logos].map((logo, index) => (
            <motion.div
              key={`${logo.id}-${index}`}
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, opacity: 1 }}
              initial={{ opacity: 0.7 }}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-13 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-1/3 h-1 bg-blue-500/20 blur-xl rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-1/4 h-0.5 bg-purple-500/15 blur-lg rounded-full" />
    </section>
  );
}
