import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 4,
        mass: 2,
      },
    },
  };

  return (
    <div className="w-full h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center relative">
          <motion.h1
            initial="hidden"
            whileInView={"visible"}
            variants={variants}
            className="text-[13vw] tracking-wider text-[#edede9] sm:text-[14vw] font-bold"
          >
            YASIR MALIK
          </motion.h1>
          <p className="text-xl sm:text-2xl tracking-widest text-center uppercase leading-10 text-[#edede9]">
            web developer and designer based in Pakistan
          </p>
          <div className="buttons w-full h-auto flex gap-5 items-center justify-center">
            <Link
              to="/Projects"
              className="bg-green-400 text-xl py-2 mt-8 tracking-widest font-thin
               text-zinc-700 p-1 px-6"
            >
              PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
