import { FaDownload } from "react-icons/fa";

const NavbarBtn = () => {
  return (
    <div className="flex gap-4">
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
