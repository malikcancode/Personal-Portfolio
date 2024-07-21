import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.to(".imagecontainer", {
      ease: "expo.inOut",
      width: "100%",
      duration: 2,
      stagger: 2,
      // repeat: -1,
      // yoyo: true,
    });
  });
  return (
    <div className="container mx-auto about w-full h-screen flex gap-8 justify-center items-center p-4">
      <motion.div
        className="flex flex-col w-full h-full items-start justify-end pt-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-extralight uppercase mb-4 text-left tracking-wider">
          About Me
        </h2>
        <p className="para w-full h-full text-left font-thin sm:text-2xl text-[4vw] leading-relaxed text-gray-300 ">
          I am a dedicated web developer and designer with over 2 years of
          experience, based in Pakistan. I specialize in creating visually
          appealing, responsive, and user-friendly websites. My work focuses on
          understanding and meeting the unique needs of each client, ensuring
          that their online presence is both attractive and effective. Whether
          its a simple blog, a complex e-commerce site, or anything in between,
          I strive to deliver high-quality results that exceed expectations. My
          passion for web development drives me to stay updated with the latest
          trends and technologies, ensuring that my clients always receive the
          best possible solutions.
        </p>
      </motion.div>
      <div className="center hidden sm:block">
        <div id="pic1" className="imagecontainer">
          <img src="/assets/editor_20230305_93901.jpg" alt="image" />
        </div>
        <div id="pic2" className="imagecontainer">
          <img src="/assets/IMG-20230513-WA0028.jpg" alt="image" />
        </div>
        <div id="pic3" className="imagecontainer">
          <img src="/assets/IMG_4413~3.jpg" alt="image" />
        </div>
        <div id="pic4" className="imagecontainer">
          <img src="/assets/IMG_5129.jpg" alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
