import { GraduationCap } from "lucide-react";
import { Card } from "./Card";
import type { Dictionary } from "@/i18n";

interface EducationCardProps {
  className?: string;
  content: Dictionary["education"];
}

export default function EducationCard({
  className,
  content,
}: EducationCardProps) {
  return (
    <Card
      className={className}
      delay={0.4}
      title={content.title}
      icon={<GraduationCap size={18} />}
      enterFrom="left"
    >
      <div className="space-y-2">
        <p className="text-lg leading-tight font-semibold text-white">
          {content.university}
        </p>
        <p className="text-base leading-tight text-slate-300">
          {content.major} ({content.degree})
        </p>
        <p className="text-sm text-slate-400">{content.period}</p>
      </div>
    </Card>
  );
}
