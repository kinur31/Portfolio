"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

interface TemplateProps {
  children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  const completion = useScrollProgress();

  return (
    <>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.1, duration: 0.3 }}
      >
        {children}
      </motion.div>
      {/* completion bar */}
      <span
        style={{ transform: `translateY(${completion - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-transform duration-300 pointer-events-none"
      />
    </>
  );
};

export default Template;
