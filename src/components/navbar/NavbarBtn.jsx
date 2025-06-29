import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { FaDownload } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <div className="flex gap-4">
      {/* Hire Me Button */}
      <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="contact"
        >
          Hire Me
        </Link>
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>

      {/* Resume Download Button */}
      <a
        href="/resume.pdf"
        download
        className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-orange to-yellow-400 transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
      >
        <span>Resume</span>
        <FaDownload />
      </a>
    </div>
  );
};

export default NavbarBtn;
