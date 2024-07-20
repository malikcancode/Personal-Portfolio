import { useState, useRef } from "react";
import { FaAlignRight } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="container mx-auto p-2 tracking-wider text-[1.4vw] sm:text-[1.8vw] md:text-[1.1vw] flex justify-end items-center">
      <Link to="/" className="text-2xl tracking-widest font-bold">
        Yasirmalik
      </Link>
      <div className="sm:space-x-10 flex items-center justify-end w-full tracking-wider">
        <span onClick={toggleMenu}>
          {menuOpen ? (
            <FaWindowClose className="text-3xl cursor-pointer" />
          ) : (
            <FaAlignRight className="text-2xl cursor-pointer" />
          )}
        </span>
      </div>
      {menuOpen && (
        <motion.div
          ref={menuRef}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="absolute w-full h-full sm:w-1/2 rounded-lg z-10 top-20 right-0 bg-green-300 shadow-lg p-1"
        >
          <div className="menu w-full font-thin h-full flex flex-col text-4xl items-start justify-center space-y-10 text-[#333]">
            <Link
              to="/"
              className="py-2 px-4 rounded-md text-center"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 rounded-md text-center"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/expertise"
              className="py-2 px-4 rounded-md text-center"
              onClick={closeMenu}
            >
              Expertise
            </Link>
            <Link
              to="/Projects"
              className="py-2 px-4 rounded-md text-center"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/email"
              className="py-2 px-4 rounded-md text-center"
              onClick={closeMenu}
            >
              Email
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
