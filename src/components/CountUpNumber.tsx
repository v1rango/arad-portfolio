"use client";

import { useEffect, useRef } from "react";

interface CountUpNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUpNumber({
  value,
  duration = 1400,
  className = "",
}: CountUpNumberProps) {
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const match = value.match(/([^\d.]*)([\d.]+)(.*)/);
    if (!match) return;

    const prefix = match[1] || "";
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    const decimalPlaces = isDecimal ? match[2].split(".")[1].length : 0;

    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.textContent = value;
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = easeOut * targetNumber;

            const formattedNum = isDecimal
              ? currentNum.toFixed(decimalPlaces)
              : Math.floor(currentNum).toString();

            if (element) {
              element.textContent = `${prefix}${formattedNum}${suffix}`;
            }

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else if (element) {
              element.textContent = value;
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef} className={`inline-block ${className}`} dir="ltr">
      {value}
    </span>
  );
}
