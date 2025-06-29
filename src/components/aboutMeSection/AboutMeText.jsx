import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>I'm a passionate MERN Stack Developer with strong frontend and backend skills. Trained at QSpiders, I’ve built real-world projects like JobZee and a Food Delivery Web App that solve practical problems using modern technologies.
I enjoy turning ideas into functional and user-friendly applications. My strengths lie in React, Node.js, MongoDB, and Express, and I constantly explore new tools and best practices to grow as a developer.
Beyond coding, I believe in continuous learning and sharing knowledge — helping others grow while growing myself.

      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
