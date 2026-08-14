import { motion } from "framer-motion";

const experiences = [
    {
        year: "2026",
        title: "Final-Year Research Project",
        company: "University of Moratuwa",
        description:
            "Developed an AI and computer vision based Dog Behavior Analyzer for analyzing behavioral patterns from dog videos.",
        technologies: [
            "Python",
            "YOLOv8",
            "OpenCV",
            "Machine Learning",
        ],
    },
    {
        year: "2025 – 2026",
        title: "Mobile App Developer Intern",
        company: "Nimbus Venture",
        description:
            "Worked on mobile application development using Flutter, contributing to application interfaces, functionality, API integration, debugging, and testing.",
        technologies: [
            "Flutter",
            "Dart",
            "REST APIs",
            "Git",
        ],
    },
    {
        year: "2022 – 2026",
        title: "BSc (Hons) Information Technology & Management",
        company: "University of Moratuwa",
        description:
            "Developed a strong foundation in software engineering, databases, information systems, business processes, programming, and IT management.",
        technologies: [
            "Software Engineering",
            "Databases",
            "Programming",
            "IT Management",
        ],
    },
];

const Experience = () => {
    return (
        <section className="border-b border-neutral-900 py-24">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center text-4xl font-light sm:text-5xl"
            >
                Experience <span className="text-neutral-500">& Journey</span>
            </motion.h2>

            <div className="mx-auto max-w-4xl">

                {experiences.map((experience, index) => (
                    <motion.div
                        key={experience.title}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -40 : 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative mb-10 flex gap-6"
                    >

                        {/* Timeline */}
                        <div className="flex flex-col items-center">

                            <div className="mt-2 h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#050816]" />

                            {index !== experiences.length - 1 && (
                                <div className="h-full w-px bg-neutral-800" />
                            )}

                        </div>

                        {/* Content */}
                        <div className="flex-1 rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 transition hover:border-cyan-500/30">

                            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">

                                <h3 className="text-xl font-medium text-white">
                                    {experience.title}
                                </h3>

                                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
                                    {experience.year}
                                </span>

                            </div>

                            <p className="mb-4 text-sm text-purple-400">
                                {experience.company}
                            </p>

                            <p className="leading-7 text-neutral-400">
                                {experience.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">

                                {experience.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-neutral-800 px-3 py-1 text-xs text-neutral-500"
                                    >
                                        {tech}
                                    </span>
                                ))}

                            </div>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default Experience;