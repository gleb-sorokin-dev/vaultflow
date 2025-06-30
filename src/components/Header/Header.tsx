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
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="fixed top-0 left-0 right-0 bg-[#0B081C] backdrop-blur-lg z-50"
    >
      <div className="container max-w-7xl mx-auto py-7 lg:py-8 w-full flex items-center justify-between px-6 md:px-7 lg:px-8">
        {/* Логотипы */}
        <motion.img
          variants={fadeIn("right", 0.3)}
          className="hidden md:flex"
          src={vaultflow}
          alt="vaultflow logo"
        />
        <motion.img
          variants={fadeIn("right", 0.3)}
          className="flex md:hidden"
          src={vaultflowMini}
          alt="vaultflow mini logo"
        />

        {/* Навигация для десктопа */}
        <motion.div
          variants={fadeIn("down", 0.3)}
          className="hidden lg:flex items-center space-x-8"
        >
          <nav className="space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.path}
                variants={fadeIn("down", 0.1 * (index + 1))}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          <Button className="px-5 rounded-3xl cursor-pointer">
            Download the app
          </Button>

          <motion.div
            variants={fadeIn("left", 0.3)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="secondary"
              className="border border-white px-5 rounded-3xl cursor-pointer"
            >
              Talk to an expert
            </Button>
          </motion.div>
        </motion.div>

        {/* Кнопка мобильного меню */}
        <motion.button
          variants={fadeIn("left", 0.3)}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center"
        >
          {isMenuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
        </motion.button>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          className="lg:hidden text-center mb-6"
        >
          <div className="mx-auto px-6 space-y-3">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.path}
                className="block py-2 text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
                variants={fadeIn("right", 0.1 * (index + 1))}
              >
                {link.name}
              </motion.a>
            ))}

            <motion.div
              variants={fadeIn("up", 0.4)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col space-y-4 items-center"
            >
              <Button
                onClick={() => setIsMenuOpen(false)}
                className="px-5 rounded-3xl cursor-pointer"
              >
                Download the app
              </Button>

              <Button
                onClick={() => setIsMenuOpen(false)}
                variant="secondary"
                className="border border-white px-5 rounded-3xl cursor-pointer"
              >
                Talk to an expert
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
