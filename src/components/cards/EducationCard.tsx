import { Card } from "./Card";
import { GraduationCap } from "lucide-react";

export default function EducationCard({ className }: { className?: string }) {
  return (
    <Card className={className} delay={0.4}>
      <h3 className="mb-4 text-sm font-semibold text-white">Education</h3>
      <div className="space-y-1">
        <p className="text-sm leading-tight font-medium text-white">
          MSc in Computer Science
        </p>
        <p className="text-xs text-slate-500">
          Warsaw University of Technology
        </p>
        <p className="mt-2 text-[10px] text-slate-600">
          Graduated 2020 • Honors
        </p>
      </div>
    </Card>
  );
}
