import { Briefcase } from "lucide-react";
import { Card } from "./Card";

const experiences = [
  {
    role: "Senior Full Stack Dev",
    company: "Tech Corp",
    period: "2022 - Present",
  },
  {
    role: "Software Developer",
    company: "Web Solutions",
    period: "2019 - 2022",
  },
  {
    role: "Junior Developer",
    company: "Startup Inc",
    period: "2018 - 2019",
  },
];

export default function ExperienceCard({ className }: { className?: string }) {
  return (
    <Card className={className} delay={0.2}>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          </svg>
          Experience
        </h3>
        <span className="text-[10px] tracking-tighter text-slate-500 uppercase">
          Career Timeline
        </span>
      </div>

      <div className="no-scrollbar relative min-h-0 flex-1 overflow-y-auto">
        <div className="relative ml-2 h-full space-y-4 border-l border-white/10 pl-6">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <div
                className={`absolute top-1.5 -left-[29px] h-3 w-3 rounded-full border-2 border-[#121214] ${i === 0 ? "bg-emerald-500" : "bg-white/20"}`}
              ></div>
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
