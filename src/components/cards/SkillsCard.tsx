import { Card } from "./Card";
import { Code2 } from "lucide-react";

const allSkills = [
  { name: "JavaScript", color: "blue" },
  { name: "TypeScript", color: "blue" },
  { name: "PHP 8.3", color: "emerald" },
  { name: "Laravel", color: "red" },
  { name: "React", color: "cyan" },
  { name: "SQL", color: "indigo" },
  { name: "AWS", color: "orange" },
  { name: "Docker", color: "slate" },
  { name: "Node.js", color: "emerald" },
  { name: "Next.js", color: "slate" },
];

const colorClasses: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  orange: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  slate: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function SkillsCard({ className }: { className?: string }) {
  return (
    <Card className={className} delay={0.3}>
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
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Technical Stack
        </h3>
      </div>

      <div className="no-scrollbar flex min-h-0 flex-1 flex-col overflow-y-auto">
        <div className="mt-2 flex flex-wrap gap-2">
          {allSkills.map((skill) => (
            <span
              key={skill.name}
              className={`px-3 py-1 ${colorClasses[skill.color]} rounded-md border font-mono text-xs`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
