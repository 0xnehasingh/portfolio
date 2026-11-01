import { ProjectActions } from "@/components/project-actions";
import { SectionNav } from "@/components/section-nav";
import { experience, projects, skillLead, skills, thesis, wins } from "@/lib/content";
import { socials } from "@/lib/site";

export function HomePage() {
  return (
    <div className="mx-auto grid w-full max-w-page gap-10 px-5 py-10 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-8 md:px-8 md:py-14">
      <SectionNav />
      <div className="min-w-0">
        <section aria-labelledby="positioning" className="pb-12 md:pb-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Neha Singh · India</p>
          <h1
            id="positioning"
            className="mt-4 max-w-[14ch] font-display text-[clamp(2.7rem,8vw,5.35rem)] leading-[0.96] tracking-[-0.035em] text-balance"
          >
            Full-stack Web3 and <em className="whitespace-nowrap italic text-accent">AI-agent</em> builder.
          </h1>
          <ul className="mt-8 grid grid-cols-2 border-y border-line">
            <li className="py-6 pr-4">
              <p className="font-display text-[clamp(3rem,8vw,4.75rem)] leading-none tracking-tight">23</p>
              <p className="mt-2 max-w-[11rem] text-sm leading-snug text-muted md:text-base">Web3 hackathon wins</p>
            </li>
            <li className="border-l border-line py-6 pl-4 md:pl-8">
              <p className="font-display text-[clamp(3rem,8vw,4.75rem)] leading-none tracking-tight">5</p>
              <p className="mt-2 max-w-[11rem] text-sm leading-snug text-muted md:text-base">Years of experience</p>
            </li>
          </ul>
          <div className="mt-8 max-w-3xl">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Skills</h2>
            <p className="mt-3 text-base leading-relaxed text-ink md:text-[1.05rem]">{skillLead}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
              {skills.map((skill) => (
                <li key={skill} className="rounded-full border border-line px-3 py-1.5 font-mono text-xs text-ink">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title" className="scroll-mt-24 border-t border-line pt-12 md:pt-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Work</p>
          <h2 id="work-title" className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
            Selected projects
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Seven public repositories. The lines below come from each README and from the code in that repo. Live
            demos are linked only where the page loaded.
          </p>
          <div className="mt-6">
            {projects.map((project, index) => (
              <article key={project.slug} className="border-t border-line py-8 md:py-10">
                <div className="grid gap-3 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-6">
                  <p className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-none tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink md:text-lg">{project.summary}</p>
                    {project.trophy ? (
                      <p className="mt-4 font-mono text-xs uppercase leading-relaxed tracking-[0.12em] text-accent">
                        {project.trophy.label}
                        {project.trophy.detail ? (
                          <span className="mt-1 block normal-case tracking-normal text-muted">
                            {project.trophy.detail}
                          </span>
                        ) : null}
                      </p>
                    ) : null}
                    <p className="mt-4 font-mono text-xs leading-relaxed text-muted">{project.stack.join(" · ")}</p>
                    <div className="mt-5">
                      <ProjectActions project={project} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="wins" aria-labelledby="wins-title" className="scroll-mt-24 border-t border-line pt-12 md:pt-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Wins</p>
          <h2 id="wins-title" className="mt-2 max-w-[12ch] font-display text-4xl tracking-tight md:text-5xl">
            23 Web3 hackathon wins
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            That count is hers. These five are verified highlights. The other wins are not itemized here.
          </p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {wins.map((win) => (
              <li key={`${win.event}-${win.project}`} className={`ticket p-5 ${win.stamp === "1st" ? "md:col-span-2" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">Admit one</p>
                  <p className="stamp" aria-hidden="true">
                    {win.stamp}
                  </p>
                </div>
                <hr className="perf" />
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{win.date}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight tracking-tight md:text-[1.7rem]">{win.event}</h3>
                <p className="mt-2 text-base text-ink">{win.project}</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">{win.result}</p>
                {win.href && win.hrefLabel ? (
                  <a
                    href={win.href}
                    className="mt-4 inline-flex min-h-11 items-center text-sm text-ink underline decoration-line underline-offset-4"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {win.hrefLabel}
                    <span className="sr-only">, opens in a new tab</span>
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-title"
          className="scroll-mt-24 border-t border-line pt-12 md:pt-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Experience</p>
          <h2 id="experience-title" className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
            Five years building
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            Five years of experience. The timeline lists the two roles on record here.
          </p>
          <ol className="mt-8 border-t border-line">
            {experience.map((role) => (
              <li key={role.period} className="grid gap-2 border-b border-line py-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{role.period}</p>
                <div>
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">{role.title}</h3>
                  {role.org ? <p className="mt-1 text-sm text-muted">{role.org}</p> : null}
                  {role.detail ? <p className="mt-3 max-w-xl text-base leading-relaxed">{role.detail}</p> : null}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl font-display text-2xl leading-snug tracking-tight md:text-3xl">{thesis}</p>
        </section>

        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24 border-t border-line py-12 md:py-16">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">Contact</p>
          <h2 id="contact-title" className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
            GitHub, X, LinkedIn
          </h2>
          <ul className="mt-8 border-t border-line">
            {socials.map((item) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  className="group flex min-h-[4.5rem] items-center justify-between gap-4 py-4"
                  target="_blank"
                  rel="me noreferrer noopener"
                >
                  <span className="font-display text-3xl tracking-tight md:text-4xl">{item.label}</span>
                  <span className="text-right font-mono text-xs text-muted md:text-sm">{item.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-line py-8 text-sm text-muted">
          <p>Neha Singh · Full-stack blockchain developer · India</p>
        </footer>
      </div>
    </div>
  );
}
