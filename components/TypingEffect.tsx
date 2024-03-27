import { useState, useEffect } from "react";

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTypingForward, setIsTypingForward] = useState(true);
  const phrases = ["Software Developer"];
  const typingSpeed = 100;
  const pauseDuration = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTypingForward) {
        if (index < phrases[0].length) {
          setText((prev) => prev + phrases[0][index]);
          setIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setIsTypingForward(false);
          }, pauseDuration);
        }
      } else {
        if (index > 0) {
          setText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        } else {
          setIsTypingForward(true);
          setText("");
          setIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index, isTypingForward, phrases, typingSpeed, pauseDuration]);

  return (
<div className="flex items-center justify-center xl:justify-start">
      <h1 className="text-3xl font-bold md:text-4xl xl:text-5xl">
  a <span className="text-primary">{text}</span>
  <span className="animate-typing">|</span>
</h1>

    </div>
  );
};

export default TypingEffect;
