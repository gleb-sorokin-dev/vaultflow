import vaultflow from "@/assets/vaultflow.svg";
import vaultflowMini from "@/assets/valtflow-mini.svg";
import { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { Button } from "../ui/button";

type NavLink = {
  name: string;
  path: string;
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "About us", path: "#about" },
  ];

  return (
    <motion.header
      variants={fadeIn({ direction: "down", delay: 0.2 })}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-[#0B081C] backdrop-blur-lg z-50"
    >
      <div className="container max-w-7xl mx-auto py-5 md:py-6 lg:py-7 w-full flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-7">
        <motion.img
          variants={fadeIn({ direction: "right", delay: 0.3 })}
          className="hidden md:block h-8 lg:h-10"
          src={vaultflow}
          alt="vaultflow logo"
          width={160}
          height={40}
        />
        <motion.img
          variants={fadeIn({ direction: "right", delay: 0.3 })}
          className="block md:hidden h-8"
          src={vaultflowMini}
          alt="vaultflow mini logo"
          width={40}
          height={40}
        />

        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.3 })}
          className="hidden lg:flex items-center gap-6 xl:gap-8"
        >
          <nav className="flex gap-6 xl:gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.path}
                variants={fadeIn({
                  direction: "down",
                  delay: 0.1 * (index + 1),
                })}
                className="text-white hover:text-opacity-80 transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <Button
            className="px-5 rounded-3xl"
            aria-label="Download the application"
          >
            Download the app
          </Button>

          <motion.div
            variants={fadeIn({ direction: "left", delay: 0.3 })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="secondary"
              className="border border-white px-5 rounded-3xl"
              aria-label="Talk to an expert"
            >
              Talk to an expert
            </Button>
          </motion.div>
        </motion.div>

        <motion.button
          variants={fadeIn({ direction: "left", delay: 0.3 })}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </motion.button>
      </div>

      {isMenuOpen && (
        <motion.div
          variants={fadeIn({ direction: "down", delay: 0.2 })}
          initial="hidden"
          animate="show"
          className="lg:hidden text-center py-6 bg-[#0B081C] border-t border-white/10"
        >
          <div className="container max-w-7xl mx-auto px-4 sm:px-5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  className="block py-3 text-lg font-medium hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  variants={fadeIn({
                    direction: "right",
                    delay: 0.1 * (index + 1),
                  })}
                  aria-current={
                    window.location.hash === link.path ? "page" : undefined
                  }
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                variants={fadeIn({ direction: "up", delay: 0.4 })}
                className="flex flex-col gap-4 pt-4 mt-4 border-t border-white/10"
              >
                <Button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-4 rounded-xl text-base font-medium"
                  aria-label="Download the application"
                >
                  Download the app
                </Button>

                <Button
                  onClick={() => setIsMenuOpen(false)}
                  variant="secondary"
                  className="w-full py-4 rounded-xl text-base font-medium border border-white/30"
                  aria-label="Talk to an expert"
                >
                  Talk to an expert
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
