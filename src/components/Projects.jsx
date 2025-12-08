import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../constansts";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-4xl text-center"
      >
        Projects
      </motion.h1>

      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center cursor-pointer"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(project)}
          >
            <motion.div
              className="w-full lg:w-1/4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((technique, techIndex) => (
                <span
                  key={techIndex}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium"
                >
                  {technique}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-neutral-900 p-6 rounded-lg max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                className="absolute top-2 right-2 text-white text-xl font-bold"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="mb-4 rounded"
              />
              <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
              <p className="mb-4 text-neutral-400">{selectedProject.description}</p>
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
                >
                  View on GitHub
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
