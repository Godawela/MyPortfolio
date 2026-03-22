import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState("");
  const copyToClipboard = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(""), 2000);
    } catch {
      setCopied("failed");
      setTimeout(() => setCopied(""), 2000);
    }
  };

  return (
    <section className="py-16">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 via-white/3 to-white/2 border border-white/6 backdrop-blur-md shadow-2xl"
      >
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-400">
          Get in Touch
        </h2>
        <p className="text-center text-sm text-neutral-300 mb-8">
          I'm open to new opportunities and collaborations — feel free to reach out.
        </p>

        {/* Grid for 4 contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* LinkedIn */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/in/umesha-godawela22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/6 bg-white/3 hover:bg-white/5 transition-colors w-full"
          >
            <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.25h3.98V24H.5V8.25zM8.5 8.25h3.82v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.66 4.78 6.12V24h-3.98v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.97V24H8.5V8.25z" />
            </svg>
            <div className="text-left min-w-0">
              <div className="text-sm font-medium truncate">LinkedIn</div>
              <div className="text-xs text-neutral-300 truncate">View profile</div>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/Godawela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/6 bg-white/3 hover:bg-white/5 transition-colors w-full"
          >
            <svg
              className="w-6 h-6 text-gray-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.018.005 2.043.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <div className="text-left min-w-0">
              <div className="text-sm font-medium truncate">GitHub</div>
              <div className="text-xs text-neutral-300 truncate">View profile</div>
            </div>
          </motion.a>

          {/* Phone */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              copyToClipboard("+94707445924", "phone");
              window.location.href = "tel:+94707445924";
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/6 bg-white/3 hover:bg-white/5 transition-colors text-left w-full"
            type="button"
          >
            <svg
              className="w-6 h-6 text-indigo-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.02l-2.21 2.19z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">+94 7074 45924</div>
              <div className="text-xs text-neutral-300 truncate">Tap to call · Click to copy</div>
            </div>
            <div className="text-xs text-cyan-200 ml-3 md:flex-shrink-0">
              {copied === "phone" ? "Copied" : "Copy"}
            </div>
          </motion.button>

          {/* Email */}
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:umeshagodawela@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              copyToClipboard("umeshagodawela@gmail.com", "email");
              setTimeout(() => {
                window.location.href = "mailto:umeshagodawela@gmail.com";
              }, 200);
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/6 bg-white/3 hover:bg-white/5 transition-colors text-left w-full"
          >
            <svg
              className="w-6 h-6 text-pink-300"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">umeshagodawela@gmail.com</div>
              <div className="text-xs text-neutral-300 truncate">Send an email · Click to copy</div>
            </div>
            <div className="text-xs text-cyan-200 ml-3 md:flex-shrink-0">
              {copied === "email" ? "Copied" : "Copy"}
            </div>
          </motion.a>
        </div>

        <p className="text-center text-xs text-neutral-500 mt-6">
          Or follow me on LinkedIn or GitHub for updates — I typically respond within a day.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
