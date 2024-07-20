import { motion } from "framer-motion";

const HeroSection = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 3,
        mass: 1,
      },
    },
  };

  return (
    <div className="relative h-[90vh] bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="absolute inset-0 flex flex-col sm:flex sm:flex-row items-center justify-center">
        <div className="hero-text text-center sm:text-justify sm:w-[40%] ">
          <motion.h1
            className="text-4xl md:text-8xl font-[200px]"
            initial="hidden"
            whileInView={"visible"}
            variants={variants}
          >
            INTERESTED IN WORKING TOGETHER?
          </motion.h1>
          <button
            onClick={() =>
              (window.location.href = "mailto:malikoffical32@gmail.com")
            }
            className="learn-more mt-10"
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Drop Me An Email</span>
          </button>
        </div>
        <img
          id="sheryImage"
          className="max-w-full h-auto object-cover hidden sm:block"
          src="/public/pic.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
