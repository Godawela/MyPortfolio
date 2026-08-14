import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/image.png";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#technologies", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Get in Touch" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center justify-center gap-4 text-2xl">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-blue-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu button */}
      <button
        type="button"
        className="md:hidden mx-2 p-2 text-current"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 z-50 flex flex-col items-center gap-6 py-8 bg-black/95 backdrop-blur-sm text-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="hover:text-blue-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;