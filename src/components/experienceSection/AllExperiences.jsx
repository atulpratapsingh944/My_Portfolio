// AllExperiences.jsx
import SingleExperience from "./SingleExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Fullstack Developer Intern",
    company: "QSpiders, Noida",
    date: "Jan 2025 - Present",
    responsibilities: [
      "Developed dynamic and scalable web applications using the MERN stack.",
      "Worked on both frontend (React) and backend (Node.js + Express).",
      "Collaborated with teams to build responsive UIs and REST APIs.",
      "Optimized application performance and handled deployment.",
    ],
  },
  {
    job: "Trainee - MERN Stack + Java DSA",
    company: "Apna College - Sigma 6.0",
    date: "2024 - 2025",
    responsibilities: [
      "Completed a rigorous online training on MERN Stack and Java DSA.",
      "Built full-stack projects from scratch using MongoDB, Express, React, and Node.js.",
      "Gained hands-on experience with frontend, backend, and RESTful API integration.",
      "Practiced problem-solving on platforms like LeetCode and Coding Ninjas.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 px-6 py-12">
      {experiences.map((experience, index) => (
        <motion.div
          key={index}
          className="w-full sm:w-[80%] md:w-[40%] flex justify-center"
          variants={fadeIn("up", index * 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <SingleExperience experience={experience} />
        </motion.div>
      ))}
    </div>
  );
};

export default AllExperiences;
