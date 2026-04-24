import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constansts";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const sliderRef = useRef(null);

  // 🔥 Update arrow visibility
  const updateArrows = () => {
    const el = sliderRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    updateArrows();
  }, []);

  // ▶ Scroll buttons
  const scroll = (dir) => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.8;

    el.scrollTo({
      left:
        dir === "left"
          ? el.scrollLeft - amount
          : el.scrollLeft + amount,
      behavior: "smooth",
    });
  };

  // 🖱 Drag support
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.classList.add("cursor-grabbing");
  };

  const onMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const onMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const onMouseMove = (e) => {
    if (!isDown.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft.current - walk;
    updateArrows();
  };

  const onScroll = () => updateArrows();

  return (
    <div className="border-b border-neutral-800 pb-10">

      {/* Title */}
      <motion.h1
        className="my-16 text-4xl text-center"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h1>

      {/* Slider wrapper */}
<div className="relative px-4 overflow-hidden">

  {/* LEFT FADE */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-black to-transparent" />

  {/* RIGHT FADE */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-black to-transparent" />
        {/* LEFT ARROW */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 flex items-center justify-center
            bg-white/10 backdrop-blur-lg border border-white/30
            text-white rounded-full
            shadow-[0_0_20px_rgba(255,255,255,0.3)]
            hover:bg-white/20 hover:scale-110 transition"
          >
            <span className="text-2xl font-bold">‹</span>
          </button>
        )}

        {/* RIGHT ARROW */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 flex items-center justify-center
            bg-white/10 backdrop-blur-lg border border-white/30
            text-white rounded-full
            shadow-[0_0_20px_rgba(255,255,255,0.3)]
            hover:bg-white/20 hover:scale-110 transition"
          >
            <span className="text-2xl font-bold">›</span>
          </button>
        )}

        {/* Slider */}
        <div
  ref={sliderRef}
  onScroll={onScroll}
  onMouseDown={onMouseDown}
  onMouseLeave={onMouseLeave}
  onMouseUp={onMouseUp}
  onMouseMove={onMouseMove}
  className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory cursor-grab no-scrollbar"
>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="min-w-[300px] max-w-[300px] bg-neutral-900 rounded-xl p-4 snap-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded mb-3 h-[160px] w-full object-cover"
                draggable={false}
              />

              <h3 className="font-semibold mb-2">{project.title}</h3>

              <p className="text-sm text-neutral-400 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap mt-3">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="mr-2 mb-2 text-xs bg-neutral-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-neutral-900 p-6 rounded-lg max-w-lg w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded mb-4 w-full max-h-[500px] object-contain"
              />

              <h2 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h2>

              <p className="text-neutral-400 mb-4">
                {selectedProject.description}
              </p>

              <a
                href={selectedProject.github}
                target="_blank"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;