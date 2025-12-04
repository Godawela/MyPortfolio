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
                    {/* Floating Stars */}
                    <div className="floating-stars">
                        {Array.from({ length: 100 }).map((_, index) => {
                            const randomTop = Math.random() * 100; // Random percentage for vertical position
                            const randomLeft = Math.random() * 100; // Random percentage for horizontal position
                            const randomSize = Math.random() * 3 + 1; // Random size between 1 and 4px

                            return (
                                <div
                                    key={index}
                                    className="star"
                                    style={{
                                        top: `${randomTop}%`,
                                        left: `${randomLeft}%`,
                                        width: `${randomSize}px`,
                                        height: `${randomSize}px`,
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
