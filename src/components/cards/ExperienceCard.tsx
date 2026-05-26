import { BriefcaseBusiness } from "lucide-react";
import { Card } from "./Card";
import type { Dictionary } from "@/i18n";

interface ExperienceCardProps {
  className?: string;
  content: Dictionary["experience"];
}

export default function ExperienceCard({
  className,
  content,
}: ExperienceCardProps) {
  return (
    <Card
      className={className}
      delay={0.2}
      title={content.title}
      icon={<BriefcaseBusiness size={18} />}
      contentClassName="no-scrollbar overflow-y-auto"
      enterFrom="right"
    >
      <div className="relative min-h-0 flex-1">
        <div className="relative h-full">
          {content.items.map((exp, i) => (
            <div
              key={i}
              className={
                i === content.items.length - 1
                  ? "relative pl-7"
                  : "relative pb-4 pl-7"
              }
            >
              {i !== content.items.length - 1 && (
                <div className="absolute top-3 left-[9px] h-full w-px -translate-x-1/2 bg-white/10" />
              )}
              <div
                className={`absolute top-3 left-[9px] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#121214] ${i === 0 ? "bg-accent" : "bg-white/20"}`}
              />
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-white">{exp.role}</h4>
                  <p className="text-xs text-slate-500">{exp.company}</p>
                </div>
                <span className="text-[10px] text-slate-400">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
