import { GraduationCap } from "lucide-react";
import { Card } from "./Card";
import type { Dictionary } from "@/i18n";

interface EducationCardProps {
  className?: string;
  content: Dictionary["education"];
}

export default function EducationCard({
  className,
  content: _content,
}: EducationCardProps) {
  return (
    <Card
      className={className}
      delay={0.4}
      title={_content.title}
      icon={<GraduationCap size={18} />}
      enterFrom="left"
    >
      <div className="space-y-2">
        <p className="text-lg leading-tight font-semibold text-white">
          Uniwersytet Rzeszowski
        </p>
        <p className="text-base leading-tight text-slate-300">
          Informatyka i Ekonometria (Inż.)
        </p>
        <p className="text-sm text-slate-400">2019 - 2023</p>
      </div>
    </Card>
  );
}
