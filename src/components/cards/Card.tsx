import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  delay?: number;
  title?: ReactNode;
  icon?: ReactNode;
  enterFrom?: "left" | "right" | "bottom";
}

const enterVariants = {
  left: { opacity: 0, x: -32 },
  right: { opacity: 0, x: 32 },
  bottom: { opacity: 0, y: 20 },
} as const;

export function Card({
  children,
  className,
  contentClassName,
  delay = 0,
  title,
  icon,
  enterFrom = "bottom",
}: CardProps) {
  return (
    <motion.div
      initial={enterVariants[enterFrom]}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn(
        "bg-background-card relative flex flex-col overflow-hidden rounded-3xl border border-white/5 p-6 shadow-lg",
        className,
      )}
    >
      {(title || icon) && (
        <div className="mb-4 flex items-start gap-4">
          <div className="min-w-0">
            {title && (
              <div className="flex items-center gap-2">
                {icon && <span className="text-accent shrink-0">{icon}</span>}
                <h3 className="text-sm font-semibold text-white">{title}</h3>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={cn("flex min-h-0 flex-1 flex-col", contentClassName)}>
        {children}
      </div>
    </motion.div>
  );
}
