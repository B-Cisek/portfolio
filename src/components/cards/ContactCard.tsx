import { useState } from "react";
import { Card } from "./Card";
import { ContactModal } from "../ContactModal";
import type { Dictionary } from "@/i18n";
import { Mail } from "lucide-react";

interface ContactCardProps {
  className?: string;
  content: Dictionary["contact"];
}

export default function ContactCard({ className, content }: ContactCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card
        className={`${className} border-accent-border bg-accent p-0 shadow-lg`}
        delay={0.6}
        enterFrom="right"
      >
        <button
          type="button"
          className="group text-background hover:bg-accent-strong relative flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl p-6 text-center transition-all duration-500 ease-out hover:scale-[1.015]"
          onClick={() => setIsOpen(true)}
        >
          <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/60 opacity-0 blur-sm transition-all duration-500 group-hover:inset-x-10 group-hover:opacity-100" />
          <span className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/0 transition-all duration-500 group-hover:ring-white/15" />

          <Mail
            size={30}
            strokeWidth={2}
            className="relative z-10 mb-3 transition-transform duration-500 ease-out group-hover:scale-110"
          />

          <h3 className="relative z-10 mb-1 text-lg font-bold">
            {content.cardTitle}
          </h3>
          <p className="relative z-10 mb-4 text-[10px] font-medium tracking-widest uppercase opacity-80 transition-opacity duration-500 group-hover:opacity-100">
            {content.cardDescription}
          </p>
          <div className="bg-background relative z-10 w-full rounded-xl py-2 text-xs font-bold tracking-widest text-white uppercase shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
            {content.cardButton}
          </div>
        </button>
      </Card>

      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={content}
      />
    </>
  );
}
