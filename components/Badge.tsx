"use client";

import React from "react";
import CountUp from "react-countup";

interface BadgeProps {
  containerStyles: string;
  icon: React.ReactNode;
  endCountNum: number;
  endCountText?: string;
  badgeText: string;
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <div
      className={`z-20 w-auto min-w-[190px] h-[70px] px-4 py-3 bg-white/95 dark:bg-card/95 backdrop-blur-md shadow-xl rounded-2xl flex items-center gap-x-3.5 border border-border/60 hover:border-primary/60 dark:hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:scale-105 active:scale-95 transition-all duration-300 ease-out cursor-pointer select-none group ${containerStyles}`}
    >
      <div className="text-2xl text-primary p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-2xl leading-none font-extrabold text-foreground group-hover:text-primary transition-colors flex items-center">
          <CountUp end={endCountNum} delay={0.3} duration={2.5} />
          <span>{endCountText}</span>
        </div>
        <div className="text-[12px] font-medium text-muted-foreground group-hover:text-foreground leading-tight mt-1 transition-colors">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
