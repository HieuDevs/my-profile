"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  subtitle?: string;
  links?: {
    ios?: string;
    android?: string;
    website?: string;
  };
};

export default function ProjectCard({ title, subtitle, description, tags, href, imageSrc, imageAlt, links }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 12;
    const rotateX = -((y - midY) / midY) * 12;
    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--px", `${x}px`);
    el.style.setProperty("--py", `${y}px`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  const content = (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave} className="card3d group">
      <div className="card3d-inner">
        <div className="flex flex-col gap-3">
          {imageSrc ? (
            <div className="relative h-40 w-full overflow-hidden rounded-xl ring-1 ring-white/10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_60px_at_var(--px)_var(--py),hsl(0_0%_100%/0.12),transparent_60%)]" />
              <div
                className="absolute inset-0 rounded-xl"
                style={{ boxShadow: "0 0 40px 8px color-mix(in oklab, var(--primary) 25%, transparent) inset" }}
              />
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </div>
          ) : null}
          <h3 className="text-foreground text-base font-semibold tracking-tight">{title}</h3>
          {subtitle ? <p className="text-foreground/70 -mt-1 text-sm">{subtitle}</p> : null}
          <p className="text-foreground/70 text-sm">{description}</p>
          <div className="mt-1 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-foreground/80 rounded-md px-2 py-1 text-xs ring-1"
                style={{
                  background: "color-mix(in oklab, var(--secondary) 85%, transparent)",
                  borderColor: "var(--border)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          {links ? (
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {links.website ? (
                <a
                  href={links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/90 hover:bg-foreground/5 rounded-md px-2 py-1 text-xs ring-1 transition-colors"
                  style={{ borderColor: "var(--border)" }}
                >
                  Website
                </a>
              ) : null}
              {links.ios ? (
                <a
                  href={links.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/90 hover:bg-foreground/5 rounded-md px-2 py-1 text-xs ring-1 transition-colors"
                  style={{ borderColor: "var(--border)" }}
                >
                  iOS
                </a>
              ) : null}
              {links.android ? (
                <a
                  href={links.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/90 hover:bg-foreground/5 rounded-md px-2 py-1 text-xs ring-1 transition-colors"
                  style={{ borderColor: "var(--border)" }}
                >
                  Android
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (href && !links)
    return (
      <Link href={href} className="block no-underline">
        {content}
      </Link>
    );
  return content;
}
