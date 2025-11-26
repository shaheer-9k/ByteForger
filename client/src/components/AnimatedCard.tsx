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
      whileHover={{ y: -12, scale: 1.05 }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl p-8 cursor-pointer h-full
        bg-gradient-to-br ${gradient} shadow-2xl hover:shadow-3xl
        border border-white/30 backdrop-blur-sm transition-all duration-300 dark:shadow-lg dark:shadow-gray-900`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-5 transform group-hover:scale-125 transition-transform duration-300 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold font-play text-white mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-white/95 text-sm md:text-base leading-relaxed font-medium">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-white/0 via-white to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      <div className="absolute -bottom-1 -left-1 -right-1 h-12 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}
