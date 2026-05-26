import { useState } from "react";
import { Card } from "./Card";
import { Mail, ArrowUpRight } from "lucide-react";
import { ContactModal } from "../ContactModal";

export default function ContactCard({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`${className} group flex cursor-pointer flex-col items-center justify-center rounded-3xl bg-emerald-500 p-6 text-center text-[#0a0a0b] shadow-lg transition-colors duration-200 hover:bg-emerald-400`}
        onClick={() => setIsOpen(true)}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="mb-3 transform transition-transform group-hover:scale-110"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
        <h3 className="mb-1 text-lg font-bold">Get in touch</h3>
        <p className="mb-4 text-[10px] font-medium tracking-widest uppercase opacity-80">
          Open Contact Form
        </p>
        <div className="w-full rounded-xl bg-[#0a0a0b] py-2 text-xs font-bold tracking-widest text-white uppercase">
          Message Me
        </div>
      </div>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
