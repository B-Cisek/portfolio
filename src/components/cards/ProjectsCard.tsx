import { useState } from "react";
import { Card } from "./Card";
import { Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-scale e-commerce solution built with Next.js, Stripe, and a custom CMS. Features ultra-fast search and real-time inventory.",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative project management tool featuring real-time updates via WebSockets, kanban boards, and detailed analytics.",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    title: "AI Image Generator",
    description:
      "A web interface for generating images using AI models. Integrates with HuggingFace APIs and allows users to save and share prompts.",
    tags: ["Python", "React", "AI"],
  },
];

export default function ProjectsCard({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Card className={`${className} relative flex !flex-row p-1`} delay={0.5}>
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
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-[#0a0a0b] uppercase">
                Project #{String(currentIndex + 1).padStart(2, "0")}
              </span>
              <h3 className="font-semibold text-white">
                {projects[currentIndex].title}
              </h3>
            </div>
            <p className="mb-4 line-clamp-2 text-xs text-slate-400">
              {projects[currentIndex].description}
            </p>
            <div className="mt-auto flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded border border-white/10 bg-white/5"></div>
              <span className="text-[10px] text-slate-500">
                View Case Study →
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="z-10 flex w-10 shrink-0 flex-col items-center justify-center gap-3 rounded-r-[22px] border-l border-white/5 bg-white/5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="flex cursor-pointer items-center justify-center transition-all outline-none"
            aria-label={`View project ${i + 1}`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                currentIndex === i ? "bg-emerald-500" : "bg-white/20"
              }`}
            ></div>
          </button>
        ))}
      </div>
    </Card>
  );
}
