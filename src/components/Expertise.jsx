import { motion } from "framer-motion";

function Expertise() {
  const expertiseItems = [
    { skill: "HTML", level: 90 },
    { skill: "CSS", level: 85 },
    { skill: "TAILWIND CSS", level: 80 },
    { skill: "BOOTSTRAP5", level: 80 },
    { skill: "GITHUB", level: 60 },
    { skill: "Responsive Design", level: 85 },
    { skill: "JavaScript", level: 70 },
    { skill: "React.js", level: 60 },
    { skill: "GSAP", level: 70 },
    { skill: "UI/UX Design", level: 80 },
  ];

  return (
    <div className="para h-screen w-full">
      <div className="text-start w-full h-full uppercase flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl text-start font-thin mb-8 tracking-wider">
            Expertises
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-28 w-full">
            {expertiseItems.map((item, index) => (
              <div className="mb-6 w-full" key={index}>
                <div className="flex gap-5 justify-between items-center mb-1">
                  <span className="text-[3vw] sm:text-[1.4vw]">
                    {item.skill}
                  </span>
                  <span className="text-[3vw] sm:text-[1.4vw]">
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <motion.div
                    className="bg-green-400 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Expertise;
