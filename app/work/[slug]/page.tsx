import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectActions } from "@/components/project-actions";
import { getProject, projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProject(slug);
    if (!project) return { title: "Project" };
    return {
      title: project.name,
      description: project.summary,
      alternates: { canonical: `/work/${project.slug}` },
    };
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-5 py-10 md:px-8 md:py-14">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
        <Link href="/#work" className="underline decoration-line underline-offset-4">
          All work
        </Link>
      </p>
      <h1 className="mt-4 font-display text-[clamp(2.6rem,7vw,4.5rem)] leading-[0.96] tracking-tight">{project.name}</h1>
      <p className="mt-4 text-lg leading-relaxed text-ink">{project.summary}</p>
      {project.trophy ? (
        <p className="mt-5 font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-accent">
          {project.trophy.label}
          {project.trophy.detail ? (
            <span className="mt-1 block normal-case tracking-normal text-muted">{project.trophy.detail}</span>
          ) : null}
        </p>
      ) : null}
      <div className="mt-6">
        <ProjectActions project={project} />
      </div>
      <div className="mt-10 space-y-5 text-base leading-relaxed md:text-[1.05rem]">
        {project.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <h2 className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-muted">Stack in the repo</h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs">
            {item}
          </li>
        ))}
      </ul>
      {project.extras && project.extras.length > 0 ? (
        <>
          <h2 className="mt-10 font-mono text-xs uppercase tracking-[0.16em] text-muted">Also linked from the repo</h2>
          <ul className="mt-3 space-y-2">
            {project.extras.map((extra) => (
              <li key={extra.href}>
                <a href={extra.href} className="inline-flex min-h-11 items-center underline decoration-line underline-offset-4" target="_blank" rel="noreferrer noopener">
                  {extra.label}
                  <span className="sr-only">, opens in a new tab</span>
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <p className="mt-12 border-t border-line pt-6 text-sm leading-relaxed text-muted">
        Written from the public GitHub repository {project.repoName}. No metrics were added beyond what that repo, its
        README, or a verified hackathon result already states.
      </p>
    </article>
  );
}
