import profilePic from "/src/assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: delay, ease: "easeOut" } },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35 bg-gray-100">
            <div className="flex flex-wrap lg:flex-nowrap items-center space-y-6 lg:space-y-0">
                
                {/* Profile Image Section */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end p-8">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="relative p-2 rounded-full shadow-lg border border-gray-200 overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #e0e0e0, #f8f8f8)", 
                        }}
                    >
                        <motion.img
                            src={profilePic}
                            alt="profile pic"
                            width={200}
                            height={200}
                            className="rounded-full"
                            whileHover={{ scale: 1.08 }}
                            style={{
                                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                                transition: "all 0.3s ease",
                            }}
                        />
                    </motion.div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-2/3">
                    <div className="flex flex-col items-center lg:items-start px-6 lg:px-0">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-4 text-6xl font-bold tracking-tight text-neutral-900 leading-tight"
                        >
                            Umesha Godawela
                        </motion.h1>

                        <motion.span
                            variants={container(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="text-3xl font-semibold tracking-tight text-gray-800"
                            style={{
                                background: "linear-gradient(90deg, #1a73e8, #4285f4)",
                                WebkitBackgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            Full Stack Developer
                        </motion.span>

                        <motion.p
                            variants={container(0.8)}
                            initial="hidden"
                            animate="visible"
                            className="mt-6 max-w-2xl text-lg font-light tracking-tight text-gray-700 leading-relaxed"
                        >
                            I specialize in creating modern, high-performance web applications that combine aesthetic appeal with solid, scalable functionality. My expertise spans front-end frameworks like React and back-end solutions like Node.js, with a focus on delivering seamless user experiences. Let's build something transformative.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
