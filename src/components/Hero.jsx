import profilePic from "/src/assets/profile.png";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="min-h-[90vh] flex items-center border-b border-neutral-900 py-20">

            <div className="w-full max-w-[1400px] mx-auto">

                <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:justify-between">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full lg:w-3/5"
                    >

                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                            Full-Stack & Mobile Developer
                        </p>

                        <h1 className="text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl">
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                                Umesha
                            </span>
                        </h1>

                        <h2 className="mt-4 text-3xl font-light text-neutral-400 sm:text-4xl">
                            I build digital experiences
                            <span className="text-neutral-200"> that solve real problems.</span>
                        </h2>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-400">
                            I'm an IT & Management undergraduate and developer passionate
                            about creating reliable web and mobile applications. I work
                            across frontend, backend, mobile development, UI/UX, and
                            computer vision.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            <a
                                href="#projects"
                                className="rounded-lg bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
                            >
                                View My Work
                            </a>

                            <a
                                href="/Umesha_Godawela_CV.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg border border-neutral-700 px-6 py-3 font-medium transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                Download CV
                            </a>

                        </div>

                        {/* SOCIAL LINKS */}
                        <div className="mt-7 flex gap-6 text-sm text-neutral-500">

                            <a
                                href="https://github.com/Godawela"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-white"
                            >
                                GitHub ↗
                            </a>

                            <a
                                href="https://www.linkedin.com/in/umesha-godawela22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-white"
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href="mailto:umeshagodawela@gmail.com"
                                className="transition hover:text-white"
                            >
                                Email ↗
                            </a>

                        </div>

                        {/* TECHNOLOGY TAGS */}
                        <div className="mt-10 flex flex-wrap gap-3">

                            {[
                                "React",
                                "Flutter",
                                "Node.js",
                                "MongoDB",
                                "Python",
                                "Figma",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-2 text-xs text-neutral-400"
                                >
                                    {tech}
                                </span>
                            ))}

                        </div>

                    </motion.div>

                    {/* PROFILE IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex w-full justify-center lg:w-2/5"
                    >

                        {/* Glow */}
                        <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />

                        <div className="relative">

                            {/* Ring */}
                            <div className="rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[3px]">

                                <div className="rounded-full bg-[#050816] p-2">

                                    <img
                                        src={profilePic}
                                        alt="Umesha Godawela"
                                        className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72"
                                        onContextMenu={(e) => e.preventDefault()}
                                        draggable={false}
                                    />

                                </div>

                            </div>

                            {/* Small floating card */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute -bottom-5 -left-8 rounded-xl border border-neutral-800 bg-neutral-900/90 px-5 py-3 shadow-xl backdrop-blur-md"
                            >
                                <p className="text-xs text-neutral-500">
                                    Currently building
                                </p>

                                <p className="mt-1 text-sm font-medium text-cyan-400">
                                    Web & Mobile Apps
                                </p>
                            </motion.div>

                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;