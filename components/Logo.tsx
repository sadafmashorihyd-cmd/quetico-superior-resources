import Image from "next/image";
import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="Quetico Superior Resources Inc — home"
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={compact ? 85 : 106}
        height={compact ? 32 : 40}
        className="shrink-0 object-contain"
        priority
      />
      <span className="leading-tight">
        <span className="block font-display text-[15px] md:text-[17px] text-paper group-hover:text-gold-light transition-colors">
          Quetico Superior
        </span>
        <span className="block text-[10px] tracking-wide2 text-gold uppercase">
          Resources Inc.
        </span>
      </span>
    </Link>
  );
}
