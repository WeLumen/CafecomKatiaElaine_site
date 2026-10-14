import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }}
    transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, dark = false }) => (
  <span
    className={`inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.28em] font-semibold ${
      dark ? "text-[#B88D56]" : "text-[#A27945]"
    }`}
  >
    <span className="h-px w-8 bg-[#B88D56]" />
    {children}
  </span>
);
