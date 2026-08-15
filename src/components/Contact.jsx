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
    <section className="py-24">
      <div className="mx-auto w-full max-w-5xl px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-center gap-3 text-center"
        >
          {/* Status pulse — signature element */}
          <div className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs text-neutral-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Open to new opportunities
          </div>

          <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
            Let's build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              together
            </span>
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            Reach out directly or find me on the platforms below —
            I typically reply within a day.
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-3">

          {/* EMAIL — hero card, spans full height on the left */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -3 }}
            href="mailto:umeshagodawela@gmail.com"
            onClick={(e) => {
              e.preventDefault();
              copyToClipboard("umeshagodawela@gmail.com", "email");
              setTimeout(() => {
                window.location.href = "mailto:umeshagodawela@gmail.com";
              }, 200);
            }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-cyan-500/10 via-neutral-900 to-purple-500/10 p-7 md:row-span-3"
          >
            {/* ambient glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition-opacity group-hover:opacity-80" />

            <div>
              <svg className="h-7 w-7 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-neutral-500">
                Email
              </p>
              <p className="mt-2 break-all text-lg font-medium text-neutral-100">
                umeshagodawela@gmail.com
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm text-cyan-300">
              {copied === "email" ? "Copied to clipboard" : "Send a message"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            whileHover={{ y: -3 }}
            href="https://www.linkedin.com/in/umesha-godawela22"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 transition-colors hover:border-neutral-700"
          >
            <svg className="h-6 w-6 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.25h3.98V24H.5V8.25zM8.5 8.25h3.82v2.1h.05c.53-1 1.83-2.1 3.77-2.1 4.03 0 4.78 2.66 4.78 6.12V24h-3.98v-7.5c0-1.79-.03-4.09-2.49-4.09-2.5 0-2.88 1.95-2.88 3.97V24H8.5V8.25z" />
            </svg>
            <div className="min-w-0">
              <div className="text-sm font-medium text-neutral-100">LinkedIn</div>
              <div className="truncate text-xs text-neutral-500">umesha-godawela22</div>
            </div>
          </motion.a>

          {/* GITHUB */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -3 }}
            href="https://github.com/Godawela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 transition-colors hover:border-neutral-700"
          >
            <svg className="h-6 w-6 shrink-0 text-neutral-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.403c1.018.005 2.043.138 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.922.43.372.815 1.102.815 2.222 0 1.604-.015 2.896-.015 3.286 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <div className="min-w-0">
              <div className="text-sm font-medium text-neutral-100">GitHub</div>
              <div className="truncate text-xs text-neutral-500">@Godawela</div>
            </div>
          </motion.a>

          {/* FIGMA */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            whileHover={{ y: -3 }}
            href="https://www.figma.com/files/team/1563831488108268084/user/1263152246068557487?fuid=1263152246068557487"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 transition-colors hover:border-neutral-700 md:col-span-2"
          >
            <svg className="h-6 w-7 shrink-0" viewBox="0 0 38 57" fill="none">
              <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
              <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
              <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
              <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
              <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
            </svg>
            <div className="min-w-0">
              <div className="text-sm font-medium text-neutral-100">Figma</div>
              <div className="truncate text-xs text-neutral-500">@Godawela</div>
            </div>
          </motion.a>

          {/* PHONE — spans two columns on md for balance */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -3 }}
            onClick={() => {
              copyToClipboard("+94707445924", "phone");
              window.location.href = "tel:+94707445924";
            }}
            type="button"
            className="flex items-center gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 text-left transition-colors hover:border-neutral-700 md:col-span-2"
          >
            <svg className="h-6 w-6 shrink-0 text-purple-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 3.5A1 1 0 013 2.5H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.02l-2.21 2.19z" />
            </svg>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-neutral-100">+94 7074 45924</div>
              <div className="truncate text-xs text-neutral-500">Tap to call</div>
            </div>
            <div className="shrink-0 text-xs text-cyan-300">
              {copied === "phone" ? "Copied" : "Copy"}
            </div>
          </motion.button>

        </div>
      </div>
    </section>
  );
};

export default Contact;