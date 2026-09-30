"use client";

import { useEffect, useState, useRef } from "react";

interface CountUpNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUpNumber({
  value,
  duration = 1600,
  className = "",
}: CountUpNumberProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // استخراج عدد و علائم پیشوند/پسوند (مانند "< 0.8s" یا "100" یا "60 FPS")
    const match = value.match(/([^\d.]*)([\d.]+)(.*)/);
    if (!match) {
      return;
    }

    const prefix = match[1] || "";
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    const decimalPlaces = isDecimal ? match[2].split(".")[1].length : 0;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // تابع نرم‌کننده Ease-Out Cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentNum = easeOut * targetNumber;

            const formattedNum = isDecimal
              ? currentNum.toFixed(decimalPlaces)
              : Math.floor(currentNum).toString();

            setDisplayValue(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setDisplayValue(value);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={elementRef} className={`inline-block ${className}`} dir="ltr">
      {displayValue}
    </span>
  );
}
