import { useEffect, useState } from "react";
import "./App.css";
import { Hero } from "./components/main/hero";
import { StarsCanvas } from "./components/main/star-background";
import { FloatingDockDemo } from "./components/sub/floatingDemo";
import { About } from "./components/main/about";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { slideInFromLeft } from "@/lib/motion";
import Project from "./components/main/project";
import RustBlog0x1 from "./components/sub/RustBlog0x1";
import Blogs from "./components/main/Blogs";
import "highlight.js/styles/github-dark.css";
import usePageObserver from "./hooks/usePageObserver";

function AppContent() {
  const location = useLocation();
  const isBlog = location.pathname.startsWith("/blogs");

  // Track page visits on every route change and refresh
  usePageObserver();

  return (
    <>
      {!isBlog && <StarsCanvas />}
      <main className={isBlog ? "h-screen w-full overflow-y-auto overflow-x-hidden" : "h-full w-full"}>
        {isBlog ? (
          <Routes>
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/0x1" element={<RustBlog0x1 />} />
          </Routes>
        ) : (
          <div className="flex flex-col gap-20">
            <div>
              <motion.div variants={slideInFromLeft(1)} className="floating-dock-container">
                <FloatingDockDemo />
              </motion.div>
              <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Project />} />
              </Routes>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

// const [currentPage, setCurrentPage] = useState("Page1");
// const slideVariants = {
//   initial: { x: "100vw", opacity: 0 },
//   animate: { x: 0, opacity: 1, transition: { duration: 0.5 } },
//   exit: { x: "-100vw", opacity: 0, transition: { duration: 0.5 } },
// };
// const slideVariants = {
//   initial: {
//     x: "100vw", // Start completely off-screen to the right
//     opacity: 0, // Fully transparent
//     scale: 0.8, // Slightly scaled down
//     rotate: 10, // Add a slight rotation
//   },
//   animate: {
//     x: 0, // Move to the center of the screen
//     opacity: 1, // Fully visible
//     scale: 1, // Return to normal size
//     rotate: 0, // Straighten out
//     transition: {
//       duration: 0.7, // Smoothly transition over 0.7 seconds
//       ease: "easeOut", // Add a natural easing effect
//     },
//   },
//   exit: {
//     x: "-100vw", // Exit completely off-screen to the left
//     opacity: 0, // Fade out
//     scale: 0.9, // Slightly scale down for emphasis
//     rotate: -10, // Add a slight rotation in the opposite direction
//     transition: {
//       duration: 0.7, // Match the entry duration
//       ease: "easeIn", // Speed up the exit for a snappy effect
//     },
//   },
// };
// const bounceVariants = {
//   initial: {
//     y: "-100vh", // Start above the screen
//     opacity: 0,
//   },
//   animate: {
//     y: 0, // Drop into place
//     opacity: 1,
//     transition: {
//       type: "spring", // Use a spring animation
//       stiffness: 120, // Control the bounce effect
//       damping: 20, // Smooth out the bounce
//     },
//   },
//   exit: {
//     y: "100vh", // Drop out of the bottom of the screen
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// const renderPage = () => {
//   if (currentPage === "Page1") {
//     return (
//       <motion.div
//         key="page1"
//         className="page"
//         variants={slideVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//       >
//         <Hero/>
//         <button onClick={() => setCurrentPage("Page2")}>Go to Page 2</button>
//       </motion.div>
//     );
//   }
// return (
//   <motion.div
//     key="page2"
//     className="page"
//     variants={bounceVariants}
//     initial="initial"
//     animate="animate"
//     exit="exit"
//   >
//       <Hero/>
//       <button onClick={() => setCurrentPage("Page1")}>Go to Page 1</button>
//     </motion.div>
//   );
// };

// return (
//   <div className="app-container" style={{ width: "100vw", height: "100vh" }}>
//     <AnimatePresence>{renderPage()}</AnimatePresence>
//   </div>
// );
