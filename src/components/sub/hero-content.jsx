import { lazy, Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { slideInFromRight } from "@/lib/motion";
import SparklesText from "./sparkles-text";
import { FlipWords } from "./flip-words";
const SkillTagCloud = lazy(() => import("./roatingSkills"));
import Magnet from "./Magnet";
import "./hero.css";
import SkillCard from "./skill-card";
import SkillCard2 from "./skill-card2";
import { CircleX } from "lucide-react";

const words = ["Javascript.", "Node.js", "React.js", "Backend.", "Frontend."];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const socialLinks = [
  {
    href: "https://github.com/tamil-0714",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/tamil0714/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/Tamil_0714/",
    icon: FaX,
    label: "X",
  },
];

export const HeroContent = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [isOpenSkills, setIsOpenSkills] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpenSkills(false);
      }
    };
    const timeout = setTimeout(() => {
      setShowSkills(true);
    }, 2000);

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isOpenSkills && window.innerWidth < 768) {
      window.scrollTo(0, 0);
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    }
  }, [isOpenSkills]);

  return (
    <>
      {/* Skills Popup Modal */}
      <AnimatePresence>
        {isOpenSkills && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[50] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpenSkills(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-[90%] max-w-4xl h-[90vh] overflow-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 pt-16 md:pt-20 flex flex-wrap gap-5 items-baseline justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <CircleX
                size={30}
                onClick={() => setIsOpenSkills(false)}
                className="absolute top-5 right-5 cursor-pointer text-white/70 hover:text-white transition-colors z-10"
              />
              <SkillCard />
              <SkillCard2 style={{ marginBottom: "130px" }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Background Orbs */}
      <div className="hero-orbs-container">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-[20] flex min-h-[calc(100vh-120px)] w-full items-center justify-center px-6 md:px-12 lg:px-20">
        <div className="flex w-full max-w-7xl flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Greeting Badge */}
            <motion.div variants={itemVariants}>
              <div className="Welcome-box py-2 px-4 border border-[#7042f88b] mb-6">
                <SparklesText
                  className="text-white text-sm md:text-base"
                  text="Hey there! 👋"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants} className="mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                I&apos;m{" "}
                <span className="hero-name-gradient relative inline-block">
                  Tamilarasan
                  <span className="hero-name-underline" />
                </span>
              </h1>
            </motion.div>

            {/* Role with FlipWords */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="flex flex-wrap items-center justify-center lg:justify-start text-lg sm:text-xl md:text-2xl font-semibold text-white/90">
                <span>Web App Developer in</span>
                <span className="text-purple-400 ml-1">
                  <FlipWords words={words} />
                </span>
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-sm sm:text-base text-white/60 leading-relaxed mb-8"
            >
              I specialize in Back-End with{" "}
              <span className="text-purple-400">Node.js</span> and Front-End
              with <span className="text-cyan-400">React.js</span>. Building
              innovative, user-focused solutions — from{" "}
              <span
                className="text-indigo-400 hover:text-indigo-300 cursor-pointer transition-colors underline underline-offset-2 decoration-indigo-400/30 hover:decoration-indigo-300"
                onClick={() =>
                  window.open(
                    "https://github.com/tamil-0714/college-project",
                    "_blank"
                  )
                }
              >
                SaaS LMS Platforms
              </span>{" "}
              to high-performance servers.{" "}
              <span className="text-yellow-400/80">Happy coding!</span> 🧑🏻‍💻
            </motion.p>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="hero-social-link group relative flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:scale-110"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  <span className="hero-social-glow" />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <Magnet magnetStrength={7}>
                <a
                  href="https://drive.google.com/file/d/1Ig1VzgaVHBqu8BsyB5IRotf6S0Irec-Q/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta-primary group relative inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Resume</span>
                  <span className="hero-cta-shine" />
                </a>
              </Magnet>
              <Magnet magnetStrength={5}>
                <a
                  href="/projects"
                  className="hero-cta-secondary inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:bg-purple-500/10 hover:scale-105"
                >
                  My Works
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </Magnet>
            </motion.div>
          </motion.div>

          {/* Right: Skills Visual */}
          <motion.div
            variants={slideInFromRight(0.5)}
            initial="hidden"
            animate="visible"
            className="flex-1 flex items-center justify-center w-full max-w-lg lg:max-w-none"
          >
            <div className="hero-skills-container relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              {/* Glowing border ring */}
              <div className="hero-skills-glow-ring" />

              {/* Skills content */}
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                {showSkills ? (
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center">
                        <div className="hero-skills-loader" />
                      </div>
                    }
                  >
                    {/* Desktop cloud */}
                    <div className="hidden md:block w-full h-full">
                      <SkillTagCloud
                        percam={75}
                        className="laption-skillcloud"
                        setIsOpenSkills={setIsOpenSkills}
                      />
                    </div>
                    {/* Mobile cloud */}
                    <div className="block md:hidden w-full h-full">
                      <SkillTagCloud
                        percam={100}
                        className="mobile-skillcloud"
                        setIsOpenSkills={setIsOpenSkills}
                      />
                    </div>
                  </Suspense>
                ) : (
                  <div className="flex items-center justify-center">
                    <div className="hero-skills-loader" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-dot" />
        </div>
      </motion.div>
    </>
  );
};
