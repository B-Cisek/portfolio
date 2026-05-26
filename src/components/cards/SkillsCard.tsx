import { CircleHelp, Layers3 } from "lucide-react";
import { Card } from "./Card";
import type { Dictionary, SkillGroup } from "@/i18n";

const skillGroupClasses: Record<SkillGroup, string> = {
  practical:
    "border-emerald-400/30 bg-emerald-400/10 text-emerald-100 shadow-[inset_0_1px_0_rgba(52,211,153,0.08)]",
  basic:
    "border-sky-400/30 bg-sky-400/10 text-sky-100 shadow-[inset_0_1px_0_rgba(56,189,248,0.08)]",
  learning:
    "border-amber-400/30 bg-amber-400/10 text-amber-100 shadow-[inset_0_1px_0_rgba(251,191,36,0.08)]",
};

const skillGroupOrder: SkillGroup[] = ["practical", "basic", "learning"];

interface SkillsCardProps {
  className?: string;
  content: Dictionary["skills"];
}

export default function SkillsCard({ className, content }: SkillsCardProps) {
  const groupedSkills = skillGroupOrder.map((group) => ({
    key: group,
    items: content.items.filter((skill) => skill.level === group),
  }));

  return (
    <Card
      className={`${className ?? ""} overflow-visible`}
      delay={0.3}
      title={
        <div className="flex items-center gap-2">
          <span>{content.title}</span>
          <div className="group relative flex">
            <button
              type="button"
              aria-label={content.tooltipLabel}
              className="text-slate-400 transition-colors hover:text-slate-100 focus:text-slate-100 focus:outline-none"
            >
              <CircleHelp size={14} />
            </button>

            <div className="bg-background-card/95 pointer-events-none absolute top-full right-0 z-20 mt-3 w-72 rounded-2xl border border-white/10 p-4 text-left opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 md:right-auto md:left-0">
              <p className="mb-3 text-xs font-semibold tracking-wide text-slate-100 uppercase">
                {content.tooltipTitle}
              </p>

              <div className="space-y-2">
                {skillGroupOrder.map((group) => (
                  <div key={group} className="flex items-start gap-2">
                    <span
                      className={`mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${
                        group === "practical"
                          ? "bg-emerald-300"
                          : group === "basic"
                            ? "bg-sky-300"
                            : "bg-amber-300"
                      }`}
                    />
                    <div>
                      <p className="text-xs font-medium text-slate-100">
                        {content.groups[group].label}
                      </p>
                      <p className="text-[11px] leading-relaxed text-slate-400">
                        {content.groups[group].description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      icon={<Layers3 size={18} />}
      contentClassName="no-scrollbar overflow-y-auto"
      enterFrom="right"
    >
      <div className="mt-1 flex min-h-0 flex-1 flex-col gap-3">
        {groupedSkills.map((group) => (
          <section key={group.key}>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className={`rounded-md border px-2.5 py-1 text-[11px] font-bold tracking-wide ${skillGroupClasses[group.key]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Card>
  );
}
