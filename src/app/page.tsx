"use client";
import ProjectCard from "@/app/ui/ProjectCard";
import { projects } from "@/app/data/projects";
import SplashCursor from "@/components/SplashCursor";
import ThemeToggle from "@/components/ThemeToggle";
import Prism from "@/components/Prism";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 h-full w-full">
        <Prism
          animationType="hover"
          timeScale={0.5}
          scale={3.6}
          height={3.5}
          baseWidth={5.5}
          noise={0}
          glow={1}
          hueShift={0}
          colorFrequency={1}
          suspendWhenOffscreen={false}
        />
      </div>

      <SplashCursor />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-16 md:px-10 md:py-24">
        <div className="flex w-full items-center justify-end">
          <ThemeToggle />
        </div>
        <section className="flex flex-col gap-8">
          <ProjectCard
            title="Software Engineer"
            subtitle="Hieu Bui"
            description="I craft modern mobile apps and full‑stack experiences focused on quality and performance."
            tags={["Flutter", "React", "TypeScript", "Go", "Prisma"]}
            imageSrc="/hieu-cc.jpg"
            imageAlt="Hieu Bui"
          />
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight md:text-2xl">Projects</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.id} className="card-3d">
                <ProjectCard
                  title={p.title}
                  subtitle={p.subtitle}
                  description={p.description}
                  href={p.href ?? p.links?.website}
                  tags={p.tags}
                  imageSrc={p.imageSrc}
                  imageAlt={p.imageAlt}
                  links={p.links}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
