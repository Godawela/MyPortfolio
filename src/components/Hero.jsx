import profilePic from "/src/assets/profile.png";
import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Keep glow & shadow effects
    const glowX = useTransform(x, [-80, 80], [-10, 10]);
    const glowY = useTransform(y, [-80, 80], [-10, 10]);
    const shadowX = useTransform(x, [-80, 80], [-20, 20]);
    const shadowY = useTransform(y, [-80, 80], [-20, 20]);
    const boxShadow = useTransform(
        [shadowX, shadowY],
        ([sx, sy]) => `${sx}px ${sy}px 30px rgba(0,0,0,0.4)`
    );

    useEffect(() => {
        let animX, animY;

        const startLoop = () => {
            animX = animate(x, [0, 80, 80, -80, -80, 0], {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            });

            animY = animate(y, [0, -80, 80, 80, -80, 0], {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
            });
        };

        startLoop();

        const el = ref.current;

        const handleMouseEnter = () => {
            animX?.stop();
            animY?.stop();
        };

        const handleMouseLeave = () => {
            animate(x, 0, { duration: 0.4, ease: "easeOut" }).then(() => {
                animX = animate(x, [0, 80, 80, -80, -80, 0], {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                });
            });
            animate(y, 0, { duration: 0.4, ease: "easeOut" }).then(() => {
                animY = animate(y, [0, -80, 80, 80, -80, 0], {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                });
            });
        };

        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            animX?.stop();
            animY?.stop();
            el.removeEventListener("mouseenter", handleMouseEnter);
            el.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap lg:flex-nowrap items-center space-y-6 lg:space-y-0">

                {/* Profile Image Section */}
                <div className="w-full lg:w-1/3 flex justify-center lg:justify-end p-8">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        ref={ref}
                        style={{
                            transformStyle: "preserve-3d",
                            perspective: 800,
                        }}
                        className="relative rounded-full overflow-visible cursor-pointer"
                    >
                        {/* Gradient border ring */}
                        <div
                            className="rounded-full p-1.5"
                            style={{
                                background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
                            }}
                        >
                            <motion.img
                                src={profilePic}
                                alt="profile pic"
                                width={240}
                                height={160}
                                className="rounded-full bg-white p-1 block"
                                style={{ boxShadow }}
                                onContextMenu={(e) => e.preventDefault()}
                                draggable={false}
                            />
                        </div>

                        {/* Floating glow layer */}
                        <motion.div
                            style={{
                                x: glowX,
                                y: glowY,
                                translateZ: 30,
                                transformStyle: "preserve-3d",
                            }}
                            className="absolute inset-0 rounded-full pointer-events-none"
                        >
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background:
                                        "radial-gradient(circle at 40% 40%, rgba(96,165,250,0.25), transparent 70%)",
                                }}
                            />
                        </motion.div>
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
                            Full Stack Developer & Mobile Developer
                        </motion.span>

                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6"
                        >
                            I am a passionate full-stack and mobile developer with a knack for
                            crafting robust and scalable web and mobile applications. I have honed
                            my skills in front-end technologies like React, Flutter, as well as
                            back-end technologies like Node.js, and MongoDB. My goal is to leverage
                            my expertise to create innovative solutions that drive business growth
                            and deliver exceptional user experiences.
                        </motion.p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;