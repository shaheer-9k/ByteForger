import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface LottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  className?: string;
}

export default function LottieAnimation({
  animationData,
  loop = true,
  autoplay = true,
  speed = 1,
  className = "",
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current && !animationRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop,
        autoplay,
        animationData,
      });

      animationRef.current.setSpeed(speed);
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [animationData, loop, autoplay, speed]);

  return <div ref={containerRef} className={className} />;
}
