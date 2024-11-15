import profilePic from "/src/assets/profile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap lg:flex-nowrap items-center space-y-6 lg:space-y-0">
                
                {/* Profile Image Section */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end p-8">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="relative p-1.5 rounded-full shadow-lg border border-gray-300 overflow-hidden"
                        style={{
                            background: "linear-gradient(135deg, #1e3a8a, #2563eb)", // Blue gradient for the border
                        }}
                    >
                        <motion.img
                            src={profilePic}
                            alt="profile pic"
                            width={160} // Reduced size for a refined look
                            height={160}
                            className="rounded-full bg-white p-1"
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
                            className="pb-16 text-6xl font-thin tracking-tight"
                        >
                            Umesha Godawela
                        </motion.h1>

                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>

                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            I am a passionate full-stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
