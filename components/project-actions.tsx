import Link from "next/link";
import type { Project } from "@/lib/content";

const primary =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-ink px-4 text-sm text-bg";
const secondary =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-line px-4 text-sm text-ink";

export function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link href={`/work/${project.slug}`} className={primary}>
        Case study
      </Link>
      {project.demo ? (
        <a href={project.demo} className={secondary} target="_blank" rel="noreferrer noopener">
          Live demo
          <span className="sr-only"> of {project.name}, opens in a new tab</span>
        </a>
      ) : null}
      <a href={project.repoUrl} className={secondary} target="_blank" rel="noreferrer noopener">
        Code
        <span className="sr-only"> for {project.name} on GitHub, opens in a new tab</span>
      </a>
    </div>
  );
}
