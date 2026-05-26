import { Card } from "./Card";

export default function AboutCard({ className }: { className?: string }) {
  return (
    <Card className={`${className} group relative shadow-2xl`} delay={0.1}>
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      </div>
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="space-y-4">
          <span className="mb-4 block font-mono text-sm tracking-widest text-emerald-500 uppercase">
            Developer Profile
          </span>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-white">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Bartłomiej
            </span>
          </h1>

          <h2 className="mb-6 text-2xl font-medium text-slate-100">
            Software Developer
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-slate-400">
            Specializing in building robust backends and clean user interfaces.
            I bridge the gap between complex logic and elegant design with over
            5 years of industry experience.
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
            <span className="font-mono text-xs text-slate-300 uppercase">
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
