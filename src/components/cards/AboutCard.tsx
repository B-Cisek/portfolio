import { CodeXml } from "lucide-react";
import { Card } from "./Card";
import { GitHubIcon } from "../icons/GitHubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import type { Dictionary } from "@/i18n";

const socialLinks = {
  github: "https://github.com/B-Cisek",
  linkedin: "https://www.linkedin.com/in/bartlomiej-cisek",
};

interface AboutCardProps {
  className?: string;
  content: Dictionary["about"];
}

export default function AboutCard({ className, content }: AboutCardProps) {
  return (
    <Card
      className={`${className} group relative shadow-2xl`}
      delay={0.1}
      title={content.title}
      icon={<CodeXml size={18} />}
      enterFrom="left"
    >
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="space-y-4">
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            {content.heading}{" "}
            <span className="text-accent">{content.name}</span>
            <span> {content.wave}</span>
          </h1>

          <h2 className="mb-6 text-2xl font-medium text-slate-100">
            {content.subheading}
          </h2>
          <p className="text-lg leading-relaxed text-slate-400">
            {content.description}
          </p>
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
            <div className="bg-accent h-2 w-2 animate-pulse rounded-full"></div>
            <span className="text-xs font-medium text-slate-300 uppercase">
              {content.availability}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-accent rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition-colors"
            >
              <GitHubIcon className="h-[18px] w-[18px]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
}
