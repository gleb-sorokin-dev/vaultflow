import { Button } from "../ui/button";
import dashboard from "@/assets/dashboard.svg";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "@/utils/motion";

export default function Hero() {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="container max-w-7xl mx-auto w-full px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10"
    >
      <div className="flex flex-col items-center py-6 md:py-10 lg:py-14">
        <div className="text-center max-w-3xl lg:max-w-4xl space-y-4 md:space-y-5 lg:space-y-6">
          <motion.h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-snug"
            variants={fadeIn({
              direction: "down",
              type: "spring",
              delay: 0.1,
              duration: 1,
              ease: [0.36, 0.66, 0.4, 0.8],
            })}
          >
            Modern analytics for
            <span className="block mt-2 md:mt-3">
              <motion.span
                className="bg-gradient-to-r from-blue-300 to-white text-transparent bg-clip-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                the modern world
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto"
            variants={fadeIn({
              direction: "up",
              type: "spring",
              delay: 0.3,
              duration: 1,
              ease: [0.36, 0.66, 0.4, 0.8],
            })}
          >
            Transform data into insights with our intuitive analytics platform
            designed for the digital age.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-3 md:pt-5"
            variants={fadeIn({
              direction: "up",
              type: "spring",
              delay: 0.5,
              duration: 1,
              ease: [0.36, 0.66, 0.4, 0.8],
            })}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <Button
                className="w-full px-6 py-4 md:py-5 rounded-full text-base md:text-lg font-medium transition-all duration-300"
                aria-label="Download the application"
              >
                Download the app
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full sm:w-auto"
            >
              <Button
                variant="secondary"
                className="w-full px-6 py-4 md:py-5 rounded-full text-base md:text-lg font-medium transition-all duration-300 border border-white/30 hover:border-white/60"
                aria-label="Talk to an expert"
              >
                Talk to an expert
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 md:mt-12 lg:mt-16 w-full max-w-4xl lg:max-w-5xl relative"
          variants={slideIn({
            direction: "up",
            type: "tween",
            delay: 0.7,
            duration: 1.2,
            ease: [0.34, 1.56, 0.64, 1],
          })}
        >
          <motion.div
            className="absolute inset-0 -z-10 opacity-70 blur-3xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1.05, 0.95],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.9,
            }}
            style={{
              background:
                "radial-gradient(circle, rgba(100, 150, 255, 0.4) 0%, transparent 70%)",
            }}
          />

          <div className="relative aspect-w-16 aspect-h-9 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={dashboard}
              alt="Modern analytics dashboard with intuitive metrics and visualizations"
              className="w-full h-auto object-cover scale-[1.02]"
              loading="eager"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
          </div>

          <div className="absolute -bottom-4 left-1/4 w-1/3 h-4 bg-blue-500/10 blur-xl rounded-full" />
          <div className="absolute -bottom-3 right-1/4 w-1/4 h-3 bg-purple-500/10 blur-lg rounded-full" />
        </motion.div>
      </div>
    </motion.section>
  );
}
