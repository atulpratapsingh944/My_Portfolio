import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Internship" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="4" text="Projects" />
      </div>
      <p className="text-center">
        Gained real-world experience through internship and MERN stack training.
      </p>
     <ExperienceInfo number="Learning" text="DSA Progress" />
    </div>
  );
};

export default ExperienceTopLeft;
