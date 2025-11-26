import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
  onClick?: () => void;
}

export default function AnimatedCard({
  icon,
  title,
  description,
  gradient,
  delay = 0,
  onClick,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl p-8 cursor-pointer h-full
        bg-gradient-to-br ${gradient} shadow-lg hover:shadow-2xl
        border border-white/20 backdrop-blur-sm transition-all duration-300`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold font-play text-white mb-3">
          {title}
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
