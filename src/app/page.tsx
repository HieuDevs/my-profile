"use client";
import ProjectCard from "@/app/ui/ProjectCard";
import { projects } from "@/app/data/projects";
import SplashCursor from "@/components/SplashCursor";
import ThemeToggle from "@/components/ThemeToggle";
import Prism from "@/components/Prism";

export default function Home() {
  return (
    <div className="bg-aurora relative min-h-screen w-full overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
        <Prism
          animationType="hover"
          timeScale={0.42}
          scale={3.4}
          height={3.3}
          baseWidth={5.2}
          noise={0}
          glow={1}
          hueShift={0}
          colorFrequency={1}
          suspendWhenOffscreen={false}
        />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="orb orb-1 -top-10 -left-10" />
        <div className="orb orb-2 top-[10%] right-[-60px]" />
        <div className="orb orb-3 top-[70%] left-1/2 -translate-x-1/2" />
      </div>

      <SplashCursor />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 md:px-10 md:py-24">
        <div className="flex w-full items-center justify-end">
          <ThemeToggle />
        </div>
        <section className="flex flex-col gap-8">
          <h1 className="ai-heading text-3xl font-semibold tracking-tight md:text-5xl">Hieu Bui</h1>
          <p className="text-foreground/70 max-w-2xl text-sm md:text-base">
            I craft modern mobile apps and full‑stack experiences focused on quality and performance.
          </p>
          <div className="profile3d">
            <ProjectCard
              title="Software Engineer"
              subtitle="Profile"
              description="Building delightful, reliable software across mobile, web, and backend."
              tags={["Flutter", "React", "TypeScript", "Go", "Prisma"]}
              imageSrc="/hieu-cc.jpg"
              imageAlt="Hieu Bui"
              imageContain
            />
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight md:text-2xl">Projects</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
                href={p.href ?? p.links?.website}
                tags={p.tags}
                imageSrc={p.imageSrc}
                imageAlt={p.imageAlt}
                links={p.links}
                projectLarge
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
