import { useEffect, useState } from "react";
import { ExternalLink, FolderKanban } from "lucide-react";
import { Card } from "./Card";
import { GitHubIcon } from "../icons/GitHubIcon";
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
  const projectCount = content.items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex < projectCount - 1 ? prevIndex + 1 : 0,
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [projectCount]);

  return (
    <Card
      className={`${className} relative flex flex-row! p-1`}
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
              <span className="bg-accent text-background rounded px-2 py-0.5 text-[10px] font-bold uppercase">
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
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold tracking-wide text-slate-300 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-end gap-2">
              <a
                href={currentProject.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/8 px-3.5 py-2 text-[11px] font-semibold text-slate-100 transition-colors hover:border-white/20 hover:bg-white/12"
              >
                <GitHubIcon className="h-3.5 w-3.5" />
                <span>{content.githubLabel}</span>
              </a>
              {currentProject.demoLink ? (
                <a
                  href={currentProject.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent hover:bg-accent-strong inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-[11px] font-semibold text-[#0a0a0b] transition-colors"
                >
                  <ExternalLink size={13} />
                  <span>{content.demoLabel}</span>
                </a>
              ) : null}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="z-10 flex w-14 shrink-0 flex-col items-center justify-center gap-4 border-l border-white/8">
        {content.items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="flex cursor-pointer items-center justify-center rounded-full p-1.5 transition-all"
            aria-label={content.ariaLabel.replace("{number}", String(i + 1))}
            aria-pressed={currentIndex === i}
          >
            <div
              className={`rounded-full transition-all ${
                currentIndex === i
                  ? "bg-accent h-3 w-3 shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-accent)_24%,transparent)]"
                  : "h-2.5 w-2.5 bg-white/25 hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </Card>
  );
}
