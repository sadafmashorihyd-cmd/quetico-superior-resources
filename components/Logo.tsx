import Image from "next/image";
import Link from "next/link";

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center"
      aria-label="Quetico Superior Resources Inc — home"
    >
      {/* Vector logo (SVG) — stays sharp at any size / screen density */}
      <Image
        src="/logo-horizontal.svg"
        alt="Quetico Superior Resources Inc."
        width={752}
        height={118}
        unoptimized
        priority
        className={compact ? "h-11 w-auto" : "h-10 w-auto md:h-[52px]"}
      />
    </Link>
  );
}
