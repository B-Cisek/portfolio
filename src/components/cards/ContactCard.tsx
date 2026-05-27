import { useState } from "react";
import { Card } from "./Card";
import { ContactModal } from "../ContactModal";
import type { Dictionary } from "@/i18n";

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
          className="group hover:bg-accent-strong relative flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-3xl p-6 text-center text-[#0a0a0b] transition-transform duration-200 hover:-translate-y-0.5"
          onClick={() => setIsOpen(true)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="relative mb-3 transition-transform group-hover:scale-110"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
          <h3 className="relative mb-1 text-lg font-bold">
            {content.cardTitle}
          </h3>
          <p className="relative mb-4 text-[10px] font-medium tracking-widest uppercase opacity-80">
            {content.cardDescription}
          </p>
          <div className="relative w-full rounded-xl bg-[#0a0a0b] py-2 text-xs font-bold tracking-widest text-white uppercase">
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
