import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Dart" },
  { skill: "Solidity" },
  { skill: "PostgreSQL" },
  { skill: "Flutter" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Express.js" },
  { skill: "MongoDB" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 text-black">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Stanly and I am afull-stack Web, Mobile and Web3
              Developer.
            </p>
            <br />
            <p>
              I specialize in using React for Web Development, Flutter & React
              Native for Mobile development and React & Solidity for Web3
              Development.
            </p>
            <br />
            <p>
              I use Node JS for backend development, and PostgreSQL as the
              database.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-secondaryGray px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
