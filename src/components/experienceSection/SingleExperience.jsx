// SingleExperience.jsx
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="border-2 border-dashed border-orange rounded-2xl p-6 bg-[#1f1f1f] text-white shadow-md w-full"
    >
      <p className="font-bold text-cyan text-lg">{experience.job}</p>
      <p className="text-orange mb-1">{experience.company}</p>
      <p className="text-lightGrey text-sm">{experience.date}</p>
      <ul className="list-disc mt-4 pl-5 space-y-1 text-sm">
        {experience.responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
