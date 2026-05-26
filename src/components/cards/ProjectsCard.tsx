import { useState } from "react";
import { FolderKanban } from "lucide-react";
import { Card } from "./Card";
import { motion, AnimatePresence } from "motion/react";
import type { Dictionary } from "@/i18n";

interface ProjectsCardProps {
  className?: string;
  content: Dictionary["projects"];
}

export default function ProjectsCard({
  className,
  content,
}: ProjectsCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = content.items[currentIndex];

  return (
    <Card
      className={`${className} relative flex !flex-row p-1`}
      delay={0.5}
      icon={<FolderKanban size={18} />}
      contentClassName="!flex-row"
      enterFrom="bottom"
    >
      <div className="flex flex-1 flex-col overflow-hidden p-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex h-full flex-col"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="bg-accent rounded px-2 py-0.5 text-[10px] font-bold text-[#0a0a0b] uppercase">
                {content.projectLabel.replace(
                  "{number}",
                  String(currentIndex + 1).padStart(2, "0"),
                )}
              </span>
              <h3 className="font-semibold text-white">
                {currentProject.title}
              </h3>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-400">
              {currentProject.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {currentProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-slate-300 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-slate-500 uppercase">
              <div className="h-2 w-2 rounded-full bg-slate-500" />
              <span>{content.selectedCaseStudy}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="z-10 flex w-12 shrink-0 flex-col items-center justify-center gap-3 rounded-r-[24px] border-l border-white/5 bg-white/5">
        {content.items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="flex cursor-pointer items-center justify-center rounded-full p-1 transition-all"
            aria-label={content.ariaLabel.replace("{number}", String(i + 1))}
            aria-pressed={currentIndex === i}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                currentIndex === i ? "bg-accent" : "bg-white/20"
              }`}
            />
          </button>
        ))}
      </div>
    </Card>
  );
}
