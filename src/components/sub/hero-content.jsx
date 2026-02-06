// import { SparklesIcon } from "@heroicons/react/24/solid";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaNode,
  FaReact,
  FaPython,
  FaJava,
  FaTwitter,
  FaX,
} from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import {
  SiThreedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiApollographql,
} from "react-icons/si";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  bounceVariants,
} from "@/lib/motion";
import { OrbitingCircles } from "./OrbitalSkill";
import { FaDocker, FaUbuntu } from "react-icons/fa";
import SparklesText from "./sparkles-text";
import { FlipWords } from "./flip-words";
// import SkillTagCloud from "./roatingSkills";
const SkillTagCloud = lazy(() => import("./roatingSkills"));
import Magnet from "./Magnet";
import SkillGrid from "./skill-grid";
import "./hero.css";
import SkillCard from "./skill-card";
import SkillCard2 from "./skill-card2";
import { CircleX } from "lucide-react";
const words = ["Javascript.", "Node.js", "React.js", "Backend.", "Frontend."];

export const HeroContent = () => {
  const [showSkills, setShowSkills] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpenSkills(false);
      }
    };
    const timeout = setTimeout(() => {
      setShowSkills(true);
    }, 2000); // Adjust delay as needed

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeout);
    };
  }, []);
  const [isOpenSkills, setIsOpenSkills] = useState(false);
  const requestFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable full screen:", err);
      });
    }
  };
  useEffect(() => {
    if (isOpenSkills && window.innerWidth < 768) {
      window.scrollTo(0, 0);
      requestFullScreen();
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [isOpenSkills]);

  return (
    <>
      {isOpenSkills && (
        <div
          className="top-skill-wrapper"
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            zIndex: "30",
            backgroundColor: "#000000d3",
            top: "0",
            left: "0",
          }}
          onClick={() => {
            setIsOpenSkills(false);
          }}
        >
          <div
            className="skills-popup"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "80%",
              height: "96vh",
              border: "1px solid white",
              transform: "translate(-50%, -50%)",
              padding: "20px",
              paddingTop: "120px",
              display: "flex",
              gap: "20px",
              alignItems: "baseline",
              flexWrap: "wrap",
              overflow: "auto",
              justifyContent: "center",
            }}
            onClick={(e) => {
              e.stopPropagation(); // Prevents the click event from bubbling to the parent
            }}
          >
            <CircleX
              size={30}
              onClick={() => {
                setIsOpenSkills(false);
              }}
              className="circleX"
            />
            <SkillCard />
            <SkillCard2 style={{ marginBottom: "130px" }} />
          </div>
        </div>
      )}

      {/* <SkillGrid /> */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 ml-20 w-full z-[20] hero-top-section"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={bounceVariants}
            exit="exit"
            initial="initial"
            animate="animate"
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]] hi-there"
          >
            <SparklesText className="mx-2 text-white" text="Hey there!👋" />
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            // exit="exit"
            className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto iam-text"
          >
            <span>
              I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Tamilarasan
              </span>{" "}
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.8)}
            // exit="exit"
            className="text-lg text-gray-400 my-5 max-w-[600px] iam-web-dev"
          >
            <h2 className="mt-0 font-bold lg:text-2xl md:text-xl sm:text-lg flex flex-row items-center">
              <span className="text-white">I am a Web App Developer in</span>
              <div className="text-slate-900 flip-word-box">
                <FlipWords words={words} />
              </div>
            </h2>
          </motion.div>
          <motion.p
            className="mt-0  text-white font-medium lg:w-4/5 welcome-msg"
            variants={slideInFromLeft(1)}
          // exit="exit"
          >
            Welcome to my portfolio! I hope you enjoy your visit. I specialize
            in Back-End development with Node.js and Front-End development with
            React.js. I have worked on various projects, including a{" "}
            <span
              className="text-indigo-600 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://github.com/tamil-0714/college-project",
                  "_blank"
                )
              }
            >
              SaaS LMS Platform with Code Execution and Collaboration Tools
            </span>{" "}
            , React-based Web App.
            <br />
            <br />I am passionate about learning new technologies and building
            solutions that make a difference. Thank you for visiting my
            portfolio! I hope you like my work.{" "}
            <span className="text-yellow-500">Happy coding!</span> 🧑🏻‍💻
          </motion.p>
          <div className="flex gap-5 mt-5 border-white border-collapse rounded">
            <a href="https://github.com/tamil-0714" target="_blank">
              <FaGithub className="h-7 w-7" />
            </a>
            <a href="https://www.linkedin.com/in/tamil0714/" target="_blank">
              <FaLinkedin className="h-7 w-7" />
            </a>
            <a href="https://x.com/Tamil_0714/" target="_blank">
              <FaX className="h-6 w-6" />
            </a>
          </div>
          <motion.div
            variants={slideInFromTop}
            // exit="exit"
            className="btn-hero-lgap"
            style={{
              display: "flex",
              // outline: "1px solid red",
              gap: "20px",
            }}
          >
            <motion.div
              style={{
                width: "200px",
              }}
              variants={slideInFromLeft(0.5)}
              className="resume-works-btn"
            // exit="exit"
            >
              <Magnet magnetStrength={7}>
                <motion.a
                  style={{
                    width: "200px",
                    display: "block",
                  }}
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                  href="https://drive.google.com/file/d/1Ig1VzgaVHBqu8BsyB5IRotf6S0Irec-Q/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </motion.a>
              </Magnet>
            </motion.div>
            <motion.a
              style={{
                width: "200px",
              }}
              variants={slideInFromLeft(0.5)}
              // exit="exit"
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] works-btn-a"
              href="/projects"
            >
              My Works
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          // exit="exit"
          className="w-full h-full flex justify-center items-center skill-box-section"
        >
          {/* <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        /> */}

          <div className="relative flex px-20 lg:h-[550px] h-[650px] w-full  flex-col items-center justify-center overflow-hidden skill-box-container">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center lg:text-5xl text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
              {/* Skills */}
            </span>

            {/* <OrbitingCircles iconSize={40} radius={120}>
            <FaNode className="text-green-500 lg:text-8xl text-3xl" />
            <DiMongodb className="text-lime-500 lg:text-8xl text-3xl" />
            <SiExpress className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
            <FaReact className="text-sky-500 lg:text-8xl text-3xl" />
            <SiTailwindcss className="text-cyan-500 lg:text-8xl text-3xl" />
            <SiThreedotjs className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
            <RiJavascriptFill className="text-yellow-500 lg:text-8xl text-3xl" />
          </OrbitingCircles>

          <OrbitingCircles iconSize={40} radius={190} reverse>
            <SiMysql
              color="white"
              className="text-sky-500 lg:text-8xl text-3xl"
            />
            <GrGraphQl className="text-lime-500 lg:text-8xl text-3xl" />
            <FaPython className="text-blue-400 lg:text-8xl text-3xl" />
            <SiPostman className="text-orange-500 lg:text-8xl text-3xl" />
            <FaGithub className="dark:text-slate-50 text-slate-900 lg:text-8xl text-3xl" />
            <FaJava className="text-orange-500  lg:text-8xl text-3xl" />
            <SiApollographql className="text-blue-300 lg:text-8xl text-3xl" />
            <FaDocker className="text-cyan-500 lg:text-8xl text-3xl" />
            <FaUbuntu className="text-orange-500 lg:text-8xl text-3xl" />
          </OrbitingCircles> */}
            {showSkills ? (
              <Suspense fallback={<p>Loading skills...</p>}>
                <SkillTagCloud
                  percam={100}
                  className="mobile-skillcloud"
                  setIsOpenSkills={setIsOpenSkills}
                />
                <SkillTagCloud
                  percam={75}
                  className="laption-skillcloud"
                  setIsOpenSkills={setIsOpenSkills}
                />
              </Suspense>
            ) : (
              <p>Loading skills...</p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
