import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constansts";

// Small deterministic "file extension" badge derived from a project's
// primary tech — a nod to the subject matter (code) rather than a
// generic numbered marker.
const EXT_MAP = {
  React: "jsx",
  "React JS": "jsx",
  "Springboot": "java",
  MongoDB: "db",
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  Flutter: "dart",
  NodeJS: "js",
  "SQL Server": "sql",
  Figma: "fig",
  "C language": "c",
  "Atmel Studio": "hex",
  "Three JS": "3js",
};

const getExt = (technologies) => {
  for (const t of technologies) {
    if (EXT_MAP[t]) return EXT_MAP[t];
  }
  return "src";
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = useMemo(() => {
    const set = new Set();
    PROJECTS.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.technologies.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="border-b border-neutral-800 pb-20">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center px-4">
        <motion.p
          className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-teal-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          ~/projects
        </motion.p>
        <motion.h1
          className="text-4xl font-semibold text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Selected Work
        </motion.h1>
      </div>

      {/* Filter bar — styled like editor tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-2 px-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full border px-3 py-1.5 font-mono text-xs transition-all
              ${
                activeFilter === f
                  ? "border-teal-400 bg-teal-400/10 text-teal-300"
                  : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-neutral-200"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-[190px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* extension badge */}
                <span className="absolute top-3 left-3 rounded-md bg-black/60 px-2 py-1 font-mono text-[10px] text-teal-300 backdrop-blur-sm">
                  .{getExt(project.technologies)}
                </span>

                {/* View overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/20">
                    View project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <h3 className="mb-1.5 font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm text-neutral-400 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-neutral-800 bg-neutral-950 px-2 py-0.5 font-mono text-[11px] text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="rounded-md border border-neutral-800 bg-neutral-950 px-2 py-0.5 font-mono text-[11px] text-neutral-500">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="max-h-[360px] w-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm hover:bg-black/80"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <h2 className="mb-2 text-xl font-semibold text-white">
                  {selectedProject.title}
                </h2>
                <p className="mb-4 text-neutral-400">
                  {selectedProject.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-1.5">
                  {selectedProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-neutral-800 bg-neutral-950 px-2 py-1 font-mono text-xs text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-4 py-2 text-sm font-medium text-black transition hover:bg-teal-300"
                >
                  View project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;