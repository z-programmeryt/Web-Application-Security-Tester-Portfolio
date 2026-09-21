"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setVisible(false), reduced ? 200 : 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
          aria-hidden
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-electric-500/30 blur-2xl animate-glow" />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-electric-500 to-cyan-accent flex items-center justify-center shadow-xl shadow-electric-500/30"
            >
              <Shield className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-6 font-mono text-sm tracking-[0.3em] uppercase text-text-muted"
          >
            Redoy<span className="text-electric-400">.</span>
          </motion.p>

          <div className="mt-5 w-40 h-0.5 bg-navy-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-electric-500 to-cyan-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}