"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Full-Stack Developer",
  "Laravel & PHP Specialist",
  "React & Vue Architect",
  "Node.js & API Engineer",
];

const TypingEffect = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] ?? "";
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <div className="flex items-center justify-center xl:justify-start min-h-[48px]">
      <span className="text-2xl font-bold md:text-3xl xl:text-4xl text-foreground">
        a <span className="text-primary">{text}</span>
        <span className="animate-typing">|</span>
      </span>
    </div>
  );
};

export default TypingEffect;
