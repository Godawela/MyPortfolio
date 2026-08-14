import aboutImg from "../assets/profile2.jpg";
import { motion } from "framer-motion";

const infoCards = [
    {
        title: "Education",
        text: "BSc (Hons) in Information Technology & Management",
    },
    {
        title: "Development",
        text: "Web & Mobile Application Development",
    },
    {
        title: "Design",
        text: "UI/UX Design with Figma",
    },
    {
        title: "Interests",
        text: "AI, Computer Vision & Emerging Technologies",
    },
];

const About = () => {
    return (
        <section className="border-b border-neutral-900 py-24">

            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 text-center text-4xl font-light sm:text-5xl"
            >
                About <span className="text-neutral-500">Me</span>
            </motion.h2>

            <div className="flex flex-col items-center gap-12 lg:flex-row">

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-2/5"
                >
                    <div className="relative mx-auto max-w-md">

                        <div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl" />

                        <img
                            src={aboutImg}
                            alt="Umesha Godawela"
                            className="relative w-full rounded-2xl border border-neutral-800 object-cover"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                        />

                    </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-3/5"
                >

                    <p className="mb-8 text-lg leading-8 text-neutral-400">
                        I'm a passionate developer focused on building useful,
                        reliable, and user-friendly digital experiences. My
                        background in Information Technology & Management has
                        allowed me to combine technical development with
                        problem-solving and design thinking.
                    </p>

                    <p className="mb-10 leading-7 text-neutral-500">
                        I enjoy working across web development, mobile application
                        development, UI/UX design, and AI-based solutions. I'm
                        continuously learning new technologies and looking for
                        opportunities to turn ideas into practical solutions.
                    </p>

                    {/* INFO CARDS */}
                    <div className="grid gap-4 sm:grid-cols-2">

                        {infoCards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.1,
                                }}
                                className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-cyan-500/40 hover:bg-neutral-900/70"
                            >
                                <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-cyan-400">
                                    {card.title}
                                </h3>

                                <p className="text-sm leading-6 text-neutral-400">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default About;