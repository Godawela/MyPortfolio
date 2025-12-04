import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import "./App.css";

export default function App() {
    return (
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
            <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute inset-0 -z-10 h-full w-full">
                    {/* Floating Stars (two layers) */}
                    <div className="floating-stars">
                        {/* Background dense stars */}
                        {Array.from({ length: 350 }).map((_, index) => {
                            const randomTop = Math.random() * 100;
                            const randomLeft = Math.random() * 100;
                            const randomSize = Math.random() * 1.8 + 0.6; // 0.6 - 2.4px
                            const hue = 200 + Math.random() * 60; // bluish tint
                            const duration = 4 + Math.random() * 6; // 4s - 10s for subtle twinkle
                            const delay = Math.random() * -10; // negative to desync

                            return (
                                <div
                                    key={`bg-${index}`}
                                    className="star small"
                                    style={{
                                        top: `${randomTop}%`,
                                        left: `${randomLeft}%`,
                                        width: `${randomSize}px`,
                                        height: `${randomSize}px`,
                                        background: `hsl(${hue}deg 80% 90%)`,
                                        animationDuration: `${duration}s`,
                                        animationDelay: `${delay}s`,
                                        opacity: 0.9 - Math.random() * 0.6,
                                    }}
                                />
                            );
                        })}

                        {/* Foreground twinkling stars */}
                        {Array.from({ length: 80 }).map((_, index) => {
                            const randomTop = Math.random() * 100;
                            const randomLeft = Math.random() * 100;
                            const randomSize = Math.random() * 3 + 1.5; // 1.5 - 4.5px
                            const hue = 30 + Math.random() * 330; // variable color (warm/cool)
                            const duration = 1.2 + Math.random() * 2; // faster twinkle
                            const delay = Math.random() * -2;

                            return (
                                <div
                                    key={`fg-${index}`}
                                    className="star twinkle"
                                    style={{
                                        top: `${randomTop}%`,
                                        left: `${randomLeft}%`,
                                        width: `${randomSize}px`,
                                        height: `${randomSize}px`,
                                        background: `hsl(${hue}deg 90% 85%)`,
                                        animationDuration: `${duration}s`,
                                        animationDelay: `${delay}s`,
                                        opacity: 0.95,
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-8">
                <Navbar />
                <Hero />
                <About />
                <Technologies />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}
