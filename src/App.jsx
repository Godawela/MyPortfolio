import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import "./App.css";

export default function App() {
    return (
        <div className="portfolio">

            {/* ============================================
                GALAXY BACKGROUND
            ============================================ */}

            <div className="galaxy-background">

                {/* Nebula */}
                <div className="nebula nebula-blue"></div>
                <div className="nebula nebula-purple"></div>
                <div className="nebula nebula-cyan"></div>

                {/* Stars */}
                <div className="stars-container">

                    {/* Tiny stars */}
                    {Array.from({ length: 500 }).map((_, index) => {
                        const size = Math.random() * 1.5 + 0.5;

                        return (
                            <span
                                key={`tiny-${index}`}
                                className="star star-tiny"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    animationDelay: `${Math.random() * 8}s`,
                                    animationDuration: `${4 + Math.random() * 6}s`,
                                }}
                            />
                        );
                    })}

                    {/* Medium stars */}
                    {Array.from({ length: 120 }).map((_, index) => {
                        const size = Math.random() * 2 + 1;

                        return (
                            <span
                                key={`medium-${index}`}
                                className="star star-medium"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    animationDuration: `${2 + Math.random() * 4}s`,
                                }}
                            />
                        );
                    })}

                    {/* Bright stars */}
                    {Array.from({ length: 40 }).map((_, index) => {
                        const size = Math.random() * 3 + 2;

                        return (
                            <span
                                key={`bright-${index}`}
                                className="star star-bright"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    width: `${size}px`,
                                    height: `${size}px`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${1.5 + Math.random() * 2}s`,
                                }}
                            />
                        );
                    })}

                </div>

                {/* Shooting stars */}
                <div className="shooting-star shooting-one"></div>
                <div className="shooting-star shooting-two"></div>
                <div className="shooting-star shooting-three"></div>

            </div>

            {/* ============================================
                WEBSITE CONTENT
            ============================================ */}

            <div className="website-content">

                <Navbar />

                <main>

                    <section id="home">
                        <Hero />
                    </section>

                    <section id="about">
                        <About />
                    </section>

                    <section id="experience">
                        <Experience />
                    </section>

                    <section id="projects">
                        <Projects />
                    </section>

                    <section id="technologies">
                        <Technologies />
                    </section>

                    <section id="contact">
                        <Contact />
                    </section>

                </main>

                {/* Footer */}
                <footer className="border-t border-neutral-800/70 py-10">

                    <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">

                        <p>
                            © 2026 Umesha Godawela
                        </p>

                        <div className="flex gap-6">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-cyan-400"
                            >
                                GitHub
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-cyan-400"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="mailto:your-email@gmail.com"
                                className="transition hover:text-cyan-400"
                            >
                                Email
                            </a>

                             <a
                                href="https://www.figma.com/files/team/1563831488108268084/user/1263152246068557487?fuid=1263152246068557487"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition hover:text-cyan-400"
                            >
                                Figma
                            </a>


                        </div>

                    </div>

                    <p className="mt-5 text-center text-xs text-neutral-700">
                        Built with React, Tailwind CSS & Framer Motion
                    </p>

                </footer>

            </div>

        </div>
    );
}