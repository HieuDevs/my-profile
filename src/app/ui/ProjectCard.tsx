"use client";
import Link from "next/link";
import Image from "next/image";

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
  imageContain?: boolean;
  projectLarge?: boolean;
};

export default function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  href,
  imageSrc,
  imageAlt,
  links,
  imageContain,
  projectLarge,
}: Props) {
  const content = (
    <div className="ai-card group">
      <div className={`flex flex-col ${projectLarge ? "gap-4" : "gap-3"}`}>
        {imageSrc ? (
          <div
            className={`ai-card-media relative z-10 ${
              imageContain
                ? "mx-auto h-44 w-44 overflow-hidden rounded-full"
                : `${projectLarge ? "h-44" : "h-40"} w-full rounded-xl`
            } ring-1 ring-white/10`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120px_60px_at_var(--px)_var(--py),hsl(0_0%_100%/0.12),transparent_60%)]" />
            <div
              className="absolute inset-0 rounded-xl"
              style={{ boxShadow: "0 0 40px 8px color-mix(in oklab, var(--primary) 25%, transparent) inset" }}
            />
            <Image
              src={imageSrc}
              alt={imageAlt ?? ""}
              fill
              className={`${"object-cover object-center"} transition-transform duration-300 group-hover:scale-[1.03]`}
              priority
            />
          </div>
        ) : null}
        <h3 className={`text-foreground ${projectLarge ? "text-[1.06rem]" : "text-base"} font-semibold tracking-tight`}>
          {title}
        </h3>
        {subtitle ? <p className="text-foreground/70 -mt-1 text-sm">{subtitle}</p> : null}
        <p className={`text-foreground/70 ${projectLarge ? "text-[0.95rem]" : "text-sm"}`}>{description}</p>
        <div className="mt-1 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className={`text-foreground/80 rounded-md px-2 py-1 ${projectLarge ? "text-[11.5px]" : "text-xs"} ring-1`}
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
                aria-label="Open website"
                target="_blank"
                rel="noopener noreferrer"
                className="ai-float group inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium transition-all"
                style={{
                  borderColor: "var(--border)",
                  background: "color-mix(in oklab, var(--secondary) 88%, transparent)",
                }}
              >
                <svg
                  className="ai-float"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 3h7v7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14v7h-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 10V3h7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Website
              </a>
            ) : null}
            {links.ios ? (
              <a
                href={links.ios}
                aria-label="Open on the App Store"
                target="_blank"
                rel="noopener noreferrer"
                className="ai-float group inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium text-white transition-all"
                style={{
                  borderColor: "#111",
                  background: "linear-gradient(180deg,#2a2a2a, #111)",
                }}
              >
                <svg
                  className="ai-float"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M16.365 1.43c.09 1.05-.39 2.1-1.02 2.9-.69.87-1.86 1.56-2.98 1.46-.1-1.03.45-2.1 1.08-2.8.69-.78 1.91-1.36 2.92-1.56z" />
                  <path d="M20.64 17.32c-.52 1.2-.76 1.72-1.42 2.78-1.1 1.81-2.65 4.08-4.58 4.09-1.07.01-1.8-.7-3.15-.7-1.35 0-2.13.69-3.18.71-1.93.03-3.41-2.05-4.5-3.86C1.4 17.4.28 13.3 2.17 10.54c1.26-1.9 3.25-1.89 3.29-1.9 1.23-.1 2.39.8 3.16.8.77 0 2.18-.99 3.67-.84.62.03 2.35.25 3.45 1.95-.09.06-2.07 1.21-1.99 3.6.1 2.86 2.52 3.8 2.55 3.81z" />
                </svg>
                App Store
              </a>
            ) : null}
            {links.android ? (
              <a
                href={links.android}
                aria-label="Open on Google Play"
                target="_blank"
                rel="noopener noreferrer"
                className="ai-float group inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium transition-all"
                style={{
                  borderColor: "#1b5e20",
                  background: "linear-gradient(180deg,#34a853,#1b5e20)",
                  color: "#fff",
                }}
              >
                <svg
                  className="ai-float"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M3.27 2.27c-.18.27-.27.6-.27.95v17.56c0 .35.09.68.27.95l10.1-9.73L3.27 2.27zM14.32 11.08l2.3-2.21-10.4-6.01 8.1 8.22zM14.32 12.92l-8.1 8.22 10.4-6.01-2.3-2.21zM20.73 10.38l-2.58-1.49-2.24 2.11 2.24 2.11 2.58-1.49c.84-.49.84-1.75 0-2.24z" />
                </svg>
                Google Play
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
  return content;
}
